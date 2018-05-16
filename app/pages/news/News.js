import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import NewsItem from './NewsItem';

// Container for news items.

class News extends React.Component {
    constructor() {
      super();
      console.log('het news')
    }

    getNewsItems() {

    }

    render() {
      return (
        <section className='content'>
            <h1> Laatste Nieuws </h1>
            <div className='news-items__container'>

              <NewsItem
                url="/artikelen/klank-in-koper"
                title="Concert 7 april 2018 - Klank in Koper"
                cover='/assets/poster-7-april.jpg'
                date="3 maart 2018"
                excerpt="Gezamelijk concert in samenwerking met Brassband Concordia te Vinkeveen." />

							<NewsItem
								url="/artikelen/nieuwjaarsconcert-2018"
								title="Nieuwjaarsconcert 2018"
								cover='/assets/nieuwjaarsconcert2018.jpg'
								date="28 november 2017"
								excerpt="Nieuwjaarsconcert 2018 met Tavenu Oostzaan, Concordia Oostzaan, Excelsior Oostzaan en Crescendo Oostzaan in de Kunstgreep Oostzaan." />

							<NewsItem
								url="/artikelen/vrienden-van-crescendo-live-uitverkocht"
								title="Vrienden van Crescendo Live uitverkocht"
								cover='/assets/crescendolive.JPG'
								date="21 november 2017"
								excerpt="Sfeervolle afsluiting van het jubileumjaar."
							/>

							<NewsItem
								url="/artikelen/uitslag-loterij"
								title="Uitslag trekking Jubileumloterij"
								cover='/assets/thumbnail_DSC09965.jpg'
								date="4 november 2017"
								excerpt="Woensdag 1 november heeft wethouder Siefko Julius in het gemeentehuis de trekking van onze jubileumloterij verricht." />

							<NewsItem
								url="/artikelen/de-vrienden-van-crescendo-live"
								title="De vrienden van Crescendo Live!"
								cover='/assets/small-4nov-poster-page-001.jpg'
								date="10 oktober 2017"
								excerpt="De vrienden van Crescendo Live: 'De grootste kroeg van Oostzaan.'" />

                <NewsItem
                  url="/artikelen/verloting"
                  title="Verloting met diverse fantastische prijzen!"
                  cover='http://frieseboys.nl/wp-content/uploads/2016/01/verloting.42940745e9e147f745bdf110871ec779233.jpg'
                  date="12 september 2017"
                  excerpt="Dit jaar organiseert christelijke muziekvereniging Crescendo Oostzaan een verloting ter gelegenheid van haar 105- jarig bestaan." />

                <NewsItem
                  url="/artikelen/salaam-oostzaan"
                  title="Salaam Oostzaan! (Muziek verbindt)"
                  cover='/assets/Sabri, Nawras, Nizar en Modar.png'
                  date="1 mei 2017"
                  excerpt="Een multiculturele avond vol muziek, zang en dans uit diverse culturen." />

            </div>
        </section>

        // <div className="row">
        //   <div className="col-xs-12 col-md-11 col-md-offset-1">
        //       <h1>Laatste Nieuws</h1>
        //       <section className="">
        //       <article className="news-item col-xs-12 col-md-5">
        //         <a href="javascript:void(0)">
        //           <figure>
        //             <img src={"https://i.ytimg.com/vi/WV49elOzPdQ/maxresdefault.jpg"} alt="" />
        //           </figure>
        //           <div className="metadata">
        //             <div className="date">
        //               <time>26 aug 2016</time>
        //             </div>
        //             <div className="content">
        //               <h2>Creatieve Jeugd</h2>
        //               <p>In het pittoreske Oostzaan vindt u de Christelijke Muziekvereniging Crescendo.</p>
        //             </div>
        //           </div>
        //         </a>
        //       </article>
        //
        //       <article className="news-item col-xs-12 col-md-5">
        //         <a href="javascript:void(0)">
        //           <figure>
        //             <img src={"https://i.ytimg.com/vi/WV49elOzPdQ/maxresdefault.jpg"} alt="" />
        //           </figure>
        //           <div className="metadata">
        //             <div className="date">
        //               <time>4 nov 2016</time>
        //             </div>
        //             <div className="content">
        //               <h2>Creatieve Jeugd</h2>
        //               <p>In het pittoreske Oostzaan vindt u de Christelijke Muziekvereniging Crescendo.</p>
        //             </div>
        //           </div>
        //         </a>
        //       </article>
        //       </section>
        //   </div>
        //
        // </div>
      )
    }
}

export default News;
