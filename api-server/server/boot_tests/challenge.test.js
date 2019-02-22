/* global describe xdescribe it expect */
import { isEqual } from 'lodash';

import {
  buildChallengeUrl,
  createChallengeUrlResolver,
  getFirstChallenge
} from '../boot/challenge';

const firstChallengeUrl = '/learn/the/first/challenge';
const requestedChallengeUrl = '/learn/my/actual/challenge';
const requestedChallengeId = 'abc123';
const mockChallenge = {
  id: '123abc',
  block: 'actual',
  superBlock: 'my',
  dashedName: 'challenge'
};
const mockFirstChallenge = {
  id: '456def',
  block: 'first',
  superBlock: 'the',
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
const firstChallengeQuery = {
  where: { challengeOrder: 0, superOrder: 1, order: 0 }
};

describe('boot/challenge', () => {
  xdescribe('backendChallengeCompleted');

  xdescribe('buildUserUpdate');

  describe('buildChallengeUrl', () => {
    it('resolves the correct Url for the provided challenge', () => {
      const result = buildChallengeUrl(mockChallenge);

      expect(result).toEqual(requestedChallengeUrl);
    });

    it('can handle non-url-complient challenge names', () => {
      const challenge = { ...mockChallenge, superBlock: 'my awesome' };
      const expected = '/learn/my-awesome/actual/challenge';
      const result = buildChallengeUrl(challenge);

      expect(result).toEqual(expected);
    });
  });

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

  describe('getFirstChallenge', () => {
    const createMockChallengeModel = success =>
      success
        ? {
            find(query, cb) {
              return isEqual(query, firstChallengeQuery)
                ? cb(null, mockFirstChallenge)
                : cb(new Error('no challenge found'));
            }
          }
        : {
            find(_, cb) {
              return cb(new Error('no challenge found'));
            }
          };
    it('returns the correct challenge url from the model', async () => {
      const result = await getFirstChallenge(createMockChallengeModel(true));

      expect(result).toEqual(firstChallengeUrl);
    });
    it('returns the learn base if no challenges found', async () => {
      const result = await getFirstChallenge(createMockChallengeModel(false));

      expect(result).toEqual('/learn');
    });
  });

  xdescribe('modernChallengeCompleted');

  xdescribe('projectcompleted');

  xdescribe('redirectToCurrentChallenge');

  xdescribe('redirectToLearn');
});
