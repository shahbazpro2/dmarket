import { ReactNode } from 'react'
import { Header, Footer } from '../common/layout'



interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout