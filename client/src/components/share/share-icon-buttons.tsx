import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faBluesky,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { ShareProps } from './types';
import { useShare } from './use-share';
import './share-icon-buttons.css';

interface ShareIconButtonsProps extends ShareProps {
  className?: string;
}

const ShareIconButtons = ({
  superBlock,
  block,
  className
}: ShareIconButtonsProps): JSX.Element => {
  const { t } = useTranslation();
  const { xUrl, blueSkyUrl, threadsURL } = useShare({ superBlock, block });
  const shareOnXLabel = t('buttons.share-on-x');
  const shareOnBlueskyLabel = t('buttons.share-on-bluesky');
  const shareOnThreadsLabel = t('buttons.share-on-threads');
  const opensNewWindowLabel = t('aria.opens-new-window');
  const containerClassName = className
    ? `share-icon-buttons ${className}`
    : 'share-icon-buttons';

  return (
    <div className={containerClassName}>
      <a
        className='share-icon-button'
        href={xUrl}
        rel='noreferrer'
        target='_blank'
        title={shareOnXLabel}
        aria-label={`${shareOnXLabel} ${opensNewWindowLabel}`}
      >
        <FontAwesomeIcon icon={faXTwitter} size='1x' aria-hidden='true' />
      </a>
      <a
        className='share-icon-button'
        href={blueSkyUrl}
        rel='noreferrer'
        target='_blank'
        title={shareOnBlueskyLabel}
        aria-label={`${shareOnBlueskyLabel} ${opensNewWindowLabel}`}
      >
        <FontAwesomeIcon icon={faBluesky} size='1x' aria-hidden='true' />
      </a>
      <a
        className='share-icon-button'
        href={threadsURL}
        rel='noreferrer'
        target='_blank'
        title={shareOnThreadsLabel}
        aria-label={`${shareOnThreadsLabel} ${opensNewWindowLabel}`}
      >
        <FontAwesomeIcon icon={faInstagram} size='1x' aria-hidden='true' />
      </a>
    </div>
  );
};

export default ShareIconButtons;
