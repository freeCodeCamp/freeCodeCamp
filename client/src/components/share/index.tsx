import React from 'react';
import { ShareTemplate } from './share-template';
import { ShareProps } from './types';
import { useShare } from './use-share';

export const Share = ({ superBlock, block }: ShareProps): JSX.Element => {
  const { handleRedirectToTwitter } = useShare({
    superBlock,
    block
  });
  return <ShareTemplate handleRedirectToTwitter={handleRedirectToTwitter} />;
};
