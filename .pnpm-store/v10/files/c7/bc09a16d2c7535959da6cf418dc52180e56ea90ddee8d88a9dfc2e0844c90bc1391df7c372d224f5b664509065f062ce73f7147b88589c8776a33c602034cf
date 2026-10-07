'use strict';
const regex = '[\uD800-\uDBFF][\uDC00-\uDFFF]';

const astralRegex = options => options && options.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');

module.exports = astralRegex;
