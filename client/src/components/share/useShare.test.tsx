import {
  action,
  nextLine,
  space,
  twitterDevelpoerDomainURL,
  twitterDomain,
  useShare
} from './useShare';

test('useShare testing', () => {
  const superBlock = 'testSuperBlock';
  const block = 'testBlock';
  const completedPercent = 100;

  const { redirectURL } = useShare({
    superBlock: superBlock,
    block: block,
    completedPercent: completedPercent
  });

  const freecodecampLearnDomain = 'www.freecodecamp.org/learn';
  const tweetMessage = `I${space}have${space}completed${space}${completedPercent}٪${space}of${space}${block}${space}%23freecodecamp`;
  const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomain}/${superBlock}/#${block}`;
  expect(redirectURL).toBe(
    `https://${twitterDomain}/${action}?original_referer=${twitterDevelpoerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
  );
});
