import React from 'react';
import { Trans } from 'react-i18next';
import { Alert, Spacer } from '@freecodecamp/ui';

interface RdbGitpodAlertProps {
  course: string;
}

function RdbGitpodAlert({ course }: RdbGitpodAlertProps): JSX.Element {
  return (
    <Alert variant='info'>
      <Trans values={{ course }} i18nKey='learn.gitpod.continue-project'>
        <a
          href='https://gitpod.io/workspaces'
          rel='noopener noreferrer'
          target='_blank'
        >
          placeholder
        </a>
      </Trans>
      <Spacer size='m' />
      <Trans i18nKey='learn.gitpod.learn-more'>
        <a
          href='https://forum.freecodecamp.org/t/using-gitpod-in-the-curriculum/668669'
          rel='noopener noreferrer'
          target='_blank'
        >
          placeholder
        </a>
      </Trans>
    </Alert>
  );
}

RdbGitpodAlert.displayName = 'RdbGitpodAlert';

export default RdbGitpodAlert;
