import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import Slider from '../../components/Slider';


class Article extends React.Component {

    constructor(props) {
      super(props);
    }


    loopText() {
      return this.props.body.map((text, i) => {
        return (<p key={i}> {text} </p>)
      })
    }

    loopList() {
      return this.props.extra.map((item, i) => {
        return (<li key={i}>
                {item}
                </li>)
      })
    }

    render() {
			console.log(this.props.link)
      return (
        <div>
          <div className="article-page">
            <section className="slider">
              <Slider images={this.props.images} />
            </section>
            <hr />

            <section className="content">
              <Link to="/" className="back-button"><span className="icon-chevron"></span>Terug naar home</Link>
              <h1>{this.props.title}</h1>

              { this.loopText() }


							{this.props.table &&
              <ul className='table'>
								<div>
									<strong>Winnend lotnummer / Prijs / Ter beschikking gesteld door</strong>
	                { this.loopList() }
								</div>
              </ul>}

							{this.props.table === undefined &&
              <ul>
                { this.loopList() }
              </ul>}

							{this.props.link &&
								<strong class='link-container'>
									<a target='_blank' href={this.props.link}>{this.props.link}</a>
								</strong>
							}

              <img className="article-image" src={this.props.extraImages} />

            </section>
          </div>
        </div>
      )
    }
}

export default Article;
