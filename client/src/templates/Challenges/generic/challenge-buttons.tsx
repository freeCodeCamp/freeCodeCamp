import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';

interface GenericChallengeButtonsProps {
  hasQuestions: boolean;
  onSubmit: () => void;
}

function GenericChallengeButtons({
  hasQuestions,
  onSubmit
}: GenericChallengeButtonsProps): JSX.Element {
  const { t } = useTranslation();

  return (
      <Button block={true} variant='primary' onClick={onSubmit}>
        {hasQuestions ? t('buttons.check-answer') : t('buttons.submit')}
      </Button>
  );
}

GenericChallengeButtons.displayName = 'GenericChallengeButtons';

export default GenericChallengeButtons;
