/* global describe xdescribe it expect */
import { isEqual } from 'lodash';
import sinon from 'sinon';
import { mockReq, mockRes } from 'sinon-express-mock';

import {
  buildChallengeUrl,
  createChallengeUrlResolver,
  createRedirectToCurrentChallenge,
  getFirstChallenge,
  isValidChallengeCompletion
} from '../boot/challenge';

const firstChallengeUrl = '/learn/the/first/challenge';
const requestedChallengeUrl = '/learn/my/actual/challenge';
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
const mockUser = {
  username: 'camperbot',
  currentChallengeId: '123abc'
};
const mockApp = {
  models: {
    Challenge: {
      find() {
        return firstChallengeUrl;
      },
      findById(id, cb) {
        return id === mockChallenge.id
          ? cb(null, mockChallenge)
          : cb(new Error('challenge not found'));
      }
    }
  }
};
const mockGetFirstChallenge = () => firstChallengeUrl;
const firstChallengeQuery = {
  // first challenge of the first block of the first superBlock
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
      const challengeUrlResolver = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });

      return challengeUrlResolver().then(url => {
        expect(url).toEqual(firstChallengeUrl);
      });
    });

    it('returns the first challenge url if the provided id does not relate to a challenge', async () => {
      const challengeUrlResolver = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });

      return challengeUrlResolver('not-a-real-challenge').then(url => {
        expect(url).toEqual(firstChallengeUrl);
      });
    });

    it('resolves the correct url for the requested challenge', async () => {
      const challengeUrlResolver = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });

      return challengeUrlResolver('123abc').then(url => {
        expect(url).toEqual(requestedChallengeUrl);
      });
    });
  });

  describe('getFirstChallenge', () => {
    const createMockChallengeModel = success =>
      success
        ? {
            findOne(query, cb) {
              return isEqual(query, firstChallengeQuery)
                ? cb(null, mockFirstChallenge)
                : cb(new Error('no challenge found'));
            }
          }
        : {
            findOne(_, cb) {
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

  describe('isValidChallengeCompletion', () => {
    const validObjectId = '5c716d1801013c3ce3aa23e6';

    it('declares a 403 for an invalid id in the body', () => {
      expect.assertions(3);
      const req = mockReq({
        body: { id: 'not-a-real-id' }
      });
      const res = mockRes();
      const next = sinon.spy();

      isValidChallengeCompletion(req, res, next);

      expect(res.sendStatus.called).toBe(true);
      expect(res.sendStatus.getCall(0).args[0]).toBe(403);
      expect(next.called).toBe(false);
    });

    it('declares a 403 for an invalid challengeType in the body', () => {
      expect.assertions(3);
      const req = mockReq({
        body: { id: validObjectId, challengeType: 'ponyfoo' }
      });
      const res = mockRes();
      const next = sinon.spy();

      isValidChallengeCompletion(req, res, next);

      expect(res.sendStatus.called).toBe(true);
      expect(res.sendStatus.getCall(0).args[0]).toBe(403);
      expect(next.called).toBe(false);
    });

    it('declares a 403 for an invalid solution in the body', () => {
      expect.assertions(3);
      const req = mockReq({
        body: {
          id: validObjectId,
          challengeType: '1',
          solution: 'https://not-a-url'
        }
      });
      const res = mockRes();
      const next = sinon.spy();

      isValidChallengeCompletion(req, res, next);

      expect(res.sendStatus.called).toBe(true);
      expect(res.sendStatus.getCall(0).args[0]).toBe(403);
      expect(next.called).toBe(false);
    });

    it('calls next if the body is valid', () => {
      const req = mockReq({
        body: {
          id: validObjectId,
          challengeType: '1',
          solution: 'https://www.freecodecamp.org'
        }
      });
      const res = mockRes();
      const next = sinon.spy();

      isValidChallengeCompletion(req, res, next);

      expect(next.called).toBe(true);
    });

    it('calls next if only the id is provided', () => {
      const req = mockReq({
        body: {
          id: validObjectId
        }
      });
      const res = mockRes();
      const next = sinon.spy();

      isValidChallengeCompletion(req, res, next);

      expect(next.called).toBe(true);
    });
  });

  xdescribe('modernChallengeCompleted', () => {});

  xdescribe('projectCompleted');

  describe('redirectToCurrentChallenge', () => {
    const mockHomeLocation = 'https://www.example.com';
    const mockLearnUrl = `${mockHomeLocation}/learn`;

    it('redircts to the learn base url for non-users', async done => {
      const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
        () => {},
        { _homeLocation: mockHomeLocation, _learnUrl: mockLearnUrl }
      );
      const req = mockReq();
      const res = mockRes();
      const next = sinon.spy();
      await redirectToCurrentChallenge(req, res, next);

      expect(res.redirect.calledWith(mockLearnUrl));
      done();
    });

    it('redirects to the url provided by the challengeUrlResolver', async done => {
      const challengeUrlResolver = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });
      const expectedUrl = `${mockHomeLocation}${requestedChallengeUrl}`;
      const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
        challengeUrlResolver,
        { _homeLocation: mockHomeLocation, _learnUrl: mockLearnUrl }
      );
      const req = mockReq({
        user: mockUser
      });
      const res = mockRes();
      const next = sinon.spy();
      await redirectToCurrentChallenge(req, res, next);

      expect(res.redirect.calledWith(expectedUrl)).toBe(true);
      done();
    });

    it('redirects to the first challenge for users without a currentChallengeId', async done => {
      const challengeUrlResolver = await createChallengeUrlResolver(mockApp, {
        _getFirstChallenge: mockGetFirstChallenge
      });
      const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
        challengeUrlResolver,
        { _homeLocation: mockHomeLocation, _learnUrl: mockLearnUrl }
      );
      const req = mockReq({
        user: { ...mockUser, currentChallengeId: '' }
      });
      const res = mockRes();
      const next = sinon.spy();
      await redirectToCurrentChallenge(req, res, next);
      const expectedUrl = `${mockHomeLocation}${firstChallengeUrl}`;
      expect(res.redirect.calledWith(expectedUrl)).toBe(true);
      done();
    });
  });

  xdescribe('redirectToLearn');
});
