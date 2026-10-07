# Disallow manually importing from `__mocks__` (`no-mocks-import`)

When using `jest.mock`, your tests (just like the code being tested) should
import from `./x`, not `./__mocks__/x`. Not following this rule can lead to
confusion, because you will have multiple instances of the mocked module:

```js
jest.mock('./x');
const x1 = require('./x');
const x2 = require('./__mocks__/x');

test('x', () => {
  expect(x1).toBe(x2); // fails! They are both instances of `./__mocks__/x`, but not referentially equal
});
```

### Rule details

This rule reports imports from a path containing a `__mocks__` component.

Example violations:

```js
import thing from './__mocks__/index';
require('./__mocks__/index');
require('__mocks__');
```
