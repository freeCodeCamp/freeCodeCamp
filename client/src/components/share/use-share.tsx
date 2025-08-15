import { useTranslation } from 'react-i18next';
import { ShareProps } from './types';

export const space = '%20';
export const hastag = '%23';
export const nextLine = '%0A';
const freecodecampLearnDomainURL = 'www.freecodecamp.org/learn';

export const twitterData = {
  action: 'intent/tweet',
  domain: 'twitter.com',
  developerDomainURL: 'https://developer.twitter.com'
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

interface ShareUrls {
  xUrl: string;
  blueSkyUrl: string;
  threadsURL: string;
}

export const useShare = ({ superBlock, block }: ShareProps): ShareUrls => {
  const { t } = useTranslation();
  const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomainURL}/${superBlock}/${hastag}${block}`;

  /**
   * Type 'string' can't be used to index type 
   * '{ "responsive-web-design": { title: string; intro: string[]; note: string; blocks: { "basic-html-and-html5": { title: string; intro: string[]; }; "basic-css": { title: string; intro: string[]; }; "applied-visual-design": { ...; }; "applied-accessibility": { ...; }; "responsive-web-design-principles": { ...; }; "css-...'
   */
  const i18nSupportedBlock = t($ => $[superBlock].blocks[block].title, { ns: "intro" });
  //                                  𐙘________𐙘

  const tweetMessage = `I${space}have${space}completed${space}${i18nSupportedBlock}${space}${hastag}freecodecamp`;
  const xRedirectURL = `https://${twitterData.domain}/${twitterData.action}?original_referer=${twitterData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  const blueSkyRedirectURL = `https://${blueSkyData.domain}/${blueSkyData.action}?original_referer=${blueSkyData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  const threadRedirectURL = `https://${threadsData.domain}/${threadsData.action}?original_referer=${threadsData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  return {
    xUrl: xRedirectURL,
    blueSkyUrl: blueSkyRedirectURL,
    threadsURL: threadRedirectURL
  };
};
