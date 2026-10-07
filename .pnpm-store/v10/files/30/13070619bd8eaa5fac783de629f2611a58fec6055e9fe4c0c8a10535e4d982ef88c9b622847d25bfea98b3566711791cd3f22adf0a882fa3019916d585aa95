# Enforce assertion to be made in a test body (`expect-expect`)

Ensure that there is at least one `expect` call made in a test.

## Rule details

This rule triggers when there is no call made to `expect` in a test, to prevent
users from forgetting to add assertions.

Examples of **incorrect** code for this rule:

```js
it('should be a test', () => {
  console.log('no assertion');
});
test('should assert something', () => {});
```

Examples of **correct** code for this rule:

```js
it('should be a test', () => {
  expect(true).toBeDefined();
});
it('should work with callbacks/async', () => {
  somePromise().then(res => expect(res).toBe('passed'));
});
```

## Options

```json
{
  "jest/expect-expect": [
    "error",
    {
      "assertFunctionNames": ["expect"],
      "additionalTestBlockFunctions": []
    }
  ]
}
```

### `assertFunctionNames`

This array option specifies the names of functions that should be considered to
be asserting functions. Function names can use wildcards i.e `request.*.expect`,
`request.**.expect`, `request.*.expect*`

Examples of **incorrect** code for the `{ "assertFunctionNames": ["expect"] }`
option:

```js
/* eslint jest/expect-expect: ["error", { "assertFunctionNames": ["expect"] }] */

import { expectSaga } from 'redux-saga-test-plan';
import { addSaga } from '../src/sagas';

test('returns sum', () => {
  expectSaga(addSaga, 1, 1).returns(2).run();
});
```

Examples of **correct** code for the
`{ "assertFunctionNames": ["expect", "expectSaga"] }` option:

```js
/* eslint jest/expect-expect: ["error", { "assertFunctionNames": ["expect", "expectSaga"] }] */

import { expectSaga } from 'redux-saga-test-plan';
import { addSaga } from '../src/sagas';

test('returns sum', () => {
  expectSaga(addSaga, 1, 1).returns(2).run();
});
```

Since the string is compiled into a regular expression, you'll need to escape
special characters such as `$` with a double backslash:

```js
/* eslint jest/expect-expect: ["error", { "assertFunctionNames": ["expect\\$"] }] */

it('is money-like', () => {
  expect$(1.0);
});
```

Examples of **correct** code for working with the HTTP assertions library
[SuperTest](https://www.npmjs.com/package/supertest) with the
`{ "assertFunctionNames": ["expect", "request.**.expect"] }` option:

```js
/* eslint jest/expect-expect: ["error", { "assertFunctionNames": ["expect", "request.**.expect"] }] */
const request = require('supertest');
const express = require('express');

const app = express();

describe('GET /user', function () {
  it('responds with json', function (done) {
    request(app).get('/user').expect('Content-Type', /json/).expect(200, done);
  });
});
```

### `additionalTestBlockFunctions`

This array can be used to specify the names of functions that should also be
treated as test blocks:

```json
{
  "rules": {
    "jest/expect-expect": [
      "error",
      { "additionalTestBlockFunctions": ["theoretically"] }
    ]
  }
}
```

The following is _correct_ when using the above configuration:

```js
import theoretically from 'jest-theories';

describe('NumberToLongString', () => {
  const theories = [
    { input: 100, expected: 'One hundred' },
    { input: 1000, expected: 'One thousand' },
    { input: 10000, expected: 'Ten thousand' },
    { input: 100000, expected: 'One hundred thousand' },
  ];

  theoretically(
    'the number {input} is correctly translated to string',
    theories,
    theory => {
      const output = NumberToLongString(theory.input);
      expect(output).toBe(theory.expected);
    },
  );
});
```
