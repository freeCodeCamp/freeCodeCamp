import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/react-bootstrap';
import { SuperBlocks } from '../../../../../config/certification-settings';
import IsNewRespCert from '../../../utils/is-new-responsive-web-design-cert';
import { Link } from '../../../components/helpers';

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      {IsNewRespCert(superBlock) && (
        <Alert bsStyle='info'>
          <p>
            {t('intro:misc-text.viewing-upcoming-change')}{' '}
            <Link sameTab={false} to={`/learn/responsive-web-design`}>
              {t('intro:misc-text.go-back-to-learn')}
            </Link>
          </p>
        </Alert>
      )}
    </>
  );
}

export default LegacyLinks;
