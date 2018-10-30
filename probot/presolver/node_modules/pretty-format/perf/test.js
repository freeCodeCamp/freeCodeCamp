/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import util from 'util';

const chalk = require('chalk');
const React = require('react');
const ReactTestRenderer = require('react-test-renderer');
const leftPad = require('left-pad');
const prettyFormat = require('../build');
const ReactTestComponent = require('../build/plugins/react_test_component');
const worldGeoJson = require('./world.geo.json');

const NANOSECONDS = 1000000000;
let TIMES_TO_RUN = 100000;

function testCase(name, fn) {
  let result, error, time, total;

  try {
    result = fn();
  } catch (err) {
    error = err;
  }

  if (!error) {
    const start = process.hrtime();

    for (let i = 0; i < TIMES_TO_RUN; i++) {
      fn();
    }

    const diff = process.hrtime(start);

    total = diff[0] * 1e9 + diff[1];
    time = Math.round(total / TIMES_TO_RUN);
  }

  return {
    error,
    name,
    result,
    time,
    total,
  };
}

function test(name, value, ignoreResult, prettyFormatOpts) {
  const formatted = testCase('prettyFormat()  ', () =>
    prettyFormat(value, prettyFormatOpts),
  );

  const inspected = testCase('util.inspect()  ', () => {
    return util.inspect(value, {
      depth: null,
      showHidden: true,
    });
  });

  const stringified = testCase('JSON.stringify()', () => {
    return JSON.stringify(value, null, '  ');
  });

  const results = [formatted, inspected, stringified].sort((a, b) => {
    return a.time - b.time;
  });

  const winner = results[0];

  results.forEach((item, index) => {
    item.isWinner = index === 0;
    item.isLoser = index === results.length - 1;
  });

  function log(current) {
    let message = current.name;

    if (current.time) {
      message += ' - ' + leftPad(current.time, 6) + 'ns';
    }
    if (current.total) {
      message +=
        ' - ' +
        current.total / NANOSECONDS +
        's total (' +
        TIMES_TO_RUN +
        ' runs)';
    }
    if (current.error) {
      message += ' - Error: ' + current.error.message;
    }

    if (!ignoreResult && current.result) {
      message += ' - ' + JSON.stringify(current.result);
    }

    message = ' ' + message + ' ';

    if (current.error) {
      message = chalk.dim(message);
    }

    const diff = current.time - winner.time;

    if (diff > winner.time * 0.85) {
      message = chalk.bgRed.black(message);
    } else if (diff > winner.time * 0.65) {
      message = chalk.bgYellow.black(message);
    } else if (!current.error) {
      message = chalk.bgGreen.black(message);
    } else {
      message = chalk.dim(message);
    }

    console.log('  ' + message);
  }

  console.log(name + ': ');
  results.forEach(log);
  console.log();
}

function returnArguments() {
  return arguments;
}

test('empty arguments', returnArguments());
test('arguments', returnArguments(1, 2, 3));
test('an empty array', []);
test('an array with items', [1, 2, 3]);
test('a typed array', new Uint32Array(3));
test('an array buffer', new ArrayBuffer(3));
test('a nested array', [[1, 2, 3]]);
test('true', true);
test('false', false);
test('an error', new Error());
test('a typed error with a message', new TypeError('message'));
/* eslint-disable no-new-func */
test('a function constructor', new Function());
/* eslint-enable no-new-func */
test('an anonymous function', () => {});
function named() {}
test('a named function', named);
test('Infinity', Infinity);
test('-Infinity', -Infinity);
test('an empty map', new Map());
const mapWithValues = new Map();
const mapWithNonStringKeys = new Map();
mapWithValues.set('prop1', 'value1');
mapWithValues.set('prop2', 'value2');
mapWithNonStringKeys.set({prop: 'value'}, {prop: 'value'});
test('a map with values', mapWithValues);
test('a map with non-string keys', mapWithNonStringKeys);
test('NaN', NaN);
test('null', null);
test('a number', 123);
test('a date', new Date(10e11));
test('an empty object', {});
test('an object with properties', {prop1: 'value1', prop2: 'value2'});
const objectWithPropsAndSymbols = {prop: 'value1'};
objectWithPropsAndSymbols[Symbol('symbol1')] = 'value2';
objectWithPropsAndSymbols[Symbol('symbol2')] = 'value3';
test('an object with properties and symbols', objectWithPropsAndSymbols);
test('an object with sorted properties', {a: 2, b: 1});
test('regular expressions from constructors', new RegExp('regexp'));
test('regular expressions from literals', /regexp/gi);
test('an empty set', new Set());
const setWithValues = new Set();
setWithValues.add('value1');
setWithValues.add('value2');
test('a set with values', setWithValues);
test('a string', 'string');
test('a symbol', Symbol('symbol'));
test('undefined', undefined);
test('a WeakMap', new WeakMap());
test('a WeakSet', new WeakSet());
test('deeply nested objects', {prop: {prop: {prop: 'value'}}});
const circularReferences = {};
circularReferences.prop = circularReferences;
test('circular references', circularReferences);
const parallelReferencesInner = {};
const parallelReferences = {
  prop1: parallelReferencesInner,
  prop2: parallelReferencesInner,
};
test('parallel references', parallelReferences);
test('able to customize indent', {prop: 'value'});
const bigObj = {};
for (let i = 0; i < 50; i++) {
  bigObj[i] = i;
}
test('big object', bigObj);

const element = React.createElement(
  'div',
  {onClick: () => {}, prop: {a: 1, b: 2}},
  React.createElement('div', {prop: {a: 1, b: 2}}),
  React.createElement('div'),
  React.createElement(
    'div',
    {prop: {a: 1, b: 2}},
    React.createElement('div', null, React.createElement('div')),
  ),
);

test('react', ReactTestRenderer.create(element).toJSON(), false, {
  plugins: [ReactTestComponent],
});

TIMES_TO_RUN = 100;
test('massive', worldGeoJson, true);
