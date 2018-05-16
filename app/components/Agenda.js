import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

import { Link } from 'react-router';

/**
 * Agenda class will make http request to WP API to get the latest agenda items
 */
class Agenda extends React.Component {
  constructor() {
    super();
    console.log(this.props)
  }

  getAgendaItems() {
    // get agenda items...


  }

  render() {
    return (
        <div className="agenda">
          <div className="agenda--toggle hidden-sm hidden-md">{this.props.text} agenda</div>
          <h2 className="hidden-xs hidden-sm">Agenda 2017/2018</h2>
          <div className="agenda__info">
            <strong>Jantje Beton</strong>
            <span>5 t/m 10 maart</span>
          </div>
          <div className="agenda__info">
            <strong>Paasdienst</strong>
            <span>1 april</span>
            <span>De Grote Kerk</span>
          </div>
          <div className="agenda__info">
            <strong>Gezamenlijk concert met Brassband Concordia Vinkeveen</strong>
            <span>7 april</span>
            <span>Vinkeveen</span>
          </div>
          <div className="agenda__info">
            <strong>Avondvierdaagse Amsterdam Noord</strong>
            <span>6 juni</span>
            <span>Amsterdam-Noord</span>
          </div>

          <Link to="/agenda">Meer agendapunten</Link>
          {/* <a href="/ageda">Meer agendapunten >  /* <span className="icon-chevron"></span></a> */}
        </div>
    )
  }
}

export default Agenda;
