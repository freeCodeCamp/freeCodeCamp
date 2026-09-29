import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import ChallengeHelp from '../../../components/challenge-help';

interface TrophyButtonsProps {
  disabled: boolean;
  superBlock: SuperBlocks;
  onAskForHelp: () => void;
  onVerifyTrophy: () => void;
}

function TrophyButtons({
  disabled,
  superBlock,
  onAskForHelp,
  onVerifyTrophy
}: TrophyButtonsProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Button
        block={true}
        variant='primary'
        data-playwright-test-label='verify-trophy-button'
        disabled={disabled}
        onClick={onVerifyTrophy}
      >
        {t('buttons.verify-trophy')}
      </Button>
      <Spacer size='xxs' />
      <ChallengeHelp
        superBlock={superBlock}
        onAskForHelp={onAskForHelp}
        dataPlaywrightTestLabel='ask-for-help-button'
      />
    </>
  );
}

TrophyButtons.displayName = 'TrophyButtons';

export default TrophyButtons;
