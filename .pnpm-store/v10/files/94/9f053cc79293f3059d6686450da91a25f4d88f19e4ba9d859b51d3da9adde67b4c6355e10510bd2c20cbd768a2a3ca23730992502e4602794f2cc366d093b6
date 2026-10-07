'use strict';
var $ = require('../internals/export');
var globalThis = require('../internals/global-this');

// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
$({ global: true, forced: globalThis.self !== globalThis }, {
  self: globalThis
});
