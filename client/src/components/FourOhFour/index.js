import React from 'react';
import Helmet from 'react-helmet';
import { Spacer } from '../../components/helpers';
import { Link } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
import { randomQuote } from '../../utils/get-words';

import './404.css';

const FourOhFour = () => {
  const { t } = useTranslation();
  const quote = randomQuote();
  return (
    <div className='notfound-page-wrapper'>
      <Helmet title={t('four-oh-four.page-not-found') + '| freeCodeCamp'} />
      <img alt={t('four-oh-four.not-found')} src={notFoundLogo} />
      <Spacer />
      <h1>
        <Trans>four-oh-four.page-not-found</Trans>.
      </h1>
      <Spacer />
      <div>
        <p>
          <Trans>four-oh-four.heres-a-quote</Trans>
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
        <Trans>buttons.view-curriculum</Trans>
      </Link>
    </div>
  );
};

export default FourOhFour;
