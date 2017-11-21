import React from 'react';
import { render } from 'react-dom';

import About from './about/About';
import Lessons from './lessons/Lessons';
import Agenda from './agenda/Agenda';
import Adverteerders from './adverteerders/Adverteerders';
import Contact from './contact/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class StandardPage extends React.Component {

    constructor() {
      super();
    }

    componentWillMount() {
      console.log('will mount...')
    }

    renderContentByPage() {
      let page;
      if(this.props.page === "about") {
          page = <About />;
      }
      else if (this.props.page === "lessons") {
          page = <Lessons />;
      }
      else if (this.props.page === "contact") {
          page = <Contact />
      }
      else if (this.props.page === "agenda") {
          page = <Agenda />
      }
      else if (this.props.page === "adverteerders") {
          page = <Adverteerders />
      }

      return page;
    }

    render() {
      return (
        <div>
          <Navigation type="standard-bar"/>
          {this.renderContentByPage()}

          <Footer />
        </div>
      )
    }
}

export default StandardPage;
