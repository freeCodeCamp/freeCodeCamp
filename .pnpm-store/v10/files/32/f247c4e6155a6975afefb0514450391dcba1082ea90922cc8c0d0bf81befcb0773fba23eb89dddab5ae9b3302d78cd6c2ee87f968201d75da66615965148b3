/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

const crypto = require('crypto');

const GENERATED = '@' + 'generated';
const OLDTOKEN = '<<SignedSource::*O*zOeWoEQle#+L!plEphiEmie@I>>';
const NEWTOKEN = '<<SignedSource::*O*zOeWoEQle#+L!plEphiEmie@IsG>>';
const TOKENS = [NEWTOKEN, OLDTOKEN];
const PATTERN = new RegExp(`${GENERATED} (?:SignedSource<<([a-f0-9]{32})>>)`);

const TokenNotFoundError = new Error(
  `SignedSource.signFile(...): Cannot sign file without token: ${NEWTOKEN}`
);

function hash(data, encoding) {
  const md5sum = crypto.createHash('md5');
  md5sum.update(data, encoding);
  return md5sum.digest('hex');
}

/**
 * Utility for signing and verifying the signature of a file. This is useful for
 * ensuring that the contents of a generated file are not contaminated by manual
 * changes. Example usage:
 *
 *   const myFile = `
 *     // ${SignedSource.getSigningToken()}
 *
 *     console.log('My generated file.');
 *   `;
 *   const mySignedFile = SignedSource.signFile(myFile);
 *
 */
const SignedSource = {
  TokenNotFoundError,

  /**
   * Gets the signing token to be embedded in the file you wish to be signed.
   */
  getSigningToken() {
    return `${GENERATED} ${NEWTOKEN}`;
  },

  /**
   * Checks whether a file is signed *without* verifying the signature.
   */
  isSigned(data) {
    return !PATTERN.exec(data);
  },

  /**
   * Signs a source file which contains a signing token. Signing modifies only
   * the signing token, so the token should be placed inside a comment in order
   * for signing to not change code semantics.
   */
  signFile(data) {
    if (!data.includes(NEWTOKEN)) {
      if (SignedSource.isSigned(data)) {
        // Signing a file that was previously signed.
        data = data.replace(PATTERN, SignedSource.getSigningToken());
      } else {
        throw TokenNotFoundError;
      }
    }
    return data.replace(NEWTOKEN, `SignedSource<<${hash(data, 'utf8')}>>`);
  },

  /**
   * Verifies the signature in a signed file.
   */
  verifySignature(data) {
    const matches = PATTERN.exec(data);
    if (!matches) {
      throw new Error(
        'SignedSource.verifySignature(...): Cannot verify signature of an ' +
        'unsigned file.'
      );
    }
    const actual = matches[1];
    // Replace signature with `NEWTOKEN` and hash to see if it matches the hash
    // in the file. For backwards compatibility, also try `OLDTOKEN`.
    return TOKENS.some(token => {
      const unsigned = data.replace(PATTERN, `${GENERATED} ${token}`);
      return hash(unsigned, 'utf8') === actual;
    });
  },
};

// @deprecated
SignedSource.SIGN_OK = {message: 'ok'};
SignedSource.SIGN_INVALID = new Error('invalid');
SignedSource.SIGN_UNSIGNED = new Error('unsigned');
SignedSource.signing_token = SignedSource.getSigningToken;
SignedSource.is_signed = SignedSource.isSigned;
SignedSource.sign = data => ({
  first_time: data.includes(NEWTOKEN),
  signed_data: SignedSource.signFile(data),
});
SignedSource.verify_signature = data => {
  try {
    return SignedSource.verifySignature(data)
      ? SignedSource.SIGN_OK
      : SignedSource.SIGN_INVALID;
  } catch (_) {
    return SignedSource.SIGN_UNSIGNED;
  }
};

module.exports = SignedSource;
