import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ShareTemplateProps {
  handleRedirectToTwitter: () => void;
}

export const ShareTemplate: React.FC<ShareTemplateProps> = ({
  handleRedirectToTwitter
}) => {
  return (
    <button data-testid="ShareTemplateWrapperTestID" className='btn fade-in' onClick={handleRedirectToTwitter}>
      <FontAwesomeIcon title="twitterIcon" icon={faTwitter} size='1x' />
    </button>
  );
};
