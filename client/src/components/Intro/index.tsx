import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { randomQuote } from '../../utils/get-words';
import Login from '../Header/components/login';
import { Link, Spacer, Loader } from '../helpers';
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
  onDonationAlertClick: () => void;
  isDonating: boolean;
}

const Intro = ({
  isSignedIn,
  name,
  pending,
  complete,
  completedChallengeCount,
  slug,
  onDonationAlertClick,
  isDonating
}: IntroProps): JSX.Element => {
  const { t } = useTranslation();
  if (pending && !complete) {
    return (
      <>
        <Spacer size='medium' />
        <Loader />
        <Spacer size='medium' />
      </>
    );
  } else if (isSignedIn) {
    const { quote, author } = randomQuote();
    return (
      <>
        <Spacer size='medium' />
        <h1 className='text-center'>
          {name
            ? `${t('learn.welcome-1', { name: name })}`
            : `${t('learn.welcome-2')}`}
        </h1>
        <Spacer size='medium' />
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
        <LearnAlert
          onDonationAlertClick={onDonationAlertClick}
          isDonating={isDonating}
        />
        {completedChallengeCount && slug && completedChallengeCount < 15 ? (
          <div className='intro-description'>
            <Spacer size='medium' />
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
        <Spacer size='medium' />
        <h1>{t('learn.heading')}</h1>
        <Spacer size='medium' />
        <IntroDescription />
        <Spacer size='medium' />
        <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
        <Spacer size='medium' />
      </>
    );
  }
};

Intro.displayName = 'Intro';

export default Intro;
