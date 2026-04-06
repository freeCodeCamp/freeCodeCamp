import { useTranslation } from 'react-i18next';
import { ShareProps } from './types';

export const space = '%20';
export const hashtag = '%23';
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

export const facebookData = {
  action: 'sharer/sharer.php',
  domain: 'www.facebook.com'
};

export const linkedInData = {
  action: 'shareArticle',
  domain: 'www.linkedin.com'
};

interface ShareUrls {
  xUrl: string;
  blueSkyUrl: string;
  threadsURL: string;
  facebookUrl: string;
  linkedInUrl: string;
}

export const useShare = ({ superBlock, block }: ShareProps): ShareUrls => {
  const { t } = useTranslation();
  const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomainURL}/${superBlock}/${hashtag}${block}`;

  const i18nSupportedBlock = t(`intro:${superBlock}.blocks.${block}.title`);

  const tweetMessage = `I${space}have${space}completed${space}${i18nSupportedBlock}${space}${hashtag}freecodecamp`;
  const xRedirectURL = `https://${twitterData.domain}/${twitterData.action}?original_referer=${twitterData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  const blueSkyRedirectURL = `https://${blueSkyData.domain}/${blueSkyData.action}?original_referer=${blueSkyData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  const threadRedirectURL = `https://${threadsData.domain}/${threadsData.action}?original_referer=${threadsData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  const facebookRedirectURL = `https://${facebookData.domain}/${facebookData.action}?u=${redirectFreeCodeCampLearnURL}&hashtag=${hashtag}freecodecamp`;

  const linkedInRedirectURL = `https://${linkedInData.domain}/${linkedInData.action}?mini=true&url=${redirectFreeCodeCampLearnURL}&title=${tweetMessage}&summary=${tweetMessage}`;

  return {
    xUrl: xRedirectURL,
    blueSkyUrl: blueSkyRedirectURL,
    threadsURL: threadRedirectURL,
    facebookUrl: facebookRedirectURL,
    linkedInUrl: linkedInRedirectURL
  };
};
