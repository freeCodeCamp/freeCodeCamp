| Linux / MacOS / Windows | Coverage | Downloads |
| ----------------------- | -------- | --------- |
| [![build][bb]][bl]      | [![coverage][cb]][cl] | [![downloads][db]][dl] |

[bb]: https://github.com/kaelzhang/node-ignore/actions/workflows/nodejs.yml/badge.svg
[bl]: https://github.com/kaelzhang/node-ignore/actions/workflows/nodejs.yml

[cb]: https://codecov.io/gh/kaelzhang/node-ignore/branch/master/graph/badge.svg
[cl]: https://codecov.io/gh/kaelzhang/node-ignore

[db]: http://img.shields.io/npm/dm/ignore.svg
[dl]: https://www.npmjs.org/package/ignore

# ignore

`ignore` is a manager, filter and parser which implemented in pure JavaScript according to the [.gitignore spec 2.22.1](http://git-scm.com/docs/gitignore).

`ignore` is used by eslint, gitbook and [many others](https://www.npmjs.com/browse/depended/ignore).

Pay **ATTENTION** that [`minimatch`](https://www.npmjs.org/package/minimatch) (which used by `fstream-ignore`) does not follow the gitignore spec.

To filter filenames according to a .gitignore file, I recommend this npm package, `ignore`.

To parse an `.npmignore` file, you should use `minimatch`, because an `.npmignore` file is parsed by npm using `minimatch` and it does not work in the .gitignore way.

### Tested on

`ignore` is fully tested, and has more than **five hundreds** of unit tests.

- Linux + Node: `0.8` - `7.x`
- Windows + Node: `0.10` - `7.x`, node < `0.10` is not tested due to the lack of support of appveyor.

Actually, `ignore` does not rely on any versions of node specially.

Since `4.0.0`, ignore will no longer support `node < 6` by default, to use in node < 6, `require('ignore/legacy')`. For details, see [CHANGELOG](https://github.com/kaelzhang/node-ignore/blob/master/CHANGELOG.md).

## Table Of Main Contents

- [Usage](#usage)
- [`Pathname` Conventions](#pathname-conventions)
- See Also:
  - [`glob-gitignore`](https://www.npmjs.com/package/glob-gitignore) matches files using patterns and filters them according to gitignore rules.
- [Upgrade Guide](#upgrade-guide)

## Install

```sh
npm i ignore
```

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
## .add({pattern: string, mark?: string}): this  since 7.0.0

- **pattern** `string | Ignore` An ignore pattern string, or the `Ignore` instance
- **patterns** `Array<string | Ignore>` Array of ignore patterns.
- **mark?** `string` Pattern mark, which is used to associate the pattern with a certain marker, such as the line no of the `.gitignore` file. Actually it could be an arbitrary string and is optional.

Adds a rule or several rules to the current manager.

Returns `this`

Notice that a line starting with `'#'`(hash) is treated as a comment. Put a backslash (`'\'`) in front of the first hash for patterns that begin with a hash, if you want to ignore a file with a hash at the beginning of the filename.

```js
ignore().add('#abc').ignores('#abc')    // false
ignore().add('\\#abc').ignores('#abc')   // true
```

`pattern` could either be a line of ignore pattern or a string of multiple ignore patterns, which means we could just `ignore().add()` the content of a ignore file:

```js
ignore()
.add(fs.readFileSync(filenameOfGitignore).toString())
.filter(filenames)
```

`pattern` could also be an `ignore` instance, so that we could easily inherit the rules of another `Ignore` instance.

## .ignores(pathname: [Pathname](#pathname-conventions)): boolean

> new in 3.2.0

Returns `Boolean` whether `pathname` should be ignored.

```js
ig.ignores('.abc/a.js')    // true
```

Please **PAY ATTENTION** that `.ignores()` is **NOT** equivalent to `git check-ignore` although in most cases they return equivalent results.

However, for the purposes of imitating the behavior of `git check-ignore`, please use `.checkIgnore()` instead.

### `Pathname` Conventions:

#### 1. `Pathname` should be a `path.relative()`d pathname

`Pathname` should be a string that have been `path.join()`ed, or the return value of `path.relative()` to the current directory,

```js
// WRONG, an error will be thrown
ig.ignores('./abc')

// WRONG, for it will never happen, and an error will be thrown
// If the gitignore rule locates at the root directory,
// `'/abc'` should be changed to `'abc'`.
// ```
// path.relative('/', '/abc')  -> 'abc'
// ```
ig.ignores('/abc')

// WRONG, that it is an absolute path on Windows, an error will be thrown
ig.ignores('C:\\abc')

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

#### 2. filenames and dirnames

`node-ignore` does NO `fs.stat` during path matching, so `node-ignore` treats
- `foo` as a file
- **`foo/` as a directory**

For the example below:

```js
// First, we add a ignore pattern to ignore a directory
ig.add('config/')

// `ig` does NOT know if 'config', in the real world,
//   is a normal file, directory or something.

ig.ignores('config')
// `ig` treats `config` as a file, so it returns `false`

ig.ignores('config/')
// returns `true`
```

Specially for people who develop some library based on `node-ignore`, it is important to understand that.

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


## .filter(paths: Array&lt;Pathname&gt;): Array&lt;Pathname&gt;

```ts
type Pathname = string
```

Filters the given array of pathnames, and returns the filtered array.

- **paths** `Array.<Pathname>` The array of `pathname`s to be filtered.

## .createFilter()

Creates a filter function which could filter an array of paths with `Array.prototype.filter`.

Returns `function(path)` the filter function.

## .test(pathname: Pathname): TestResult

> New in 5.0.0

Returns `TestResult`

```ts
// Since 5.0.0
interface TestResult {
  ignored: boolean
  // true if the `pathname` is finally unignored by some negative pattern
  unignored: boolean
  // The `IgnoreRule` which ignores the pathname
  rule?: IgnoreRule
}

// Since 7.0.0
interface IgnoreRule {
  // The original pattern
  pattern: string
  // Whether the pattern is a negative pattern
  negative: boolean
  // Which is used for other packages to build things upon `node-ignore`
  mark?: string
}
```

- `{ignored: true, unignored: false}`: the `pathname` is ignored
- `{ignored: false, unignored: true}`: the `pathname` is unignored
- `{ignored: false, unignored: false}`: the `pathname` is never matched by any ignore rules.

## .checkIgnore(target: string): TestResult

> new in 7.0.0

Debugs gitignore / exclude files, which is equivalent to `git check-ignore -v`. Usually this method is used for other packages to implement the function of `git check-ignore -v` upon `node-ignore`

- **target** `string` the target to test.

Returns `TestResult`

```js
ig.add({
  pattern: 'foo/*',
  mark: '60'
})

const {
  ignored,
  rule
} = checkIgnore('foo/')

if (ignored) {
  console.log(`.gitignore:${result}:${rule.mark}:${rule.pattern} foo/`)
}

// .gitignore:60:foo/* foo/
```

Please pay attention that this method does not have a strong built-in cache mechanism.

The purpose of introducing this method is to make it possible to implement the `git check-ignore` command in JavaScript based on `node-ignore`.

So do not use this method in those situations where performance is extremely important.

## static `isPathValid(pathname): boolean` since 5.0.0

Check whether the `pathname` is an valid `path.relative()`d path according to the [convention](#1-pathname-should-be-a-pathrelatived-pathname).

This method is **NOT** used to check if an ignore pattern is valid.

```js
import {isPathValid} from 'ignore'

isPathValid('./foo')  // false
```

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

## ignore(options)

### `options.ignorecase` since 4.0.0

Similar to the `core.ignorecase` option of [git-config](https://git-scm.com/docs/git-config), `node-ignore` will be case insensitive if `options.ignorecase` is set to `true` (the default value), otherwise case sensitive.

```js
const ig = ignore({
  ignorecase: false
})

ig.add('*.png')

ig.ignores('*.PNG')  // false
```

### `options.ignoreCase?: boolean` since 5.2.0

Which is an alternative to `options.ignoreCase`

### `options.allowRelativePaths?: boolean` since 5.2.0

This option brings backward compatibility with projects which based on `ignore@4.x`. If `options.allowRelativePaths` is `true`, `ignore` will not check whether the given path to be tested is [`path.relative()`d](#pathname-conventions).

However, passing a relative path, such as `'./foo'` or `'../foo'`, to test if it is ignored or not is not a good practise, which might lead to unexpected behavior

```js
ignore({
  allowRelativePaths: true
}).ignores('../foo/bar.js') // And it will not throw
```

****

# Upgrade Guide

## Upgrade 4.x -> 5.x

Since `5.0.0`, if an invalid `Pathname` passed into `ig.ignores()`, an error will be thrown, unless `options.allowRelative = true` is passed to the `Ignore` factory.

While `ignore < 5.0.0` did not make sure what the return value was, as well as

```ts
.ignores(pathname: Pathname): boolean

.filter(pathnames: Array<Pathname>): Array<Pathname>

.createFilter(): (pathname: Pathname) => boolean

.test(pathname: Pathname): {ignored: boolean, unignored: boolean}
```

See the convention [here](#1-pathname-should-be-a-pathrelatived-pathname) for details.

If there are invalid pathnames, the conversion and filtration should be done by users.

```js
import {isPathValid} from 'ignore' // introduced in 5.0.0

const paths = [
  // invalid
  //////////////////
  '',
  false,
  '../foo',
  '.',
  //////////////////

  // valid
  'foo'
]
.filter(isPathValid)

ig.filter(paths)
```

## Upgrade 3.x -> 4.x

Since `4.0.0`, `ignore` will no longer support node < 6, to use `ignore` in node < 6:

```js
var ignore = require('ignore/legacy')
```

## Upgrade 2.x -> 3.x

- All `options` of 2.x are unnecessary and removed, so just remove them.
- `ignore()` instance is no longer an [`EventEmitter`](nodejs.org/api/events.html), and all events are unnecessary and removed.
- `.addIgnoreFile()` is removed, see the [.addIgnoreFile](#addignorefilepath) section for details.

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
