import React from 'react';
import Helmet from 'react-helmet';
import { Spacer } from '../../components/helpers';
import { Link } from 'gatsby';

import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
import { randomQuote } from '../../utils/get-words';

import './404.css';

const FourOhFour = () => {
  const quote = randomQuote();
  return (
    <div className='notfound-page-wrapper'>
      <Helmet title='Page Not Found | freeCodeCamp' />
      <img alt='404 Not Found' src={notFoundLogo} />
      <Spacer />
      <h1>Page not found.</h1>
      <Spacer />
      <div>
        <p>
          We couldn&#x27;t find what you were looking for, but here is a quote:
        </p>
        <Spacer />
        <blockquote className='quote-wrapper'>
          <p className='quote'>
            <span>&#8220;</span>
            {quote.quote}
          </p>
          <p className='author'>- {quote.author}</p>
        </blockquote>
      </div>
      <Spacer size={2} />
      <Link className='btn btn-cta' to='/learn'>
        View the Curriculum
      </Link>
    </div>
  );
};

export default FourOhFour;
