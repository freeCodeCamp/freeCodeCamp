import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Callout, Spacer } from '@freecodecamp/ui';

interface RdbOnaContinueAlertProps {
  course: string;
}

function RdbOnaContinueAlert({
  course
}: RdbOnaContinueAlertProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <Callout variant='note' label={t('misc.note')}>
      <Trans values={{ course }} i18nKey='learn.ona.continue-project'>
        <a href='https://app.ona.com' rel='noopener noreferrer' target='_blank'>
          placeholder
        </a>
      </Trans>
      <Spacer size='m' />
      <Trans i18nKey='learn.ona.learn-more'>
        <a
          href='https://forum.freecodecamp.org/t/relational-database-curriculum-in-ona/760889'
          rel='noopener noreferrer'
          target='_blank'
        >
          placeholder
        </a>
      </Trans>
    </Callout>
  );
}

RdbOnaContinueAlert.displayName = 'RdbOnaContinueAlert';

export default RdbOnaContinueAlert;
