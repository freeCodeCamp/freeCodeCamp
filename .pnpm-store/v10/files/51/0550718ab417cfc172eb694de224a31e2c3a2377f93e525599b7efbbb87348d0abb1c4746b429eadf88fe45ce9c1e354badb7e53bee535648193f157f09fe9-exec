<table><thead>
  <tr>
    <th>Linux</th>
    <th>OS X</th>
    <th>Windows</th>
    <th>Coverage</th>
    <th>Downloads</th>
  </tr>
</thead><tbody><tr>
  <td colspan="2" align="center">
    <a href="https://travis-ci.org/kaelzhang/node-ignore">
    <img
      src="https://travis-ci.org/kaelzhang/node-ignore.svg?branch=master"
      alt="Build Status" /></a>
  </td>
  <td align="center">
    <a href="https://ci.appveyor.com/project/kaelzhang/node-ignore">
    <img
      src="https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-ignore?branch=master&svg=true"
      alt="Windows Build Status" /></a>
  </td>
  <td align="center">
    <a href="https://codecov.io/gh/kaelzhang/node-ignore">
    <img
      src="https://codecov.io/gh/kaelzhang/node-ignore/branch/master/graph/badge.svg"
      alt="Coverage Status" /></a>
  </td>
  <td align="center">
    <a href="https://www.npmjs.org/package/ignore">
    <img
      src="http://img.shields.io/npm/dm/ignore.svg"
      alt="npm module downloads per month" /></a>
  </td>
</tr></tbody></table>

# ignore

