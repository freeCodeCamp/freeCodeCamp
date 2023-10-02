import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Caret from '../../assets/icons/caret';

const POBOX = (
  <>
    <code>Free Code Camp, Inc.</code>
    <br />
    <code>3905 Hedgcoxe Rd</code>
    <br />
    <code>PO Box 250352</code>
    <br />
    <code>Plano, TX 75025</code>
  </>
);

export const DonationText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('donate.efficiency')}</p>
      <p>{t('donate.why-donate-1')}</p>
      <p>{t('donate.why-donate-2')}</p>
    </>
  );
};

export const DonationOptionsAlertText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <p data-cy='donate.bigger-donation'>
      <Trans>donate.bigger-donation</Trans>{' '}
      <Trans i18nKey='donate.other-ways'>
        <a data-cy='donate-link' href={t('links:donate.other-ways-url')}>
          placeholder
        </a>
      </Trans>
    </p>
  );
};

const FaqItem = (
  title: string,
  text: JSX.Element,
  key: number
): JSX.Element => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className={`faq-item ${isExpanded ? 'open' : ''}`} key={key}>
      <button
        className='map-title'
        onClick={() => setExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <Caret />
        <h3>{title}</h3>
      </button>
      {isExpanded && (
        <>
          <div className='map-challenges-ul'>{text}</div>
        </>
      )}
    </div>
  );
};

export const DonationFaqText = (): JSX.Element => {
  const { t } = useTranslation();
  const faqItems = [
    { Q: t('donate.get-help'), A: <p>{t('donate.forward-receipt')}</p> },
    {
      Q: t('donate.how-transparent'),
      A: (
        <>
          <p>{t('donate.very-transparent')}</p>
          <p>
            <Trans i18nKey='donate.download-irs'>
              <a href={t('links:donate.download-irs-url')}>placeholder</a>
            </Trans>
          </p>
          <p>
            <Trans i18nKey='donate.download-990'>
              <a href={t('links:donate.download-990-url')}>placeholder</a>
            </Trans>
          </p>
        </>
      )
    },
    {
      Q: t('donate.how-efficient'),
      A: (
        <>
          <p>{t('donate.fcc-budget')}</p>
          <p>{t('donate.help-millions')}</p>
        </>
      )
    },
    {
      Q: t('donate.how-one-time'),
      A: (
        <>
          <p>
            <Trans i18nKey='donate.one-time'>
              <a href={t('links:donate.one-time-url')}>placeholder</a>
            </Trans>
          </p>
          <p>{t('donate.wire-transfer')}</p>
        </>
      )
    },
    {
      Q: t('donate.does-crypto'),
      A: (
        <>
          <p>{t('donate.yes-cryptocurrency')}</p>
        </>
      )
    },

    {
      Q: t('donate.can-check'),
      A: (
        <>
          <p>{t('donate.yes-check')}</p>
          <p>{POBOX}</p>
        </>
      )
    },
    {
      Q: t('donate.how-matching-gift'),
      A: (
        <>
          <p>{t('donate.employers-vary')}</p>
          <p>{t('donate.some-volunteer')}</p>
          <p>{t('donate.help-matching-gift')}</p>
        </>
      )
    },
    { Q: t('donate.how-endowment'), A: <p>{t('donate.endowment')}</p> },
    {
      Q: t('donate.how-legacy'),
      A: (
        <>
          <p>{t('donate.we-honored')}</p>
          <blockquote>
            <p>{t('donate.legacy-gift-message')}</p>
          </blockquote>
          <p>{t('donate.thank-wikimedia')}</p>
          <p>{t('donate.legacy-gift-questions')}</p>
        </>
      )
    },
    { Q: t('donate.how-stock'), A: <p>{t('donate.welcome-stock')}</p> },
    { Q: t('donate.how-update'), A: <p>{t('donate.forward-receipt')}</p> },
    {
      Q: t('donate.anything-else'),
      A: (
        <>
          <p>{t('donate.other-support')}</p>
        </>
      )
    }
  ];

  return (
    <>{faqItems.map((item, iterator) => FaqItem(item.Q, item.A, iterator))}</>
  );
};
