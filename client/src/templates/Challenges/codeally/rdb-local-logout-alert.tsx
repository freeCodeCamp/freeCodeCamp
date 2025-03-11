import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';

interface RdbLocalLogoutAlertProps {
  course: string;
}

function RdbLocalLogoutAlert({
  course
}: RdbLocalLogoutAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Alert variant='danger'>
      {t('learn.local.logout-warning', { course })}
    </Alert>
  );
}

RdbLocalLogoutAlert.displayName = 'RdbLocalLogoutAlert';

export default RdbLocalLogoutAlert;
