# Suggest using `expect.assertions()` OR `expect.hasAssertions()` (`prefer-expect-assertions`)

Ensure every test to have either `expect.assertions(<number of assertions>)` OR
`expect.hasAssertions()` as its first expression.

## Rule details

This rule triggers a warning if,

- `expect.assertions(<number of assertions>)` OR `expect.hasAssertions()` is not
  present as first statement in a test, e.g.:

```js
test('my test', () => {
  expect(someThing()).toEqual('foo');
});
```

- `expect.assertions(<number of assertions>)` is the first statement in a test
  where argument passed to `expect.assertions(<number of assertions>)` is not a
  valid number, e.g.:

```js
test('my test', () => {
  expect.assertions('1');
  expect(someThing()).toEqual('foo');
});
```

### Default configuration

The following patterns are considered warnings:

```js
test('my test', () => {
  expect.assertions('1');
  expect(someThing()).toEqual('foo');
});

test('my test', () => {
  expect(someThing()).toEqual('foo');
});
```

The following patterns would not be considered warnings:

```js
test('my test', () => {
  expect.assertions(1);
  expect(someThing()).toEqual('foo');
});

test('my test', () => {
  expect.hasAssertions();
  expect(someThing()).toEqual('foo');
});
```

## Options

This rule can be configured to only check tests that match certain patterns that
typically look like `expect` calls might be missed, such as in promises or
loops.

By default, none of these options are enabled meaning the rule checks _every_
test for a call to either `expect.hasAssertions` or `expect.assertions`. If any
of the options are enabled the rule checks any test that matches _at least one_
of the patterns represented by the enabled options (think "OR" rather than
"AND").

#### `onlyFunctionsWithAsyncKeyword`

When `true`, this rule will only warn for tests that use the `async` keyword.

```json
{
  "rules": {
    "jest/prefer-expect-assertions": [
      "warn",
      { "onlyFunctionsWithAsyncKeyword": true }
    ]
  }
}
```

When `onlyFunctionsWithAsyncKeyword` option is set to `true`, the following
pattern would be a warning:

```js
test('my test', async () => {
  const result = await someAsyncFunc();
  expect(result).toBe('foo');
});
```

While the following patterns would not be considered warnings:

```js
test('my test', () => {
  const result = someFunction();
  expect(result).toBe('foo');
});

test('my test', async () => {
  expect.assertions(1);
  const result = await someAsyncFunc();
  expect(result).toBe('foo');
});
```

#### `onlyFunctionsWithExpectInLoop`

When `true`, this rule will only warn for tests that have `expect` calls within
a native loop.

```json
{
  "rules": {
    "jest/prefer-expect-assertions": [
      "warn",
      { "onlyFunctionsWithAsyncKeyword": true }
    ]
  }
}
```

Examples of **incorrect** code when `'onlyFunctionsWithExpectInLoop'` is `true`:

```js
describe('getNumbers', () => {
  it('only returns numbers that are greater than zero', () => {
    const numbers = getNumbers();

    for (const number in numbers) {
      expect(number).toBeGreaterThan(0);
    }
  });
});
```

Examples of **correct** code when `'onlyFunctionsWithExpectInLoop'` is `true`:

```js
describe('getNumbers', () => {
  it('only returns numbers that are greater than zero', () => {
    expect.hasAssertions();

    const numbers = getNumbers();

    for (const number in numbers) {
      expect(number).toBeGreaterThan(0);
    }
  });

  it('returns more than one number', () => {
    expect(getNumbers().length).toBeGreaterThan(1);
  });
});
```

#### `onlyFunctionsWithExpectInCallback`

When `true`, this rule will only warn for tests that have `expect` calls within
a callback.

```json
{
  "rules": {
    "jest/prefer-expect-assertions": [
      "warn",
      { "onlyFunctionsWithExpectInCallback": true }
    ]
  }
}
```

Examples of **incorrect** code when `'onlyFunctionsWithExpectInCallback'` is
`true`:

```js
describe('getNumbers', () => {
  it('only returns numbers that are greater than zero', () => {
    const numbers = getNumbers();

    getNumbers().forEach(number => {
      expect(number).toBeGreaterThan(0);
    });
  });
});

describe('/users', () => {
  it.each([1, 2, 3])('returns ok', id => {
    client.get(`/users/${id}`, response => {
      expect(response.status).toBe(200);
    });
  });
});
```

Examples of **correct** code when `'onlyFunctionsWithExpectInCallback'` is
`true`:

```js
describe('getNumbers', () => {
  it('only returns numbers that are greater than zero', () => {
    expect.hasAssertions();

    const numbers = getNumbers();

    getNumbers().forEach(number => {
      expect(number).toBeGreaterThan(0);
    });
  });
});

describe('/users', () => {
  it.each([1, 2, 3])('returns ok', id => {
    expect.assertions(3);

    client.get(`/users/${id}`, response => {
      expect(response.status).toBe(200);
    });
  });
});
```
