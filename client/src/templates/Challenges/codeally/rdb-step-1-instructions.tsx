import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import ChallengeHeading from '../components/challenge-heading';
import PrismFormatted from '../components/prism-formatted';

interface RdbStep1InstructionsProps {
  instructions: string;
  isCompleted: boolean;
}

function RdbStep1Instructions({
  instructions,
  isCompleted
}: RdbStep1InstructionsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <ChallengeHeading heading={t('learn.step-1')} isCompleted={isCompleted} />
      <Spacer size='m' />
      <div className='ca-description'>{t('learn.runs-in-vm')}</div>
      <Spacer size='m' />
      <PrismFormatted text={instructions} />
    </>
  );
}

RdbStep1Instructions.displayName = 'RdbStep1Instructions';

export default RdbStep1Instructions;
