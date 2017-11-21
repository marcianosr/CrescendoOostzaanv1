import React from 'react';
import { render } from 'react-dom';

import Sidebar from '../../../components/Sidebar';
import { Link } from 'react-router';

class About extends React.Component {

    constructor() {
      super();
      // With the constructor you can reference this as the component.
      // Binding your own functions to the component should be done here
      // So we bind our functiontion here to the component
      this.animateAbout = this.animateAbout.bind(this);
      this.animateAbout();
    }

    animateAbout() {

    }

    render() {
      return (
        <section className='home-page__about content'>
          <article className='' ref={(about) => { this.about = about }}>
            <h1>Over Crescendo</h1>
            <p>In het pittoreske Oostzaan vindt u de Christelijke Muziekvereniging Crescendo. Dit fanfareorkest, opgericht op 1 november 1912, bestaat uit ruim veertig leden.De muzikanten van Crescendo vertegenwoordigen vele koperblaasinstrumenten. Onder leiding van dirigent Bart Koning treedt het orkest een aantal keer per jaar op bij diverse gelegenheden.</p>
            {/* <a href='/over-crescendo' className='blue-border-btn'> Meer over Crescendo </a> */}
            <Link to='/over-crescendo' className='blue-border-btn'>Over Crescendo</Link>
          </article>
          <Sidebar type='agenda' />
        </section>
      )
    }
}

export default About;
