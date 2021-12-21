import React from 'react';
import { useTranslation } from 'react-i18next';
import { SuperBlocks } from '../../../../../config/certification-settings';
import { Link } from '../../../components/helpers';

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      {superBlock === SuperBlocks.RespWebDesignNew && (
        <h2>
          {t('intro:misc-text.viewing-upcoming-change')}
          <Link className='inline' to={`/learn/`}>
            {t('intro:misc-text.go-back-to-learn')}
          </Link>
        </h2>
      )}
    </>
  );
}

export default LegacyLinks;
