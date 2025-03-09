import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';

interface RdbGitpodLogoutAlertProps {
  course: string;
}

function RdbGitpodLogoutAlert({
  course
}: RdbGitpodLogoutAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Alert variant='danger'>
      {t('learn.gitpod.logout-warning', { course })}
    </Alert>
  );
}

RdbGitpodLogoutAlert.displayName = 'RdbGitpodLogoutAlert';

export default RdbGitpodLogoutAlert;
