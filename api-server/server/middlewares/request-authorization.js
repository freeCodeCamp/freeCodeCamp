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

const newsShortLinksRE = /^\/n\/|^\/p\//;
const showCertRE = /^\/certificate\/showCert\//;
const updatePaypalRE = /^\/donate\/update-paypal/;
// signin may not have a trailing slash
const signinRE = /^\/signin/;
const unsubscribeRE = /^\/u\/|^\/unsubscribe\/|^\/ue\//;
const unsubscribedRE = /^\/unsubscribed\//;
const resubscribeRE = /^\/resubscribe\//;

const _whiteListREs = [
  newsShortLinksRE,
  showCertRE,
  updatePaypalRE,
  signinRE,
  unsubscribeRE,
  unsubscribedRE,
  resubscribeRE
];

export function isWhiteListedPath(path, whiteListREs = _whiteListREs) {
  return whiteListREs.some(re => re.test(path));
}

export default ({ jwtSecret = _jwtSecret, getUserById = _getUserById } = {}) =>
  function requestAuthorisation(req, res, next) {
    const { path } = req;
    if (!isWhiteListedPath(path)) {
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
        throw wrapHandledError(new Error('Access token is no longer valid'), {
          type: 'info',
          redirect: `${homeLocation}/signin`,
          message: 'Access token is no longer valid',
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
