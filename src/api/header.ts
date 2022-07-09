import responseApi from "./responseApi"


export const getCategoriesApi = async () => {
    return await responseApi('/category/category-list', 'get')
}

export const getCurrenciesApi = async () => {
    return await responseApi('/supported-currency', 'get')
}