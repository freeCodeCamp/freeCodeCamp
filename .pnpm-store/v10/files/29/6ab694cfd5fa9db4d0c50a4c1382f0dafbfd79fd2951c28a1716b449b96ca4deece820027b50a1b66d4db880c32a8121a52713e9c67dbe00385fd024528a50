# cosmiconfig

[![Build Status](https://img.shields.io/travis/davidtheclark/cosmiconfig/master.svg?label=unix%20build)](https://travis-ci.org/davidtheclark/cosmiconfig) [![Build status](https://img.shields.io/appveyor/ci/davidtheclark/cosmiconfig/master.svg?label=windows%20build)](https://ci.appveyor.com/project/davidtheclark/cosmiconfig/branch/master)
[![codecov](https://codecov.io/gh/davidtheclark/cosmiconfig/branch/master/graph/badge.svg)](https://codecov.io/gh/davidtheclark/cosmiconfig)

Cosmiconfig searches for and loads configuration for your program.

It features smart defaults based on conventional expectations in the JavaScript ecosystem.
But it's also flexible enough to search wherever you'd like to search, and load whatever you'd like to load.

By default, Cosmiconfig will start where you tell it to start and search up the directory tree for the following:

- a `package.json` property
- a JSON or YAML, extensionless "rc file"
- an "rc file" with the extensions `.json`, `.yaml`, `.yml`, or `.js`.
- a `.config.js` CommonJS module

For example, if your module's name is "myapp", cosmiconfig will search up the directory tree for configuration in the following places:

- a `myapp` property in `package.json`
- a `.myapprc` file in JSON or YAML format
- a `.myapprc.json` file
- a `.myapprc.yaml`, `.myapprc.yml`, or `.myapprc.js` file
- a `myapp.config.js` file exporting a JS object

Cosmiconfig continues to search up the directory tree, checking each of these places in each directory, until it finds some acceptable configuration (or hits the home directory).

👀 **Looking for the v5 docs?**
v6 involves slight changes to Cosmiconfig's API, clarifying the difference between synchronous and asynchronous usage.
If you have trouble switching from v5 to v6, please file an issue.
If you are still using v5, those v5 docs are available [in the `5.x.x` tagged code](https://github.com/davidtheclark/cosmiconfig/tree/5.2.1).

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Result](#result)
- [Asynchronous API](#asynchronous-api)
  - [cosmiconfig()](#cosmiconfig)
  - [explorer.search()](#explorersearch)
  - [explorer.load()](#explorerload)
  - [explorer.clearLoadCache()](#explorerclearloadcache)
  - [explorer.clearSearchCache()](#explorerclearsearchcache)
  - [explorer.clearCaches()](#explorerclearcaches)
- [Synchronsous API](#synchronsous-api)
  - [cosmiconfigSync()](#cosmiconfigsync)
  - [explorerSync.search()](#explorersyncsearch)
  - [explorerSync.load()](#explorersyncload)
  - [explorerSync.clearLoadCache()](#explorersyncclearloadcache)
  - [explorerSync.clearSearchCache()](#explorersyncclearsearchcache)
  - [explorerSync.clearCaches()](#explorersyncclearcaches)
- [cosmiconfigOptions](#cosmiconfigoptions)
  - [searchPlaces](#searchplaces)
  - [loaders](#loaders)
  - [packageProp](#packageprop)
  - [stopDir](#stopdir)
  - [cache](#cache)
  - [transform](#transform)
  - [ignoreEmptySearchPlaces](#ignoreemptysearchplaces)
- [Caching](#caching)
- [Differences from rc](#differences-from-rc)
- [Contributing & Development](#contributing--development)

## Installation

```
npm install cosmiconfig
```

Tested in Node 8+.

## Usage

Create a Cosmiconfig explorer, then either `search` for or directly `load` a configuration file.

```js
const { cosmiconfig, cosmiconfigSync } = require('cosmiconfig');
// ...
const explorer = cosmiconfig(moduleName);

// Search for a configuration by walking up directories.
// See documentation for search, below.
explorer.search()
  .then((result) => {
    // result.config is the parsed configuration object.
    // result.filepath is the path to the config file that was found.
    // result.isEmpty is true if there was nothing to parse in the config file.
  })
  .catch((error) => {
    // Do something constructive.
  });

// Load a configuration directly when you know where it should be.
// The result object is the same as for search.
// See documentation for load, below.
explorer.load(pathToConfig).then(..);

// You can also search and load synchronously.
const explorerSync = cosmiconfigSync(moduleName);

const searchedFor = explorerSync.search();
const loaded = explorerSync.load(pathToConfig);
```

## Result

The result object you get from `search` or `load` has the following properties:

- **config:** The parsed configuration object. `undefined` if the file is empty.
- **filepath:** The path to the configuration file that was found.
- **isEmpty:** `true` if the configuration file is empty. This property will not be present if the configuration file is not empty.

## Asynchronous API

### cosmiconfig()

```js
const { cosmiconfig } = require('cosmiconfig');
const explorer = cosmiconfig(moduleName[, cosmiconfigOptions])
```

Creates a cosmiconfig instance ("explorer") configured according to the arguments, and initializes its caches.

#### moduleName

Type: `string`. **Required.**

Your module name. This is used to create the default [`searchPlaces`] and [`packageProp`].

If your [`searchPlaces`] value will include files, as it does by default (e.g. `${moduleName}rc`), your `moduleName` must consist of characters allowed in filenames. That means you should not copy scoped package names, such as `@my-org/my-package`, directly into `moduleName`.

**[`cosmiconfigOptions`] are documented below.**
You may not need them, and should first read about the functions you'll use.

### explorer.search()

```js
explorer.search([searchFrom]).then(result => {..})
```

Searches for a configuration file. Returns a Promise that resolves with a [result] or with `null`, if no configuration file is found.

You can do the same thing synchronously with [`explorerSync.search()`].

Let's say your module name is `goldengrahams` so you initialized with `const explorer = cosmiconfig('goldengrahams');`.
Here's how your default [`search()`] will work:

- Starting from `process.cwd()` (or some other directory defined by the `searchFrom` argument to [`search()`]), look for configuration objects in the following places:
  1. A `goldengrahams` property in a `package.json` file.
  2. A `.goldengrahamsrc` file with JSON or YAML syntax.
  3. A `.goldengrahamsrc.json` file.
  4. A `.goldengrahamsrc.yaml`, `.goldengrahamsrc.yml`, or `.goldengrahamsrc.js` file.
  5. A `goldengrahams.config.js` JS file exporting the object.
- If none of those searches reveal a configuration object, move up one directory level and try again.
  So the search continues in `./`, `../`, `../../`, `../../../`, etc., checking the same places in each directory.
- Continue searching until arriving at your home directory (or some other directory defined by the cosmiconfig option [`stopDir`]).
- If at any point a parsable configuration is found, the [`search()`] Promise resolves with its [result] \(or, with [`explorerSync.search()`], the [result] is returned).
- If no configuration object is found, the [`search()`] Promise resolves with `null` (or, with [`explorerSync.search()`], `null` is returned).
- If a configuration object is found *but is malformed* (causing a parsing error), the [`search()`] Promise rejects with that error (so you should `.catch()` it). (Or, with [`explorerSync.search()`], the error is thrown.)

**If you know exactly where your configuration file should be, you can use [`load()`], instead.**

**The search process is highly customizable.**
Use the cosmiconfig options [`searchPlaces`] and [`loaders`] to precisely define where you want to look for configurations and how you want to load them.

#### searchFrom

Type: `string`.
Default: `process.cwd()`.

A filename.
[`search()`] will start its search here.

If the value is a directory, that's where the search starts.
If it's a file, the search starts in that file's directory.

### explorer.load()

```js
explorer.load(loadPath).then(result => {..})
```

Loads a configuration file. Returns a Promise that resolves with a [result] or rejects with an error (if the file does not exist or cannot be loaded).

Use `load` if you already know where the configuration file is and you just need to load it.

```js
explorer.load('load/this/file.json'); // Tries to load load/this/file.json.
```

If you load a `package.json` file, the result will be derived from whatever property is specified as your [`packageProp`].

You can do the same thing synchronously with [`explorerSync.load()`].

### explorer.clearLoadCache()

Clears the cache used in [`load()`].

### explorer.clearSearchCache()

Clears the cache used in [`search()`].

### explorer.clearCaches()

Performs both [`clearLoadCache()`] and [`clearSearchCache()`].

## Synchronsous API

### cosmiconfigSync()

```js
const { cosmiconfigSync } = require('cosmiconfig');
const explorerSync = cosmiconfigSync(moduleName[, cosmiconfigOptions])
```

Creates a *synchronous* cosmiconfig instance ("explorerSync") configured according to the arguments, and initializes its caches.

See [`cosmiconfig()`].

### explorerSync.search()

```js
const result = explorerSync.search([searchFrom]);
```

Synchronous version of [`explorer.search()`].

Returns a [result] or `null`.

### explorerSync.load()

```js
const result = explorerSync.load(loadPath);
```

Synchronous version of [`explorer.load()`].

Returns a [result].

### explorerSync.clearLoadCache()

Clears the cache used in [`load()`].

### explorerSync.clearSearchCache()

Clears the cache used in [`search()`].

### explorerSync.clearCaches()

Performs both [`clearLoadCache()`] and [`clearSearchCache()`].

## cosmiconfigOptions

Type: `Object`.

Possible options are documented below.

### searchPlaces

Type: `Array<string>`.
Default: See below.

An array of places that [`search()`] will check in each directory as it moves up the directory tree.
Each place is relative to the directory being searched, and the places are checked in the specified order.

**Default `searchPlaces`:**

```js
[
  'package.json',
  `.${moduleName}rc`,
  `.${moduleName}rc.json`,
  `.${moduleName}rc.yaml`,
  `.${moduleName}rc.yml`,
  `.${moduleName}rc.js`,
  `${moduleName}.config.js`,
]
```

Create your own array to search more, fewer, or altogether different places.

Every item in `searchPlaces` needs to have a loader in [`loaders`] that corresponds to its extension.
(Common extensions are covered by default loaders.)
Read more about [`loaders`] below.

`package.json` is a special value: When it is included in `searchPlaces`, Cosmiconfig will always parse it as JSON and load a property within it, not the whole file.
That property is defined with the [`packageProp`] option, and defaults to your module name.

Examples, with a module named `porgy`:

```js
// Disallow extensions on rc files:
[
  'package.json',
  '.porgyrc',
  'porgy.config.js'
]

// ESLint searches for configuration in these places:
[
  '.eslintrc.js',
  '.eslintrc.yaml',
  '.eslintrc.yml',
  '.eslintrc.json',
  '.eslintrc',
  'package.json'
]

// Babel looks in fewer places:
[
  'package.json',
  '.babelrc'
]

// Maybe you want to look for a wide variety of JS flavors:
[
  'porgy.config.js',
  'porgy.config.mjs',
  'porgy.config.ts',
  'porgy.config.coffee'
]
// ^^ You will need to designate custom loaders to tell
// Cosmiconfig how to handle these special JS flavors.

// Look within a .config/ subdirectory of every searched directory:
[
  'package.json',
  '.porgyrc',
  '.config/.porgyrc',
  '.porgyrc.json',
  '.config/.porgyrc.json'
]
```

### loaders

Type: `Object`.
Default: See below.

An object that maps extensions to the loader functions responsible for loading and parsing files with those extensions.

Cosmiconfig exposes its default loaders on a named export `defaultLoaders`.

**Default `loaders`:**

```js
const { defaultLoaders } = require('cosmiconfig');

console.log(Object.entries(defaultLoaders))
// [
//   [ '.js', [Function: loadJs] ],
//   [ '.json', [Function: loadJson] ],
//   [ '.yaml', [Function: loadYaml] ],
//   [ '.yml', [Function: loadYaml] ],
//   [ 'noExt', [Function: loadYaml] ]
// ]
```

(YAML is a superset of JSON; which means YAML parsers can parse JSON; which is how extensionless files can be either YAML *or* JSON with only one parser.)

**If you provide a `loaders` object, your object will be *merged* with the defaults.**
So you can override one or two without having to override them all.

**Keys in `loaders`** are extensions (starting with a period), or `noExt` to specify the loader for files *without* extensions, like `.myapprc`.

**Values in `loaders`** are a loader function (described below) whose values are loader functions.

**The most common use case for custom loaders value is to load extensionless `rc` files as strict JSON**, instead of JSON *or* YAML (the default).
To accomplish that, provide the following `loaders` value:

```js
{
  noExt: defaultLoaders['.json']
}
```

If you want to load files that are not handled by the loader functions Cosmiconfig exposes, you can write a custom loader function or use one from NPM if it exists.

**Third-party loaders:**

- [@endemolshinegroup/cosmiconfig-typescript-loader](https://github.com/EndemolShineGroup/cosmiconfig-typescript-loader)

**Use cases for custom loader function:**

- Allow configuration syntaxes that aren't handled by Cosmiconfig's defaults, like JSON5, INI, or XML.
- Allow ES2015 modules from `.mjs` configuration files.
- Parse JS files with Babel before deriving the configuration.

**Custom loader functions** have the following signature:

```js
// Sync
(filepath: string, content: string) => Object | null

// Async
(filepath: string, content: string) => Object | null | Promise<Object | null>
```

Cosmiconfig reads the file when it checks whether the file exists, so it will provide you with both the file's path and its content.
Do whatever you need to, and return either a configuration object or `null` (or, for async-only loaders, a Promise that resolves with one of those).
`null` indicates that no real configuration was found and the search should continue.

A few things to note:

- If you use a custom loader, be aware of whether it's sync or async: you cannot use async customer loaders with the sync API ([`cosmiconfigSync()`]).
- **Special JS syntax can also be handled by using a `require` hook**, because `defaultLoaders['.js']` just uses `require`.
  Whether you use custom loaders or a `require` hook is up to you.

Examples:

```js
// Allow JSON5 syntax:
{
  '.json': json5Loader
}

// Allow a special configuration syntax of your own creation:
{
  '.special': specialLoader
}

// Allow many flavors of JS, using custom loaders:
{
  '.mjs': esmLoader,
  '.ts': typeScriptLoader,
  '.coffee': coffeeScriptLoader
}

// Allow many flavors of JS but rely on require hooks:
{
  '.mjs': defaultLoaders['.js'],
  '.ts': defaultLoaders['.js'],
  '.coffee': defaultLoaders['.js']
}
```

### packageProp

Type: `string | Array<string>`.
Default: `` `${moduleName}` ``.

Name of the property in `package.json` to look for.

Use a period-delimited string or an array of strings to describe a path to nested properties.

For example, the value `'configs.myPackage'` or `['configs', 'myPackage']` will get you the `"myPackage"` value in a `package.json` like this:

```json
{
  "configs": {
    "myPackage": {..}
  }
}
```

If nested property names within the path include periods, you need to use an array of strings. For example, the value `['configs', 'foo.bar', 'baz']` will get you the `"baz"` value in a `package.json` like this:

```json
{
  "configs": {
    "foo.bar": {
      "baz": {..}
    }
  }
}
```

If a string includes period but corresponds to a top-level property name, it will not be interpreted as a period-delimited path. For example, the value `'one.two'` will get you the `"three"` value in a `package.json` like this:

```json
{
  "one.two": "three",
  "one": {
    "two": "four"
  }
}
```

### stopDir

Type: `string`.
Default: Absolute path to your home directory.

Directory where the search will stop.

### cache

Type: `boolean`.
Default: `true`.

If `false`, no caches will be used.
Read more about ["Caching"](#caching) below.

### transform

Type: `(Result) => Promise<Result> | Result`.

A function that transforms the parsed configuration. Receives the [result].

If using [`search()`] or [`load()`] \(which are async), the transform function can return the transformed result or return a Promise that resolves with the transformed result.
If using `cosmiconfigSync`, [`search()`] or [`load()`], the function must be synchronous and return the transformed result.

The reason you might use this option — instead of simply applying your transform function some other way — is that *the transformed result will be cached*. If your transformation involves additional filesystem I/O or other potentially slow processing, you can use this option to avoid repeating those steps every time a given configuration is searched or loaded.

### ignoreEmptySearchPlaces

Type: `boolean`.
Default: `true`.

By default, if [`search()`] encounters an empty file (containing nothing but whitespace) in one of the [`searchPlaces`], it will ignore the empty file and move on.
If you'd like to load empty configuration files, instead, set this option to `false`.

Why might you want to load empty configuration files?
If you want to throw an error, or if an empty configuration file means something to your program.

## Caching

As of v2, cosmiconfig uses caching to reduce the need for repetitious reading of the filesystem or expensive transforms. Every new cosmiconfig instance (created with `cosmiconfig()`) has its own caches.

To avoid or work around caching, you can do the following:

- Set the `cosmiconfig` option [`cache`] to `false`.
- Use the cache-clearing methods [`clearLoadCache()`], [`clearSearchCache()`], and [`clearCaches()`].
- Create separate instances of cosmiconfig (separate "explorers").

## Differences from [rc](https://github.com/dominictarr/rc)

[rc](https://github.com/dominictarr/rc) serves its focused purpose well. cosmiconfig differs in a few key ways — making it more useful for some projects, less useful for others:

- Looks for configuration in some different places: in a `package.json` property, an rc file, a `.config.js` file, and rc files with extensions.
- Built-in support for JSON, YAML, and CommonJS formats.
- Stops at the first configuration found, instead of finding all that can be found up the directory tree and merging them automatically.
- Options.
- Asynchronous by default (though can be run synchronously).

## Contributing & Development

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

And please do participate!

[result]: #result

[`load()`]: #explorerload

[`search()`]: #explorersearch

[`clearloadcache()`]: #explorerclearloadcache

[`clearsearchcache()`]: #explorerclearsearchcache

[`cosmiconfig()`]: #cosmiconfig

[`cosmiconfigSync()`]: #cosmiconfigsync

[`clearcaches()`]: #explorerclearcaches

[`packageprop`]: #packageprop

[`cache`]: #cache

[`stopdir`]: #stopdir

[`searchplaces`]: #searchplaces

[`loaders`]: #loaders

[`cosmiconfigoptions`]: #cosmiconfigoptions

[`explorerSync.search()`]: #explorersyncsearch

[`explorerSync.load()`]: #explorersyncload

[`explorer.search()`]: #explorersearch

[`explorer.load()`]: #explorerload
