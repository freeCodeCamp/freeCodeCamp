'use strict';
const regex = '[\uD800-\uDBFF][\uDC00-\uDFFF]';

module.exports = opts => opts && opts.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');
