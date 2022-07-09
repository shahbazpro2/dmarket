import 'scss/blogpost/blogpost.css'

const BlogPost = () => {
    return (
        <div className='damarket'>
            {/* Blog-Post-START */}
            <section className='container-fluid blogpost'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='title'>
                                <h2>Best Sellers</h2>
                                <a href="/">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='post-container'>
                                <div className='post'>
                                    <div className='post-img'>
                                        <img src='/images/blog-post.png' alt="postimg" />
                                    </div>
                                    <div className='post-content'>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adi</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                                        <button>See more</button>
                                    </div>
                                </div>

                                <div className='post'>
                                    <div className='post-img'>
                                        <img src='/images/blog-post.png' alt="postimg" />
                                    </div>
                                    <div className='post-content'>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adi</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                                        <button>See more</button>
                                    </div>
                                </div>

                                <div className='post'>
                                    <div className='post-img'>
                                        <img src='/images/blog-post.png' alt="postimg" />
                                    </div>
                                    <div className='post-content'>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adi</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                                        <button>See more</button>
                                    </div>
                                </div>

                                <div className='post'>
                                    <div className='post-img'>
                                        <img src='/images/blog-post.png' alt="postimg" />
                                    </div>
                                    <div className='post-content'>
                                        <h4>Lorem ipsum dolor sit amet, consectetur adi</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                                        <button>See more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog-Post-END */}
        </div>
    )
}

export default BlogPost