/* global describe it expect */

import {
  createRedirectToCurrentChallenge,
  createRedirectToLearn
} from '../../boot/challenge';
import mockMap from '../../__mocks__/map';
import mockPathMigration from '../../__mocks__/pathMigration.json';

// Because validator.isURL expects a TLD or a naked localhost without ports
function isLocalhostURL(string) {
  if (!string || typeof string !== 'string') {
    throw new Error('Expected a string but got ' + string);
  }
  const hasScheme = (/^https?:\/\//i).test(string);
  const hasLocalhost = (/localhost/i).test(string);
  const hasPort = (/:\d\d\d\d/).test(string);

  return hasScheme && hasLocalhost && hasPort;
}

describe('redirectToCurrentChallenge', () => {
  it('should return a string', async done => {
    const redirectToCurrentChallenge = await createRedirectToCurrentChallenge(
      mockMap
    );

    const mockReq = {
      user: {
        currentChallengeId: 1
      }
    };

    const mockRes = {
      redirect(location) {
        expect(typeof location).toBe('string');
        return done();
      }
    };

    return redirectToCurrentChallenge(mockReq, mockRes, () => {});
  });

  it('should redirect to the correct URL', async done => {
    const redirectToCurrentChallenge = await createRedirectToCurrentChallenge(
      mockMap
    );

    const mockReq = {
      user: {
        currentChallengeId: 7
      }
    };

    const mockRes = {
      redirect(location) {
        expect(location).toBe(
          'http://localhost:4545/learn/superblock-b/block-d/challenge-seven'
        );
        return done();
      }
    };

    return redirectToCurrentChallenge(mockReq, mockRes, () => {});
  });

  it(
    'should redirect to the first challenge when no id is given',
    async done => {
      const redirectToCurrentChallenge = await createRedirectToCurrentChallenge(
        mockMap
      );

      const mockReq = {};

      const mockRes = {
        redirect(location) {
          expect(location).toBe(
            'http://localhost:4545/learn/superblock-a/block-a/challenge-one'
          );
          return done();
        }
      };

      return redirectToCurrentChallenge(mockReq, mockRes, () => {});
    }
  );
});


describe('redirectToLearn', () => {
  it('should redirect to a url', done => {
    const redirectToLearn = createRedirectToLearn(mockPathMigration);

    const mockReq = {
      path: '/'
    };

    const mockRes = {
      status() {
        return {
          redirect(location) {
            expect(isLocalhostURL(location)).toBe(true);
            return done();
          }
        };
      }
    };

    return redirectToLearn(mockReq, mockRes, () => {});
  });

  it('should redirect learn', done => {
    const redirectToLearn = createRedirectToLearn(mockPathMigration);

    const mockReq = {
      path: '/'
    };

    const mockRes = {
      status() {
        return {
          redirect(location) {
            expect(location).toEqual('http://localhost:4545/learn');
            return done();
          }
        };
      }
    };

    return redirectToLearn(mockReq, mockRes, () => {});
  });

  it('should redirect to the correct challenge', done => {
    const redirectToLearn = createRedirectToLearn(mockPathMigration);

    const mockReq = {
      path: '/challenges/challenge-three'
    };

    const mockRes = {
      status() {
        return {
          redirect(location) {
            expect(location).toEqual(
              'http://localhost:4545/learn/superblock-a/block-b/challenge-three'
            );
            return done();
          }
        };
      }
    };

    return redirectToLearn(mockReq, mockRes, () => {});
  });

  it('should redirect to learn when no challenge found in pathMap', done => {
    const redirectToLearn = createRedirectToLearn(mockPathMigration);

    const mockReq = {
      path: '/challenges/challenge-doesnt-exist'
    };

    const mockRes = {
      status() {
        return {
          redirect(location) {
            expect(location).toEqual(
              'http://localhost:4545/learn'
            );
            return done();
          }
        };
      }
    };

    return redirectToLearn(mockReq, mockRes, () => {});
  });
});
