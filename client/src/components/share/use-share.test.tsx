import { useTranslation } from 'react-i18next';
import {
  action,
  hastag,
  nextLine,
  space,
  twitterDevelpoerDomainURL,
  twitterDomain,
  useShare
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
  expect(redirectURL).toBe(
    `https://${twitterDomain}/${action}?original_referer=${twitterDevelpoerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
  );
});
