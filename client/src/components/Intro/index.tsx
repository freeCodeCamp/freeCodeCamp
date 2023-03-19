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
        <Spacer paddingSize={15} />
        <Loader />
        <Spacer paddingSize={15} />
      </>
    );
  } else if (isSignedIn) {
    const { quote, author } = randomQuote();
    return (
      <>
        <Spacer paddingSize={15} />
        <h1 className='text-center'>
          {name
            ? `${t('learn.welcome-1', { name: name })}`
            : `${t('learn.welcome-2')}`}
        </h1>
        <Spacer paddingSize={15} />
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
            <Spacer paddingSize={15} />
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
        <Spacer paddingSize={15} />
        <h1>{t('learn.heading')}</h1>
        <Spacer paddingSize={15} />
        <IntroDescription />
        <Spacer paddingSize={15} />
        <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
        <Spacer paddingSize={15} />
      </>
    );
  }
};

Intro.displayName = 'Intro';

export default Intro;
