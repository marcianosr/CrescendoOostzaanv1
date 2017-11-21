import React from 'react';
import { render } from 'react-dom';

import SlickSlider from 'react-slick';



class Slider extends React.Component {
    constructor() {
      super();
    }

    render() {

      let settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
      if(this.props.caption) {
        return (
              <SlickSlider {...settings}>
                {
                  this.props.caption.map((caption, i) => {
                    console.log('caption', caption)
                    return <figure key={i} className="img-container">
                        <div className="overlay"></div>
                        <figcaption>
                          <h1> {caption.h1} </h1>
                          </figcaption>
                        <img src={caption.image} alt="" />
                    </figure>
                  })
                }
             </SlickSlider>
        )
      }
      else {
        return (
              <SlickSlider {...settings}>
                {
                  this.props.images.map((image, i) => {
                    return <figure key={i} className="img-container">
                        <div className="overlay"></div>
                        <img src={image} alt="" />
                    </figure>
                  })
                }
             </SlickSlider>

        )

      }


    }
}

export default Slider;
