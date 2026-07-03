import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

interface TrophyButtonsProps {
  disabled: boolean;
  onVerifyTrophy: () => void;
}

function TrophyButtons({
  disabled,
  onVerifyTrophy
}: TrophyButtonsProps): JSX.Element {
  const { t } = useTranslation();

  return (
      <Button
        block={true}
        variant='primary'
        data-playwright-test-label='verify-trophy-button'
        disabled={disabled}
        onClick={onVerifyTrophy}
      >
        {t('buttons.verify-trophy')}
      </Button>
  );
}

TrophyButtons.displayName = 'TrophyButtons';

export default TrophyButtons;
