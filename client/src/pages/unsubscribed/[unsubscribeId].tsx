import { useTranslation } from 'react-i18next';
/* oxlint-disable filenames-simple/naming-convention */
import PageHead from '../../components/page-head';
import React from 'react';
import ShowUnsubscribed from '../../client-only-routes/show-unsubscribed';

interface UnsubscribedWithIdProps {
  params: {
    unsubscribeId: string;
  };
}

const UnsubscribedWithId = ({
  params: { unsubscribeId }
}: UnsubscribedWithIdProps) => (
  <ShowUnsubscribed unsubscribeId={unsubscribeId} />
);

export default UnsubscribedWithId;

export function Head() {
  const { t } = useTranslation();
  return (
    <PageHead
      title={`${t('metaTags:youre-unsubscribed')} | freeCodeCamp.org`}
    />
  );
}
