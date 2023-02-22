import React from 'react';
import { createFlashMessage } from '../Flash/redux';
import { ShareTemplate } from './shareTemplate';
import useShare from './useShare';

interface ShareProps {
  superBlock: string | null;
  block: string | null;
  createFlashMessage: typeof createFlashMessage;
}

export const Share: React.FC<ShareProps> = ({
  superBlock,
  block,
  createFlashMessage
}) => {
  const copyToClipboard = useShare({
    superBlock,
    block,
    createFlashMessage
  });

  return <ShareTemplate handleClick={copyToClipboard} />;
};
