# Enforces a maximum depth to nested describe calls (`max-nested-describe`)

While it's useful to be able to group your tests together within the same file
using `describe()`, having too many levels of nesting throughout your tests make
them difficult to read.

## Rule Details

This rule enforces a maximum depth to nested `describe()` calls to improve code
clarity in your tests.

The following patterns are considered warnings (with the default option of
`{ "max": 5 } `):

```js
describe('foo', () => {
  describe('bar', () => {
    describe('baz', () => {
      describe('qux', () => {
        describe('quxx', () => {
          describe('too many', () => {
            it('should get something', () => {
              expect(getSomething()).toBe('Something');
            });
          });
        });
      });
    });
  });
});

describe('foo', function () {
  describe('bar', function () {
    describe('baz', function () {
      describe('qux', function () {
        describe('quxx', function () {
          describe('too many', function () {
            it('should get something', () => {
              expect(getSomething()).toBe('Something');
            });
          });
        });
      });
    });
  });
});
```

The following patterns are **not** considered warnings (with the default option
of `{ "max": 5 } `):

```js
describe('foo', () => {
  describe('bar', () => {
    it('should get something', () => {
      expect(getSomething()).toBe('Something');
    });
  });

  describe('qux', () => {
    it('should get something', () => {
      expect(getSomething()).toBe('Something');
    });
  });
});

describe('foo2', function () {
  it('should get something', () => {
    expect(getSomething()).toBe('Something');
  });
});

describe('foo', function () {
  describe('bar', function () {
    describe('baz', function () {
      describe('qux', function () {
        describe('this is the limit', function () {
          it('should get something', () => {
            expect(getSomething()).toBe('Something');
          });
        });
      });
    });
  });
});
```

## Options

```json
{
  "jest/max-nested-describe": [
    "error",
    {
      "max": 5
    }
  ]
}
```

### `max`

Enforces a maximum depth for nested `describe()`.

This has a default value of `5`.

Examples of patterns **not** considered warnings with options set to
`{ "max": 2 }`:

```js
describe('foo', () => {
  describe('bar', () => {
    it('should get something', () => {
      expect(getSomething()).toBe('Something');
    });
  });
});

describe('foo2', function () {
  describe('bar2', function () {
    it('should get something', function () {
      expect(getSomething()).toBe('Something');
    });

    it('should get  else', function () {
      expect(getSomething()).toBe('Something');
    });
  });
});
```
