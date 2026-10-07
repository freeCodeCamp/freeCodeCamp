/* @noflow */
const report = require('../dist');
/* eslint-disable flowtype/require-return-type */
const anArray = ['some', 'values', () => 'hello', 3654, true];
const anObject = {
  string: 'value',
  fun: (a, b) => a + b,
  number: 42,
  symbol: Symbol('some symbol'),
  boolean: true,
  array: anArray,
};

anObject.nestedObject = Object.assign({}, anObject);

report.inspect(anObject);
