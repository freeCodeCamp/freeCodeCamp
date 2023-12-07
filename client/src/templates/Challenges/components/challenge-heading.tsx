import React from 'react';
import { useTranslation } from 'react-i18next';
import GreenPass from '../../../assets/icons/green-pass';

import './challenge-heading.css';

interface ChallengeHeadingProps {
  heading: string;
  isI18nKey?: boolean;
  isCompleted?: boolean;
}

function ChallengeHeading({
  heading,
  isI18nKey = true,
  isCompleted = false
}: ChallengeHeadingProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='challenge-heading-wrap'>
      <h2 className='challenge-heading'>{isI18nKey ? t(heading) : heading}</h2>
      {isCompleted && <GreenPass />}
    </div>
  );
}

ChallengeHeading.displayName = 'ChallengeHeading';

export default ChallengeHeading;
