import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'scss/slider/slider.css'

import { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    };
    return (
      <div className="damarket">
        <div className="main-slider">
          <Slider {...settings}>
            <div className="slide-content">
              <div className="slide-continn">
                <span>Weekend Discount</span>
                <h1><span>Enhance Your</span>Entertainment</h1>
                <p>Last call for up to<span>20%</span>off!</p>
                <button>Shop Now</button>
              </div>
              <div className="slide-img">
                <img src="/images/slider.png" alt="slideimg" />
              </div>
            </div>
            <div className="slide-content">
              <div className="slide-continn">
                <span>Weekend Discount</span>
                <h1><span>Enhance Your</span>Entertainment 2</h1>
                <p>Last call for up to<span>20%</span>off!</p>
                <button>Shop Now</button>
              </div>
              <div className="slide-img">
                <img src="/images/slider.png" alt="slideimg" />
              </div>
            </div>
            <div className="slide-content">
              <div className="slide-continn">
                <span>Weekend Discount</span>
                <h1><span>Enhance Your</span>Entertainment 3</h1>
                <p>Last call for up to<span>20%</span>off!</p>
                <button>Shop Now</button>
              </div>
              <div className="slide-img">
                <img src="/images/slider.png" alt="slideimg" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}