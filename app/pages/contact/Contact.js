import React from 'react';
import { render } from 'react-dom';


const Contact = () => (
  <section className="standard-page standard-page__flex content contact">
    <article>
        <h1> Contactgegevens </h1>
        <p> Heeft u vragen, suggesties of opmerkingen dan kunt u contact met ons opnemen: </p>
        <div className="list-container">
          <ul>
            <h2>De Notenkraker</h2>
            <li>Clubgebouw Notenkraker</li>
            <li>Zuideinde 193</li>
            <li>1511 GH Oostzaan </li>
            <li><a href="mailto:info@crescendo-oostzaan.nl">info@crescendo-oostzaan.nl</a></li>
          </ul>

          <ul>
            <h2>Dagelijks bestuur</h2>
            <li>Secretaris: <a href="mailto:secretaris@crescendo-oostzaan.nl">secretaris@crescendo-oostzaan.nl</a></li>
          </ul>
        </div>
    </article>

  </section>
)

export default Contact;
