import React from 'react';
import { render } from 'react-dom';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

class Organization extends React.Component {
     /* TO DO:
      - Bestuursleden text aanpassen.
      - SVG Icons instruments per sectiehoofd.
      */
    constructor() {
      super();

    }

    render() {
      return (
        <div>
          <Navigation type="standard-bar"/>

          <section className="standard-page content">
              <h1> Organisatie </h1>
              <div className="standard-page__organization">
                <div className="members__container">
                  <ul>
                    <h2> Dagelijks bestuur </h2>
                    <li> <strong> Voorzitter: </strong> <span> Eline Huiting </span> </li>
                    <li> <strong> Secretaris: </strong> <a href='mailto:secretaris@crescendo-oostzaan.nl'> Rosanne van Hoeijen </a> </li>
                    <li> <strong> Penningmeester: </strong> <span> Dick Derlagen </span> </li>
                  </ul>
                </div>

                <div className="members__container">
                  <ul>
                    <h2> Algemeen bestuur </h2>
                    <li> <strong> Leerlingen & ledenwerf: </strong> <span> Dorine Bloo </span> </li>
                    <li> <strong> Algemeenbestuurslid: </strong> <span> Romke Huitema </span> </li>
                    <li> <strong> Instrumentarium: </strong> <span> Hans Derlagen </span> </li>
                  </ul>
                </div>

                <div className="members__container">
                  <ul>
                    <h2> Jeugd bestuur </h2>
                    <li> <span> Kim </span> </li>
                    <li> <span> Sil </span> </li>
                    <li> <span> Klaas </span> </li>
                    <li> <span> Christiaan Poel (dirigent opstaporkest) </span> </li>
                    <li> <span> Rob Bekebrede (jeugdcommissie) </span> </li>
                    <li> <span> Lilian Bongaerts (jeugdcommissie) </span> </li>
                  </ul>
                </div>

                <div className="members__container">
                  <ul>
                    <h2> Sectiehoofden </h2>
                    <li> <strong> {"Trompetten:"} </strong> <span> Ank Verwer </span> </li>
                    <li> <strong> {"Trombones:"} </strong> <span> André Flens </span> </li>
                    <li> <strong> {"Hoorns:"} </strong> <span> Lilian Bongaerts </span> </li>
                    <li> <strong> {"Bugels:"} </strong> <span> Bert Bekebrede </span> </li>
                    <li> <strong> {"Bariton/Euphoniums:"} </strong> <span> Leo Huitema </span> </li>
                    <li> <strong> {"Saxofoons:"} </strong> <span> Dorine Bloo </span> </li>
                    <li> <strong> {"Bastuba'\s"}: </strong> <span> Romke Huitema </span> </li>
                    <li> <strong> {"Slagwerk:"} </strong> <span> Frans ten Veen </span> </li>
                  </ul>
                </div>
              </div>
            </section>

          <Footer />
        </div>
      )
    }
}

export default Organization;
