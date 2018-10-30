# is-glob [![NPM version](https://img.shields.io/npm/v/is-glob.svg?style=flat)](https://www.npmjs.com/package/is-glob) [![NPM monthly downloads](https://img.shields.io/npm/dm/is-glob.svg?style=flat)](https://npmjs.org/package/is-glob)  [![NPM total downloads](https://img.shields.io/npm/dt/is-glob.svg?style=flat)](https://npmjs.org/package/is-glob) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/is-glob.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/is-glob) [![Windows Build Status](https://img.shields.io/appveyor/ci/jonschlinkert/is-glob.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/jonschlinkert/is-glob)

> Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a better user experience.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-glob
```

You might also be interested in [is-valid-glob](https://github.com/jonschlinkert/is-valid-glob) and [has-glob](https://github.com/jonschlinkert/has-glob).

## Usage

```js
var isGlob = require('is-glob');
```

### Default behavior

**True**

Patterns that have glob characters or regex patterns will return `true`:

```js
isGlob('!foo.js');
isGlob('*.js');
isGlob('**/abc.js');
isGlob('abc/*.js');
isGlob('abc/(aaa|bbb).js');
isGlob('abc/[a-z].js');
isGlob('abc/{a,b}.js');
//=> true
```

Extglobs

```js
isGlob('abc/@(a).js');
isGlob('abc/!(a).js');
isGlob('abc/+(a).js');
isGlob('abc/*(a).js');
isGlob('abc/?(a).js');
//=> true
```

**False**

Escaped globs or extglobs return `false`:

```js
isGlob('abc/\\@(a).js');
isGlob('abc/\\!(a).js');
isGlob('abc/\\+(a).js');
isGlob('abc/\\*(a).js');
isGlob('abc/\\?(a).js');
isGlob('\\!foo.js');
isGlob('\\*.js');
isGlob('\\*\\*/abc.js');
isGlob('abc/\\*.js');
isGlob('abc/\\(aaa|bbb).js');
isGlob('abc/\\[a-z].js');
isGlob('abc/\\{a,b}.js');
//=> false
```

Patterns that do not have glob patterns return `false`:

```js
isGlob('abc.js');
isGlob('abc/def/ghi.js');
isGlob('foo.js');
isGlob('abc/@.js');
isGlob('abc/+.js');
isGlob('abc/?.js');
isGlob();
isGlob(null);
//=> false
```

Arrays are also `false` (If you want to check if an array has a glob pattern, use [has-glob](https://github.com/jonschlinkert/has-glob)):

```js
isGlob(['**/*.js']);
isGlob(['foo.js']);
//=> false
```

### Option strict

When `options.strict === false` the behavior is less strict in determining if a pattern is a glob. Meaning that
some patterns that would return `false` may return `true`. This is done so that matching libraries like [micromatch](https://github.com/micromatch/micromatch) have a chance at determining if the pattern is a glob or not.

**True**

Patterns that have glob characters or regex patterns will return `true`:

```js
isGlob('!foo.js', {strict: false});
isGlob('*.js', {strict: false});
isGlob('**/abc.js', {strict: false});
isGlob('abc/*.js', {strict: false});
isGlob('abc/(aaa|bbb).js', {strict: false});
isGlob('abc/[a-z].js', {strict: false});
isGlob('abc/{a,b}.js', {strict: false});
//=> true
```

Extglobs

```js
isGlob('abc/@(a).js', {strict: false});
isGlob('abc/!(a).js', {strict: false});
isGlob('abc/+(a).js', {strict: false});
isGlob('abc/*(a).js', {strict: false});
isGlob('abc/?(a).js', {strict: false});
//=> true
```

**False**

Escaped globs or extglobs return `false`:

```js
isGlob('\\!foo.js', {strict: false});
isGlob('\\*.js', {strict: false});
isGlob('\\*\\*/abc.js', {strict: false});
isGlob('abc/\\*.js', {strict: false});
isGlob('abc/\\(aaa|bbb).js', {strict: false});
isGlob('abc/\\[a-z].js', {strict: false});
isGlob('abc/\\{a,b}.js', {strict: false});
//=> false
```

## About

### Related projects

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [base](https://www.npmjs.com/package/base): Framework for rapidly creating high quality node.js applications, using plugins like building blocks | [homepage](https://github.com/node-base/base "Framework for rapidly creating high quality node.js applications, using plugins like building blocks")
* [update](https://www.npmjs.com/package/update): Be scalable! Update is a new, open source developer framework and CLI for automating updates… [more](https://github.com/update/update) | [homepage](https://github.com/update/update "Be scalable! Update is a new, open source developer framework and CLI for automating updates of any kind in code projects.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 47 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 1  | [doowb](https://github.com/doowb) |  
| 1  | [tuvistavie](https://github.com/tuvistavie) |  

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on August 07, 2017._