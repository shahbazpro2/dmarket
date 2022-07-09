import { getCategoriesProductList } from 'api/home'
import 'scss/clothing/clothing.css'
import useApi from 'utils/hooks/useApi'

export default function CategoriesProduct() {
    const [, { data }] = useApi(getCategoriesProductList)

    return (
        <>
            <div className='damarket'>
                {/* Clothing-START */}
                <section className='container-fluid clothing'>
                    <div className='container'>
                        {
                            data && Object.values(data).map((item, index) => (
                                <div className='row mt-1'>
                                    <div className='col-sm-12'>
                                        <div className='title'>
                                            <h2>{item?.category_details?.name}</h2>
                                            <a href="/">View All</a>
                                        </div>
                                        <div className='product-container'>
                                            {item?.product_list?.map((product: any) => (
                                                <div className='product-box'>
                                                    <div className='product-category'>
                                                        <span>{product?.category_details?.name}</span>
                                                        {/* <span>Mobile &amp; Tablets</span> */}
                                                    </div>
                                                    <p className='product-name'>{product?.name}</p>
                                                    <div className='product-image'>
                                                        {/* <span className='product-badge'>-13%</span> */}
                                                        <img src={product?.product_image} alt="product" />
                                                    </div>
                                                    <div className='product-foot'>
                                                        <div className='product-price'>
                                                            {/*  <span className='product-oldprice'><i>$</i>898.73</span> */}
                                                            <span className='product-newprice'><i>$</i>{product?.prices[0]?.price}</span>
                                                        </div>
                                                        <div className='product-review'>
                                                            <label>(5 reviews)</label>
                                                            <img src="/images/5star.svg" alt="rating" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                {/* Clothing-END */}
            </div>
        </>
    )
}