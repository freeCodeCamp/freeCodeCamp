import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Alert } from '@freecodecamp/react-bootstrap';
import { SuperBlocks } from '../../../../../config/certification-settings';
import { isOldRespCert, isRelationalDbCert } from '../../../utils/is-a-cert';
import { Link } from '../../../components/helpers';
import { CODEALLY_DOWN } from '../../../../../config/misc';
import Spacer from '../../../components/helpers/spacer';

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
        {CODEALLY_DOWN && (
          <Alert bsStyle='danger'>
            <p>
              <Trans i18nKey='intro:misc-text.course-maintenance'>
                <a
                  href='https://www.freecodecamp.org/news/how-to-run-freecodecamps-relational-databases-curriculum-using-docker-vscode-and-coderoad'
                  rel='noreferrer'
                  target='_blank'
                >
                  placeholder
                </a>
              </Trans>
            </p>
            <Spacer size='small' />
            <p>{t('intro:misc-text.progress-wont-save')}</p>
          </Alert>
        )}
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
