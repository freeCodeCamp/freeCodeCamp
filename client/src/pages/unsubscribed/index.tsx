import { useTranslation } from 'react-i18next';
import PageHead from '../../components/page-head';
import React from 'react';
import ShowUnsubscribed from '../../client-only-routes/show-unsubscribed';

const Unsubscribed = () => <ShowUnsubscribed />;

export default Unsubscribed;

export function Head() {
  const { t } = useTranslation();
  return (
    <PageHead
      title={`${t('metaTags:youre-unsubscribed')} | freeCodeCamp.org`}
    />
  );
}
