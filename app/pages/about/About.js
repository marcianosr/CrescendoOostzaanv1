import React from 'react';
import { render } from 'react-dom';

import Sidebar from '../../components/Sidebar';

const About = () => (
  <section className='standard-page standard-page__flex content'>
    <article>
        <h1> Over Crescendo </h1>
        <p> Christelijke muziekvereniging “Crescendo” werd op 1 november 1912 opgericht.  Crescendo heeft een uitgebreid repertoire. Afhankelijk van aard en de plaats van het optreden kan het een keuze zijn uit filmmuziek, koralen, arrangementen van popmuziek, bewerkingen van stukken van klassieke componisten en uiteraard fanfaremuziek van hedendaagse componisten. </p>

        <p> Naast het verzorgen van eigen concerten treedt het orkest van de vereniging een aantal keren per jaar elders op. Zo is Crescendo steevast present bij het binnenhalen van  de lopers van de avondvierdaagse in Oostzaan en begeleidt het orkest regelmatig kerkdiensten.</p>

        <h2> Ledenaantal </h2>
        <p> In de loop der jaren is het ledenaantal van de muziekvereniging flink gegroeid. Het orkest bestaat momenteel uit ruim veertig leden, sterk variërend in leeftijd. Zij vertegenwoordigen een slagwerkgroep (ritmisch en melodisch), saxofoons (sopraan, alt, tenor, bariton) en een groot aantal koperblaasinstrumenten, te weten bugel, trompet, trombone, hoorn, bariton/euphonium en bassen. </p>

        <p> Vandaag de dag geven professionele docenten les aan beginnende muzikanten, welke na het behalen van het HaFaBra A-diploma mogen meespelen in het grote orkest. De beginnende muzikant kan al snel meespelen in ons opstaporkest.
        </p>

        <h2> Dirigent </h2>
        <p>Het orkest staat onder leiding van Bart Koning, afgestudeerd slagwerker aan het Sweelinck Conservatorium en thans dirigent en docent bij verschillende orkesten. Koning is naast dirigent bij Crescendo ook slagwerkdocent.
        </p>
    </article>

    <Sidebar type='standard' title={'Repetitietijden'} text={'De vereniging beschikt over een eigen verenigingsgebouw “de Notenkraker” in Oostzaan waarin de repetities plaatsvinden. De vaste repetitieavond van het orkest is op dinsdagavond van 20.00 uur tot 22.15 uur. De repetitieavond van het opstaporkest is op vrijdag van 17.00 tot 18.00 uur.'} />
  </section>
)

export default About;
