'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _jestSnapshot = require('jest-snapshot');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = config => {
  global.expect = _expect2.default;
  _expect2.default.setState({ expand: config.expand });
  _expect2.default.extend({
    toMatchSnapshot: _jestSnapshot.toMatchSnapshot,
    toThrowErrorMatchingSnapshot: _jestSnapshot.toThrowErrorMatchingSnapshot
  });
  _expect2.default.addSnapshotSerializer = _jestSnapshot.addSerializer;

  const jasmine = global.jasmine;
  jasmine.anything = _expect2.default.anything;
  jasmine.any = _expect2.default.any;
  jasmine.objectContaining = _expect2.default.objectContaining;
  jasmine.arrayContaining = _expect2.default.arrayContaining;
  jasmine.stringMatching = _expect2.default.stringMatching;

  jasmine.addMatchers = jasmineMatchersObject => {
    const jestMatchersObject = Object.create(null);
    Object.keys(jasmineMatchersObject).forEach(name => {
      jestMatchersObject[name] = function () {
        // use "expect.extend" if you need to use equality testers (via this.equal)
        const result = jasmineMatchersObject[name](null, null);
        // if there is no 'negativeCompare', both should be handled by `compare`
        const negativeCompare = result.negativeCompare || result.compare;

        return this.isNot ? negativeCompare.apply(null, arguments) : result.compare.apply(null, arguments);
      };
    });

    const expect = global.expect;
    expect.extend(jestMatchersObject);
  };
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */