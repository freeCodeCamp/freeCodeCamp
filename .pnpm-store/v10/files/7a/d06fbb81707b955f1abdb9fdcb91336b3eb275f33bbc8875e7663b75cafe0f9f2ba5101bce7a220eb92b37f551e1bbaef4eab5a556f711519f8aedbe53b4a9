/*!
 * send
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2014-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
'use strict'
/**
 * Create a Content-Range header.
 *
 * @param {string} type
 * @param {number} size
 * @param {array} [range]
 */
function contentRange (type, size, range) {
  return type + ' ' + (range ? range.start + '-' + range.end : '*') + '/' + size
}
exports.contentRange = contentRange
