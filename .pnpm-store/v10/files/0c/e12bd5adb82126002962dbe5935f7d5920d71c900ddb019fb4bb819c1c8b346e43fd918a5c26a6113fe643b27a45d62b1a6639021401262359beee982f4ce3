# Require setup and teardown code to be within a hook (`require-hook`)

Often while writing tests you have some setup work that needs to happen before
tests run, and you have some finishing work that needs to happen after tests
run. Jest provides helper functions to handle this.

It's common when writing tests to need to perform setup work that needs to
happen before tests run, and finishing work after tests run.

Because Jest executes all `describe` handlers in a test file _before_ it
executes any of the actual tests, it's important to ensure setup and teardown
work is done inside `before*` and `after*` handlers respectively, rather than
inside the `describe` blocks.

## Rule details

This rule flags any expression that is either at the toplevel of a test file or
directly within the body of a `describe`, _except_ for the following:

- `import` statements
- `const` variables
- `let` _declarations_, and initializations to `null` or `undefined`
- Classes
- Types
- Calls to the standard Jest globals

This rule flags any function calls within test files that are directly within
the body of a `describe`, and suggests wrapping them in one of the four
lifecycle hooks.

Here is a slightly contrived test file showcasing some common cases that would
be flagged:

```js
import { database, isCity } from '../database';
import { Logger } from '../../../src/Logger';
import { loadCities } from '../api';

jest.mock('../api');

const initializeCityDatabase = () => {
  database.addCity('Vienna');
  database.addCity('San Juan');
  database.addCity('Wellington');
};

const clearCityDatabase = () => {
  database.clear();
};

initializeCityDatabase();

test('that persists cities', () => {
  expect(database.cities.length).toHaveLength(3);
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('when loading cities from the api', () => {
  let consoleWarnSpy = jest.spyOn(console, 'warn');

  loadCities.mockResolvedValue(['Wellington', 'London']);

  it('does not duplicate cities', async () => {
    await database.loadCities();

    expect(database.cities).toHaveLength(4);
  });

  it('logs any duplicates', async () => {
    await database.loadCities();

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Ignored duplicate cities: Wellington',
    );
  });
});

clearCityDatabase();
```

Here is the same slightly contrived test file showcasing the same common cases
but in ways that would be **not** flagged:

```js
import { database, isCity } from '../database';
import { Logger } from '../../../src/Logger';
import { loadCities } from '../api';

jest.mock('../api');

const initializeCityDatabase = () => {
  database.addCity('Vienna');
  database.addCity('San Juan');
  database.addCity('Wellington');
};

const clearCityDatabase = () => {
  database.clear();
};

beforeEach(() => {
  initializeCityDatabase();
});

test('that persists cities', () => {
  expect(database.cities.length).toHaveLength(3);
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('when loading cities from the api', () => {
  let consoleWarnSpy;

  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, 'warn');
    loadCities.mockResolvedValue(['Wellington', 'London']);
  });

  it('does not duplicate cities', async () => {
    await database.loadCities();

    expect(database.cities).toHaveLength(4);
  });

  it('logs any duplicates', async () => {
    await database.loadCities();

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Ignored duplicate cities: Wellington',
    );
  });
});

afterEach(() => {
  clearCityDatabase();
});
```

## Options

If there are methods that you want to call outside of hooks and tests, you can
mark them as allowed using the `allowedFunctionCalls` option.

```json
{
  "jest/require-hook": [
    "error",
    {
      "allowedFunctionCalls": ["enableAutoDestroy"]
    }
  ]
}
```

Examples of **correct** code when using
`{ "allowedFunctionCalls": ["enableAutoDestroy"] }` option:

```js
/* eslint jest/require-hook: ["error", { "allowedFunctionCalls": ["enableAutoDestroy"] }] */

import { enableAutoDestroy, mount } from '@vue/test-utils';
import { initDatabase, tearDownDatabase } from './databaseUtils';

enableAutoDestroy(afterEach);

beforeEach(initDatabase);
afterEach(tearDownDatabase);

describe('Foo', () => {
  test('always returns 42', () => {
    expect(global.getAnswer()).toBe(42);
  });
});
```
