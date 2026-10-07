# import/enforce-node-protocol-usage

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Enforce either using, or omitting, the `node:` protocol when importing Node.js builtin modules.

## Rule Details

This rule enforces that builtins node imports are using, or omitting, the `node:` protocol.

Determining whether a specifier is a core module depends on the node version being used to run `eslint`.
This version can be specified in the configuration with the [`import/node-version` setting](../../README.md#importnode-version).

Reasons to prefer using the protocol include:

 - the code is more explicitly and clearly referencing a Node.js built-in module

Reasons to prefer omitting the protocol include:

 - some tools don't support the `node:` protocol
 - the code is more portable, because import maps and automatic polyfilling can be used

## Options

The rule requires a single string option which may be one of:

 - `'always'` - enforces that builtins node imports are using the `node:` protocol.
 - `'never'` - enforces that builtins node imports are not using the `node:` protocol.

## Examples

### `'always'`

❌ Invalid

```js
import fs from 'fs';
export { promises } from 'fs';
// require
const fs = require('fs/promises');
```

✅ Valid

```js
import fs from 'node:fs';
export { promises } from 'node:fs';
import * as test from 'node:test';
// require
const fs = require('node:fs/promises');
```

### `'never'`

❌ Invalid

```js
import fs from 'node:fs';
export { promises } from 'node:fs';
// require
const fs = require('node:fs/promises');
```

✅ Valid

```js
import fs from 'fs';
export { promises } from 'fs';

// require
const fs = require('fs/promises');

// This rule will not enforce not using `node:` protocol when the module is only available under the `node:` protocol.
import * as test from 'node:test';
```

## When Not To Use It

If you don't want to consistently enforce using, or omitting, the `node:` protocol when importing Node.js builtin modules.
