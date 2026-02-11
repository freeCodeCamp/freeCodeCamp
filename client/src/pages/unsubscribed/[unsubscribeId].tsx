/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import { useTranslation } from 'react-i18next';
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
    <title>{t('metaTags:youre-unsubscribed')} | freeCodeCamp.org</title>
  );
}
