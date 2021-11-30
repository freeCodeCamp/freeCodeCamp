import { Alert } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { emailToABVariant } from '../../utils/A-B-tester';
import { randomQuote } from '../../utils/get-words';
import Login from '../Header/components/Login';
import { Link, Spacer, Loader, FullWidthRow } from '../helpers';
import CurrentChallengeLink from '../helpers/current-challenge-link';
import IntroDescription from './components/IntroDescription';

import './intro.css';

interface IntroProps {
  complete?: boolean;
  completedChallengeCount?: number;
  isSignedIn?: boolean;
  name?: string;
  pending?: boolean;
  slug?: string;
  username?: string;
  email?: string;
  onAlertClick?: () => void;
}

const Intro = ({
  isSignedIn,
  name,
  pending,
  complete,
  completedChallengeCount,
  slug,
  email,
  onAlertClick
}: IntroProps): JSX.Element => {
  const { t } = useTranslation();
  const buttonVariation = (email: string | undefined): string => {
    if (!email || emailToABVariant(email).isAVariant)
      return t('buttons.donate');
    return t('buttons.support-our-nonprofit');
  };
  if (pending && !complete) {
    return (
      <>
        <Spacer />
        <Loader />
        <Spacer />
      </>
    );
  } else if (isSignedIn) {
    const { quote, author } = randomQuote();
    return (
      <>
        <Spacer />
        <h1 className='text-center '>
          {name
            ? `${t('learn.welcome-1', { name: name })}`
            : `${t('learn.welcome-2')}`}
        </h1>
        <Spacer />
        <FullWidthRow>
          {completedChallengeCount && completedChallengeCount > 0 ? (
            <CurrentChallengeLink isLargeBtn={true}>
              {t('buttons.current-challenge')}
            </CurrentChallengeLink>
          ) : (
            ''
          )}
        </FullWidthRow>
        <Spacer />
        <div className='text-center quote-partial'>
          <blockquote className='blockquote'>
            <span>
              <q>{quote}</q>
              <footer className='quote-author blockquote-footer'>
                <cite>{author}</cite>
              </footer>
            </span>
          </blockquote>
        </div>
        {completedChallengeCount && slug && completedChallengeCount < 15 ? (
          <div className='intro-description'>
            <Spacer />
            <p>
              <Trans i18nKey='learn.start-at-beginning'>
                <Link to={slug} />
              </Trans>
            </p>
          </div>
        ) : (
          ''
        )}
        <Alert bsStyle='info' className='annual-donation-alert'>
          <p>
            <b>{t('learn.season-greetings')}</b>
          </p>
          <p>{t('learn.if-getting-value')}</p>
          <p className={'text-center'}>
            <hr />
            <Link
              className='btn'
              key='donate'
              onClick={onAlertClick}
              sameTab={false}
              to='/donate'
            >
              {buttonVariation(email)}
            </Link>
          </p>
        </Alert>
      </>
    );
  } else {
    return (
      <>
        <Spacer />
        <h1>{t('learn.heading')}</h1>
        <Spacer />
        <IntroDescription />
        <Spacer />
        <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
        <Spacer />
      </>
    );
  }
};

Intro.displayName = 'Intro';

export default Intro;
