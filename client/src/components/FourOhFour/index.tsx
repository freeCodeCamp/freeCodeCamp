import { RouteComponentProps } from '@reach/router';
import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
import { randomQuote } from '../../utils/get-words';
import { Spacer } from '../helpers';

import './404.css';

const FourOhFour = (_props: RouteComponentProps): JSX.Element => {
  const { t } = useTranslation();
  const quote = randomQuote();
  return (
    <div className='notfound-page-wrapper'>
      <Helmet title={t('404.page-not-found') + '| freeCodeCamp'} />
      <img
        alt={t('404.not-found')}
        src={notFoundLogo}
        data-playwright-test-label='404-img'
      />
      <Spacer size='medium' />
      <h1 id='content-start' data-playwright-test-label='404-heading'>
        {t('404.page-not-found')}.
      </h1>
      <Spacer size='medium' />
      <div>
        <p data-playwright-test-label='404-heres-a-quote'>
          {t('404.heres-a-quote')}
        </p>
        <Spacer size='medium' />
        <blockquote
          className='quote-wrapper'
          data-playwright-test-label='404-quote'
        >
          <p className='quote'>{quote.quote}</p>
          <p className='author'>- {quote.author}</p>
        </blockquote>
      </div>
      <Spacer size='large' />
      <Link
        className='btn btn-cta'
        to='/learn'
        data-playwright-test-label='404-view-curriculum-link'
      >
        {t('buttons.view-curriculum')}
      </Link>
    </div>
  );
};

export default FourOhFour;
