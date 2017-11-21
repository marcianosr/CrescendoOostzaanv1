import React from 'react';
import { render } from 'react-dom'; // import RENDER, because we only need the render METHOD.
import { Link } from 'react-router';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div>
      <section className='standard-page content events__container 404'>
        <h1> 404! Deze pagina bestaat niet! </h1>
        <Link to='/'>Naar de home pagina</Link>

      </section>
      <Footer />
    </div>
    )
}

export default NotFound;
