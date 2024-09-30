import { useTranslation } from 'react-i18next';
import { ShareProps } from './types';

export const space = '%20';
export const hastag = '%23';
export const nextLine = '%0A';
export const action = 'intent/tweet';
export const twitterDomain = 'twitter.com';
const freecodecampLearnDomainURL = 'www.freecodecamp.org/learn';
export const twitterDevelpoerDomainURL = 'https://developer.twitter.com';

export const useShare = ({ superBlock, block }: ShareProps): string => {
  const { t } = useTranslation();
  const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomainURL}/${superBlock}/${hastag}${block}`;

  const i18nSupportedBlock = t(`intro:${superBlock}.blocks.${block}.title`);

  const tweetMessage = `I${space}have${space}completed${space}${i18nSupportedBlock}${space}${hastag}freecodecamp`;
  const redirectURL = `https://${twitterDomain}/${action}?original_referer=${twitterDevelpoerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`;

  return redirectURL;
};
