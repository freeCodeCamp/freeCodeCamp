import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const HonestyPolicy = (): JSX.Element => {
  const { t } = useTranslation();
  const email = 'team@freecodecamp.org';

  return (
    <>
      <p key={1}>{t('settings.honesty.p1')}</p>
      <p key={2}>{t('settings.honesty.p2')}</p>
      <p key={3}>{t('settings.honesty.p3')}</p>
      <p key={4}>{t('settings.honesty.p4')}</p>
      <p key={5}>{t('settings.honesty.p5')}</p>
      <p key={6}>{t('settings.honesty.p6')}</p>
      <p key={7}>
        <Trans i18nKey='settings.honesty.p7'>
          <a href={`mailto:${email}`}>{{ email }}</a>
          <h1>test</h1>
        </Trans>
      </p>
    </>
  );
};

export default HonestyPolicy;
