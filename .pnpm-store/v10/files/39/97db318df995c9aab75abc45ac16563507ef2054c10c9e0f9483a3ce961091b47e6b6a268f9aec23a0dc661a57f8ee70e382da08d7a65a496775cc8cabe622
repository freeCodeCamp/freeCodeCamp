"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setToken = exports.getToken = void 0;
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("../reporter"));
const tokenKey = `cli.token`;
const tokenExpirationKey = `cli.tokenExpiration`;
const getExpiration = () => (0, _gatsbyCoreUtils.getConfigStore)().get(tokenExpirationKey);
const getToken = async () => {
  const expiration = await getExpiration();
  const tokenHasExpired = new Date() > new Date(expiration);
  if (tokenHasExpired) {
    _reporter.default.warn(`Your token has expired, you may need to login again`);
  }
  return (0, _gatsbyCoreUtils.getConfigStore)().get(tokenKey);
};
exports.getToken = getToken;
const setToken = (token, expiration) => {
  const store = (0, _gatsbyCoreUtils.getConfigStore)();
  store.set(tokenKey, token);
  // we would be able to decode an expiration off the JWT, but the auth service isn't set up to attach it to the token
  store.set(tokenExpirationKey, expiration);
};
exports.setToken = setToken;