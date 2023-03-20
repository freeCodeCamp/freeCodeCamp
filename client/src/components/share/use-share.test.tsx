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

  const { redirectURL } = useShare({
    superBlock: superBlock,
    block: block
  });

  const freecodecampLearnDomain = 'www.freecodecamp.org/learn';
  const tweetMessage = `I${space}have${space}completed${space}${block}${space}%23freecodecamp`;
  const redirectFreeCodeCampLearnURL = `https://${freecodecampLearnDomain}/${superBlock}/${hastag}${block}`;
  expect(redirectURL).toBe(
    `https://${twitterDomain}/${action}?original_referer=${twitterDevelpoerDomainURL}&text=${tweetMessage}${nextLine}&url=${redirectFreeCodeCampLearnURL}`
  );
});
