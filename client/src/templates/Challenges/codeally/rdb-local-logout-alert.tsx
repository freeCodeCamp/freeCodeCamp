import React from 'react';
import { useTranslation } from 'react-i18next';
import { Callout } from '@freecodecamp/ui';

interface RdbLocalLogoutAlertProps {
  title: string;
}

function RdbLocalLogoutAlert({ title }: RdbLocalLogoutAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Callout variant='caution' label={t('misc.caution')}>
      {t('learn.local.logout-warning', { course: title })}
    </Callout>
  );
}

RdbLocalLogoutAlert.displayName = 'RdbLocalLogoutAlert';

export default RdbLocalLogoutAlert;
