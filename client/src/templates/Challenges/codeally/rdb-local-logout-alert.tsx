import React from 'react';
import { useTranslation } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';

interface RdbLocalLogoutAlertProps {
  course: string;
}

function RdbLocalLogoutAlert({
  course
}: RdbLocalLogoutAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Callout variant='danger'>
      {t('learn.local.logout-warning', { course })}
    </Callout>
  );
}

RdbLocalLogoutAlert.displayName = 'RdbLocalLogoutAlert';

export default RdbLocalLogoutAlert;
