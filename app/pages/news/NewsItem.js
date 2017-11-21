import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


class NewsItem extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
              <Link to={this.props.url} className='news-item'>
                <article>
                    <figure className='news-item__image'>
                      <img src={this.props.cover}/>
                    </figure>
                    <div className='news-item__metadata'>
                      <time>Geplaatst op: {this.props.date}</time>
                      <h2>{this.props.title}</h2>
                      <p>{this.props.excerpt}</p>
                    </div>
                  </article>
                </Link>
                //
                // <article className='news-item'>
                //   <figure className='news-item__image'>
                //     <img src={'https://i.ytimg.com/vi/WV49elOzPdQ/maxresdefault.jpg'}/>
                //   </figure>
                //   <div className='news-item__metadata'>
                //     <time>25 maart 2017</time>
                //     <h2>Concert Amsterdam-Noord</h2>
                //     <p> Afgelopen zaterdag een geweldig concert gehad samen met orkest Zuiderwoude.</p>
                //   </div>
                // </article>
                //
                // <article className='news-item'>
                //   <figure className='news-item__image'>
                //     <img src={'https://i.ytimg.com/vi/WV49elOzPdQ/maxresdefault.jpg'}/>
                //   </figure>
                //   <div className='news-item__metadata'>
                //     <time>25 maart 2017</time>
                //     <h2>Concert Amsterdam-Noord</h2>
                //     <p> Afgelopen zaterdag een geweldig concert gehad samen met orkest Zuiderwoude.</p>
                //   </div>
                // </article>
                //
                // <article className='news-item'>
                //   <figure className='news-item__image'>
                //     <img src={'https://i.ytimg.com/vi/WV49elOzPdQ/maxresdefault.jpg'}/>
                //   </figure>
                //   <div className='news-item__metadata'>
                //     <time>25 maart 2017</time>
                //     <h2>Concert Amsterdam-Noord</h2>
                //     <p> Afgelopen zaterdag een geweldig concert gehad samen met orkest Zuiderwoude. Afgelopen zaterdag een geweldig concert gehad samen met orkest Zuiderwoude.</p>
                //   </div>
                // </article>
                //
                // <article className='news-item'>
                //   <figure className='news-item__image'>
                //     <img src={'https://i.ytimg.com/vi/WV49elOzPdQ/maxresdefault.jpg'}/>
                //   </figure>
                //   <div className='news-item__metadata'>
                //     <time>25 maart 2017</time>
                //     <h2>Concert Amsterdam-Noord</h2>
                //     <p> Afgelopen zaterdag een geweldig concert gehad samen met orkest Zuiderwoude.</p>
                //   </div>
                // </article>
                //
                // <article className='news-item'>
                //   <figure className='news-item__image'>
                //     <img src={'https://i.ytimg.com/vi/WV49elOzPdQ/maxresdefault.jpg'}/>
                //   </figure>
                //   <div className='news-item__metadata'>
                //     <time>25 maart 2017</time>
                //     <h2>Concert Amsterdam-Noord</h2>
                //     <p> Afgelopen zaterdag een geweldig concert gehad samen met orkest Zuiderwoude.</p>
                //   </div>
                // </article>

      )
    }
}

export default NewsItem;
