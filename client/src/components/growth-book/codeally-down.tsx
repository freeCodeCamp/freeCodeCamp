import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Alert, Spacer } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';

const Down = () => {
  const { t } = useTranslation();
  return (
    <Alert variant='danger'>
      <p>
        <Trans i18nKey={$ => $['misc-text']['course-maintenance']} ns='intro'>
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
      <p>{t($ => $['misc-text']['progress-wont-save'], { ns: 'intro' })}</p>
    </Alert>
  );
};

const Disabled = () => {
  const { t } = useTranslation();
  return (
    <Alert variant='danger'>
      <p>
        <Trans i18nKey={$ => $['misc-text']['course-disabled']} ns='intro'>
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
      <p>{t($ => $['misc-text']['progress-wont-save'], { ns: 'intro' })}</p>
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
