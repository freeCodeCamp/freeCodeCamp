import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/react-bootstrap';
import { useFeature } from '@growthbook/growthbook-react';
import Spacer from '../../components/helpers/spacer';

export function CodeAllyDown(): JSX.Element | null {
  const codeAllyDownFeature = useFeature('codeally_down');
  const { t } = useTranslation();

  return codeAllyDownFeature.on ? (
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
  ) : null;
}
