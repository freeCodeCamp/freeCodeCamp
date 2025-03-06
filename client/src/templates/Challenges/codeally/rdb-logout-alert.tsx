import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';

interface RdbGitpodAlertProps {
  course: string;
}

function RdbLogoutAlert({ course }: RdbGitpodAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Alert variant='danger'>
      {t('learn.gitpod.logout-warning', { course })}
    </Alert>
  );
}

RdbLogoutAlert.displayName = 'RdbLogoutAlert';

export default RdbLogoutAlert;
