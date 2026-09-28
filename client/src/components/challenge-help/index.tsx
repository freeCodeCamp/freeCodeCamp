import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@freecodecamp/ui';
import {
  archivedSuperBlocks,
  type SuperBlocks
} from '@freecodecamp/shared/config/curriculum';

import ArchivedWarning from '../archived-warning';

interface ChallengeHelpProps {
  superBlock: SuperBlocks;
  onAskForHelp: () => void;
  dataPlaywrightTestLabel?: string;
}

const ChallengeHelp = ({
  superBlock,
  onAskForHelp,
  dataPlaywrightTestLabel
}: ChallengeHelpProps): JSX.Element => {
  const { t } = useTranslation();

  if (archivedSuperBlocks.includes(superBlock)) {
    return <ArchivedWarning />;
  }

  return (
    <Button
      block={true}
      variant='primary'
      data-playwright-test-label={dataPlaywrightTestLabel}
      onClick={onAskForHelp}
    >
      {t('buttons.ask-for-help')}
    </Button>
  );
};

export default ChallengeHelp;
