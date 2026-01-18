import { useTranslation } from 'react-i18next';
import { ShareProps } from './types';

export const space = '%20';
export const hastag = '%23';
export const nextLine = '%0A';
const freecodecampLearnDomainURL = 'www.freecodecamp.org/learn';

export const twitterData = {
  action: 'intent/post',
  domain: 'x.com',
  developerDomainURL: 'https://developer.x.com'
};

export const blueSkyData = {
  action: 'intent/compose',
  domain: 'bsky.app',
  developerDomainURL: 'https://docs.bsky.app/'
};

export const threadsData = {
  action: 'intent/post',
  domain: 'threads.net',
  developerDomainURL: 'https://developers.facebook.com'
};

export interface ShareUrls {
  xUrl: string;
  blueSkyUrl: string;
  threadsURL: string;
}

interface ShareUrlInput {
  superBlock: string;
  block: string;
  blockTitle: string;
}

export const buildShareUrls = ({
  superBlock,
  block,
  blockTitle
}: ShareUrlInput): ShareUrls => {
  const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomainURL}/${superBlock}/${hastag}${block}`;

  const tweetMessage = `I${space}have${space}completed${space}${blockTitle}${space}${hastag}freecodecamp`;
  const xRedirectURL = `https://${twitterData.domain}/${twitterData.action}?original_referer=${twitterData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;
  const blueSkyRedirectURL = `https://${blueSkyData.domain}/${blueSkyData.action}?original_referer=${blueSkyData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;
  const threadRedirectURL = `https://${threadsData.domain}/${threadsData.action}?original_referer=${threadsData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  return {
    xUrl: xRedirectURL,
    blueSkyUrl: blueSkyRedirectURL,
    threadsURL: threadRedirectURL
  };
};

export const useShare = ({ superBlock, block }: ShareProps): ShareUrls => {
  const { t } = useTranslation();
  const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);

  return buildShareUrls({ superBlock, block, blockTitle });
};
