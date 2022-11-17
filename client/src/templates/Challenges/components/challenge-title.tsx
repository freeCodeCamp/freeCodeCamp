import i18next from 'i18next';
import React from 'react';
import GreenPass from '../../../assets/icons/green-pass';
import { Link } from '../../../components/helpers/index';

import './challenge-title.css';

interface ChallengeTitleProps {
  children: string;
  isCompleted: boolean;
  translationPending: boolean;
}

function ChallengeTitle({
  children,
  isCompleted,
  translationPending
}: ChallengeTitleProps): JSX.Element {
  return (
    <div className='challenge-title-wrap'>
      {translationPending && (
        <>
          <Link
            className='title-translation-cta'
            to={i18next.t('links:help-translate-link-url')}
          >
            {i18next.t('misc.translation-pending')}
          </Link>
        </>
      )}
      <div className='challenge-title'>
        <div className='title-text'>
          <h1>{children}</h1>
          {isCompleted && <GreenPass />}
        </div>
      </div>
    </div>
  );
}

ChallengeTitle.displayName = 'ChallengeTitle';

export default ChallengeTitle;
