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
            <strong>Vrienden van Crescendo live</strong>
            <span>4 november 2017</span>
            <span>De Kunstgreep Oostzaan</span>
          </div>
          <div className="agenda__info">
            <strong>Kerstnachtdienst</strong>
            <span>24 december 2017</span>
            <span>22:15</span>
            <span>Grote Kerk Oostzaan</span>
          </div>
          <div className="agenda__info">
            <strong>Nieuwjaarsconcert i.s.m. Excelsior, Concordia, Tavenu in het Atrium</strong>
            <span>6 januari 2018</span>
            <span>De Kunstgreep</span>
          </div>
          <div className="agenda__info">
            <strong>5 t/m 10 maart 2018</strong>
            <span>Jantje Beton</span>
          </div>
          <Link to="/agenda">Meer agendapunten</Link>
          {/* <a href="/ageda">Meer agendapunten >  /* <span className="icon-chevron"></span></a> */}
        </div>
    )
  }
}

export default Agenda;
