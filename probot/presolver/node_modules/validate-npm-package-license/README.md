validate-npm-package-license
============================

Give me a string and I'll tell you if it's a valid npm package license string.

```javascript
var valid = require('validate-npm-package-license');
```

SPDX license identifiers are valid license strings:

```javascript

var assert = require('assert');
var validSPDXExpression = {
  validForNewPackages: true,
  validForOldPackages: true,
  spdx: true
};

assert.deepEqual(valid('MIT'), validSPDXExpression);
assert.deepEqual(valid('BSD-2-Clause'), validSPDXExpression);
assert.deepEqual(valid('Apache-2.0'), validSPDXExpression);
assert.deepEqual(valid('ISC'), validSPDXExpression);
```
The function will return a warning and suggestion for nearly-correct license identifiers:

```javascript
assert.deepEqual(
  valid('Apache 2.0'),
  {
    validForOldPackages: false,
    validForNewPackages: false,
    warnings: [
      'license should be ' +
      'a valid SPDX license expression (without "LicenseRef"), ' +
      '"UNLICENSED", or ' +
      '"SEE LICENSE IN <filename>"',
      'license is similar to the valid expression "Apache-2.0"'
    ]
  }
);
```

SPDX expressions are valid, too ...

```javascript
// Simple SPDX license expression for dual licensing
assert.deepEqual(
  valid('(GPL-3.0-only OR BSD-2-Clause)'),
  validSPDXExpression
);
```

... except if they contain `LicenseRef`:

```javascript
var warningAboutLicenseRef = {
  validForOldPackages: false,
  validForNewPackages: false,
  spdx: true,
  warnings: [
    'license should be ' +
    'a valid SPDX license expression (without "LicenseRef"), ' +
    '"UNLICENSED", or ' +
    '"SEE LICENSE IN <filename>"',
  ]
};

assert.deepEqual(
  valid('LicenseRef-Made-Up'),
  warningAboutLicenseRef
);

assert.deepEqual(
  valid('(MIT OR LicenseRef-Made-Up)'),
  warningAboutLicenseRef
);
```

If you can't describe your licensing terms with standardized SPDX identifiers, put the terms in a file in the package and point users there:

```javascript
assert.deepEqual(
  valid('SEE LICENSE IN LICENSE.txt'),
  {
    validForNewPackages: true,
    validForOldPackages: true,
    inFile: 'LICENSE.txt'
  }
);

assert.deepEqual(
  valid('SEE LICENSE IN license.md'),
  {
    validForNewPackages: true,
    validForOldPackages: true,
    inFile: 'license.md'
  }
);
```

If there aren't any licensing terms, use `UNLICENSED`:

```javascript
var unlicensed = {
  validForNewPackages: true,
  validForOldPackages: true,
  unlicensed: true
};
assert.deepEqual(valid('UNLICENSED'), unlicensed);
assert.deepEqual(valid('UNLICENCED'), unlicensed);
```
