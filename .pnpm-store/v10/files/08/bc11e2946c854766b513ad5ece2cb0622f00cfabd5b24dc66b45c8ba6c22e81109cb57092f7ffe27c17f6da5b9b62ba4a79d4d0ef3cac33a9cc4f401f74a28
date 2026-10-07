'use strict';

const debug = require('debug')('simple-oauth2:access-token');

const EXPIRES_AT_PROPERTY_NAME = 'expires_at';
const EXPIRES_IN_PROPERTY_NAME = 'expires_in';

function getExpirationDate(expiresIn) {
  return new Date(Date.now() + Number.parseInt(expiresIn, 10) * 1000);
}

function parseExpirationDate(expirationDate) {
  if (expirationDate instanceof Date) {
    return expirationDate;
  }

  // UNIX timestamp
  if (typeof expirationDate === 'number') {
    return new Date(expirationDate * 1000);
  }

  // ISO 8601 string
  return new Date(expirationDate);
}

function parseToken(token) {
  const tokenProperties = {};

  if (EXPIRES_AT_PROPERTY_NAME in token) {
    tokenProperties[EXPIRES_AT_PROPERTY_NAME] = parseExpirationDate(token[EXPIRES_AT_PROPERTY_NAME]);
  } else if (EXPIRES_IN_PROPERTY_NAME in token) {
    tokenProperties[EXPIRES_AT_PROPERTY_NAME] = getExpirationDate(token[EXPIRES_IN_PROPERTY_NAME]);
  } else {
    debug('No token expiration property was found. Ignoring date parsing');
  }

  return {
    ...token,
    ...tokenProperties,
  };
}

module.exports = { parseToken };
