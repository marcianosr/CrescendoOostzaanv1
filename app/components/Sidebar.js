
/**
 *  Sidebar component which holds the structure of the sidebar which child components can use.
 */

import React from 'react';
import { render } from 'react-dom';
import Agenda from './Agenda';
import classNames from 'classnames';
import Breakpoint from '../util/Breakpoint';

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      toggle: false,
      text: 'Toon'
    }

    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.addEvents();
  }

  addEvents() {
    window.addEventListener('resize', this.addMobileClass);
  }


  getSidebarType() {
    if (this.props.type === "agenda") {
      return <Agenda toggle={this.state.toggle} text={this.state.text} />;
    }
    else if (this.props.type === "list") {
      let text;

      return <div className="docenten">
                <h2> {this.props.title} </h2>
                <ul>
                  {this.props.text.map((item, value) => {

                    if (item.url) {
                      text = <a href={item.url} target="_blank">{item.name}</a>;
                    }
                    else {
                      text = <span>{item.name}</span>
                    }

                    return ( <li key={value}>
                                <strong>{item.instrument}</strong>
                                {text}
                             </li> );
                  })}
                </ul>
             </div>;
    }
    else if (this.props.type === "standard") {
      return <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
             </div>;
    }
  }

  toggleSidebar() {
    if (this.state.toggle) {
      this.setState({ toggle: false, text: 'Toon' });
    }
    else {
      this.setState({ toggle: true, text: 'Verberg' });
    }
  }

  render() {
    let toggleStyles = classNames({
        'sidebar--open': this.state.toggle
    });

    return (
      <aside className={'sidebar ' + toggleStyles} onClick={this.toggleSidebar}>
        { this.getSidebarType() }
      </aside>
    )
  }
}

export default Sidebar;
