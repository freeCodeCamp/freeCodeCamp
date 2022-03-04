import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/react-bootstrap';
import { SuperBlocks } from '../../../../../config/certification-settings';
import { IsNewRespCert, IsRelationalDbCert } from '../../../utils/is-a-cert';
import { Link } from '../../../components/helpers';

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  const { t } = useTranslation();

  if (IsNewRespCert(superBlock))
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
  else if (IsRelationalDbCert(superBlock))
    return (
      <>
        <Alert bsStyle='info'>
          <p>
            {t('intro:misc-text.viewing-upcoming-change')}{' '}
            <Link
              external={true}
              sameTab={false}
              to={`https://www.freecodecamp.org/news/how-to-complete-the-relational-databases-curriculum-on-freecodecamp-and-earn-your-free-certification`}
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
