import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ShareRedirectProps } from './types';

export const ShareTemplate = ({
  handleRedirectToTwitter
}: Pick<ShareRedirectProps, 'handleRedirectToTwitter'>): JSX.Element => {
  return (
    <button
      data-testid='ShareTemplateWrapperTestID'
      className='btn fade-in'
      onClick={handleRedirectToTwitter}
    >
      <FontAwesomeIcon title='twitterIcon' icon={faTwitter} size='1x' />
    </button>
  );
};
