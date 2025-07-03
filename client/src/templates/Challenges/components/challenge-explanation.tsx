import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import PrismFormatted from './prism-formatted';

import './challenge-explanation.css';

interface ChallengeExplanationProps {
  explanation: string;
}

function ChallengeExplanation({
  explanation
}: ChallengeExplanationProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <details>
        <summary className='challenge-summary'>
          {t('learn.explanation')}
        </summary>
        <Spacer size='m' />
        <PrismFormatted className={'line-numbers'} text={explanation} />
      </details>
      <Spacer size='m' />
    </>
  );
}

ChallengeExplanation.displayName = 'ChallengeExplanation';

export default ChallengeExplanation;
