// Exports true if environment provides native `Symbol` implementation

'use strict';

module.exports = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
