import React from 'react';
import { render } from 'react-dom';

import Sidebar from '../../components/Sidebar';

const content = [
  {
     instrument: "Saxofoon:",
     name: "Lars Niederstrasser",
     url: "http://larsniederstrasser.com"
  },
  {
     instrument: "Trombone:",
     name: "Fabian Vos"
  },
  {
     instrument: "Hoorn:",
     name: "Christiaan Poel"
  },
  {
     instrument: "Slagwerk:",
     name: "Bart Koning"
  },
  {
     instrument: "Trompet:",
     name: "Thomas Geerts",
     url: "http://thomasgeerts.eu"
  }
]

const Lessons = () => (
  <section className="standard-page standard-page__flex content">
    <article>
        <h1> Lessen </h1>
        <p> Het leren bespelen van een instrument wordt verzorgd door gediplomeerde docenten.  </p>

        <h2> HaFaBra opleidingen </h2>
        <p> Cursisten bij Crescendo worden opgeleid binnen het raamleerplan HaFaBra-opleidingen. Dit plan kent vier fasen (A,B,C en D-diploma). Het A-diploma geeft toegang tot het fanfareorkest. Al voor het behalen van dit diploma wordt er orkestervaring opgedaan in het opstaporkest, dat ook meewerkt aan optredens van Crescendo. In de voorbereiding naar het examen voor het diploma worden er theorielessen aangeboden. </p>

        <p> Er wordt gewerkt met de nieuwste methodes die stimulerend werken en daardoor al snel muzikaal plezier opleveren. </p>

        <p> Heeft u interesse in het leren spelen van een instrument in verenigingsverband, neem dan contact op met onze opleidingscoördinator <strong> Dorine Bloo <a href="tel:075-6845059">075-6845059</a></strong>. </p>

        <p> <strong> Interesse? De eerste twee lessen zijn gratis. </strong> </p>

        <p> Opzegging van het lidmaatschap dient schriftelijk of per mail te worden gedaan aan het bestuur. </p>

        <h2> Scholenproject </h2>
        <p> In navolging van het grote succes van ons scholenproject op basisschool De Korenaar te Oostzaan zal ook in 2017 een project worden georganiseerd:
        Onder leiding van een docent van onze vereniging leren kinderen van groep 5-6 samen spelen op een muziekinstrument uit het orkest. Een fijne manier om zo kinderen kennis te laten maken met muziek en het bespelen van een instrument. </p>
    </article>

    <Sidebar type="list" title={"Docenten"} text={content} />
  </section>
)

export default Lessons;
