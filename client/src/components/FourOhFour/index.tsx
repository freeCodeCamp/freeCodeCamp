import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
import { randomQuote } from '../../utils/get-words';
import { Spacer, Link } from '../helpers';

import './404.css';

const FourOhFour = (_props: RouteComponentProps): JSX.Element => {
  const { t } = useTranslation();
  const quote = randomQuote();

  return (
    <div className='notfound-page-wrapper'>
      <Helmet title={t('404.page-not-found') + ' | freeCodeCamp.org'} />
      <img
        alt={t('404.not-found')}
        src={notFoundLogo}
        data-playwright-test-label='not-found-image'
      />
      <Spacer size='medium' />
      <h1 id='content-start' data-playwright-test-label='not-found-heading'>
        {t('404.page-not-found')}.
      </h1>
      <Spacer size='medium' />
      <div>
        <p data-playwright-test-label='heres-quote-paragraph'>
          {t('404.heres-a-quote')}
        </p>
        <Spacer size='medium' />
        <blockquote
          className='quote-wrapper'
          data-playwright-test-label='quote-wrapper'
        >
          <p className='quote' data-playwright-test-label='quote-content'>
            {quote.quote}
          </p>
          <p className='author' data-playwright-test-label='author-name'>
            - {quote.author}
          </p>
        </blockquote>
      </div>
      <Spacer size='large' />
      <Link
        className='btn btn-cta'
        to='/learn'
        data-playwright-test-label='view-curriculum-btn'
      >
        {t('buttons.view-curriculum')}
      </Link>
    </div>
  );
};

export default FourOhFour;
