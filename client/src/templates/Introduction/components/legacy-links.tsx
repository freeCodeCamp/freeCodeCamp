import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/react-bootstrap';
import { SuperBlocks } from '../../../../../config/certification-settings';
import { isOldRespCert, isRelationalDbCert } from '../../../utils/is-a-cert';
import { Link } from '../../../components/helpers';
import { CodeAllyDown } from '../../../components/growth-book/codeally-down';

import envData from '../../../../../config/env.json';

const { clientLocale } = envData;

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  const { t } = useTranslation();

  if (isOldRespCert(superBlock))
    return (
      <>
        <Alert bsStyle='info'>
          <p>
            {t('intro:misc-text.legacy-desc')}{' '}
            <Link sameTab={false} to={`/learn/2022/responsive-web-design`}>
              {t('intro:misc-text.legacy-go-back')}
            </Link>
          </p>
        </Alert>
      </>
    );
  else if (isRelationalDbCert(superBlock))
    return (
      <>
        <CodeAllyDown />
        {clientLocale != 'english' && (
          <Alert bsStyle='info'>
            <p>{t('intro:misc-text.english-only')}</p>
          </Alert>
        )}
        <Alert bsStyle='info'>
          <p>
            <Link
              external={true}
              sameTab={false}
              to={`https://forum.freecodecamp.org/t/how-to-troubleshoot-the-web-version-of-the-relational-database-curriculum/500231`}
            >
              {t('intro:misc-text.read-database-cert-article')}
            </Link>
          </p>
        </Alert>
      </>
    );
  else return <></>;
}

export default LegacyLinks;
