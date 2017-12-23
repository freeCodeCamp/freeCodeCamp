'use strict';

let loopProtect = require('../../../public/js/lib/loop-protect/loop-protect');

let test = require('tape');

test('LoopProtect injection', function(t) {
  t.plan(1);

  // Label indented 2 spaces - loop indented three spaces
  t.true(
    loopProtect('  loop1:\n   while(true) {\n\n}').indexOf('loop1') > 0,
    'Should keep loop label intact if not lined up with loop.'
  );
});