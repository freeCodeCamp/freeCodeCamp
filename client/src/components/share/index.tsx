import React from 'react';
import { ShareTemplate } from './share-template';
import { ShareProps } from './types';
import { useShare } from './use-share';

export const Share = ({ superBlock, block }: ShareProps): JSX.Element => {
  const redirectURL = useShare({
    superBlock,
    block
  });
  return <ShareTemplate redirectURL={redirectURL} />;
};
