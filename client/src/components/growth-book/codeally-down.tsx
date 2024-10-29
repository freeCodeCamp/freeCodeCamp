import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Alert, Spacer } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';

const Down = () => {
  const { t } = useTranslation();
  return (
    <Alert variant='danger'>
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
      <Spacer size='xs' />
      <p>{t('intro:misc-text.progress-wont-save')}</p>
    </Alert>
  );
};

const Disabled = () => {
  const { t } = useTranslation();
  return (
    <Alert variant='danger'>
      <p>
        <Trans i18nKey='intro:misc-text.course-disabled'>
          <a
            href='https://www.freecodecamp.org/news/how-to-run-freecodecamps-relational-databases-curriculum-using-docker-vscode-and-coderoad'
            rel='noreferrer'
            target='_blank'
          >
            placeholder
          </a>
        </Trans>
      </p>
      <Spacer size='xs' />
      <p>{t('intro:misc-text.progress-wont-save')}</p>
    </Alert>
  );
};

export function CodeAllyDown(): JSX.Element | null {
  const codeAllyDownFeature = useFeature('codeally_down');
  const codeAllyDisabledFeature = useFeature('codeally_disabled');

  return codeAllyDisabledFeature.on ? (
    <Disabled />
  ) : codeAllyDownFeature.on ? (
    <Down />
  ) : null;
}
