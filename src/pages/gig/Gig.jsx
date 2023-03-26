import React from "react";
import "./gig.scss"
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <span className="breadcrumbs">LANCI > GRAPHICS & DESIGN ></span>
                    <h1>I will create AI Generation Art for you</h1>
                    <div className="user">
                        <img className="pp" src="https://wallpaperaccess.com/full/3089644.jpg" alt="" />
                        <span>Jai Vishwakarma</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                        <img src="https://www.boredpanda.com/blog/wp-content/uploads/2022/12/1-KevinCanada_superhero_Pollinator_Man_with_a_cape_and_with_bees__6a903661-2182-492d-8e7f-fd20529df5d7-63892b430aaef-png__880.jpg" alt="" />
                        <img src="https://www.boredpanda.com/blog/wp-content/uploads/2022/12/1-KevinCanada_superhero_Buttered_Toast_Man_8k_atmospheric_and_sto_4cca9547-1e30-455a-82d3-dd58930144a4-63892b359ba1e-png__880.jpg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/269173970/original/925ec3e10e4d09d5f1ab5977b56b49ec99396bc2/create-profesional-art-work-using-an-artificial-intelligence.png" alt="" />
                    </Slider>
                    <h2>About this Gig</h2>
                    <p>
                        Welcome to my Lanci page! I specialize in all AI types, not only Midjourney or Stable
                        depending of your needs. With the help of advanced algorithms and cutting-edge
                        technology, I am able to produce stunning and one-of-a-kind pieces that are sure to impress.
                        Each piece is carefully crafted and designed to be unique, so you can be sure that you are
                        getting a truly one-of-a-kind piece of art. Whether you are looking for something to hang
                        on your wall, getting your ideas flow, an image for your website or social media, or
                        simply to make things for fun. I can create the perfect piece for you. So if you want to add
                        a touch of creativity and technology to your collection, look no further!
                    </p>
                    <div className="seller">
                        <h2>About the seller</h2>
                        <div className="user">
                            <img src="https://wallpaperaccess.com/full/3089644.jpg" alt="" />
                            <div className="info">
                                <span>Jai Vishwakarma</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">INDIA</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member Since</span>
                                    <span className="desc">Oct 2022</span>
                                </div>
                                <div className="item">
                                    <span className="title">Avg response time</span>
                                    <span className="desc">3 Hours</span>
                                </div>
                                <div className="item">
                                    <span className="title">Last delivery</span>
                                    <span className="desc">1 day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">English</span>
                                </div>
                            </div>
                            <hr />
                            <p>My Name is Jai, I Enjoy creting AI generated Images in my space
                                time. I Have lots of experienceusing AI program and taht
                                means I know what to prompt the AI with to get a great and
                                icredibly detained result.
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://wallpaperaccess.com/full/3089644.jpg" alt="" />
                                <div className="info">
                                    <span>Jai</span>
                                    <div className="country">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/800px-Flag_of_India.png" alt="" />
                                        <span>INDIA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Welcome to my Fiverr page! I specialize in all AI types, not only Midjourney or Stable
                                depending of your needs. With the help of advanced algorithms and cutting-edge
                                technology, I am able to produce stunning and one-of-a-kind pieces that are sure to impress.
                                Each piece is carefully crafted and designed to be unique, so you can be sure that you are
                                getting a truly one-of-a-kind piece of art. Whether you are looking for something to hang
                                on your wall, getting your ideas flow, an image for your website or social media, or
                            </p>
                            <div className="helpful">
                                <span>Helful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://wallpaperaccess.com/full/3089644.jpg" alt="" />
                                <div className="info">
                                    <span>Jai</span>
                                    <div className="country">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/800px-Flag_of_India.png" alt="" />
                                        <span>INDIA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Welcome to my Fiverr page! I specialize in all AI types, not only Midjourney or Stable
                                depending of your needs. With the help of advanced algorithms and cutting-edge
                                technology, I am able to produce stunning and one-of-a-kind pieces that are sure to impress.
                                Each piece is carefully crafted and designed to be unique, so you can be sure that you are
                                getting a truly one-of-a-kind piece of art. Whether you are looking for something to hang
                                on your wall, getting your ideas flow, an image for your website or social media, or
                            </p>
                            <div className="helpful">
                                <span>Helful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://wallpaperaccess.com/full/3089644.jpg" alt="" />
                                <div className="info">
                                    <span>Jai</span>
                                    <div className="country">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/800px-Flag_of_India.png" alt="" />
                                        <span>INDIA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Welcome to my Fiverr page! I specialize in all AI types, not only Midjourney or Stable
                                depending of your needs. With the help of advanced algorithms and cutting-edge
                                technology, I am able to produce stunning and one-of-a-kind pieces that are sure to impress.
                                Each piece is carefully crafted and designed to be unique, so you can be sure that you are
                                getting a truly one-of-a-kind piece of art. Whether you are looking for something to hang
                                on your wall, getting your ideas flow, an image for your website or social media, or
                            </p>
                            <div className="helpful">
                                <span>Helful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>1 AI generated image</h3>
                        <h2>₹999</h2>
                    </div>
                    <p>
                        I will create a unique high quality AI generated image based on a
                        description that you give
                    </p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 Days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/recycle.png" alt="" />
                            <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt Writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt Writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt Writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt Writing</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}
export default Gig