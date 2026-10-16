import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import PrismFormatted from './prism-formatted';
import { getChallengeContentLangProps } from '../../../utils/challenge-content-lang';

import './challenge-explanation.css';

interface ChallengeExplanationProps {
  explanation: string;
  superBlock: SuperBlocks;
}

function ChallengeExplanation({
  explanation,
  superBlock
}: ChallengeExplanationProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <details>
        <summary className='challenge-summary'>
          {t('learn.explanation')}
        </summary>
        <Spacer size='m' />
        <PrismFormatted
          className={'line-numbers'}
          text={explanation}
          {...getChallengeContentLangProps(superBlock)}
        />
      </details>
      <Spacer size='m' />
    </>
  );
}

ChallengeExplanation.displayName = 'ChallengeExplanation';

export default ChallengeExplanation;
