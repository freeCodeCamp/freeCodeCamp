'use strict';

module.exports = typeof Promise === 'function' ? Promise : require('pinkie');
