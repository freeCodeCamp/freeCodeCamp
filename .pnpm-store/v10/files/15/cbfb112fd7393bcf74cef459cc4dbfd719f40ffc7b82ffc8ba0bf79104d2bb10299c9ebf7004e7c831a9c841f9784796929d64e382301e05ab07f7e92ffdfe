'use strict';
/* eslint-disable no-undef, no-useless-call, sonarjs/no-reference-error -- required for testing */
/* eslint-disable es/no-legacy-object-prototype-accessor-methods -- required for testing */
var IS_PURE = require('../internals/is-pure');
var globalThis = require('../internals/global-this');
var fails = require('../internals/fails');
var WEBKIT = require('../internals/environment-webkit-version');

// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function () {
  // This feature detection crashes old WebKit
  // https://github.com/zloirock/core-js/issues/232
  if (WEBKIT && WEBKIT < 535) return;
  var key = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete globalThis[key];
});
