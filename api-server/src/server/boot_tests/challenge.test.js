import {
  buildChallengeUrl,
  createChallengeUrlResolver,
  createRedirectToCurrentChallenge,
  getFirstChallenge,
  validateChallenge,
  validateProject,
  ensureObjectContainsAllProperties,
  hasProperties,
  expectedProjectStructures
} from '../boot/challenge';

import {
  firstChallengeUrl,
  requestedChallengeUrl,
  mockAllChallenges,
  mockChallenge,
  mockUser,
  mockGetFirstChallenge,
  projectPayloads,
  projectPayloadsIncorrectStructure
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
  describe('validateChallenge', () => {
    it('calls `next` with valid inputs', () => {
      const id = '619665c9abd72906f3ad30f9';
      const completedDate = Date.now();
      const req = mockReq({
        body: [{ id, completedDate }, { id: '619692ff79f5770fc6d8c0b4' }]
      });
      const res = mockRes();
      const next = jest.fn();
      validateChallenge(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('returns an error when `body` is an object literal', () => {
      const id = '619665c9abd72906f3ad30f9';
      const req = mockReq({ body: { id } });
      const res = mockRes();
      const next = jest.fn();
      validateChallenge(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid request format. Expected `body` to be an array.'
      });
    });
    it('returns an error when `id` is not in `body`', () => {
      const malformedRequestBody = '619665c9abd72906f3ad30f9';
      const req = mockReq({ body: [{ malformedRequestBody }] });
      const res = mockRes();
      const next = jest.fn();
      validateChallenge(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid request format. Expected `id` to be present.'
      });
    });
    it('returns an error when `id` is invalid', () => {
      const id = '1019665c9abd72906f3ad30f9';
      const req = mockReq({ body: [{ id }] });
      const res = mockRes();
      const next = jest.fn();
      validateChallenge(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid challenge submission.'
      });
    });
    it('returns an error when `id` is for a certification project', () => {
      const id = 'bd7158d8c242eddfaeb5bd13';
      const req = mockReq({ body: [{ id }] });
      const res = mockRes();
      const next = jest.fn();
      validateChallenge(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid challenge submission.'
      });
    });
  });
  describe('validateProject', () => {
    it('calls `next` with valid inputs', () => {
      const id = 'bd7158d8c242eddfaeb5bd13';
      const files = [
        {
          name: '',
          ext: '',
          contents: '',
          history: [],
          key: ''
        }
      ];
      const req = mockReq({ body: { id, files } });
      const res = mockRes();
      const next = jest.fn();
      validateProject(req, res, next);
      expect(next).toHaveBeenCalled();
    });
    it('returns an error when `body` is not an object literal', () => {
      const id = 'bd7158d8c242eddfaeb5bd13';
      const files = [
        {
          name: '',
          ext: '',
          contents: '',
          history: [],
          key: ''
        }
      ];
      const req = mockReq({ body: [{ id, files }] });
      const res = mockRes();
      const next = jest.fn();
      validateProject(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message:
          'Invalid request format. Expected `body` to be an object literal.'
      });
    });
    it('returns an error when `id` is not in `body`', () => {
      const malformedRequestBody = 'bd7158d8c242eddfaeb5bd13';
      const files = [
        {
          name: '',
          ext: '',
          contents: '',
          history: [],
          key: ''
        }
      ];
      const req = mockReq({ body: { malformedRequestBody, files } });
      const res = mockRes();
      const next = jest.fn();
      validateProject(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid request format. Expected `id` to be present.'
      });
    });
    it('returns an error when `id` is invalid', () => {
      const id = '1019665c9abd72906f3ad30f9';
      const files = [
        {
          name: '',
          ext: '',
          contents: '',
          history: [],
          key: ''
        }
      ];
      const req = mockReq({ body: { id, files } });
      const res = mockRes();
      const next = jest.fn();
      validateProject(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid project submission.'
      });
    });
    it('returns an error when `id` is for a challenge', () => {
      const id = '619665c9abd72906f3ad30f9';
      const files = [
        {
          name: '',
          ext: '',
          contents: '',
          history: [],
          key: ''
        }
      ];
      const req = mockReq({ body: { id, files } });
      const res = mockRes();
      const next = jest.fn();
      validateProject(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid project submission.'
      });
    });
    it('returns an error when any property is missing for a project', () => {
      const id = 'bd7158d8c242eddfaeb5bd13';
      const files = [
        {
          name: '',
          ext: '',
          contents: '',
          history: [],
          key: ''
        }
      ];
      // eslint-disable-next-line no-unused-vars
      const { name, ...noName } = files;
      let req = mockReq({ body: { id, files: noName } });
      const res = mockRes();
      const next = jest.fn();
      validateProject(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid project submission.'
      });

      // eslint-disable-next-line no-unused-vars
      const { ext, ...noExt } = files;
      req = mockReq({ body: { id, files: noExt } });
      validateProject(req, res, next);
      expect(res.status).toBeCalledTimes(2);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid project submission.'
      });

      // eslint-disable-next-line no-unused-vars
      const { contents, ...noContents } = files;
      req = mockReq({ body: { id, files: noContents } });
      validateProject(req, res, next);
      expect(res.status).toBeCalledTimes(3);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid project submission.'
      });

      // eslint-disable-next-line no-unused-vars
      const { history, ...noHistory } = files;
      req = mockReq({ body: { id, files: noHistory } });
      validateProject(req, res, next);
      expect(res.status).toBeCalledTimes(4);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid project submission.'
      });

      // eslint-disable-next-line no-unused-vars
      const { key, ...noKey } = files;
      req = mockReq({ body: { id, files: noKey } });
      validateProject(req, res, next);
      expect(res.status).toBeCalledTimes(5);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        type: 'error',
        message: 'Invalid project submission.'
      });
    });
  });
  describe('ensureObjectContainsAllFields', () => {
    it('should return true if object contains all fields', () => {
      for (const project of projectPayloads) {
        expect(
          ensureObjectContainsAllProperties(
            project,
            expectedProjectStructures[project.challengeType]
          )
        ).toBe(true);
      }
    });
    it('should return false if object does not contain all fields', () => {
      for (const project of projectPayloadsIncorrectStructure) {
        expect(
          ensureObjectContainsAllProperties(
            project,
            expectedProjectStructures[project.challengeType]
          )
        ).toBe(false);
      }
    });
  });
  describe('hasFields', () => {
    const exampleObj = {
      a: '',
      b: null,
      c: [
        {
          d: 0,
          e: () => {}
        }
      ],
      f: {
        g: {
          h: 2
        }
      }
    };
    const exampleFields = ['a', 'b', 'c.d', 'c.e', 'f.g.h'];
    it('should return true if object has all fields', () => {
      for (const field of exampleFields) {
        expect(hasProperties(exampleObj, field)).toBe(true);
      }
    });
    it('should return false if object does not have all fields', () => {
      for (const field of ['a.b', 'b.c', 'g', 'f.g.h.i', 'b.a']) {
        expect(hasProperties(exampleObj, field)).toBe(false);
        expect(hasProperties(exampleObj, field)).toBe(false);
        expect(hasProperties(exampleObj, field)).toBe(false);
      }
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

    // eslint-disable-next-line max-len
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

    // eslint-disable-next-line max-len
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
