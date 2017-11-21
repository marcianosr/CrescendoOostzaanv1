
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import NotFound from './components/NotFound';
import Home from './pages/home/Home';
import StandardPage from './pages/StandardPage';
import Organization from './pages/organization/Organization';
import ArticleContainer from './pages/article/ArticleContainer';
import Adverteerders from './pages/adverteerders/Adverteerders';
import Contact from './pages/contact/Contact';


class Root extends React.Component {
  /**
   * Root class where all components will be defined.
   * @constructor - Initialization of the class.
   * @function - super() is mandatory, because Root is a child class from the React layer. A child class cannot make use of 'this' until super() is called.
   **/
  constructor() {
    super();
  }

  /**
   * Render function
   * @function - render() is responsible for rendering the JSX as regular JS.
   **/

  render() {
    return (
        <BrowserRouter>
          <div>
              <Match exactly pattern="/" component={() => (<Home />)} />
              <Match exactly pattern="/over-crescendo" component={() => (<StandardPage page="about" />)} />
              <Match exactly pattern="/agenda" component={() => (<StandardPage page="agenda" />)} />
              <Match exactly pattern="/organisatie" component={() => (<Organization />)} />
              <Match exactly pattern="/lessen" component={() => (<StandardPage page="lessons" />)} />
              <Match exactly pattern="/artikelen/:id" component={ArticleContainer} />
              <Match exactly pattern="/adverteerders" component={() => (<StandardPage page="adverteerders" />)} />
              <Match exactly pattern="/contact" component={() => (<StandardPage page="contact" />)} />
              <Miss component={NotFound} />
          </div>
        </BrowserRouter>

    )
  }

}

ReactDOM.render(<Root/>, document.querySelector('#app'))
