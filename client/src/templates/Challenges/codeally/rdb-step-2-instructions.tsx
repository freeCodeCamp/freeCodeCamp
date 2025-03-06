import React from 'react';

import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import ChallengeHeading from '../components/challenge-heading';
import PrismFormatted from '../components/prism-formatted';

interface RdbStep2InstructionsProps {
  notes: string;
  isCompleted: boolean;
}

function RdbStep2Instructions({
  isCompleted,
  notes
}: RdbStep2InstructionsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <hr />
      <Spacer size='m' />
      <ChallengeHeading heading={t('learn.step-2')} isCompleted={isCompleted} />
      <Spacer size='m' />
      <div className='ca-description'>{t('learn.submit-public-url')}</div>
      <Spacer size='m' />
      <PrismFormatted text={notes} />
      <Spacer size='m' />
    </>
  );
}

RdbStep2Instructions.displayName = 'RdbStep2Instructions';

export default RdbStep2Instructions;
