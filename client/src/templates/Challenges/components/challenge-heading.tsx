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
      {/* TODO: convert to selector #61969 */}
      <h2 className='challenge-heading'>{t(heading as never)}</h2>
      {isCompleted && <GreenPass />}
    </div>
  );
}

ChallengeHeading.displayName = 'ChallengeHeading';

export default ChallengeHeading;
