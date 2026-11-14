import { useTranslation } from 'react-i18next';
/* oxlint-disable filenames-simple/naming-convention */
import PageHead from '../../components/page-head';
import React from 'react';
import ShowSettings from '../../client-only-routes/show-settings';

const Settings = () => <ShowSettings />;

export default Settings;

export function Head() {
  const { t } = useTranslation();
  return <PageHead title={`${t('buttons.settings')} | freeCodeCamp.org`} />;
}
