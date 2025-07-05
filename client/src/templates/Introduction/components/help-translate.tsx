import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { isAuditedSuperBlock } from '../../../../../shared/utils/is-audited';
import { Link } from '../../../components/helpers';

import envData from '../../../../config/env.json';

const { clientLocale } = envData;

interface HelpTranslateProps {
  superBlock: SuperBlocks;
}

function HelpTranslate({ superBlock }: HelpTranslateProps): JSX.Element | null {
  const { t } = useTranslation();

  if (isAuditedSuperBlock(clientLocale, superBlock)) {
    return null;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Spacer size='m' />
      <p style={{ marginBottom: 0 }}>{t('learn.help-translate')} </p>
      <Link
        external={true}
        sameTab={false}
        to={t('links:help-translate-link-url')}
      >
        {t('learn.help-translate-link')}
      </Link>
    </div>
  );
}

export default HelpTranslate;
