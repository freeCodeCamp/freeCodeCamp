/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import { useTranslation } from 'react-i18next';
import ShowSettings from '../../client-only-routes/show-settings';

const Settings = () => <ShowSettings />;

export default Settings;

export function Head() {
  const { t } = useTranslation();
  return <title>{t('buttons.settings')} | freeCodeCamp.org</title>;
}
