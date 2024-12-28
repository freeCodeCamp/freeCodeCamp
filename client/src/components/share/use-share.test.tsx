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
  const i18nSupportedBlock = t(`intro:${superBlock}.blocks.${block}.title`);
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
