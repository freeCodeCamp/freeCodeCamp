import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
import { randomQuote } from '../../utils/get-words';
import { Spacer } from '../helpers';

import './404.css';

const FourOhFour = (): JSX.Element => {
  const { t } = useTranslation();
  const quote = randomQuote();
  return (
    <div className='notfound-page-wrapper'>
      <Helmet title={t('404.page-not-found') + '| freeCodeCamp'} />
      <img alt={t('404.not-found')} src={notFoundLogo} />
      <Spacer paddingSize={15} />
      <h1>{t('404.page-not-found')}.</h1>
      <Spacer paddingSize={15} />
      <div>
        <p>{t('404.heres-a-quote')}</p>
        <Spacer paddingSize={15} />
        <blockquote className='quote-wrapper'>
          <p className='quote'>
            <span>&#8220;</span>
            {quote.quote}
          </p>
          <p className='author'>- {quote.author}</p>
        </blockquote>
      </div>
      <Spacer paddingSize={30} />
      <Link className='btn btn-cta' to='/learn'>
        {t('buttons.view-curriculum')}
      </Link>
    </div>
  );
};

export default FourOhFour;
