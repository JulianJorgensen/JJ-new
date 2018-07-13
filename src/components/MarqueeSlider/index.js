import React, { Component } from 'react';
import './index.css';

class MarqueeSlider extends Component {
    state = {
      activeSlide: 1,
    }

    onSlideClick(slideNum) {
        this.setState({
          isTouched: true,
          activeSlide: slideNum,
        });
    }
    
    render() {
        const { activeSlide, isTouched } = this.state;
  
    return (
<div className="slider">
<div className="slides">
  <div onClick={() => this.onSlideClick(1)} className={`slide ${activeSlide === 2 ? 'is-previous' : null } ${activeSlide === 1 ? 'is-active' : null } ${activeSlide === 4 ? 'is-next' : null }`}>
    <div className="slide-title">Slide 1</div>
    <div className="slide-image"></div>
  </div>
  <div onClick={() => this.onSlideClick(2)} className={`slide ${activeSlide === 3 ? 'is-previous' : null } ${activeSlide === 2 ? 'is-active' : null } ${activeSlide === 1 ? 'is-next' : null }`}>
    <div className="slide-title">Slide 2</div>
    <div className="slide-image"></div>
  </div>
  <div onClick={() => this.onSlideClick(3)} className={`slide ${activeSlide === 4 ? 'is-previous' : null } ${activeSlide === 3 ? 'is-active' : null } ${activeSlide === 2 ? 'is-next' : null }`}>
    <div className="slide-title">Slide 3</div>
    <div className="slide-image"></div>
  </div>
  <div onClick={() => this.onSlideClick(4)} className={`slide ${activeSlide === 1 && isTouched ? 'is-previous' : null } ${activeSlide === 4 ? 'is-active' : null } ${activeSlide === 3 ? 'is-next' : null }`}>
    <div className="slide-title">Slide 4</div>
    <div className="slide-image"></div>
  </div>
</div>
</div>
    );
  }
}

export default MarqueeSlider;
