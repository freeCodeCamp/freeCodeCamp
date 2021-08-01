import React from 'react';
import { useTranslation } from 'react-i18next';

export const DummyComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('landing.big-heading-1')}</h1>
      <a href={t('links:nav.forum')}>Link to the forum</a>
    </>
  );
};
