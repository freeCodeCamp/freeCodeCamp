import loopback from 'loopback';
import jwt from 'jsonwebtoken';
import { isBefore } from 'date-fns';

import { homeLocation } from '../../../config/env';

import { wrapHandledError } from '../utils/create-handled-error';

// We need to tunnel through a proxy path set up within
// the gatsby app, at this time, that path is /internal
const whiteListRE = new RegExp([
  '^/internal/n/',
  '^/internal/p\??'
].join('|'));


export default () => function authorizeByJWT(req, res, next) {
  const path = req.path.split('/')[1];
  if (/^external$|^internal$/.test(path) && !whiteListRE.test(req.path)) {
    const cookie = req.signedCookies && req.signedCookies['jwt_access_token'] ||
      req.cookie && req.cookie['jwt_access_token'];
    if (!cookie) {
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
    let token;
    try {
      token = jwt.verify(cookie, process.env.JWT_SECRET);
    } catch (err) {
      throw wrapHandledError(
        new Error(err.message),
        {
          type: 'info',
          redirect: `${homeLocation}/signin`,
          message: 'Your access token is invalid',
          status: 403
        }
      );
    }
    const { accessToken: {created, ttl, userId }} = token;
    const valid = isBefore(Date.now(), Date.parse(created) + ttl);
    if (!valid) {
      throw wrapHandledError(
        new Error('Access token is no longer vaild'),
        {
          type: 'info',
          redirect: `${homeLocation}/signin`,
          message: 'Access token is no longer vaild',
          status: 403
        }
      );
    }
    if (!req.user) {
      const User = loopback.getModelByType('User');
      return User.findById(userId)
      .then(user => {
        if (user) {
          user.points = user.progressTimestamps.length;
          req.user = user;
        }
        return;
      })
      .then(next)
      .catch(next);
    } else {
      return next();
    }
  }
  return next();
};
