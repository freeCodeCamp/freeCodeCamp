'use strict';
var $ = require('../internals/export');
var globalThis = require('../internals/global-this');
var schedulersFix = require('../internals/schedulers-fix');

var setInterval = schedulersFix(globalThis.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: globalThis.setInterval !== setInterval }, {
  setInterval: setInterval
});
