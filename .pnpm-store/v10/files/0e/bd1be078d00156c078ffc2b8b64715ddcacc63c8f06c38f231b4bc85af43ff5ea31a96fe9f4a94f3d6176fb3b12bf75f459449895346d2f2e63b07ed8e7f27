'use strict';
var $ = require('../internals/export');
var createHTML = require('../internals/create-html');
var forcedStringHTMLMethod = require('../internals/string-html-forced');

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});
