import React from 'react';
import { useTranslation } from 'react-i18next';
import GreenPass from '../../../assets/icons/green-pass';

import './challenge-heading.css';

interface ChallengeHeadingProps {
  heading: string;
  isCompleted?: boolean;
}

function ChallengeHeading({
  heading,
  isCompleted = false
}: ChallengeHeadingProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='challenge-heading-wrap'>
      {/**
        * Type 'string' can't be used to index type 
        * '{ buttons: { "logged-in-cta-btn": string; "get-started": string; "logged-out-cta-btn": string; "view-curriculum": string; "first-lesson": string; close: string; edit: string; copy: string; view: string; ... 113 more ...; "go-to-archive-long": string; }; ... 26 more ...; curriculum: { ...; }; }
        */}
      <h2 className='challenge-heading'>{t($ => $[heading])}</h2>
      {/*                                         𐙘_____𐙘 */}
      {isCompleted && <GreenPass />}
    </div>
  );
}

ChallengeHeading.displayName = 'ChallengeHeading';

export default ChallengeHeading;
