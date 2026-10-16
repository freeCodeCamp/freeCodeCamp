import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Spacer } from '@freecodecamp/ui';

interface GenericChallengeButtonsProps {
  hasQuestions: boolean;
  onHelp: () => void;
  onSubmit: () => void;
}

function GenericChallengeButtons({
  hasQuestions,
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
      <Button block={true} variant='primary' onClick={onHelp}>
        {t('buttons.ask-for-help')}
      </Button>
    </>
  );
}

GenericChallengeButtons.displayName = 'GenericChallengeButtons';

export default GenericChallengeButtons;
