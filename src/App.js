import React, { Component } from 'react';
import { Fullpage, Slide } from 'fullpage-react';
import MarqueeSlider from './components/MarqueeSlider';
import './App.css';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 5,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 5,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
    };
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    this.setState({
      isScrolling: true,
      ...newState
    });
  }

  onSlideChangeEnd(name, props, state, newState) {
    this.setState({ 
      isScrolling: false,
      ...newState
    });
  }

  render() {
    let { activeSlide, isScrolling } = this.state;
    console.log('state', this.state);
  
    const slides = [
      <Slide className={`cslide ${activeSlide === 0 ? 'is-active' : ''}`}>
        <MarqueeSlider />
      </Slide>,
      <Slide className={`cslide ${activeSlide === 0 ? 'is-active' : ''}`}> Slide 2 </Slide>,
      <Slide className={`cslide ${activeSlide === 0 ? 'is-active' : ''}`}> Slide 3 </Slide>
    ];
    fullPageOptions.slides = slides;
    
    return (
      <div>
        <Fullpage {...fullPageOptions} onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} />
        <nav className={`dots ${isScrolling ? 'is-scrolling' : ''}`}>
            <navitem className={`dot ${activeSlide === 0 ? 'is-active' : ''}`}></navitem>
            <navitem className={`dot ${activeSlide === 1 ? 'is-active' : ''}`}></navitem>
            <navitem className={`dot ${activeSlide === 2 ? 'is-active' : ''}`}></navitem>
        </nav>
      </div>
    );
  }
}

export default App;
