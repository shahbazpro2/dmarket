import responseApi from "./responseApi"


export const getCategoriesProductList = async () => {
    return await responseApi('/home/category-product-list?category=shoes-1,clothing,furniture,alcohol-beverages-1&rows=10', 'get')
}