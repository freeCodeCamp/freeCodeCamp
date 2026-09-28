import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import ChallengeHelp from '../../../components/challenge-help';

interface GenericChallengeButtonsProps {
  hasQuestions: boolean;
  superBlock: SuperBlocks;
  onHelp: () => void;
  onSubmit: () => void;
}

function GenericChallengeButtons({
  hasQuestions,
  superBlock,
  onHelp,
  onSubmit
}: GenericChallengeButtonsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Button block={true} variant='primary' onClick={onSubmit}>
        {hasQuestions ? t('buttons.check-answer') : t('buttons.submit')}
      </Button>
      <Spacer size='xxs' />
      <ChallengeHelp superBlock={superBlock} onAskForHelp={onHelp} />
    </>
  );
}

GenericChallengeButtons.displayName = 'GenericChallengeButtons';

export default GenericChallengeButtons;
