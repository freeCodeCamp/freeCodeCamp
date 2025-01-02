import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  faXTwitter,
  faBluesky,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShareRedirectProps } from './types';

export const ShareTemplate: React.ComponentType<ShareRedirectProps> = ({
  xRedirectURL,
  blueSkyRedirectURL,
  threadsRedirectURL
}) => {
  const { t } = useTranslation();
  return (
    <>
      <a
        data-testid='ShareTemplateWrapperTestID'
        className='btn fade-in'
        href={xRedirectURL}
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon
          icon={faXTwitter}
          size='1x'
          aria-label='twitterIcon'
          aria-hidden='true'
        />
        {t('buttons.share-on-x')}
        <span className='sr-only'>{t('aria.opens-new-window')}</span>
      </a>
      <a
        data-testid='ShareTemplateWrapperTestID'
        className='btn fade-in'
        href={blueSkyRedirectURL}
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon
          icon={faBluesky}
          size='1x'
          aria-label='blueSkyIcon'
          aria-hidden='true'
        />
        {t('buttons.share-on-bluesky')}
        <span className='sr-only'>{t('aria.opens-new-window')}</span>
      </a>
      <a
        data-testid='ShareTemplateWrapperTestID'
        className='btn fade-in'
        href={threadsRedirectURL}
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size='1x'
          aria-label='instagramIcon'
          aria-hidden='true'
        />
        {t('buttons.share-on-threads')}
        <span className='sr-only'>{t('aria.opens-new-window')}</span>
      </a>
    </>
  );
};
