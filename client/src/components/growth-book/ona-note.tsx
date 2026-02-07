import React from 'react';
import { useTranslation } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';
import { useFeatureValue } from '@growthbook/growthbook-react';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { Link } from '../helpers';

type OnaNoteProps = {
  superBlock: SuperBlocks;
};

export function OnaNote({ superBlock }: OnaNoteProps): JSX.Element | null {
  const onaNoteFeature = useFeatureValue<{
    superblocks: string[];
  }>('gitpod-note', { superblocks: [] });
  const { t } = useTranslation();

  return onaNoteFeature.superblocks.includes(superBlock) ? (
    <Callout variant='note' label={t('misc.note')}>
      <p>
        <Link
          external={true}
          sameTab={false}
          to='https://forum.freecodecamp.org/t/relational-database-curriculum-in-ona/760889'
        >
          {t('intro:misc-text.read-database-cert-article')}
        </Link>
      </p>
    </Callout>
  ) : null;
}
