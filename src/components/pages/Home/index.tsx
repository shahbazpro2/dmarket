import BestSeller from './BestSeller'
import BlogPost from './BlogPost'
import Clothing from './Clothing'
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
            <Clothing />
            <BlogPost />
            <Quote />
        </>
    )
}

export default Home