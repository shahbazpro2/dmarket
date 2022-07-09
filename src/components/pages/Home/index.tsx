import BestSeller from './BestSeller'
import BlogPost from './BlogPost'
import CategoriesProduct from './CategoriesProduct'
import Quote from './Quote'
import SimpleSlider from './Slider'
import ThumbAccess from './ThumbAccess'
import Trending from './Trending'

const Home = () => {
    return (
        <>
            <SimpleSlider />
            <ThumbAccess />
            <Trending />
            <BestSeller />
            <CategoriesProduct />
            <BlogPost />
            <Quote />
        </>
    )
}

export default Home