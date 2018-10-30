var $export = require('./_export');
var define = require('./_object-define');
var create = require('./_object-create');

$export($export.S + $export.F, 'Object', {
  make: function (proto, mixin) {
    return define(create(proto), mixin);
  }
});
