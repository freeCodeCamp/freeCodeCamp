# Disallow use of deprecated functions (`no-deprecated-functions`)

Over the years Jest has accrued some debt in the form of functions that have
either been renamed for clarity, or replaced with more powerful APIs.

While typically these deprecated functions are kept in the codebase for a number
of majors, eventually they are removed completely.

This rule requires knowing which version of Jest you're using - see
[this section of the readme](../../README.md#jest-version-setting) for details
on how that is obtained automatically and how you can explicitly provide a
version if needed.

## Rule details

This rule warns about calls to deprecated functions, and provides details on
what to replace them with, based on the version of Jest that is installed.

This rule can also autofix a number of these deprecations for you.

### `jest.resetModuleRegistry`

This function was renamed to `resetModules` in Jest 15, and is scheduled for
removal in Jest 27.

### `jest.addMatchers`

This function was replaced with `expect.extend` in Jest 17, and is scheduled for
removal in Jest 27.

### `require.requireActual` & `require.requireMock`

These functions were replaced in Jest 21 and removed in Jest 26.

Originally, the `requireActual` & `requireMock` the `requireActual`&
`requireMock` functions were placed onto the `require` function.

These functions were later moved onto the `jest` object in order to be easier
for type checkers to handle, and their use via `require` deprecated. Finally,
the release of Jest 26 saw them removed from the `require` function all
together.

### `jest.runTimersToTime`

This function was renamed to `advanceTimersByTime` in Jest 22, and is scheduled
for removal in Jest 27.

### `jest.genMockFromModule`

This function was renamed to `createMockFromModule` in Jest 26, and is scheduled
for removal in a future version of Jest.
