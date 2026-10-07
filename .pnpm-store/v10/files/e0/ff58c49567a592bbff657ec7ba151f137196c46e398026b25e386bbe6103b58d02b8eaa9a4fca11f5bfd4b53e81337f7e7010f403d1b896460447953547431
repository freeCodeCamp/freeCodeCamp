/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import * as util from './chai/utils/index.js';
import {AssertionError} from 'assertion-error';
import {config} from './chai/config.js';
import './chai/core/assertions.js';
import {expect} from './chai/interface/expect.js';
import {Assertion} from './chai/assertion.js';
import * as should from './chai/interface/should.js';
import {assert} from './chai/interface/assert.js';

const used = [];

// Assertion Error
export {AssertionError};

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai.
 *
 * @param {Function} fn
 * @returns {this} for chaining
 * @public
 */
export function use(fn) {
  const exports = {
    use,
    AssertionError,
    util,
    config,
    expect,
    assert,
    Assertion,
    ...should
  };

  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }

  return exports;
}

// Utility Functions
export {util};

// Configuration
export {config};

// Primary `Assertion` prototype
export * from './chai/assertion.js';

// Expect interface
export * from './chai/interface/expect.js';

// Should interface
export * from './chai/interface/should.js';

// Assert interface
export * from './chai/interface/assert.js';
