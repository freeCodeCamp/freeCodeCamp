import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFeature } from '@growthbook/growthbook-react';

import Caret from '../../assets/icons/caret';
import { Spacer } from '../helpers';
import GreenPass from '../../assets/icons/green-pass';

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

export const CtaText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h1 data-playwright-test-label='main-head' id='content-start'>
        {t('donate.help-more')}
      </h1>
      <Spacer size='medium' />
      <p data-playwright-test-label='donate-text-1'>{t('donate.efficiency')}</p>
      <p data-playwright-test-label='donate-text-2'>
        {t('donate.why-donate-1')}
      </p>
      <p data-playwright-test-label='donate-text-3'>
        {t('donate.why-donate-2')}
      </p>
    </>
  );
};

export const ThankYouMessage = ({
  askForDonation,
  thankContributon
}: {
  askForDonation: boolean;
  thankContributon?: boolean;
}): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h1 data-playwright-test-label='main-head'>{t('donate.thank-you')}</h1>
      {(askForDonation || thankContributon) && (
        <>
          <Spacer size='medium' />
          <p>{t('donate.crucial-contribution')}</p>
        </>
      )}
      {askForDonation && <OtherWaysToSupport />}
    </>
  );
};

const OtherWaysToSupport = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <Trans i18nKey='donate.if-support-further'>
          <a href={t('links:donate.one-time-external-url')}>placeholder</a>
          <a href={t('links:donate.mail-check-url')}>placeholder</a>
          <a href={t('links:donate.other-ways-url')}>placeholder</a>
        </Trans>
      </p>
    </>
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
        aria-controls={`donate-faq-content-${key}`}
      >
        <Caret />
        <h3>{title}</h3>
      </button>
      {isExpanded && (
        <div className='map-challenges-ul' id={`donate-faq-content-${key}`}>
          {text}
        </div>
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
    <>
      <h2 data-playwright-test-label='faq-head'>{t('donate.faq')}</h2>
      <Spacer size='small' />
      {faqItems.map((item, iterator) => FaqItem(item.Q, item.A, iterator))}
    </>
  );
};

export const SupportBenefitsText = ({
  isSupportersPage
}: {
  isSupportersPage?: boolean;
}): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h2>
        {isSupportersPage
          ? t('donate.exclusive-features')
          : t('donate.support-benefits-title')}
      </h2>
      <BenefitsList />
    </>
  );
};

const BenefitsList = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <ul>
      <li>{t('donate.support-benefits-1')}</li>
      <li>{t('donate.support-benefits-2')}</li>
      <li>{t('donate.support-benefits-3')}</li>
      <li>
        <Trans i18nKey='donate.support-benefits-4'>
          <a
            href='https://discord.gg/KVUmVXA'
            target='_blank'
            rel='noopener noreferrer'
          >
            placeholder
          </a>
          <code>placeholder</code>
        </Trans>
      </li>
      <li>{t('donate.support-benefits-5')}</li>
    </ul>
  );
};

export const CurrentInitiativesText = ({
  isSupportersPage
}: {
  isSupportersPage?: boolean;
}): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h2>
        {isSupportersPage
          ? t('donate.your-donation-helps-followings')
          : t('donate.current-initiatives-title')}
      </h2>
      <ul>
        <li>{t('donate.current-initiatives-1')}</li>
        <li>{t('donate.current-initiatives-2')}</li>
        <li>{t('donate.current-initiatives-3')}</li>
        <li>{t('donate.current-initiatives-4')}</li>
      </ul>
    </>
  );
};

export const CommunityAchievementsText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('donate.community-achivements-title')}</h2>
      <ul>
        <li>
          <Trans i18nKey='donate.community-achivements-1'>
            <b>placeholder</b>
          </Trans>
        </li>
        <li>
          <Trans i18nKey='donate.community-achivements-2'>
            <b>placeholder</b>
          </Trans>
        </li>
        <li>
          <Trans i18nKey='donate.community-achivements-3'>
            <b>placeholder</b>
          </Trans>
        </li>
        <li>
          <Trans i18nKey='donate.community-achivements-4'>
            <b>placeholder</b>
          </Trans>
        </li>
      </ul>
    </>
  );
};

export const GetSupporterBenefitsText = ({
  isDonating
}: {
  isDonating: boolean;
}): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <Spacer size='large' />
      <p>{t('donate.as-you-see')}</p>
      {!isDonating ? <p>{t('donate.get-benefits')}</p> : null}
    </>
  );
};

export const ModalBenefitList = () => {
  const { t } = useTranslation();
  const isA11yFeatureEnabled = useFeature('a11y-donation-modal').on;

  return (
    // Set the initial focus to this list as it appears first in the second modal.
    <ul {...(isA11yFeatureEnabled && { tabIndex: -1 })}>
      <li>
        <GreenPass aria-hidden={true} />
        {t('donate.help-us-more-certifications')}
      </li>
      <li>
        <GreenPass aria-hidden={true} />
        {t('donate.remove-donation-popups')}
      </li>
      <li>
        <GreenPass aria-hidden={true} />
        {t('donate.help-millions-learn')}
      </li>
    </ul>
  );
};
