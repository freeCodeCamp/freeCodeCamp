# Disallow specific matchers & modifiers (`no-restricted-matchers`)

This rule bans specific matchers & modifiers from being used, and can suggest
alternatives.

## Rule Details

Bans are expressed in the form of a map, with the value being either a string
message to be shown, or `null` if the default rule message should be used.

Both matchers, modifiers, and chains of the two are checked, allowing for
specific variations of a matcher to be banned if desired.

By default, this map is empty, meaning no matchers or modifiers are banned.

For example:

```json
{
  "jest/no-restricted-matchers": [
    "error",
    {
      "toBeFalsy": null,
      "resolves": "Use `expect(await promise)` instead.",
      "not.toHaveBeenCalledWith": null
    }
  ]
}
```

Examples of **incorrect** code for this rule with the above configuration

```js
it('is false', () => {
  expect(a).toBeFalsy();
});

it('resolves', async () => {
  await expect(myPromise()).resolves.toBe(true);
});

describe('when an error happens', () => {
  it('does not upload the file', async () => {
    expect(uploadFileMock).not.toHaveBeenCalledWith('file.name');
  });
});
```
