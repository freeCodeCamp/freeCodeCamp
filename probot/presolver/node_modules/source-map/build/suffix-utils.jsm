/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
function runSourceMapTests(modName, do_throw) {
  let mod = require(modName);
  let assert = require('test/source-map/assert');
  let util = require('test/source-map/util');

  assert.init(do_throw);

  for (let k in mod) {
    if (/^test/.test(k)) {
      mod[k](assert, util);
    }
  }

}
this.runSourceMapTests = runSourceMapTests;
