import React from 'react';
import { useTranslation } from 'react-i18next';
import ShowUnsubscribed from '../../client-only-routes/show-unsubscribed';

const Unsubscribed = () => <ShowUnsubscribed />;

export default Unsubscribed;

export function Head() {
  const { t } = useTranslation();
  return (
    <title>{t('metaTags:youre-unsubscribed')} | freeCodeCamp.org</title>
  );
}
