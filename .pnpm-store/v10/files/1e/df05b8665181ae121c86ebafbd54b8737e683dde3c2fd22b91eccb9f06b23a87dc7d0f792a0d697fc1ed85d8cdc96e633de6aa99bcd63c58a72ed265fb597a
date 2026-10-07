# Prevent calling `expect` conditionally (`no-conditional-expect`)

This rule prevents the use of `expect` in conditional blocks, such as `if`s &
`catch`s.

This includes using `expect` in callbacks to functions named `catch`, which are
assumed to be promises.

## Rule Details

Jest only considers a test to have failed if it throws an error, meaning if
calls to assertion functions like `expect` occur in conditional code such as a
`catch` statement, tests can end up passing but not actually test anything.

Additionally, conditionals tend to make tests more brittle and complex, as they
increase the amount of mental thinking needed to understand what is actually
being tested.

While `expect.assertions` & `expect.hasAssertions` can help prevent tests from
silently being skipped, when combined with conditionals they typically result in
even more complexity being introduced.

The following patterns are warnings:

```js
it('foo', () => {
  doTest && expect(1).toBe(2);
});

it('bar', () => {
  if (!skipTest) {
    expect(1).toEqual(2);
  }
});

it('baz', async () => {
  try {
    await foo();
  } catch (err) {
    expect(err).toMatchObject({ code: 'MODULE_NOT_FOUND' });
  }
});

it('throws an error', async () => {
  await foo().catch(error => expect(error).toBeInstanceOf(error));
});
```

The following patterns are not warnings:

```js
it('foo', () => {
  expect(!value).toBe(false);
});

function getValue() {
  if (process.env.FAIL) {
    return 1;
  }

  return 2;
}

it('foo', () => {
  expect(getValue()).toBe(2);
});

it('validates the request', () => {
  try {
    processRequest(request);
  } catch {
    // ignore errors
  } finally {
    expect(validRequest).toHaveBeenCalledWith(request);
  }
});

it('throws an error', async () => {
  await expect(foo).rejects.toThrow(Error);
});
```

### How to catch a thrown error for testing without violating this rule

A common situation that comes up with this rule is when wanting to test
properties on a thrown error, as Jest's `toThrow` matcher only checks the
`message` property.

Most people write something like this:

```typescript
describe('when the http request fails', () => {
  it('includes the status code in the error', async () => {
    try {
      await makeRequest(url);
    } catch (error) {
      expect(error).toHaveProperty('statusCode', 404);
    }
  });
});
```

As stated above, the problem with this is that if `makeRequest()` doesn't throw
the test will still pass as if the `expect` had been called.

While you can use `expect.assertions` & `expect.hasAssertions` for these
situations, they only work with `expect`.

A better way to handle this situation is to introduce a wrapper to handle the
catching, and otherwise returns a specific "no error thrown" error if nothing is
thrown by the wrapped function:

```typescript
class NoErrorThrownError extends Error {}

const getError = async <TError>(call: () => unknown): Promise<TError> => {
  try {
    await call();

    throw new NoErrorThrownError();
  } catch (error: unknown) {
    return error as TError;
  }
};

describe('when the http request fails', () => {
  it('includes the status code in the error', async () => {
    const error = await getError(async () => makeRequest(url));

    // check that the returned error wasn't that no error was thrown
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toHaveProperty('statusCode', 404);
  });
});
```
