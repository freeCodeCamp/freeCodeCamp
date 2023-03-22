import React from 'react';
import { ShareTemplate } from './share-template';
import { useShare } from './use-share';

interface ShareProps {
  superBlock: string;
  block: string;
}

export const Share = ({ superBlock, block }: ShareProps): JSX.Element => {
  const { handleRedirectToTwitter } = useShare({
    superBlock,
    block
  });
  return <ShareTemplate handleRedirectToTwitter={handleRedirectToTwitter} />;
};
