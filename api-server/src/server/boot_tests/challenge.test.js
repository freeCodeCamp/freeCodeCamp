import { find } from 'lodash';

import {
  buildUserUpdate,
  buildExamUserUpdate,
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
  mockUser2,
  mockGetFirstChallenge,
  mockCompletedChallenge,
  mockCompletedChallengeNoFiles,
  mockCompletedChallenges,
  mockFailingExamChallenge,
  mockPassingExamChallenge,
  mockBetterPassingExamChallenge,
  mockWorsePassingExamChallenge
} from './fixtures';

export const mockReq = opts => {
  const req = {};
  return { ...req, ...opts };
};

export const mockRes = opts => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.redirect = jest.fn().mockReturnValue(res);
  res.set = jest.fn().mockReturnValue(res);
  res.clearCookie = jest.fn().mockReturnValue(res);
  res.cookie = jest.fn().mockReturnValue(res);
  return { ...res, ...opts };
};

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
      expect(result).toHaveProperty('updateData.$push.completedChallenges');
    });

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
      const newCompletedChallenge = result.updateData.$push.completedChallenges;

      expect(newCompletedChallenge).toEqual(completedChallenge);
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

      const updatedCompletedChallenge =
        result.updateData.$set['completedChallenges.2'];

      expect(updatedCompletedChallenge.completedDate).toEqual(
        originalCompletion
      );
    });

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

    it('will $push newly completed challenges to the completedChallenges array', () => {
      const {
        updateData: {
          $push: { completedChallenges }
        }
      } = buildUserUpdate(
        mockUser,
        '123abc',
        mockCompletedChallengeNoFiles,
        'UTC'
      );

      expect(completedChallenges).toEqual(mockCompletedChallengeNoFiles);
    });
  });

  describe('buildExamUserUpdate', () => {
    it('should $push exam results to completedExams[]', () => {
      const {
        updateData: {
          $push: { completedExams }
        }
      } = buildExamUserUpdate(mockUser, mockFailingExamChallenge);
      expect(completedExams).toEqual(mockFailingExamChallenge);
    });

    it('should not add failing exams to completedChallenges[]', () => {
      const { alreadyCompleted, addPoint, updateData } = buildExamUserUpdate(
        mockUser,
        mockFailingExamChallenge
      );

      expect(updateData).not.toHaveProperty('$push.completedChallenges');
      expect(updateData).not.toHaveProperty('$set.completedChallenges');
      expect(addPoint).toBe(false);
      expect(alreadyCompleted).toBe(false);
    });

    it('should $push newly passed exams to completedChallenge[]', () => {
      const {
        alreadyCompleted,
        addPoint,
        updateData: {
          $push: { completedChallenges }
        }
      } = buildExamUserUpdate(mockUser, mockPassingExamChallenge);

      expect(completedChallenges).toEqual(mockPassingExamChallenge);
      expect(addPoint).toBe(true);
      expect(alreadyCompleted).toBe(false);
    });

    it('should not update passed exams with worse results in completedChallenge[]', () => {
      const { alreadyCompleted, addPoint, updateData } = buildExamUserUpdate(
        mockUser2,
        mockWorsePassingExamChallenge
      );

      expect(updateData).not.toHaveProperty('$push.completedChallenges');
      expect(updateData).not.toHaveProperty('$set.completedChallenges');
      expect(addPoint).toBe(false);
      expect(alreadyCompleted).toBe(true);
    });

    it('should update passed exams with better results in completedChallenge[]', () => {
      const {
        alreadyCompleted,
        addPoint,
        completedDate,
        updateData: { $set }
      } = buildExamUserUpdate(mockUser2, mockBetterPassingExamChallenge);

      expect($set['completedChallenges.4'].examResults).toEqual(
        mockBetterPassingExamChallenge.examResults
      );
      expect(addPoint).toBe(false);
      expect(alreadyCompleted).toBe(true);
      expect(completedDate).toBe(1538052380328);
    });
  });

  describe('buildChallengeUrl', () => {
    it('resolves the correct Url for the provided challenge', () => {
      const result = buildChallengeUrl(mockChallenge);

      expect(result).toEqual(requestedChallengeUrl);
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
      expect.assertions(2);
      const req = mockReq({
        body: { id: 'not-a-real-id' }
      });
      const res = mockRes();
      const next = jest.fn();

      isValidChallengeCompletion(req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(next).not.toHaveBeenCalled();
    });

    it('declares a 403 for an invalid challengeType in the body', () => {
      expect.assertions(2);
      const req = mockReq({
        body: { id: validObjectId, challengeType: 'ponyfoo' }
      });
      const res = mockRes();
      const next = jest.fn();

      isValidChallengeCompletion(req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(next).not.toHaveBeenCalled();
    });

    it('declares a 403 for an invalid solution in the body', () => {
      expect.assertions(2);
      const req = mockReq({
        body: {
          id: validObjectId,
          challengeType: '1',
          solution: 'https://not-a-url'
        }
      });
      const res = mockRes();
      const next = jest.fn();

      isValidChallengeCompletion(req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(next).not.toHaveBeenCalled();
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
      const next = jest.fn();

      isValidChallengeCompletion(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('calls next if only the id is provided', () => {
      const req = mockReq({
        body: {
          id: validObjectId
        }
      });
      const res = mockRes();
      const next = jest.fn();

      isValidChallengeCompletion(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('can handle an "int" challengeType', () => {
      const req = mockReq({
        body: {
          id: validObjectId,
          challengeType: 1
        }
      });
      const res = mockRes();
      const next = jest.fn();

      isValidChallengeCompletion(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });

  xdescribe('modernChallengeCompleted', () => {});

  xdescribe('projectCompleted', () => {});

  describe('redirectToCurrentChallenge', () => {
    const mockHomeLocation = 'https://www.example.com';
    const mockLearnUrl = `${mockHomeLocation}/learn`;
    const mockgetParamsFromReq = () => ({
      returnTo: mockLearnUrl,
      origin: mockHomeLocation,
      pathPrefix: ''
    });
    const mockNormalizeParams = params => params;

    it('redirects to the learn base url for non-users', async () => {
      const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
        () => {},
        mockNormalizeParams,
        mockgetParamsFromReq
      );
      const req = mockReq();
      const res = mockRes();
      const next = jest.fn();
      await redirectToCurrentChallenge(req, res, next);

      expect(res.redirect).toHaveBeenCalledWith(mockLearnUrl);
    });

    it('redirects to the url provided by the challengeUrlResolver', async () => {
      const challengeUrlResolver = await createChallengeUrlResolver(
        mockAllChallenges,
        {
          _getFirstChallenge: mockGetFirstChallenge
        }
      );
      const expectedUrl = `${mockHomeLocation}${requestedChallengeUrl}`;
      const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
        challengeUrlResolver,
        mockNormalizeParams,
        mockgetParamsFromReq
      );
      const req = mockReq({
        user: mockUser
      });
      const res = mockRes();
      const next = jest.fn();
      await redirectToCurrentChallenge(req, res, next);

      expect(res.redirect).toHaveBeenCalledWith(expectedUrl);
    });

    it('redirects to the first challenge for users without a currentChallengeId', async () => {
      const challengeUrlResolver = await createChallengeUrlResolver(
        mockAllChallenges,
        {
          _getFirstChallenge: mockGetFirstChallenge
        }
      );
      const redirectToCurrentChallenge = createRedirectToCurrentChallenge(
        challengeUrlResolver,
        mockNormalizeParams,
        mockgetParamsFromReq
      );
      const req = mockReq({
        user: { ...mockUser, currentChallengeId: '' }
      });
      const res = mockRes();
      const next = jest.fn();
      await redirectToCurrentChallenge(req, res, next);
      const expectedUrl = `${mockHomeLocation}${firstChallengeUrl}`;
      expect(res.redirect).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
