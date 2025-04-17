import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Button, Container, Col, Row, Spacer } from '@freecodecamp/ui';
import { randomQuote } from '../../utils/get-words';
import { Link } from '../helpers';
import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
import { formatDateUsCentral } from './helpers';

import './not-found.css';

function DailyCodingChallengeNotFound(): JSX.Element {
  const { t } = useTranslation();
  const quote = randomQuote();

  const today = new Date();
  const usCentralDate = formatDateUsCentral(today);

  return (
    <Container>
      <Row>
        <Col
          md={8}
          mdOffset={2}
          sm={10}
          smOffset={1}
          xs={12}
          className='not-found-wrapper'
        >
          <Helmet title={t('404.page-not-found') + ' | freeCodeCamp.org'} />
          <img alt={t('404.not-found')} src={notFoundLogo} />
          <Spacer size='m' />
          <h1 id='content-start'>{t('daily-coding-challenges.not-found')}</h1>
          <Spacer size='m' />
          <div>
            <p>{t('404.heres-a-quote')}</p>
            <Spacer size='m' />
            <blockquote className='quote-wrapper'>
              <p className='quote'>{quote.quote}</p>
              <p className='author'>- {quote.author}</p>
            </blockquote>
          </div>
          <Spacer size='l' />
          <div className='button-wrapper'>
            <Button
              block={true}
              href={`/learn/daily-coding-challenge?date=${usCentralDate}`}
            >
              {t(`buttons.go-to-today-long`)}
            </Button>
            <Spacer size='xs' />
            <Button block={true} href='/learn/daily-coding-challenge/archive'>
              {t(`buttons.go-to-archive-long`)}
            </Button>
          </div>
          <Spacer size='l' />
          <Link className='btn btn-cta' to='/learn'>
            {t('buttons.view-curriculum')}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

DailyCodingChallengeNotFound.displayName = 'DailyCodingChallengeNotFound';

export default DailyCodingChallengeNotFound;
