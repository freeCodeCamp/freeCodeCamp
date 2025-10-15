import React from 'react';
import { useTranslation } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';

interface RdbOnaLogoutAlertProps {
  course: string;
}

function RdbOnaLogoutAlert({ course }: RdbOnaLogoutAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Callout variant='danger'>
      {t('learn.ona.logout-warning', { course })}
    </Callout>
  );
}

RdbOnaLogoutAlert.displayName = 'RdbOnaLogoutAlert';

export default RdbOnaLogoutAlert;
