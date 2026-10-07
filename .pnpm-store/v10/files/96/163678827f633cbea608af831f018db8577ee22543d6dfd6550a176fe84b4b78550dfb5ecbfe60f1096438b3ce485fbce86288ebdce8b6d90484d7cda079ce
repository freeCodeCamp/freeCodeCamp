/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict'

/**
 * Module exports.
 * @public
 */

module.exports = toIdentifier

/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */

function toIdentifier (str) {
  return str
    .split(' ')
    .map(function (token) {
      return token.slice(0, 1).toUpperCase() + token.slice(1)
    })
    .join('')
    .replace(/[^ _0-9a-z]/gi, '')
}
