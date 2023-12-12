import React from 'react';
import { useTranslation } from 'react-i18next';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShareRedirectProps } from './types';

export const ShareTemplate: React.ComponentType<ShareRedirectProps> = ({
  redirectURL
}) => {
  const { t } = useTranslation();
  return (
    <a
      data-testid='ShareTemplateWrapperTestID'
      className='btn fade-in'
      href={redirectURL}
      target='_blank'
      rel='noreferrer'
    >
      <FontAwesomeIcon
        icon={faXTwitter}
        size='1x'
        aria-label='twitterIcon'
        aria-hidden='true'
      />
      {t('buttons.tweet')}
      <span className='sr-only'>{t('aria.opens-new-window')}</span>
    </a>
  );
};
