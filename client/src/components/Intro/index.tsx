import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { randomQuote } from '../../utils/get-words';
import Login from '../Header/components/Login';
import { Link, Spacer, Loader, FullWidthRow } from '../helpers';
import CurrentChallengeLink from '../helpers/current-challenge-link';
import IntroDescription from './components/IntroDescription';

import './intro.css';

interface Props {
  complete?: boolean;
  completedChallengeCount?: number;
  isSignedIn?: boolean;
  name?: string;
  pending?: boolean;
  slug: string;
  username?: string;
}

function Intro({
  isSignedIn,
  name,
  pending,
  complete,
  completedChallengeCount,
  slug
}: Props): JSX.Element {
  const { t } = useTranslation();

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
            ? `${t('learn.welcome-1', { name: name } as const)}`
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
        {completedChallengeCount && completedChallengeCount < 15 ? (
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
}

Intro.displayName = 'Intro';

export default Intro;
