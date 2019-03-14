import { isEmpty } from 'lodash';

import { getUserById as _getUserById } from '../utils/user-stats';
import {
  getAccessTokenFromRequest,
  errorTypes,
  authHeaderNS
} from '../utils/getSetAccessToken';
import { homeLocation } from '../../../config/env';
import { jwtSecret as _jwtSecret } from '../../../config/secrets';

import { wrapHandledError } from '../utils/create-handled-error';

// We need to tunnel through a proxy path set up within
// the gatsby app, at this time, that path is /internal
const apiProxyRE = /^\/internal\/|^\/external\//;
const newsShortLinksRE = /^\/internal\/n\/|^\/internal\/p\?/;
const loopbackAPIPathRE = /^\/internal\/api\//;

const _whiteListREs = [newsShortLinksRE, loopbackAPIPathRE];

export function isWhiteListedPath(path, whiteListREs = _whiteListREs) {
  return whiteListREs.some(re => re.test(path));
}

export default ({ jwtSecret = _jwtSecret, getUserById = _getUserById } = {}) =>
  function requestAuthorisation(req, res, next) {
    const { path } = req;
    if (apiProxyRE.test(path) && !isWhiteListedPath(path)) {
      const { accessToken, error, jwt } = getAccessTokenFromRequest(
        req,
        jwtSecret
      );
      if (!accessToken && error === errorTypes.noTokenFound) {
        throw wrapHandledError(
          new Error('Access token is required for this request'),
          {
            type: 'info',
            redirect: `${homeLocation}/signin`,
            message: 'Access token is required for this request',
            status: 403
          }
        );
      }
      if (!accessToken && error === errorTypes.invalidToken) {
        throw wrapHandledError(new Error('Access token is invalid'), {
          type: 'info',
          redirect: `${homeLocation}/signin`,
          message: 'Your access token is invalid',
          status: 403
        });
      }
      if (!accessToken && error === errorTypes.expiredToken) {
        throw wrapHandledError(new Error('Access token is no longer vaild'), {
          type: 'info',
          redirect: `${homeLocation}/signin`,
          message: 'Access token is no longer vaild',
          status: 403
        });
      }
      res.set(authHeaderNS, jwt);
      if (isEmpty(req.user)) {
        const { userId } = accessToken;
        return getUserById(userId)
          .then(user => {
            if (user) {
              req.user = user;
            }
            return;
          })
          .then(next)
          .catch(next);
      } else {
        return Promise.resolve(next());
      }
    }
    return Promise.resolve(next());
  };
