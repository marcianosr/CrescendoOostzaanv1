import React from 'react';
import { render } from 'react-dom';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Article from './Article';
import NotFound from '../../components/NotFound';


class ArticleContainer extends React.Component {

    constructor(props) {
      super(props);
    }

    getPosts() {
        let posts = [
          {
            "id": 1,
            "slug": 'salaam-oostzaan',
            "title": "Salaam Oostzaan! (Muziek verbindt)",
            "body": ['m.m.v. Sabri Saad El Hamus, Nawras Taki, Nizar Rohana en Modar Salam.a.', 'Een multiculturele avond vol muziek, zang en dans uit diverse culturen.'],
            "extra": ['Locatie: Twiske Haven, Noorderlaaik 4A, Oostzaan', 'Aanvang: 20:00 uur', 'Entrée: gratis'],
            "images": ['/assets/Sabri, Nawras, Nizar en Modar.png', '/assets/Twiskehaven.jpg'],
            "extraImages": ['/assets/Sabri.jpg']
          },
          {
            "id": 2,
            "slug": 'verloting',
            "title": "Verloting met diverse fantastische prijzen!",
            "body": ['Dit jaar organiseert christelijke muziekvereniging Crescendo Oostzaan een verloting ter gelegenheid van haar 105- jarig bestaan.',
										 'Loten zijn verkrijgbaar via de leden van Crescendo en bij speelgoedwinkel Top1Toys, Zuideinde 77 in Oostzaan.',
										 'U kunt prachtige prijzen winnen, waaronder:',
									 		'Fotoshoot t.w.v. € 100, Bonnen voor gratis knipbeurt, Boodschappenpakket, Diverse dinerbonnen, Horloge, 4 gratis bokslessen, 2 uur tuinonderhoud',
											'Deze prijzen zijn gesponsord door de volgende bedrijven uit Oostzaan e.o.: Albert Heijn BV, Apotheek Oostzaan BV, Optiek Henk Bouw, Corina’s Haarmode, DHB Sierbestrating, Cafetaria Family Oostzaan, Kapsalon Coos de Joode, G.J. de Klerk, Huid & Haar, Korver Mode, Atelier, Krista Lust, Top1Toys Oostzaan, Eetcafé Oostzaan, Tuincentrum v.d. Pol, Rabobank Zaanstreek, Dirk vd Broek, Fotoshoot 4U, Poelierderij Jaap Jonker, Tarantella Oostzaan, Chinees restaurant Het Oosten, La Fattoria Gigi, Sportschool ADZ, Boksteam De Ring, Bakkerij Windhouwer Zaandam, HEMA Oostzaan, Eetcafé Bonema, FEBO Beheer BV, Bloembinderij Esprit, Catering Expresse Zaanstreek, Kapsalon Rob Sweers', 'Loten kosten € 1 per stuk en zijn te koop bij Top1Toys Oostzaan, Zuideinde 77 Oostzaan of bij een van de leden van de vereniging. Meer informatie via info@crescendo-oostzaan.nl', 'De trekking vindt plaats op 1 november 2017, de dag waarop Crescendo haar verjaardag viert. De uitslag wordt gepubliceerd op onze website www.crescendo-oostzaan.nl. U kunt uw prijs ophalen in De Kunstgreep voorafgaand aan ons concert "Vrienden van Crescendo Live!"" op 4 november a.s.'],

            "extra": [''],
            "images": ['http://frieseboys.nl/wp-content/uploads/2016/01/verloting.42940745e9e147f745bdf110871ec779233.jpg'],
            "extraImages": ['']
          },
          {
            "id": 3,
            "slug": 'de-vrienden-van-crescendo-live',
            "title": "Vrienden van Crescendo Live!",
            "body": ['Christelijke muziekvereniging Crescendo nodigt al haar vrienden uit voor een fantastische Vrienden van Crescendo live! avond op zaterdag 4 november a.s. in de Kunstgreep in Oostzaan. Iedereen kan deze avond volop dansen en meezingen! Wat te denken van klassiekers als "Droomland", "Vlieg met me mee", meezingers als "Rosamunde" en "Ich bin wie du" en (Nederpop)medleys van Andre Hazes en Rob de Nijs. Aan deze avond werken diverse Oostzaanse artiesten mee, waaronder Eddy Walsh, Esmée Visser en Frank Geisink. Het concert begint om 20.00 uur, kaarten à € 12,50 zijn te reserveren via info@crescendo-oostzaan.nl'],
            "extra": [''],
            "images": [''],
            "extraImages": ['/assets/small-4nov-poster-page-001.jpg']
          },
					{
						"id": 4,
						"slug": 'uitslag-loterij',
						"title": "Uitslag trekking Jubileumloterij",
						"body": ['Vanmiddag (woensdag 1 november) heeft wethouder Siefko Julius in het gemeentehuis de trekking van onze jubileumloterij verricht. Hieronder het overzicht van de winnende lotnummers en de gewonnen prijs.', 'Gewonnen prijzen zijn op vertoon van het winnende lot af te halen: 1) op 4 november voorafgaand aan ons “Vrienden van Crescendo Live!” concert in de Kunstgreep; 2) op de dinsdagavond voorafgaand aan onze repetitie (tussen 19:30 en 20:00) in ons verenigingsgebouw De Notenkraker aan het Zuideinde 193 in Oostzaan', 'Bent u niet in de gelegenheid uw prijs op deze momenten op te halen, stuur dan een mail naar info@crescendooostzaan.nl voor het maken van een afspraak.', 'Alle prijswinnaars: Van harte gefeliciteerd!'],
						"extra": [`  41 / Kadobon van € 10 / Tuincentrum v.d. Pol`,
												`51 / 2 Personal trainingen / Boksteam De Ring`,
												`88 / Tegoedbon voor broodje döner + patat + cola / Eetcafé Bonema`,
												`101 / Mand met delicatessen / La Fattoria Gigi`,
												`154 / Vichy huidverzorgingspakket / Apotheek Oostzaan BV`,
												`160 / Tegoedbon voor warme hapjes t.w.v. € 40 / Catering Expresse Zaanstreek`,
												`212 / 2 Bootcamp trainingen / Boksteam De Ring`,
												`228 / 2 Personal trainingen / Boksteam De Ring`,
												`305 / Herenoverhemd / Korver Mode`,
												`334 / Vichy huidverzorgingspakket / Apotheek Oostzaan BV`,
												`344 / Tegoedbon voor saladeschotel t.w.v. € 40 / Catering Expresse Zaanstreek`,
												`410 / 2 uur tuinonderhoud / DHB Sierbestrating`,
												`455 / 2 Bokstrainingen / Boksteam De Ring`,
												`531 / Kadobon € 10 + boek / FEBO Beheer BV`,
												`591 / Kadobon van € 15 / Tarantella Oostzaan`,
												`621 / Waardebon voor een knipbeurt / Corina's Haarmode`,
												`663 / Vichy huidverzorgingspakket / Apotheek Oostzaan BV`,
												`760 / Waardebon voor een knipbeurt / Kapsalon Coos de Joode`,
												`781 / Waardebon voor een knipbeurt / Kapsalon Coos de Joode`,
												`787 / Waardebon voor een knipbeurt / Kapsalon Rob Sweers`,
												`836 / Kadobon € 10 + boek / FEBO Beheer BV`,
												`839 / Waardebon voor een knipbeurt / Kapsalon Coos de Joode`,
												`868 / 2 Bootcamp trainingen / Boksteam De Ring`,
												`888 / Tasje met kadobon + schoonheidsproducten / Huid & Haar`,
												`927 / Bon t.w.v. € 25 / Borrelz`,
												`1008 / Horloge / G.J. de Klerk`,
												`1030 / Waardebon t.w.v. 2 introductie groepslessen / Sportschool ADZ`,
												`1109 / Fotoshoot t.w.v. € 100 / Fotoshoot 4U`,
												`1113 / Waardebon t.w.v. / 2 introductie groepslessen Sportschool ADZ`,
												`1286 / Kadobon van € 15 / Tarantella Oostzaan`,
												`1414 / Zilveren enkelbandje / Atelier Krista Lust`,
												`1476 / Kadobon van € 10 / Tuincentrum v.d. Pol`,
												`1518 / Kadobon van € 15 / Tarantella Oostzaan`,
												`1657 / Waardebon t.w.v. 2 introductie groepslessen / Sportschool ADZ`,
												`1711 / 2 Bokstrainingen / Boksteam De Ring`,
												`1722 / 2 Bokstrainingen / Boksteam De Ring`,
												`1742 / Kadobon van € 10 / Tuincentrum v.d. Pol`,
												`1793 / Tegoedbon voor maandmenu voor 2 personen / Chinees restaurant Het Oosten`,
												`1798 / Boodschappenpakket Albert Heijn BV / Gebr. Lindeman`,
												`1800 / 2 Bootcamp trainingen / Boksteam De Ring`,
												`1801 / 1 dinerbon / Cafetaria Family Oostzaan`,
												`1825 / Kadobon € 10 + boek / FEBO Beheer BV`,
												`1850 / 1 dinerbon / Cafetaria Family Oostzaan`,
												`1902 / Vichy huidverzorgingspakket / Apotheek Oostzaan BV`,
												`1907 / Kadobon € 10 + boek / FEBO Beheer BV`,
												`1955 / Vichy huidverzorgingspakket / Apotheek Oostzaan BV`,
												`1963 / Waardebon t.w.v. 2 introductie groepslessen / Sportschool ADZ`,
												`2001 / Kadobon / Bloembinderij Esprit`,
												`2091 / 2 Bokstrainingen / Boksteam De Ring`,
												`2091 / Goodiebag Rabobank / Zaanstreek`,
												`2095 / 1 tegoedbon t.w.v. € 50 / Eetcafé Oostzaan`,
												`2154 / Kadobon € 10 + boek / FEBO Beheer BV`,
												``
											],
						"images": [''],
						"extraImages": ['/assets/thumbnail_DSC09965.jpg'],
						"table": true
					},
					{
						"id": 5,
						"slug": 'vrienden-van-crescendo-live-uitverkocht',
						"title": "Vrienden van Crescendo Live uitverkocht",
						"body": ['Lees het artikel over de Vrienden van Crescendo Live! van het Kompas op hun website: '],
						"extra": [''],
						"images": ['/assets/crescendolive.JPG'],
						"extraImages": ['/assets/crescendolive.JPG'],
						"link": 'http://rodi.nl/widgets/1700-oostzaan/nieuws/1435473-vrienden-van-crescendo-live-uitverkochtsfeervolle-afsluiting-van-het-jubileumjaar',
					},
					{
						"id": 6,
						"slug": 'nieuwjaarsconcert-2018',
						"title": "Nieuwjaarsconcert 2018",
						"body": ['Nieuwjaarsconcert 2018 met Tavenu Oostzaan, Concordia Oostzaan, Excelsior Oostzaan en Crescendo Oostzaan in de Kunstgreep Oostzaan.'],
						"extra": [''],
						"images": [''],
						"extraImages": ['/assets/nieuwjaarsconcert2018.jpg'],
					},
          {
            "id": 7,
            "slug": 'klank-in-koper',
            "title": "Klank in koper",
            "body": ["Gezamelijk concert in samenwerking met Brassband Concordia te Vinkeveen."],
            "extra": [''],
            "images": [''],
            "extraImages": ['/assets/poster-7-april.jpg'],
          },
          {
            "id": 8,
            "slug": 'afscheid-ton-verwer',
            "title": "Afscheid Ton Verwer",
            "body": ["Op 28 april jl. is Ton Verwer onverwacht overleden. Verschrikkelijk verdrietig nieuws, onwerkelijk. Op 11 mei jl. hebben we afscheid genomen van Ton door het spelen van Glenn beats the battle of Jericho, zijn muziek, tijdens de uitvaartdienst. Ton was voor ons: muzikant, vriend, saxofonist, goed in organiseren, af en toe mopperig, uitgesproken en aanspreekbaar, aanwezig, altijd bereid om zich in te zetten, een kei in het binnen halen van sponsoren, betrokken en een verenigingsman in hart en nieren. Wat zullen we hem missen.", "Onze gedachten zijn bij Tiny, Joyce, Johan, Yvette, Ramon, Ank, kleinkinderen en overige familie en wij wensen hen veel sterkte."],
            "extra": [''],
            "images": [''],
            "extraImages": ['/assets/tonverwer.jpg'],
          },
        ];

        return posts;
    }

    getPostById() {

      let currentParams = this.props.params.id;
      let posts = this.getPosts();
      let currentPost;

      posts.map((post, i) => {
          if (post.slug === currentParams) {
            currentPost = post;
          }
      });
		
      if (currentPost) {
        return <Article key={currentPost.id} images={currentPost.images} extraImages={currentPost.extraImages} title={currentPost.title} body={currentPost.body} extra={currentPost.extra} table={currentPost.table} link={currentPost.link}/>
      }
      else {
        return <NotFound />
      }
    }

    render() {

      return (
        <div>
          <Navigation type='transparent-bar'/>

          <div className='article-page'>
            { this.getPostById() }
            <Footer />
          </div>
        </div>
      )
    }
}

export default ArticleContainer;
