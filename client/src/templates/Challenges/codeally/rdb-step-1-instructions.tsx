import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';

import ChallengeHeading from '../components/challenge-heading';
import PrismFormatted from '../components/prism-formatted';
import RdbGitpodAlert from './rdb-gitpod-continue-alert';

interface RdbStep1InstructionsProps {
  course: string;
  instructions: string;
  isCompleted: boolean;
}

function RdbStep1Instructions({
  course,
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
      <Spacer size='m' />
      <RdbGitpodAlert course={course} />
    </>
  );
}

RdbStep1Instructions.displayName = 'RdbStep1Instructions';

export default RdbStep1Instructions;
