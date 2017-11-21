import React from 'react';
import { render } from 'react-dom';

import Navigation from '../../components/Navigation';
import Slider from '../../components/Slider';
import About from './about/About';
import News from '../news/News';
import Footer from '../../components/Footer';



class Home extends React.Component {

    constructor(props) {
      super();
      console.log('home')
    }

    render() {

      return (
        <div>
          <Navigation type="transparent-bar"/>

          <main className="home-page">
            <section className="slider">
                <Slider caption={[
                                   { h1: 'Welkom bij Crescendo Oostzaan', h2: 'Welkom bij Christelijke Muziekvereniging', image: 'assets/IMG_1874.jpg'},
                                   { image: 'assets/IMG_5948.JPG'}
                                ]}
                />
            </section>
            <hr />


            <section className="news-items">
              <News />
            </section>

						<About />
						

            <Footer />

          </main>
      </div>

      )
    }
}

export default Home;
