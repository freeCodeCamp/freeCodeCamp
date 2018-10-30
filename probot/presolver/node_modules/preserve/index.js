/*!
 * preserve <https://github.com/jonschlinkert/preserve>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Replace tokens in `str` with a temporary, heuristic placeholder.
 *
 * ```js
 * tokens.before('{a\\,b}');
 * //=> '{__ID1__}'
 * ```
 *
 * @param  {String} `str`
 * @return {String} String with placeholders.
 * @api public
 */

exports.before = function before(str, re) {
  return str.replace(re, function (match) {
    var id = randomize();
    cache[id] = match;
    return '__ID' + id + '__';
  });
};

/**
 * Replace placeholders in `str` with original tokens.
 *
 * ```js
 * tokens.after('{__ID1__}');
 * //=> '{a\\,b}'
 * ```
 *
 * @param  {String} `str` String with placeholders
 * @return {String} `str` String with original tokens.
 * @api public
 */

exports.after = function after(str) {
  return str.replace(/__ID(.{5})__/g, function (_, id) {
    return cache[id];
  });
};

function randomize() {
  return Math.random().toString().slice(2, 7);
}

var cache = {};