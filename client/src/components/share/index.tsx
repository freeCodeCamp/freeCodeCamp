import React from 'react';
import { ShareTemplate } from './shareTemplate';
import { useShare } from './useShare';

interface ShareProps {
  superBlock: string;
  block: string;
}

export const Share: React.FC<ShareProps> = ({ superBlock, block }) => {
  const { handleRedirectToTwitter } = useShare({
    superBlock,
    block
  });
  return <ShareTemplate handleRedirectToTwitter={handleRedirectToTwitter} />;
};
