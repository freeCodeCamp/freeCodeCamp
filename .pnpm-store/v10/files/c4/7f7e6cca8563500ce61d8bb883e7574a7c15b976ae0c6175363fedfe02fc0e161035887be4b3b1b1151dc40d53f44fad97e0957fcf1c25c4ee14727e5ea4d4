# Disallow setup and teardown hooks (`no-hooks`)

Jest provides global functions for setup and teardown tasks, which are called
before/after each test case and each test suite. The use of these hooks promotes
shared state between tests.

## Rule Details

This rule reports for the following function calls:

- `beforeAll`
- `beforeEach`
- `afterAll`
- `afterEach`

Examples of **incorrect** code for this rule:

```js
/* eslint jest/no-hooks: "error" */

function setupFoo(options) {
  /* ... */
}

function setupBar(options) {
  /* ... */
}

describe('foo', () => {
  let foo;

  beforeEach(() => {
    foo = setupFoo();
  });

  afterEach(() => {
    foo = null;
  });

  it('does something', () => {
    expect(foo.doesSomething()).toBe(true);
  });

  describe('with bar', () => {
    let bar;

    beforeEach(() => {
      bar = setupBar();
    });

    afterEach(() => {
      bar = null;
    });

    it('does something with bar', () => {
      expect(foo.doesSomething(bar)).toBe(true);
    });
  });
});
```

Examples of **correct** code for this rule:

```js
/* eslint jest/no-hooks: "error" */

function setupFoo(options) {
  /* ... */
}

function setupBar(options) {
  /* ... */
}

describe('foo', () => {
  it('does something', () => {
    const foo = setupFoo();
    expect(foo.doesSomething()).toBe(true);
  });

  it('does something with bar', () => {
    const foo = setupFoo();
    const bar = setupBar();
    expect(foo.doesSomething(bar)).toBe(true);
  });
});
```

## Options

```json
{
  "jest/no-hooks": [
    "error",
    {
      "allow": ["afterEach", "afterAll"]
    }
  ]
}
```

### `allow`

This array option controls which Jest hooks are checked by this rule. There are
four possible values:

- `"beforeAll"`
- `"beforeEach"`
- `"afterAll"`
- `"afterEach"`

By default, none of these options are enabled (the equivalent of
`{ "allow": [] }`).

Examples of **incorrect** code for the `{ "allow": ["afterEach"] }` option:

```js
/* eslint jest/no-hooks: ["error", { "allow": ["afterEach"] }] */

function setupFoo(options) {
  /* ... */
}

let foo;

beforeEach(() => {
  foo = setupFoo();
});

afterEach(() => {
  jest.resetModules();
});

test('foo does this', () => {
  // ...
});

test('foo does that', () => {
  // ...
});
```

Examples of **correct** code for the `{ "allow": ["afterEach"] }` option:

```js
/* eslint jest/no-hooks: ["error", { "allow": ["afterEach"] }] */

function setupFoo(options) {
  /* ... */
}

afterEach(() => {
  jest.resetModules();
});

test('foo does this', () => {
  const foo = setupFoo();
  // ...
});

test('foo does that', () => {
  const foo = setupFoo();
  // ...
});
```

## When Not To Use It

If you prefer using the setup and teardown hooks provided by Jest, you can
safely disable this rule.

## Further Reading

- [Jest docs - Setup and Teardown](https://facebook.github.io/jest/docs/en/setup-teardown.html)
