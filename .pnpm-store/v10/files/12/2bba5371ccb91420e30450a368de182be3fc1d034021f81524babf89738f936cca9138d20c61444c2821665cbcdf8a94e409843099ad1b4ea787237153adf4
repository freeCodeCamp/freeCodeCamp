'use strict';

const HEADER_ENCODING_FORMAT = 'base64';

const credentialsEncodingModeEnum = {
  STRICT: 'strict',
  LOOSE: 'loose',
};

/**
 * Encode a single {value} using the application/x-www-form-urlencoded media type
 * while also applying some additional rules specified by the spec
 *
 * Following characters are not-escaped by encodeURIComponent but {@link https://tools.ietf.org/html/rfc3986 RFC 3986}
 * lists them as 'reserved' and hence needs to be percent encoded, though they have no formalized URI delimiting cases
 *
 * >   ! ' ( ) *
 *
 * Percent encoding needs to be uppercase hexadecimal as per {@link https://tools.ietf.org/html/rfc3986#section-2.1 RFC 3986 - Percent Encoding}
 *
 * @see https://tools.ietf.org/html/rfc6749#appendix-B
 * @see https://tools.ietf.org/html/rfc6749#section-2.3.1
 *
 * @param {String} value
 */
function useFormURLEncode(value) {
  return encodeURIComponent(value)
    .replace(/%20/g, '+')
    .replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

/**
 * Get a string representation for the client credentials
 *
 * @param {String} clientID
 * @param {String} clientSecret
 * @returns {String} credentials
 */
function getCredentialsString(clientID, clientSecret) {
  return `${clientID}:${clientSecret}`;
}

class CredentialsEncoding {
  constructor(encodingMode) {
    this.encodingMode = encodingMode;
  }

  /**
   * Get the authorization header used to request a valid token
   * @param  {String} clientID
   * @param  {String} clientSecret
   * @return {String}              Authorization header string token
   */
  getAuthorizationHeaderToken(clientID, clientSecret) {
    let encodedCredentials;

    if (this.encodingMode === credentialsEncodingModeEnum.STRICT) {
      encodedCredentials = getCredentialsString(useFormURLEncode(clientID), useFormURLEncode(clientSecret));
    } else {
      encodedCredentials = getCredentialsString(clientID, clientSecret);
    }

    return Buffer.from(encodedCredentials).toString(HEADER_ENCODING_FORMAT);
  }
}

module.exports = {
  CredentialsEncoding,
  credentialsEncodingModeEnum,
};
