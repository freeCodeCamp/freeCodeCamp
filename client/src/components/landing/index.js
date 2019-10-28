import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from '../helpers';

import Article from './Article';
import { Articles } from './Articles.json';

import './landing.css';

const propTypes = {
  articles: PropTypes.array
};

const ReadMoreArticles = () => (
  <div className='read-more-row'>
    <Link id='readMoreBtn' to='https://www.freecodecamp.org/news/'>
      Read More Articles
    </Link>
  </div>
);

export const Landing = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Learn to code | freeCodeCamp.org</title>
      </Helmet>
      <main className='landing-page outer' id='landing-page'>
        <div className='inner'>
          <h1 className='text-center'>Tech explained. No Ads.</h1>
          <div className='post-feed'>
            {Articles.map((article, i) => (
              <Article article={article} key={i} />
            ))}
          </div>
          {ReadMoreArticles()}
        </div>
      </main>
    </Fragment>
  );
};

Landing.displayName = 'Landing';
Landing.propTypes = propTypes;
export default Landing;
