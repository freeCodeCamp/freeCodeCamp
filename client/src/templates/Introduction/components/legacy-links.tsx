import React from 'react';
import { Trans } from 'react-i18next';
import { SuperBlocks } from '../../../../../config/certification-settings';
import envData from '../../../../../config/env.json';
import { Link } from '../../../components/helpers';

const { showNewCurriculum } = envData;

interface LegacyLinksProps {
  superBlock: SuperBlocks;
}

function LegacyLinks({ superBlock }: LegacyLinksProps): JSX.Element {
  return (
    <>
      {superBlock === SuperBlocks.RespWebDesignNew && (
        <h2>
          <Trans i18nKey='intro:link-to-legacy-rwd'>
            Looking for the old Responsive Web Design curriculum? Go{' '}
            <Link className='inline' to={`/learn/${SuperBlocks.RespWebDesign}`}>
              here
            </Link>
            .
          </Trans>
        </h2>
      )}
      {superBlock === SuperBlocks.RespWebDesign && showNewCurriculum && (
        <h2>
          <Trans i18nKey='intro:link-to-rwd'>
            There is a newer version of this curriculum available{' '}
            <Link
              className='inline'
              to={`/learn/${SuperBlocks.RespWebDesignNew}`}
            >
              here
            </Link>
            .
          </Trans>
        </h2>
      )}
    </>
  );
}

export default LegacyLinks;
