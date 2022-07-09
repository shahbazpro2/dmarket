/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

type State = { data: [] | null | [any], loading: boolean, error: boolean | null, message: string | null }

const useApi = (apiFun: Function, successCallback?: Function, errCallback?: Function): [Function, State] => {
	const [state, setState] = useState<State>({
		loading: false,
		error: null,
		data: null,
		message: null,
	})

	useEffect(() => {
		if (apiFun) {
			processing(apiFun, successCallback, errCallback)
		}
	}, [])

	const executeApi = async (fun: Function, successCallback?: Function, errCallback?: Function) => {
		if (fun) {
			processing(fun, successCallback, errCallback)
		}
	}

	const processing = async (api: Function, successCallback?: Function, errCallback?: Function) => {
		setState({ ...state, loading: true })
		let res = null
		if (api instanceof Function) res = await api()
		else res = await api
		if (res) {
			setState({
				loading: false,
				error: res.error,
				message: res.message,
				data: !res.error ? res.data : null,
			})
			if (!res.error) {
				if (successCallback) successCallback(res)
			}
			if (res.error) {
				if (errCallback) errCallback(res)
			}
		}
	}
	return [executeApi, { ...state }]
}

export default useApi