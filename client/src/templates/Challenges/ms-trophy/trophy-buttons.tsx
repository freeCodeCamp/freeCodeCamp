import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';

interface TrophyButtonsProps {
  disabled: boolean;
  onAskForHelp: () => void;
  onVerifyTrophy: () => void;
}

function TrophyButtons({
  disabled,
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
      <Button
        block={true}
        variant='primary'
        data-playwright-test-label='ask-for-help-button'
        onClick={onAskForHelp}
      >
        {t('buttons.ask-for-help')}
      </Button>
    </>
  );
}

TrophyButtons.displayName = 'TrophyButtons';

export default TrophyButtons;
