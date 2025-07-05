import { isEmpty } from 'lodash';

import { jwtSecret as _jwtSecret } from '../../../config/secrets';

import { wrapHandledError } from '../utils/create-handled-error';
import {
  getAccessTokenFromRequest,
  errorTypes
} from '../utils/getSetAccessToken';
import { getRedirectParams } from '../utils/redirection';
import { getUserById as _getUserById } from '../utils/user-stats';

const authRE = /^\/auth\//;
const confirmEmailRE = /^\/confirm-email$/;
const newsShortLinksRE = /^\/n\/|^\/p\//;
const publicUserRE = /^\/users\/get-public-profile$/;
const publicUsernameRE = /^\/users\/exists$/;
const resubscribeRE = /^\/resubscribe\//;
const showCertRE = /^\/certificate\/showCert\//;
// note: signin may not have a trailing slash
const signinRE = /^\/signin/;
const statusRE = /^\/status\/ping$/;
const unsubscribedRE = /^\/unsubscribed\//;
const unsubscribeRE = /^\/u\/|^\/unsubscribe\/|^\/ue\//;
// note: this would be replaced by webhooks later
const donateRE = /^\/donate\/charge-stripe$/;
const paymentIntentRE = /^\/donate\/create-stripe-payment-intent$/;
const submitCoderoadChallengeRE = /^\/coderoad-challenge-completed$/;
const mobileLoginRE = /^\/mobile-login\/?$/;

const _pathsAllowedREs = [
  authRE,
  confirmEmailRE,
  newsShortLinksRE,
  publicUserRE,
  publicUsernameRE,
  resubscribeRE,
  showCertRE,
  signinRE,
  statusRE,
  unsubscribedRE,
  unsubscribeRE,
  donateRE,
  paymentIntentRE,
  submitCoderoadChallengeRE,
  mobileLoginRE
];

export function isAllowedPath(path, pathsAllowedREs = _pathsAllowedREs) {
  return pathsAllowedREs.some(re => re.test(path));
}

export default function getRequestAuthorisation({
  jwtSecret = _jwtSecret,
  getUserById = _getUserById
} = {}) {
  return function requestAuthorisation(req, res, next) {
    const { origin } = getRedirectParams(req);
    const { path } = req;
    if (!isAllowedPath(path)) {
      const { accessToken, error } = getAccessTokenFromRequest(req, jwtSecret);
      if (!accessToken && error === errorTypes.noTokenFound) {
        throw wrapHandledError(
          new Error('Access token is required for this request'),
          {
            type: 'info',
            redirect: `${origin}/signin`,
            message: 'Access token is required for this request',
            status: 403
          }
        );
      }
      if (!accessToken && error === errorTypes.invalidToken) {
        throw wrapHandledError(new Error('Access token is invalid'), {
          type: 'info',
          redirect: `${origin}/signin`,
          message: 'Your access token is invalid',
          status: 403
        });
      }
      if (!accessToken && error === errorTypes.expiredToken) {
        throw wrapHandledError(new Error('Access token is no longer valid'), {
          type: 'info',
          redirect: `${origin}/signin`,
          message: 'Access token is no longer valid',
          status: 403
        });
      }
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
}
