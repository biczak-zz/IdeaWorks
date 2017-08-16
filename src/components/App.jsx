import React, { Component } from 'react';
import Carousel from './Carousel';
import MenuBar from './MenuBar';
import Grid from './Grid';
import '../../public/scss/_app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homepage: true,
    };
  }

  render() {
    return (
      <div className="app-container">
        <MenuBar />
        <Carousel autoplay={true} autoplaySpeed={5000} pauseOnHover={false} dots={true} infinite={true} speed={1000} slidesToShow={1} slidesToScroll={1} />
        <Grid elements={[{ src: '../assets/Grid1.png', alt: 'Grid1', date: 'February 10 2017', mainText: 'Bureaux exquisite delightful carefully curated soft power.', presentedBy: 'LOREM IPSUM' }, { src: '../assets/Grid2.png', alt: 'Grid2', date: 'February 2 2017', mainText: 'Sharp bureaux sleepy K-pop carefully curated.', presentedBy: 'LOREM IPSUM' }, { src: '../assets/Grid3.png', alt: 'Grid3', date: 'January 27 2017', mainText: 'St Mortiz uniforms Beams.', presentedBy: 'LOREM IPSUM' }, { src: '../assets/Grid6.png', alt: 'Grid6', date: 'January 12 2017', mainText: 'Artisinal iconic cutting-edge business class.', presentedBy: 'LOREM IPSUM' }, { src: '../assets/Grid4.png', alt: 'Grid4', date: 'January 21 2017', mainText: 'Esse airport veniam ryokan soft power.', presentedBy: 'LOREM IPSUM' }, { src: '../assets/Grid5.png', alt: 'Grid5', date: 'January 18 2017', mainText: 'K-pop extraordinary.', presentedBy: 'LOREM IPSUM' }]} />
        <div id="footer">
          © 2017 - SPARTA PLAESENT - <a href="#"> INSTAGRAM </a>  -  <a href="#"> FACEBOOK </a>  -  <a href="#"> TWITTER </a>
        </div>
      </div>
    );
  }
}

export default App;