import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@freecodecamp/ui';

interface RdbOnaLogoutAlertProps {
  course: string;
}

function RdbOnaLogoutAlert({ course }: RdbOnaLogoutAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Alert variant='danger'>{t('learn.ona.logout-warning', { course })}</Alert>
  );
}

RdbOnaLogoutAlert.displayName = 'RdbOnaLogoutAlert';

export default RdbOnaLogoutAlert;
