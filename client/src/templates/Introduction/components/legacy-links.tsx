import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/react-bootstrap';
import { SuperBlocks } from '../../../../../config/certification-settings';
import { isNewRespCert, isRelationalDbCert } from '../../../utils/is-a-cert';
import { Link } from '../../../components/helpers';

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  const { t } = useTranslation();

  if (isNewRespCert(superBlock))
    return (
      <>
        <Alert bsStyle='info'>
          <p>
            {t('intro:misc-text.viewing-upcoming-change')}{' '}
            <Link sameTab={false} to={`/learn/responsive-web-design`}>
              {t('intro:misc-text.go-back-to-learn')}
            </Link>
          </p>
        </Alert>
      </>
    );
  else if (isRelationalDbCert(superBlock))
    return (
      <>
        <Alert bsStyle='info'>
          <p>
            {t('intro:misc-text.viewing-upcoming-change')}{' '}
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
