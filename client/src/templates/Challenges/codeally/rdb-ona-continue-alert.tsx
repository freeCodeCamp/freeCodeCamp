import React from 'react';
import { Trans } from 'react-i18next';
import { Alert, Spacer } from '@freecodecamp/ui';

interface RdbOnaContinueAlertProps {
  course: string;
}

function RdbOnaContinueAlert({
  course
}: RdbOnaContinueAlertProps): JSX.Element {
  return (
    <Alert variant='info'>
      <Trans values={{ course }} i18nKey='learn.ona.continue-project'>
        <a
          href='https://app.gitpod.io'
          rel='noopener noreferrer'
          target='_blank'
        >
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
    </Alert>
  );
}

RdbOnaContinueAlert.displayName = 'RdbOnaContinueAlert';

export default RdbOnaContinueAlert;
