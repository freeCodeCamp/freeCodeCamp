/* global describe xdescribe it expect */

import { createChallengeUrlResolver } from '../boot/challenge';

const firstChallengeUrl = '/learn/the/first/challenge';
const requestedChallengeUrl = '/learn/my/actual/challenge';
const requestedChallengeId = 'abc123';
const mockChallenge = {
  id: '123abc',
  block: 'actual',
  superBlock: 'my',
  dashedName: 'challenge'
};
const mockApp = {
  models: {
    Challenge: {
      find() {
        return firstChallengeUrl;
      },
      findById(id, cb) {
        return id === requestedChallengeId
          ? cb(null, mockChallenge)
          : cb(new Error('challenge not found'));
      }
    }
  }
};
const mockGetFirstChallenge = () => firstChallengeUrl;

describe('boot/challenge', () => {
  xdescribe('backendChallengeCompleted');

  xdescribe('buildUserUpdate');

  xdescribe('buildChallengeUrl');

  describe('challengeUrlResolver', () => {
    it('resolves to the first challenge url by default', async () => {
      const resolveCchallengeUrl = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });

      return resolveCchallengeUrl().then(url => {
        expect(url).toEqual(firstChallengeUrl);
      });
    });

    it('returns the first challenge url if the provided id does not relate to a challenge', async () => {
      const resolveCchallengeUrl = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });

      return resolveCchallengeUrl('not-a-real-challenge').then(url => {
        expect(url).toEqual(firstChallengeUrl);
      });
    });

    it('resolves the correct url for the requested challenge', async () => {
      const resolveCchallengeUrl = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });

      return resolveCchallengeUrl('abc123').then(url => {
        expect(url).toEqual(requestedChallengeUrl);
      });
    });
  });

  xdescribe('completedChallenge');

  xdescribe('getFirstChallenge');

  xdescribe('modernChallengeCompleted');

  xdescribe('projectcompleted');

  xdescribe('redirectToCurrentChallenge');

  xdescribe('redirectToLearn');
});
