import React from 'react';
import { ShareTemplate } from './shareTemplate';
import useShare from './useShare';

export const Share = ({
  superBlock,
  block
}: {
  superBlock: string | null;
  block: string | null;
}) => {
  const { copyToClipboard, isCopied } = useShare({ superBlock, block });

  return <ShareTemplate handleClick={copyToClipboard} isCopied={isCopied} />;
};
