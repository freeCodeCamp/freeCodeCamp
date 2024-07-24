import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';
import { useFeatureValue } from '@growthbook/growthbook-react';
import { SuperBlocks } from '../../../../shared/config/curriculum';
import { Link } from '../helpers';

type GitpodNoteProps = {
  superBlock: SuperBlocks;
};

export function GitpodNote({
  superBlock
}: GitpodNoteProps): JSX.Element | null {
  const gitpodNoteFeature = useFeatureValue<{
    superblocks: string[];
  }>('gitpod-note', { superblocks: [] });
  const { t } = useTranslation();

  return gitpodNoteFeature.superblocks.includes(superBlock) ? (
    <Alert variant='info'>
      <p>
        <Link
          external={true}
          sameTab={false}
          to='https://forum.freecodecamp.org/t/using-gitpod-in-the-curriculum/668669'
        >
          {t('intro:misc-text.read-database-cert-article')}
        </Link>
      </p>
    </Alert>
  ) : null;
}
