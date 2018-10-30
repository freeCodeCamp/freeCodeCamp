'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringMatching = exports.stringContaining = exports.objectContaining = exports.arrayContaining = exports.anything = exports.any = undefined;

var _jasmine_utils = require('./jasmine_utils');

class AsymmetricMatcher {

  constructor() {
    this.$$typeof = Symbol.for('jest.asymmetricMatcher');
  }
} /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

class Any extends AsymmetricMatcher {

  constructor(sample) {
    super();
    if (typeof sample === 'undefined') {
      throw new TypeError('any() expects to be passed a constructor function. ' + 'Please pass one or use anything() to match any object.');
    }
    this.sample = sample;
  }

  asymmetricMatch(other) {
    if (this.sample == String) {
      return typeof other == 'string' || other instanceof String;
    }

    if (this.sample == Number) {
      return typeof other == 'number' || other instanceof Number;
    }

    if (this.sample == Function) {
      return typeof other == 'function' || other instanceof Function;
    }

    if (this.sample == Object) {
      return typeof other == 'object';
    }

    if (this.sample == Boolean) {
      return typeof other == 'boolean';
    }

    return other instanceof this.sample;
  }

  toString() {
    return 'Any';
  }

  getExpectedType() {
    if (this.sample == String) {
      return 'string';
    }

    if (this.sample == Number) {
      return 'number';
    }

    if (this.sample == Function) {
      return 'function';
    }

    if (this.sample == Object) {
      return 'object';
    }

    if (this.sample == Boolean) {
      return 'boolean';
    }

    return (0, _jasmine_utils.fnNameFor)(this.sample);
  }

  toAsymmetricMatcher() {
    return 'Any<' + (0, _jasmine_utils.fnNameFor)(this.sample) + '>';
  }
}

class Anything extends AsymmetricMatcher {
  asymmetricMatch(other) {
    return !(0, _jasmine_utils.isUndefined)(other) && other !== null;
  }

  toString() {
    return 'Anything';
  }

  // No getExpectedType method, because it matches either null or undefined.

  toAsymmetricMatcher() {
    return 'Anything';
  }
}

class ArrayContaining extends AsymmetricMatcher {

  constructor(sample) {
    super();
    this.sample = sample;
  }

  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new Error("You must provide an array to ArrayContaining, not '" + typeof this.sample + "'.");
    }

    return this.sample.length === 0 || Array.isArray(other) && this.sample.every(item => other.some(another => (0, _jasmine_utils.equals)(item, another)));
  }

  toString() {
    return 'ArrayContaining';
  }

  getExpectedType() {
    return 'array';
  }
}

class ObjectContaining extends AsymmetricMatcher {

  constructor(sample) {
    super();
    this.sample = sample;
  }

  asymmetricMatch(other) {
    if (typeof this.sample !== 'object') {
      throw new Error("You must provide an object to ObjectContaining, not '" + typeof this.sample + "'.");
    }

    for (const property in this.sample) {
      if (!(0, _jasmine_utils.hasProperty)(other, property) || !(0, _jasmine_utils.equals)(this.sample[property], other[property])) {
        return false;
      }
    }

    return true;
  }

  toString() {
    return 'ObjectContaining';
  }

  getExpectedType() {
    return 'object';
  }
}

class StringContaining extends AsymmetricMatcher {

  constructor(sample) {
    super();
    if (!(0, _jasmine_utils.isA)('String', sample)) {
      throw new Error('Expected is not a string');
    }
    this.sample = sample;
  }

  asymmetricMatch(other) {
    if (!(0, _jasmine_utils.isA)('String', other)) {
      return false;
    }

    return other.includes(this.sample);
  }

  toString() {
    return 'StringContaining';
  }

  getExpectedType() {
    return 'string';
  }
}

class StringMatching extends AsymmetricMatcher {

  constructor(sample) {
    super();
    if (!(0, _jasmine_utils.isA)('String', sample) && !(0, _jasmine_utils.isA)('RegExp', sample)) {
      throw new Error('Expected is not a String or a RegExp');
    }

    this.sample = new RegExp(sample);
  }

  asymmetricMatch(other) {
    if (!(0, _jasmine_utils.isA)('String', other)) {
      return false;
    }

    return this.sample.test(other);
  }

  toString() {
    return 'StringMatching';
  }

  getExpectedType() {
    return 'string';
  }
}

const any = exports.any = expectedObject => new Any(expectedObject);
const anything = exports.anything = () => new Anything();
const arrayContaining = exports.arrayContaining = sample => new ArrayContaining(sample);
const objectContaining = exports.objectContaining = sample => new ObjectContaining(sample);
const stringContaining = exports.stringContaining = expected => new StringContaining(expected);
const stringMatching = exports.stringMatching = expected => new StringMatching(expected);