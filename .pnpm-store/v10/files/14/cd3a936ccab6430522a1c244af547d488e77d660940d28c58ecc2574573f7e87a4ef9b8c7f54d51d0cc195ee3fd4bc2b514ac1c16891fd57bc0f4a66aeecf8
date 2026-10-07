# `ensure(validationDatum1[, ...validationDatumN[, options]])`

Provides a complete cumulated input validation for an API endpoint. Validates multiple input arguments and consolidates eventual errors into one.

## Arguments

### `validationDatum1[, ...validationDatumN]`

For each argument to be validated a `validationDatum` of following stucture should be defined:

```javascript
[argumentName, inputValue, ensureFunction, (options = {})];
```

- `argumentName` - Name of validated argument (used for meaningful error messaging)
- `inputValue` - An argument value as passed to function
- `ensureFunction` - An `ensureX` function with which argument should be validated (e.g. if we're after string, then we need [string/ensure](string.md#stringensure))
- `options` - Optional, extra options to be passed to `ensureX` function

### `[options]`

Eventual options be passed to underlying `ensureX` functions. If custom error constructor is passed with an `Error` option, then cumulated error is created with this constructor.

## Usage example

```javascript
const ensure = require("type/ensure");
const ensureString = require("type/string/ensure");
const ensureNaturalNumber = require("type/natural-number/ensure");

const resolveRepositoryIssue = (repoName, issueNumber) => {
  // Validate input
  [repoName, issueNumber] = ensure(
    ["repoName", repoName, ensureString],
    ["issueNumber", issueNumber, ensureNaturalNumber],
    { Error: UserError }
  );
  // ... logic
};
```
