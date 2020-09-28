/* global describe xdescribe it expect */
import { first, find } from 'lodash';
import sinon from 'sinon';
import { mockReq, mockRes } from 'sinon-express-mock';

import {
  buildUserUpdate,
  buildChallengeUrl,
  createChallengeUrlResolver,
  createRedirectToCurrentChallenge,
  getFirstChallenge,
  isValidChallengeCompletion
} from '../boot/challenge';

import {
  firstChallengeUrl,
  requestedChallengeUrl,
  mockAllChallenges,
  mockChallenge,
  mockUser,
  mockGetFirstChallenge,
  mockCompletedChallenge,
  mockCompletedChallenges
} from './fixtures';

describe('boot/challenge', () => {
  xdescribe('backendChallengeCompleted', () => {});

  describe('buildUserUpdate', () => {
    it('returns an Object with a nested "completedChallenges" property', () => {
      const result = buildUserUpdate(
        mockUser,
        '123abc',
        mockCompletedChallenge,
        'UTC'
      );
      expect(result).toHaveProperty('updateData.$set.completedChallenges');
    });

    // eslint-disable-next-line max-len
    it('preserves file contents if the completed challenge is a JS Project', () => {
      const jsChallengeId = 'aa2e6f85cab2ab736c9a9b24';
      const completedChallenge = {
        ...mockCompletedChallenge,
        completedDate: Date.now(),
        id: jsChallengeId
      };
      const result = buildUserUpdate(
        mockUser,
        jsChallengeId,
        completedChallenge,
        'UTC'
      );
      const firstCompletedChallenge = first(
        result.updateData.$set.completedChallenges
      );

      expect(firstCompletedChallenge).toEqual(completedChallenge);
    });

    it('preserves the original completed date of a challenge', () => {
      const completedChallengeId = 'aaa48de84e1ecc7c742e1124';
      const completedChallenge = {
        ...mockCompletedChallenge,
        completedDate: Date.now(),
        id: completedChallengeId
      };
      const originalCompletion = find(
        mockCompletedChallenges,
        x => x.id === completedChallengeId
      ).completedDate;
      const result = buildUserUpdate(
        mockUser,
        completedChallengeId,
        completedChallenge,
        'UTC'
      );

      const firstCompletedChallenge = first(
        result.updateData.$set.completedChallenges
      );

      expect(firstCompletedChallenge.completedDate).toEqual(originalCompletion);
    });

    // eslint-disable-next-line max-len
    it('does not attempt to update progressTimestamps for a previously completed challenge', () => {
      const completedChallengeId = 'aaa48de84e1ecc7c742e1124';
      const completedChallenge = {
        ...mockCompletedChallenge,
        completedDate: Date.now(),
        id: completedChallengeId
      };
      const { updateData } = buildUserUpdate(
        mockUser,
        completedChallengeId,
        completedChallenge,
        'UTC'
      );

      const hasProgressTimestamps =
        '$push' in updateData && 'progressTimestamps' in updateData.$push;
      expect(hasProgressTimestamps).toBe(false);
    });

    // eslint-disable-next-line max-len
    it('provides a progressTimestamps update for new challenge completion', () => {
      expect.assertions(2);
      const { updateData } = buildUserUpdate(
        mockUser,
        '123abc',
        mockCompletedChallenge,
        'UTC'
      );
      expect(updateData).toHaveProperty('$push');
      expect(updateData.$push).toHaveProperty('progressTimestamps');
    });

    it('removes repeat completions from the completedChallenges array', () => {
      const completedChallengeId = 'aaa48de84e1ecc7c742e1124';
      const completedChallenge = {
        ...mockCompletedChallenge,
        completedDate: Date.now(),
        id: completedChallengeId
      };
      const {
        updateData: {
          $set: { completedChallenges }
        }
      } = buildUserUpdate(
        mockUser,
        completedChallengeId,
        completedChallenge,
        'UTC'
      );

      expect(completedChallenges.length).toEqual(
        mockCompletedChallenges.length
      );
    });

    // eslint-disable-next-line max-len
    it('adds newly completed challenges to the completedChallenges array', () => {
      const {
        updateData: {
          $set: { completedChallenges }
        }
      } = buildUserUpdate(mockUser, '123abc', mockCompletedChallenge, 'UTC');

      expect(completedChallenges.length).toEqual(
        mockCompletedChallenges.length + 1
      );
    });
  });

  describe('buildChallengeUrl', () => {
    it('resolves the correct Url for the provided challenge', () => {
      const result = buildChallengeUrl(mockChallenge);

      expect(result).toEqual(requestedChallengeUrl);
    });

    it('can handle non-url-compliant challenge names', () => {
      const challenge = { ...mockChallenge, superBlock: 'my awesome' };
      const expected = '/learn/my-awesome/actual/challenge';
      const result = buildChallengeUrl(challenge);

      expect(result).toEqual(expected);
    });
  });

  describe('challengeUrlResolver', () => {
    it('resolves to the first challenge url by default', async () => {
      const challengeUrlResolver = await createChallengeUrlResolver(
        mockAllChallenges,
        {
          _getFirstChallenge: mockGetFirstChallenge
        }
      );

      return challengeUrlResolver().then(url => {
        expect(url).toEqual(firstChallengeUrl);
      });
    }, 10000);

    // eslint-disable-next-line max-len
    it('returns the first challenge url if the provided id does not relate to a challenge', async () => {
      const challengeUrlResolver = await createChallengeUrlResolver(
        mockAllChallenges,
        {
          _getFirstChallenge: mockGetFirstChallenge
        }
      );

      return challengeUrlResolver('not-a-real-challenge').then(url => {
        expect(url).toEqual(firstChallengeUrl);
      });
    });

    it('resolves the correct url for the requested challenge', async () => {
      const challengeUrlResolver = await createChallengeUrlResolver(
        mockAllChallenges,
        {
          _getFirstChallenge: mockGetFirstChallenge
        }
      );

      return challengeUrlResolver('123abc').then(url => {
        expect(url).toEqual(requestedChallengeUrl);
      });
    });
  });

  describe('getFirstChallenge', () => {
    it('returns the correct challenge url from the model', async () => {
      const result = await getFirstChallenge(mockAllChallenges);

      expect(result).toEqual(firstChallengeUrl);
    });

    it('returns the learn base if no challenges found', async () => {
      const result = await getFirstChallenge([]);

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

      expect(res.status.called).toBe(true);
      expect(res.status.getCall(0).args[0]).toBe(403);
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

      expect(res.status.called).toBe(true);
      expect(res.status.getCall(0).args[0]).toBe(403);
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

      expect(res.status.called).toBe(true);
      expect(res.status.getCall(0).args[0]).toBe(403);
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

    it('can handle an "int" challengeType', () => {
      const req = mockReq({
        body: {
          id: validObjectId,
          challengeType: 1
        }
      });
      const res = mockRes();
      const next = sinon.spy();

      isValidChallengeCompletion(req, res, next);

      expect(next.called).toBe(true);
    });
  });

  xdescribe('modernChallengeCompleted', () => {});

  xdescribe('projectCompleted', () => {});

  describe('redirectToCurrentChallenge', () => {
    const mockHomeLocation = 'https://www.example.com';
    const mockLearnUrl = `${mockHomeLocation}/learn`;

    it('redirects to the learn base url for non-users', async done => {
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

    // eslint-disable-next-line max-len
    it('redirects to the url provided by the challengeUrlResolver', async done => {
      const challengeUrlResolver = await createChallengeUrlResolver(
        mockAllChallenges,
        {
          _getFirstChallenge: mockGetFirstChallenge
        }
      );
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

    // eslint-disable-next-line max-len
    it('redirects to the first challenge for users without a currentChallengeId', async done => {
      const challengeUrlResolver = await createChallengeUrlResolver(
        mockAllChallenges,
        {
          _getFirstChallenge: mockGetFirstChallenge
        }
      );
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
});
