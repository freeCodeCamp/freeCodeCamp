# import/no-absolute-path

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Node.js allows the import of modules using an absolute path such as `/home/xyz/file.js`. That is a bad practice as it ties the code using it to your computer, and therefore makes it unusable in packages distributed on `npm` for instance.

This rule forbids the import of modules using absolute paths.

## Rule Details

### Fail

```js
import f from '/foo';
import f from '/some/path';

var f = require('/foo');
var f = require('/some/path');
```

### Pass

```js
import _ from 'lodash';
import foo from 'foo';
import foo from './foo';

var _ = require('lodash');
var foo = require('foo');
var foo = require('./foo');
```

### Options

By default, only ES6 imports and CommonJS `require` calls will have this rule enforced.

You may provide an options object providing true/false for any of

 - `esmodule`: defaults to `true`
 - `commonjs`: defaults to `true`
 - `amd`: defaults to `false`

If `{ amd: true }` is provided, dependency paths for AMD-style `define` and `require`
calls will be resolved:

```js
/*eslint import/no-absolute-path: [2, { commonjs: false, amd: true }]*/
define(['/foo'], function (foo) { /*...*/ }) // reported
require(['/foo'], function (foo) { /*...*/ }) // reported

const foo = require('/foo') // ignored because of explicit `commonjs: false`
```
