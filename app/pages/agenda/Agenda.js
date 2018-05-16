import React from 'react';
import { render } from 'react-dom';

import Sidebar from '../../components/Sidebar';


const partijRepetities = [
  {
    date: '9 jan',
    section: 'hoorns'
  },
  {
    date: '16 jan',
    section: 'altsaxen'
  },
  {
    date: '23 jan',
    section: 'bassen, baritons, trombones, bariton- en tenorsaxen'
  },
  {
    date: '30 jan',
    section: '2de en 3de bugels'
  },
  {
    date: '6 feb',
    section: 'alle saxen'
  },
  {
    date: '13 feb',
    section: 'trompetten'
  },
  {
    date: '20 feb',
    section: 'geen partijrepetitie ivm ledenvergadering'
  },
  {
    date: '27 feb',
    section: 'trombones'
  },
  {
    date: '6 mrt',
    section: 'baritons'
  },
  {
    date: '13 mrt',
    section: '1ste bugels en sopraansax'
  },
  {
    date: '20 mrt',
    section: 'hoorns'
  },
  {
    date: '27 mrt',
    section: 'altsaxen'
  },
  {
    date: '3 apr',
    section: 'bassen, baritons, trombones, bariton- en tenorsaxen'
  },
  {
    date: '10 apr',
    section: '2de en 3de bugels'
  },
  {
    date: '17 apr',
    section: 'alle saxen'
  },
  {
    date: '24 apr',
    section: 'trompetten'
  },
  {
    date: '1 mei',
    section: 'trombones'
  },
  {
    date: '8 mei',
    section: 'baritons'
  },
  {
    date: '15 mei',
    section: '1ste bugels en sopraansax'
  },
  {
    date: '22 mei',
    section: 'hoorns'
  },
  {
    date: '29 mei',
    section: 'altsaxen'
  },
  {
    date: '5 jun',
    section: 'bassen, baritons, trombones, bariton- en tenorsaxen'
  },
  {
    date: '12 jun',
    section: '2de en 3de bugels'
  },
  {
    date: '19 jun',
    section: 'alle saxen'
  },
  {
    date: '26 jun',
    section: 'trompetten'
  },
  {
    date: '3 jul',
    section: 'trombones'
  },
  {
    date: '10 jul',
    section: 'baritons'
  },
  {
    date: '17 jul',
    section: '1ste bugels en sopraansax'
  },
];


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
            <li className="events__item"><time>6 juni</time></li>
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
          {partijRepetities.map((block) => (
              <ul className="events__block" key={block.date}>
                <li className="events__item events__item--repetities"><time>{block.date}</time></li>
                <li className="events__item events__item--repetities">{block.section}</li>
              </ul>
            )
          )}

        </section>
    </article>
  </section>
)

export default Agenda;
