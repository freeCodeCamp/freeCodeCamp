'use strict';
var $ = require('../internals/export');
var $transfer = require('../internals/array-buffer-transfer');

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
  }
});
