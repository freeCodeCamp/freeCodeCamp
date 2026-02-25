import React from 'react';
import { ShareTemplate } from './share-template';
import { ShareProps } from './types';
import { useShare } from './use-share';

export const Share = ({
  superBlock,
  block,
  minified
}: ShareProps): JSX.Element => {
  const redirectURLs = useShare({
    superBlock,
    block,
    minified
  });
  return (
    <ShareTemplate
      xRedirectURL={redirectURLs.xUrl}
      blueSkyRedirectURL={redirectURLs.blueSkyUrl}
      threadsRedirectURL={redirectURLs.threadsURL}
      minified={minified}
    />
  );
};
