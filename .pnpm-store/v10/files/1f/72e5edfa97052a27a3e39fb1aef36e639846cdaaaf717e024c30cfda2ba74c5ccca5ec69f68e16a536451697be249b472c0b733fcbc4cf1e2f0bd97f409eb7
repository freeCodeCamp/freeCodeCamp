'use strict';
var $ = require('../internals/export');
var globalThis = require('../internals/global-this');
var schedulersFix = require('../internals/schedulers-fix');

var setTimeout = schedulersFix(globalThis.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: globalThis.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});
