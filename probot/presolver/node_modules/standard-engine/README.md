# standard-engine [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/Flet/standard-engine/master.svg
[travis-url]: https://travis-ci.org/Flet/standard-engine
[npm-image]: https://img.shields.io/npm/v/standard-engine.svg
[npm-url]: https://npmjs.org/package/standard-engine
[downloads-image]: https://img.shields.io/npm/dm/standard-engine.svg
[downloads-url]: https://npmjs.org/package/standard-engine
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

## Overview
Wrap your own eslint rules in a easy-to-use command line tool and/or a JS module.

## Install
```
npm install standard-engine
```

## Who is using `standard-engine`?
Here is a list of packages using `standard-engine`. Dive into them for ideas!

- [standard](https://standardjs.com) - JavaScript Standard Style.
-  [semistandard](https://github.com/Flet/semistandard) - Its `standard` with semicolons sprinkled on top.
- [happiness](https://github.com/JedWatson/happiness) - JavaScript Happiness Style (semicolons and tabs)
- [doublestandard](https://github.com/flet/doublestandard) - Require TWO semicolons at the end of every line!
- [strict-standard](https://github.com/denis-sokolov/strict-standard) - Standard Style with strict error checking.
- [standard-own](https://github.com/o2team/standard-own) - Standard configurable.

Did you make your own? Create a pull request and we will add it to the README!

## Usage
Create the files below and fill in your own values for `options.js`.

**index.js**
```js
// programmatic usage
var Linter = require('standard-engine').linter
var opts = require('./options.js')
module.exports = new Linter(opts)
```

**cli.js**
```js
#!/usr/bin/env node

var opts = require('../options.js')
require('standard-engine').cli(opts)
```
**options.js**
```js
var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  // homepage, version and bugs pulled from package.json
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint, // pass any version of eslint >= 1.0.0
  cmd: 'pocketlint', // should match the "bin" key in your package.json
  tagline: 'Live by your own standards!', // displayed in output --help
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  cwd: '' // current working directory, passed to eslint
}
```

Additionally an optional `parseOpts()` function can be provided. See below for details.

**eslintrc.json**
 Put all your .eslintrc rules in this file. A good practice is to create an  [ESLint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) and extend it, but its not required:
```js
{
  // pretend that the package eslint-config-pocketlint exists!
  "extends": ["pocketlint"]
}
```
Take a look at [eslint-config-standard](https://github.com/feross/eslint-config-standard) as an example, or if you want to extend/mutate `standard`, see [eslint-config-semistandard](https://github.com/flet/eslint-config-semistandard).

## Engine Features

### Ignoring Files

The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically ignored.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `ignore` property to `package.json`:

```js
"pocketlint": { // this key should equal the value of cmd in options.js
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

### Hiding Warnings

Since `standard-engine` uses [`eslint`](http://eslint.org/) under-the-hood, you can
hide warnings as you normally would if you used `eslint` directly.

To get verbose output (so you can find the particular rule name to ignore), run:

```bash
$ pocketlint --verbose
Error: Live by your own standards!
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

Disable **all rules** on a specific line:

```js
file = 'I know what I am doing' // eslint-disable-line
```

Or, disable **only** the `"no-use-before-define"` rule:

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

Or, disable the `"no-use-before-define"` rule for **multiple lines**:

```js
/*eslint-disable no-use-before-define */
// offending code here...
// offending code here...
// offending code here...
/*eslint-enable no-use-before-define */
```

### Defining Globals in a project's `package.json`

`standard-engine` will also look in a project's `package.json` and respect any global variables defined like so:

```js
{
  "pocketlint": { // this key should equal the value of cmd in options.js
    "globals": [ // can be a string or an array of strings
      "myVar1",
      "myVar2"
    ]
  }
}
```

You may use `global` as an alias for `globals` (just don't specify both).

### Loading ESLint plugins in a project's `package.json`

Additional ESLint plugins can be specified like so:

```js
{
  "pocketlint": { // this key should equal the value of cmd in options.js
    "plugins": [ // can be a string or an array of strings
      "flowtype"
    ]
  }
}
```

You may use `plugin` as an alias for `plugins` (just don't specify both). Plugins must be installed (example: `npm install eslint-plugin-flowtype` or globally: `npm install eslint-plugin-flowtype -g`).

### Loading additional environments in a project's `package.json`

Additional environments can be specified like so:

```js
{
  "pocketlint": { // this key should equal the value of cmd in options.js
    "envs": [ "browser", "mocha" ]
  }
}
```

`envs` can be a string, an array of strings, or an object. In the latter case the keys are used as the environment name, but falsy values mean the environment is not actually loaded. You cannot unload environments by setting a falsy value.

You may use `env` as an alias for `envs` (just don't specify both).

### Custom JS parsers for bleeding-edge ES6 or ES7 support?

`standard-engine` supports custom JS parsers. To use a custom parser, install it from npm
(example: `npm install babel-eslint`) and add this to your `package.json`:

```js
{
  "pocketlint": { // this key should equal the value of cmd in your options.js
    "parser": "babel-eslint"
  }
}
```

If you're using your custom linter globally (you installed it with `-g`), then you also need to
install `babel-eslint` globally with `npm install babel-eslint -g`.

### Custom options

You can provide a `parseOpts()` function in the `options.js` exports:

```js
var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  // homepage, version and bugs pulled from package.json
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint, // pass any version of eslint >= 1.0.0
  cmd: 'pocketlint', // should match the "bin" key in your package.json
  tagline: 'Live by your own standards!', // displayed in output --help
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  parseOpts (opts, packageOpts, rootDir) {
    // provide implementation here, then return the opts object (or a new one)
    return opts
  }
}
```

This function is called with the current options object (`opts`), any options extracted from the project's `package.json` (`packageOpts`), and the directory that contained that `package.json` file (`rootDir`, equivalent to `opts.cwd` if no file was found).

Modify and return `opts`, or return a new object with the options that are to be used.

The following options are provided in the `opts` object, and must be on the returned object:

* `ignore`: array of file globs to ignore
* `cwd`: string, the current working directory
* `fix`: boolean, whether to automatically fix problems
* `eslintConfig`: object, the options passed to [ESLint's `CLIEngine`](http://eslint.org/docs/developer-guide/nodejs-api#cliengine)

## API Usage

### `engine.lintText(text, [opts], callback)`

Lint the provided source `text` to enforce your defined style. An `opts` object may
be provided:

```js
{
  cwd: '',      // current working directory (default: process.cwd())
  filename: '', // path of the file containing the text being linted (optional, though some eslint plugins require it)
  fix: false,   // automatically fix problems
  globals: [],  // custom global variables to declare
  plugins: [],  // custom eslint plugins
  envs: [],     // custom eslint environment
  parser: ''    // custom js parser (e.g. babel-eslint)
}
```

Additional options may be loaded from a `package.json` if it's found for the current working directory. See below for further details.

The `callback` will be called with an `Error` and `results` object.

The `results` object will contain the following properties:

```js
{
  results: [
    {
      filePath: '',
      messages: [
        { ruleId: '', message: '', line: 0, column: 0 }
      ],
      errorCount: 0,
      warningCount: 0,
      output: '' // fixed source code (only present with {fix: true} option)
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `results = engine.lintTextSync(text, [opts])`

Synchronous version of `engine.lintText()`. If an error occurs, an exception is
thrown. Otherwise, a `results` object is returned.

### `engine.lintFiles(files, [opts], callback)`

Lint the provided `files` globs. An `opts` object may be provided:

```js
{
  ignore: [],   // file globs to ignore (has sane defaults)
  cwd: '',      // current working directory (default: process.cwd())
  fix: false,   // automatically fix problems
  globals: [],  // custom global variables to declare
  plugins: [],  // custom eslint plugins
  envs: [],     // custom eslint environment
  parser: ''    // custom js parser (e.g. babel-eslint)
}
```

Additional options may be loaded from a `package.json` if it's found for the current working directory. See below for further details.

Both `ignore` and `files` globs are resolved relative to the current working directory.

The `callback` will be called with an `Error` and `results` object (same as above).

**NOTE: There is no synchronous version of `engine.lintFiles()`.**

### Full set of `opts`

This is the full set of options accepted by the above APIs. Not all options make sense for each API, for example `ignore` is not used with `lintText()`, and `filename` is not used with `lintFiles()`.

```js
{
  ignore: [],   // file globs to ignore (has sane defaults)
  cwd: '',      // current working directory (default: process.cwd())
  filename: '', // path of the file containing the text being linted (optional)
  fix: false,   // automatically fix problems
  globals: [],  // custom global variables to declare
  plugins: [],  // custom eslint plugins
  envs: [],     // custom eslint environment
  parser: ''    // custom js parser (e.g. babel-eslint)
}
```

The following aliases are available:

```js
{
  global: [],  // custom global variables to declare
  plugin: [],  // custom eslint plugins
  env: [],     // custom eslint environment
}
```

Note that `globals`, `plugins` and `envs` take preference.

The `parser` option takes preference over any `parser` setting in the project's `package.json`.
