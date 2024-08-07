import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import {
  isOldRespCert,
  isRelationalDbCert,
  isExamCert
} from '../../../utils/is-a-cert';
import { Link } from '../../../components/helpers';
import { CodeAllyDown } from '../../../components/growth-book/codeally-down';

import envData from '../../../../config/env.json';
import { GitpodNote } from '../../../components/growth-book/gitpod-note';

const { clientLocale } = envData;

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  const { t } = useTranslation();

  if (isOldRespCert(superBlock)) {
    return (
      <>
        <Alert variant='info'>
          <p>
            {t('intro:misc-text.legacy-desc')}{' '}
            <Link sameTab={false} to={`/learn/2022/responsive-web-design`}>
              {t('intro:misc-text.legacy-go-back')}
            </Link>
          </p>
        </Alert>
      </>
    );
  } else if (isRelationalDbCert(superBlock)) {
    return (
      <>
        <CodeAllyDown />
        {clientLocale != 'english' && (
          <Alert variant='info'>
            <p>{t('intro:misc-text.english-only')}</p>
          </Alert>
        )}
      </>
    );
  } else if (isExamCert(superBlock) && clientLocale != 'english') {
    return (
      <Alert variant='info'>
        <p>{t('intro:misc-text.exam-english-only')}</p>
      </Alert>
    );
  } else {
    return (
      <>
        <GitpodNote superBlock={superBlock} />
      </>
    );
  }
}

export default LegacyLinks;