`ignore` is a manager, filter and parser which implemented in pure JavaScript according to the .gitignore [spec](http://git-scm.com/docs/gitignore).

Pay attention that [`minimatch`](https://www.npmjs.org/package/minimatch) does not work in the gitignore way. To filter filenames according to .gitignore file, I recommend this module.

##### Tested on

- Linux + Node: `0.8` - `7.x`
- Windows + Node: `0.10` - `7.x`, node < `0.10` is not tested due to the lack of support of appveyor.

Actually, `ignore` does not rely on any versions of node specially.

Since `4.0.0`, ignore will no longer support `node < 6` by default, to use in node < 6, `require('ignore/legacy')`. For details, see [CHANGELOG](https://github.com/kaelzhang/node-ignore/blob/master/CHANGELOG.md).

## Table Of Main Contents

- [Usage](#usage)
- [`Pathname` Conventions](#pathname-conventions)
- [Guide for 2.x -> 3.x](#upgrade-2x---3x)
- [Guide for 3.x -> 4.x](#upgrade-3x---4x)
- See Also:
  - [`glob-gitignore`](https://www.npmjs.com/package/glob-gitignore) matches files using patterns and filters them according to gitignore rules.

## Usage

```js
import ignore from 'ignore'
const ig = ignore().add(['.abc/*', '!.abc/d/'])
```

### Filter the given paths

```js
const paths = [
  '.abc/a.js',    // filtered out
  '.abc/d/e.js'   // included
]

ig.filter(paths)        // ['.abc/d/e.js']
ig.ignores('.abc/a.js') // true
```

### As the filter function

```js
paths.filter(ig.createFilter()); // ['.abc/d/e.js']
```

### Win32 paths will be handled

```js
ig.filter(['.abc\\a.js', '.abc\\d\\e.js'])
// if the code above runs on windows, the result will be
// ['.abc\\d\\e.js']
```

## Why another ignore?

- `ignore` is a standalone module, and is much simpler so that it could easy work with other programs, unlike [isaacs](https://npmjs.org/~isaacs)'s [fstream-ignore](https://npmjs.org/package/fstream-ignore) which must work with the modules of the fstream family.

- `ignore` only contains utility methods to filter paths according to the specified ignore rules, so
  - `ignore` never try to find out ignore rules by traversing directories or fetching from git configurations.
  - `ignore` don't cares about sub-modules of git projects.

- Exactly according to [gitignore man page](http://git-scm.com/docs/gitignore), fixes some known matching issues of fstream-ignore, such as:
  - '`/*.js`' should only match '`a.js`', but not '`abc/a.js`'.
  - '`**/foo`' should match '`foo`' anywhere.
  - Prevent re-including a file if a parent directory of that file is excluded.
  - Handle trailing whitespaces:
    - `'a '`(one space) should not match `'a  '`(two spaces).
    - `'a \ '` matches `'a  '`
  - All test cases are verified with the result of `git check-ignore`.

# Methods

## .add(pattern: string | Ignore): this
## .add(patterns: Array<string | Ignore>): this

- **pattern** `String | Ignore` An ignore pattern string, or the `Ignore` instance
- **patterns** `Array<String | Ignore>` Array of ignore patterns.

Adds a rule or several rules to the current manager.

Returns `this`

Notice that a line starting with `'#'`(hash) is treated as a comment. Put a backslash (`'\'`) in front of the first hash for patterns that begin with a hash, if you want to ignore a file with a hash at the beginning of the filename.

```js
ignore().add('#abc').ignores('#abc')    // false
ignore().add('\#abc').ignores('#abc')   // true
```

`pattern` could either be a line of ignore pattern or a string of multiple ignore patterns, which means we could just `ignore().add()` the content of a ignore file:

```js
ignore()
.add(fs.readFileSync(filenameOfGitignore).toString())
.filter(filenames)
```

`pattern` could also be an `ignore` instance, so that we could easily inherit the rules of another `Ignore` instance.

## <strike>.addIgnoreFile(path)</strike>

REMOVED in `3.x` for now.

To upgrade `ignore@2.x` up to `3.x`, use

```js
import fs from 'fs'

if (fs.existsSync(filename)) {
  ignore().add(fs.readFileSync(filename).toString())
}
```

instead.

## .filter(paths: Array<Pathname>): Array<Pathname>

```ts
type Pathname = string
```

Filters the given array of pathnames, and returns the filtered array.

- **paths** `Array.<Pathname>` The array of `pathname`s to be filtered.

### `Pathname` Conventions:

#### 1. `Pathname` should be a `path.relative()`d pathname

`Pathname` should be a string that have been `path.join()`ed, or the return value of `path.relative()` to the current directory.

```js
// WRONG
ig.ignores('./abc')

// WRONG, for it will never happen.
// If the gitignore rule locates at the root directory,
// `'/abc'` should be changed to `'abc'`.
// ```
// path.relative('/', '/abc')  -> 'abc'
// ```
ig.ignores('/abc')

// Right
ig.ignores('abc')

// Right
ig.ignores(path.join('./abc'))  // path.join('./abc') -> 'abc'
```

In other words, each `Pathname` here should be a relative path to the directory of the gitignore rules.

Suppose the dir structure is:

```
/path/to/your/repo
    |-- a
    |   |-- a.js
    |
    |-- .b
    |
    |-- .c
         |-- .DS_store
```

Then the `paths` might be like this:

```js
[
  'a/a.js'
  '.b',
  '.c/.DS_store'
]
```

Usually, you could use [`glob`](http://npmjs.org/package/glob) with `option.mark = true` to fetch the structure of the current directory:

```js
import glob from 'glob'

glob('**', {
  // Adds a / character to directory matches.
  mark: true
}, (err, files) => {
  if (err) {
    return console.error(err)
  }

  let filtered = ignore().add(patterns).filter(files)
  console.log(filtered)
})
```

#### 2. filenames and dirnames

`node-ignore` does NO `fs.stat` during path matching, so for the example below:

```js
ig.add('config/')

// `ig` does NOT know if 'config' is a normal file, directory or something
ig.ignores('config')    // And it returns `false`

ig.ignores('config/')   // returns `true`
```

Specially for people who develop some library based on `node-ignore`, it is important to understand that.

## .ignores(pathname: Pathname): boolean

> new in 3.2.0

Returns `Boolean` whether `pathname` should be ignored.

```js
ig.ignores('.abc/a.js')    // true
```

## .createFilter()

Creates a filter function which could filter an array of paths with `Array.prototype.filter`.

Returns `function(path)` the filter function.

## `options.ignorecase` since 4.0.0

Similar as the `core.ignorecase` option of [git-config](https://git-scm.com/docs/git-config), `node-ignore` will be case insensitive if `options.ignorecase` is set to `true` (default value), otherwise case sensitive.

```js
const ig = ignore({
  ignorecase: false
})

ig.add('*.png')

ig.ignores('*.PNG')  // false
```

****

# Upgrade Guide

## Upgrade 2.x -> 3.x

- All `options` of 2.x are unnecessary and removed, so just remove them.
- `ignore()` instance is no longer an [`EventEmitter`](nodejs.org/api/events.html), and all events are unnecessary and removed.
- `.addIgnoreFile()` is removed, see the [.addIgnoreFile](#addignorefilepath) section for details.

## Upgrade 3.x -> 4.x

Since `4.0.0`, `ignore` will no longer support node < 6, to use `ignore` in node < 6:

```js
var ignore = require('ignore/legacy')
```

****

# Collaborators

- [@whitecolor](https://github.com/whitecolor) *Alex*
- [@SamyPesse](https://github.com/SamyPesse) *Samy Pessé*
- [@azproduction](https://github.com/azproduction) *Mikhail Davydov*
- [@TrySound](https://github.com/TrySound) *Bogdan Chadkin*
- [@JanMattner](https://github.com/JanMattner) *Jan Mattner*
- [@ntwb](https://github.com/ntwb) *Stephen Edgar*
- [@kasperisager](https://github.com/kasperisager) *Kasper Isager*
- [@sandersn](https://github.com/sandersn) *Nathan Shively-Sanders*
