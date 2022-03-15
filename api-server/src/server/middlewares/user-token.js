import debugFactory from 'debug';
const log = debugFactory('fcc:boot:user');
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../../../../config/secrets';

/*
 * User tokens for submitting external curriculum are deleted when they sign
 * out, reset their account, or delete their account
 */

export function createDeleteUserToken(app) {
  const { UserToken } = app.models;

  return async function deleteUserToken(req, res, next) {
    try {
      await UserToken.destroyAll({ userId: req.user.id });
      req.userTokenDeleted = true;
    } catch (e) {
      req.userTokenDeleted = false;
      log(
        `An error occurred deleting user token for user with id ${req.user.id}`
      );
    }

    next();
  };
}

export function encodeUserToken(userToken) {
  return jwt.sign({ userToken }, jwtSecret);
}
