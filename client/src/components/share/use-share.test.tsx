import { useTranslation } from 'react-i18next';
import {
  hastag,
  nextLine,
  space,
  useShare,
  twitterData,
  blueSkyData,
  threadsData
} from './use-share';

test('useShare testing', () => {
  const superBlock = 'testSuperBlock';
  const block = 'testBlock';
  const { t } = useTranslation();

  const redirectURL = useShare({
    superBlock: superBlock,
    block: block
  });

  const freecodecampLearnDomain = 'www.freecodecamp.org/learn';
  /**
   * Type '"testSuperBlock"' can't be used to index type 
   * '{ "responsive-web-design": { title: string; intro: string[]; note: string; blocks: { "basic-html-and-html5": { title: string; intro: string[]; }; "basic-css": { title: string; intro: string[]; }; "applied-visual-design": { ...; }; "applied-accessibility": { ...; }; "responsive-web-design-principles": { ...; }; "css-...'
   */
  const i18nSupportedBlock = t($ => $[superBlock].blocks[block].title, { ns: "intro" });
  //                                  𐙘________𐙘
  const tweetMessage = `I${space}have${space}completed${space}${i18nSupportedBlock}${space}%23freecodecamp`;
  const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomain}/${superBlock}/${hastag}${block}`;
  expect(redirectURL.xUrl).toBe(
    `https://${twitterData.domain}/${twitterData.action}?original_referer=${twitterData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
  );

  expect(redirectURL.blueSkyUrl).toBe(
    `https://${blueSkyData.domain}/${blueSkyData.action}?original_referer=${blueSkyData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
  );

  expect(redirectURL.threadsURL).toBe(
    `https://${threadsData.domain}/${threadsData.action}?original_referer=${threadsData.developerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
  );
});
