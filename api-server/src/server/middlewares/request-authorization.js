import { isEmpty } from 'lodash';

import { jwtSecret as _jwtSecret } from '../../../../config/secrets';

import { wrapHandledError } from '../utils/create-handled-error';
import {
  getAccessTokenFromRequest,
  errorTypes,
  authHeaderNS
} from '../utils/getSetAccessToken';
import { getRedirectParams } from '../utils/redirection';
// TOPCODER: we need to use the external ID (i.e. Auth0 ID)
// to link w/the TC account.
// And if we don't find the user in the DB, we need to create
// a new user and set its external ID
import {
  createUserByEmail as _createUserByEmail,
  getUserByExternalId as _getUserByExternalId,
  /* getUserById as _getUserById */
  setExternalId as _setExternalId
} from '../utils/user-stats';

const authRE = /^\/auth\//;
const confirmEmailRE = /^\/confirm-email$/;
const newsShortLinksRE = /^\/n\/|^\/p\//;
const publicUserRE = /^\/api\/users\/get-public-profile$/;
const publicUsernameRE = /^\/api\/users\/exists$/;
const resubscribeRE = /^\/resubscribe\//;
const showCertRE = /^\/certificate\/showCert\//;
// note: signin may not have a trailing slash
const signinRE = /^\/signin/;
const statusRE = /^\/status\/ping$/;
const unsubscribedRE = /^\/unsubscribed\//;
const unsubscribeRE = /^\/u\/|^\/unsubscribe\/|^\/ue\//;
const updateHooksRE = /^\/hooks\/update-paypal$/;
// note: this would be replaced by webhooks later
const donateRE = /^\/donate\/charge-stripe$/;
const submitCoderoadChallengeRE = /^\/coderoad-challenge-completed$/;

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
  updateHooksRE,
  donateRE,
  submitCoderoadChallengeRE
];

export function isAllowedPath(path, pathsAllowedREs = _pathsAllowedREs) {
  return pathsAllowedREs.some(re => re.test(path));
}

export default function getRequestAuthorisation({
  jwtSecret = _jwtSecret,
  // TOPCODER: we need to use the external ID
  // (i.e. Auth0 ID) to link w/the TC user.
  // And if the user doesn't exist yet, we need
  // to create it and set its external ID.
  createUserByEmail = _createUserByEmail,
  getUserByExternalId = _getUserByExternalId,
  // getUserById = _getUserById
  setExternalId = _setExternalId
} = {}) {
  return function requestAuthorisation(req, res, next) {
    const { origin } = getRedirectParams(req);
    const { path } = req;
    if (!isAllowedPath(path)) {
      const { accessToken, error, jwt } = getAccessTokenFromRequest(
        req,
        jwtSecret
      );
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
      res.set(authHeaderNS, jwt);
      if (isEmpty(req.user)) {
        // TOPCODER: the accessToken.sub value is the Auth0 ID
        // (e.g. auth0|12345) that we use to link the
        // TC user to the local FCC user.
        return (
          getUserByExternalId(accessToken.sub)
            // const { userId } = accessToken;
            // return getUserById(userId)
            .then(user => {
              if (user) {
                req.user = user;
              }
              return next();
            })
            .catch(err => {
              // if the error is not the no user instance found error
              // or if we don't have an access token with an email and
              // external id, don't do any special error handling
              if (
                err !== 'No user instance found' ||
                !accessToken?.email ||
                !accessToken?.sub
              ) {
                return next();
              }

              // let's try to create the user
              return createUserByEmail(accessToken.email)
                .then(user => {
                  if (!user) {
                    return next();
                  }
                  req.user = user;
                  return setExternalId(user, accessToken.sub).then(next);
                })
                .catch(next);
            })
        );
      } else {
        return Promise.resolve(next());
      }
    }
    return Promise.resolve(next());
  };
}
