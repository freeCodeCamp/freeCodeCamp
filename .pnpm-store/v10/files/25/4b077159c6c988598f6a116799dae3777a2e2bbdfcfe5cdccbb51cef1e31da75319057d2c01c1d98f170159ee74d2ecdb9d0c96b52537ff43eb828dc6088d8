# Utility functions for working with typescript's AST

[![Greenkeeper badge](https://badges.greenkeeper.io/ajafff/tsutils.svg)](https://greenkeeper.io/)

## Usage

This package consists of two major parts: utilities and typeguard functions.
By importing the project you will get both of them.
```js
import * as utils from "tsutils";
utils.isIdentifier(node); // typeguard
utils.getLineRanges(sourceFile); // utilities
```

If you don't need everything offered by this package, you can select what should be imported. The parts that are not imported are never read from disk and may save some startup time and reduce memory consumtion.

If you only need typeguards you can explicitly import them:
```js
import { isIdentifier } from "tsutils/typeguard";
// You can even distiguish between typeguards for nodes and types
import { isUnionTypeNode } from "tsutils/typeguard/node";
import { isUnionType } from "tsutils/typeguard/type";
```

If you only need the utilities you can also explicitly import them:
```js
import { forEachComment, forEachToken } from "tsutils/util";
```

### Typescript version dependency

This package is backwards compatible with typescript 2.8.0 at runtime although compiling might need a newer version of typescript installed.

Using `typescript@next` might work, but it's not officially supported. If you encounter any bugs, please open an issue.

For compatibility with older versions of TypeScript typeguard functions are separated by TypeScript version. If you are stuck on `typescript@2.8`, you should import directly from the submodule for that version:

```js
// all typeguards compatible with typescript@2.8
import { isIdentifier } from "tsutils/typeguard/2.8";
// you can even use nested submodules
import { isIdentifier } from "tsutils/typeguard/2.8/node";

// all typeguards compatible with typescript@2.9 (includes those of 2.8)
import { isIdentifier } from "tsutils/typeguard/2.9";

// always points to the latest stable version (2.9 as of writing this)
import { isIdentifier } from "tsutils/typeguard";
import { isIdentifier } from "tsutils";

// always points to the typeguards for the next TypeScript version (3.0 as of writing this)
import { isIdentifier } from "tsutils/typeguard/next";
```

Note that if you are also using utility functions, you should prefer the relevant submodule:

```js
// importing directly from 'tsutils' would pull in the latest typeguards
import { forEachToken } from 'tsutils/util';
import { isIdentifier } from 'tsutils/typeguard/2.8';
```
