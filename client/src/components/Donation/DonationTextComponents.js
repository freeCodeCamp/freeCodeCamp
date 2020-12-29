import React from 'react';
import { useTranslation } from 'react-i18next';

export const DonationSupportText = () => {
  const { t } = useTranslation();
  return (
    <>
      <h4>
        <b>{t('donate.need-help')}</b>
      </h4>
      <p>{t('donate.forward-receipt')}</p>
    </>
  );
};

export const DonationText = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('donate.efficiency')}</p>
      <p>{t('donate.why-donate-1')}</p>
      <p>{t('donate.why-donate-2')}</p>
    </>
  );
};

export const DonationOptionsText = () => (
  <>
    <h4>
      <b>
        Want to make a bigger one-time donation, mail us a check, or give in
        other ways?
      </b>
    </h4>
    <p>
      Here are many{' '}
      <a
        href={
          'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'
        }
      >
        other ways you can support our non-profit's mission
      </a>
      .
    </p>
  </>
);

export const DonationOptionsAlertText = () => (
  <p>
    Want to make a bigger one-time donation, mail us a check, or give in other
    ways? Here are many{' '}
    <a
      href={'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'}
    >
      other ways you can support our non-profit's mission
    </a>
    .
  </p>
);
