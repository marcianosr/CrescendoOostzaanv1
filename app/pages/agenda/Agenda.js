import React from 'react';
import { render } from 'react-dom';

import Sidebar from '../../components/Sidebar';

const Agenda = () => (
  <section className='standard-page standard-page__flex content events__container'>
    <article>
        <h1>Agenda 2017/2018</h1>

        <section className="events__container">
          <ul className="events__block">
            <li className="events__item"><time>4 november</time></li>
            <li className="events__item">Vrienden van Crescendo live</li>
            <li className="events__item">De Kunstgreep Oostzaan</li>
          </ul>
          <ul className="events__block">
            <li className="events__item"><time>24 december</time></li>
            <li className="events__item">Kerstnachtdienst</li>
            <li className="events__item">22:15 uur</li>
            <li className="events__item">De Grote Kerk Oostzaan</li>
          </ul>
          <ul className="events__block">
            <li className="events__item"><time>6 januari</time></li>
            <li className="events__item">Nieuwjaarsconcert i.s.m. Excelsior, Concordia, Tavenu in het Atrium</li>
            <li className="events__item">De Kunstgreep</li>
          </ul>
          <ul className="events__block">
            <li className="events__item"><time>5 t/m 10 maart</time></li>
            <li className="events__item">Jantje Beton</li>
          </ul>
          <ul className="events__block">
            <li className="events__item"><time>1 april</time></li>
            <li className="events__item">Paasdienst</li>
            <li className="events__item">De Grote Kerk</li>
          </ul>
          <ul className="events__block">
            <li className="events__item"><time>7 april</time></li>
						<li className="events__item">Gezamenlijk concert met Brassband Concordia Vinkeveen</li>
            <li className="events__item">Vinkeveen</li>
          </ul>
          <ul className="events__block">
            <li className="events__item"><time>28/29/30? mei</time></li>
            <li className="events__item">Avondvierdaagse Amsterdam Noord</li>
            <li className="events__item">Amsterdam-Noord</li>
          </ul>
          <ul className="events__block">
            <li className="events__item"><time>15 juni</time></li>
            <li className="events__item">Avondvierdaagse Oostzaan</li>
            <li className="events__item">Oostzaan</li>
          </ul>
					<ul className="events__block">
            <li className="events__item"><time>23 juni</time></li>
            <li className="events__item">Uitwisselingsconcert Vinkeveen</li>
            <li className="events__item">Oostzaan</li>
          </ul>
        </section>

        <h1>Partij Repetities 2017/2018</h1>


        <section className="events__container">
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>5 sep</time></li>
            <li className="events__item events__item--repetities">bassen, baritons, trombones, bariton- en tenorsaxen</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>12 sep</time></li>
            <li className="events__item events__item--repetities">2de en 3de bugels</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>19 sep</time></li>
            <li className="events__item events__item--repetities">alle saxen</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>26 sep</time></li>
            <li className="events__item events__item--repetities">trompetten</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>3 okt</time></li>
            <li className="events__item events__item--repetities">trombones</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>10 okt</time></li>
            <li className="events__item events__item--repetities">baritons</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>17 okt</time></li>
            <li className="events__item events__item--repetities">1ste bugels en sopraansax</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>24 okt</time></li>
            <li className="events__item events__item--repetities">hoorns</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>31 okt</time></li>
            <li className="events__item events__item--repetities">altsaxen</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>7 nov</time></li>
            <li className="events__item events__item--repetities">bassen, baritons, trombones, bariton- en tenorsaxen</li>
          </ul>
          <ul className="events__block">
            <li className="events__item events__item--repetities"><time>14 nov</time></li>
            <li className="events__item events__item--repetities">2de en 3de bugels</li>
          </ul>
					<ul className="events__block">
						<li className="events__item events__item--repetities"><time>21 nov</time></li>
						<li className="events__item events__item--repetities">alle saxen</li>
					</ul>
					<ul className="events__block">
						<li className="events__item events__item--repetities"><time>28 nov</time></li>
						<li className="events__item events__item--repetities">trompetten</li>
					</ul>
					<ul className="events__block">
						<li className="events__item events__item--repetities"><time>5 dec</time></li>
						<li className="events__item events__item--repetities">trombones</li>
					</ul>
					<ul className="events__block">
						<li className="events__item events__item--repetities"><time>12 dec</time></li>
						<li className="events__item events__item--repetities">baritons</li>
					</ul>
					<ul className="events__block">
						<li className="events__item events__item--repetities"><time>19 dec</time></li>
						<li className="events__item events__item--repetities">1ste bugels en sopraansax</li>
					</ul>
					<ul className="events__block">
						<li className="events__item events__item--repetities"><time>2 jan</time></li>
						<li className="events__item events__item--repetities">hoorns</li>
					</ul>

        </section>


    </article>

  </section>
)

export default Agenda;
