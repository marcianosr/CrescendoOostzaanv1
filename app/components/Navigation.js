
/**
 * Navigation component.
 * @param props - type: What type of navigation bar it should be.
 */

import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import { Link } from 'react-router';


class Navigation extends React.Component {

  constructor() {
    super();

    /**
     * { this } - This refers to the component.
     */

    /**
     * The function created here is not bound to the component.
     * With bind we make this possible.
     */
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

   // Set menu state to false, menu is closed.
   // Get initiial state ES6 style
    this.state = {
      menu: {
        open: false,
        openClass: "closed"
      }
    }
  }

  componentDidMount() {
   window.scrollTo(0, 0);
 }


  toggleMobileMenu(e) {

    // Do not directly update state. Make a copy of your state for performance reasons.
    let activeState = this.state.menu.open;

    // Left of to fix this func. Toggle the state. Search for best pratices to handle state and get Initial state.
    // Check if jed watson is still needed.

    if (activeState) {
      this.state.menu.openClass = "closed";
    }
    else {
      this.state.menu.openClass = "open";
    }


    this.setState({ menu: { open: !activeState, openClass: this.state.menu.openClass  } })
  }

  toggleMenuIcon() {
    return classNames({
      // temporary placeholder icon until there is a close icon
     'icon-chevron': this.state.menu.open,
     'icon-menu': !this.state.menu.open
   });
  }

  toggleMobileMenuClass() {
    return classNames({
     'mobile-menu-overlay show': this.state.menu.open,
     'mobile-menu-overlay hide': !this.state.menu.open
   });
  }

  render() {
    return (

        <div className={'nav-container__' + this.props.type}>
          <span className={'main-navigation__hamburger ' + this.toggleMenuIcon() } onClick={ this.toggleMobileMenu }></span>

          <nav className={'main-navigation main-navigation__' + this.props.type}>
            <div className={'main-navigation__'  + this.props.type + '--' + this.state.menu.openClass}>
              <ul className='main-navigation__list-items'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/over-crescendo">Over Crescendo</Link>
                </li>
                <li>
                  <Link to="/agenda">Agenda</Link>
                </li>
                <li>
                  <Link to="/organisatie">Organisatie</Link>
                </li>
                <li>
                  <Link to="/lessen">Lessen</Link>
                </li>
                <li>
                  <Link to="/adverteerders">Adverteerders</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

            </div>
          </nav>
        </div>
    )
  }

}

export default Navigation;
