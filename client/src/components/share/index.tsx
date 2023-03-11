import React from 'react';
import { ShareTemplate } from './shareTemplate';
import { useShare } from './useShare';

interface ShareProps {
  superBlock: string;
  block: string;
  completedPercent: number;
}

export const Share: React.FC<ShareProps> = ({
  superBlock,
  block,
  completedPercent
}) => {
  const {handleRedirectToTwitter} = useShare({
    superBlock,
    block,
    completedPercent
  });
  return <ShareTemplate handleRedirectToTwitter={handleRedirectToTwitter} />;
};
