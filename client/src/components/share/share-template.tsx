import React from 'react';
import { useTranslation } from 'react-i18next';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ShareRedirectProps } from './types';

export const ShareTemplate = ({
  handleRedirectToTwitter
}: Pick<ShareRedirectProps, 'handleRedirectToTwitter'>): JSX.Element => {
  const { t } = useTranslation();
  return (
    <button
      title='Share on Twitter'
      data-testid='ShareTemplateWrapperTestID'
      className='btn fade-in'
      onClick={handleRedirectToTwitter}
    >
      <span className='sr-only'>{t('share-on-twitter')}</span>
      <FontAwesomeIcon
        icon={faTwitter}
        size='1x'
        aria-label='twitterIcon'
        aria-hidden='true'
      />
    </button>
  );
};
