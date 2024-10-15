import React from 'react';
import { useTranslation } from 'react-i18next';
import Spacer from '../../../components/helpers/spacer';
import PrismFormatted from './prism-formatted';

interface ChallengeExplanationProps {
  explanation: string;
}

function ChallengeExplanation({
  explanation
}: ChallengeExplanationProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <details className='explanation'>
        <summary>{t('learn.explanation')}</summary>
        <Spacer size='medium' />
        <PrismFormatted className={'line-numbers'} text={explanation} />
      </details>
      <Spacer size='medium' />
    </>
  );
}

ChallengeExplanation.displayName = 'ChallengeExplanation';

export default ChallengeExplanation;
