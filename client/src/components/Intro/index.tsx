import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { randomQuote } from '../../utils/get-words';
import Login from '../Header/components/login';
import { Link, Loader } from '../helpers';
import IntroDescription from './components/intro-description';

import './intro.css';
import LearnAlert from './learn-alert';

interface IntroProps {
  complete?: boolean;
  completedChallengeCount?: number;
  isSignedIn?: boolean;
  name?: string;
  pending?: boolean;
  slug?: string;
  username?: string;
  onLearnDonationAlertClick: () => void;
  isDonating: boolean;
}

const Intro = ({
  isSignedIn,
  name,
  pending,
  complete,
  completedChallengeCount,
  slug,
  onLearnDonationAlertClick,
  isDonating
}: IntroProps): JSX.Element => {
  const { t } = useTranslation();
  if (pending && !complete) {
    return (
      <>
        <Spacer size='m' />
        <Loader />
        <Spacer size='m' />
      </>
    );
  } else if (isSignedIn) {
    const { quote, author } = randomQuote();
    return (
      <>
        <Spacer size='m' />
        <h1 id='content-start' className='text-center'>
          {name
            ? `${t('learn.welcome-1', { name: name })}`
            : `${t('learn.welcome-2')}`}
        </h1>
        <Spacer size='m' />
        <div className='text-center quote-partial'>
          <blockquote className='blockquote' data-testid='quote-block'>
            <span>
              <q data-playwright-test-label='random-quote'>{quote}</q>
              <footer className='quote-author blockquote-footer'>
                <cite data-playwright-test-label='random-author'>{author}</cite>
              </footer>
            </span>
          </blockquote>
        </div>
        <LearnAlert
          onLearnDonationAlertClick={onLearnDonationAlertClick}
          isDonating={isDonating}
        />
        {completedChallengeCount && slug && completedChallengeCount < 15 ? (
          <div className='intro-description'>
            <Spacer size='m' />
            <p>
              <Trans i18nKey='learn.start-at-beginning'>
                <Link to={slug} />
              </Trans>
            </p>
          </div>
        ) : (
          ''
        )}
      </>
    );
  } else {
    return (
      <>
        <Spacer size='m' />
        <h1
          id='content-start'
          className='text-center'
          data-playwright-test-label='learn-heading'
        >
          {t('learn.heading')}
        </h1>
        <Spacer size='m' />
        <IntroDescription />
        <Spacer size='m' />
        <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
        <Spacer size='m' />
      </>
    );
  }
};

Intro.displayName = 'Intro';

export default Intro;
