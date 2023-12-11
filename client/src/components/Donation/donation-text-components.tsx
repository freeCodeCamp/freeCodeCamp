import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Caret from '../../assets/icons/caret';
import { Spacer } from '../helpers';

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
      <h1 data-playwright-test-label='main-head'>{t('donate.help-more')}</h1>
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

export const DonationOptionsAlertText = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h1 data-playwright-test-label='main-head'>{t('donate.thank-you')}</h1>
      <Spacer size='medium' />
      <p>
        Your contribution has been crucial in creating resources that empower
        millions to learn new skills and support their families.
      </p>
      <p data-cy='donate.bigger-donation'>
        <Trans>donate.bigger-donation</Trans>{' '}
        <Trans i18nKey='donate.other-ways'>
          <a data-cy='donate-link' href={t('links:donate.other-ways-url')}>
            placeholder
          </a>
        </Trans>
      </p>

      <p>
        If you want to make another monthly donation, please proceed with
        selecting your monthly donation amount.
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

export const SupportBenefitsText = (): JSX.Element => (
  <>
    <h2>Benefits from becoming a Supporter:</h2>
    <ul>
      <li>No more donation popups</li>
      <li>You'll get a Supporter badge</li>
      <li>Your profile image will get a golden halo around it</li>
      <li>You'll gain access to special Supporter Discord channels</li>
      <li>And more benefits to come in 2024</li>
    </ul>
  </>
);

export const CurrentInitiativeText = (): JSX.Element => (
  <>
    <h2>Current ongoing initiatives:</h2>
    <ul>
      <li>Creating new Javascript and Python curriculula</li>
      <li>Creating English and math curriculula</li>
      <li>Translating our curriculum and tutorials to 32 languages</li>
      <li>Creating a free accredited computer science degree</li>
    </ul>
  </>
);

export const CommunityAchievementsText = (): JSX.Element => (
  <>
    {' '}
    <h2>Our Community Achievements This Year:</h2>
    <ul>
      <li>
        Published <b>114</b> full-length courses on YouTube
      </li>
      <li>
        Published <b>1,045</b> text-based coding tutorials and <b>20</b> free
        books through freeCodeCamp Press
      </li>
      <li>
        Merged <b>2,753</b> code contributions into our open source repositories
        on GitHub
      </li>
      <li>
        Translated <b>2,106,203</b> words to make our curriculum and tutorials
        more accessible to speakers of many world languages
      </li>
    </ul>
  </>
);

export const GetSupporterBenefitsText = ({
  isDonating
}: {
  isDonating: boolean;
}): JSX.Element => (
  <>
    <Spacer size='large' />
    <p>
      As you can see, we're getting things done. So you can rest assured that
      we'll put your donations to good use.
    </p>
    {!isDonating ? (
      <p>
        Get the benefits and the knowledge that you’re helping our charity
        change education for the better. Become a Supporter today.
      </p>
    ) : null}
  </>
);
