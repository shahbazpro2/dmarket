/* eslint-disable jsx-a11y/anchor-is-valid */
import { getCategoriesApi, getCurrenciesApi } from 'api/header'
import { useEffect } from 'react'
import { useState } from 'react'
import 'scss/header/header.css'
import useApi from 'utils/hooks/useApi'

const Header = () => {
    const [, { data }] = useApi(getCategoriesApi)
    const [, { data: currencies }] = useApi(getCurrenciesApi)

    const [show, setShow] = useState(true)
    const [clshow, setclShow] = useState(false)
    const [activeItem, setActiveItem] = useState([])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(false)
                setclShow(false)
            } else {
                setShow(true)
                setclShow(false)
            }
        })
    }, [])

    return (
        <div className='damarket'>
            {/* Header-Section-START */}
            <div className='headsection'>
                <section className='container-fluid top-header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-9'>
                                <div className='toph-left'>
                                    <ul className='list-inline'>
                                        <li className="list-inline-item"><a href="/">Help</a></li>
                                        <li className="list-inline-item"><a href="/">Contact</a></li>
                                        <li className="list-inline-item"><a href="/">About Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className='toph-right'>
                                    <div className='sel-currancy' >
                                        <select>
                                            {currencies?.map(currency => (
                                                <option style={{ color: 'black' }} key={currency.id} value={currency.id}>{currency.currency_code}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='sel-language'>
                                        <select>
                                            <option>Language</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container-fluid mid-header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-9'>
                                <div className='midh-left'>
                                    <div className='logo'>
                                        <a href="/">
                                            <img src='/images/logo.svg' alt="logo" />
                                        </a>
                                    </div>
                                    <div className='all-cat w-100'>
                                        <div className='cat-wrap'>
                                            <select>
                                                <option>All Categories</option>
                                            </select>
                                        </div>
                                        <input type="text" />
                                        <button>Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-3'>
                                <div className='midh-right'>
                                    <ul className='list-inline'>
                                        <li className="list-inline-item account">
                                            <span><img src="/images/account.svg" alt="account" /></span>
                                            <div className='account-action'>
                                                <a className='signin' href="/">Sign in</a>
                                                <a className="account" href="/">Account</a>
                                            </div>
                                        </li>
                                        <li className="list-inline-item wishlist">
                                            <span><img src="/images/wish.svg" alt="wishlist" /></span>
                                            <i className="badge">5</i>
                                        </li>
                                        <li className="list-inline-item cart">
                                            <span><img src="/images/cart.svg" alt="cart" /></span>
                                            <div className='cart-action'>
                                                <span className='totaltxt'>Total</span>
                                                <span className='total'><i>$</i>2,650.59</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-3 position-relative'>
                                <div className='category-menu'>
                                    <a onClick={() => setShow(!show)}>
                                        <img src="/images/hamburger.svg" alt="menu" />
                                        <span>All Departments</span>
                                    </a>
                                </div>
                                {
                                    show ? <ul className='list-group'>
                                        {data?.map((item: any) => (
                                            item?.child_categories.length > 0 ? <li key={item.id} className='list-group-item active'><a onMouseEnter={() => { setclShow(true); setActiveItem(item.child_categories) }} onMouseLeave={() => { setclShow(false); }} href="/"><img src={item?.icon} alt="computeracc" /><span>{item.name}</span> <i><img src="/images/arrow.svg" alt="arrow" /></i></a></li> :
                                                <li key={item.id} className='list-group-item'><a href="/"><img src={item.icon} alt="cellphones" /><span>{item.name}</span></a></li>
                                        ))}

                                    </ul> : null
                                }
                                {
                                    clshow && <div className='category-list' onMouseEnter={() => setclShow(true)} onMouseLeave={() => setclShow(false)}>
                                        {activeItem?.map((item: any) => (
                                            <div key={item.id} className='category-item'>
                                                <h3>{item?.name}</h3>
                                                <ul className=''>
                                                    {item?.child_categories.map((childItem: any) => (
                                                        <li key={childItem.key} className=''><a href="/"><span>{childItem.name}</span></a></li>

                                                    ))}
                                                </ul>
                                            </div>
                                        ))}

                                    </div>
                                }
                            </div>
                            <div className='col-sm-9'>
                                <div className='main-menu d-flex align-items-center justify-content-between'>
                                    <ul className='list-inline'>
                                        <li className="list-inline-item active"><a href="/">Home</a></li>
                                        <li className="list-inline-item"><a href="/">Best Sellers</a></li>
                                        <li className="list-inline-item"><a href="/">New Arrivals</a></li>
                                        <li className="list-inline-item"><a href="/">Ready to Ship</a></li>
                                        <li className="list-inline-item"><a href="/">Start to Sell</a></li>
                                        <li className="list-inline-item"><a href="/">Pay Safe</a></li>
                                    </ul>
                                    <div className='notification'>
                                        <a href="/" className='d-flex align-items-center justify-content-center'>
                                            <img src="/images/notifications.svg" alt="notification" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Header-Section-END */}
        </div>
    )
}

export default Header