# Changelog

## 6.0.0

- **Breaking change:** The package now has named exports. See examples below.
- **Breaking change:** Separate async and sync APIs, accessible from different named exports. If you used `explorer.searchSync()` or `explorer.loadSync()`, you'll now create a sync explorer with `cosmiconfigSync()`, then use `explorerSync.search()` and `explorerSync.load()`.

  ```js
  // OLD: cosmiconfig v5
  import cosmiconfig from 'cosmiconfig';

  const explorer = cosmiconfig('example');
  const searchAsyncResult = await explorer.search();
  const loadAsyncResult = await explorer.load('./file/to/load');
  const searchSyncResult = explorer.searchSync();
  const loadSyncResult = explorer.loadSync('./file/to/load');

  // NEW: cosmiconfig v6
  import { cosmiconfig, cosmiconfigSync } from 'cosmiconfig';

  const explorer = cosmiconfig('example');
  const searchAsyncResult = await explorer.search();
  const loadAsyncResult = await explorer.load('./file/to/load');

  const explorerSync = cosmiconfigSync('example');
  const searchSyncResult = explorerSync.search();
  const loadSyncResult = explorerSync.load('./file/to/load');
  ```
- **Breaking change:** Remove support for Node 4 and 6. Requires Node 8+.
- **Breaking change:** Use npm package [yaml](https://www.npmjs.com/package/yaml) to parse YAML instead of npm package [js-yaml](https://www.npmjs.com/package/js-yaml).
- **Breaking change:** Remove `cosmiconfig.loaders` and add named export `defaultLoaders` that exports the default loaders used for each extension.

  ```js
  import { defaultLoaders } from 'cosmiconfig';

  console.log(Object.entries(defaultLoaders))
  // [
  //   [ '.js', [Function: loadJs] ],
  //   [ '.json', [Function: loadJson] ],
  //   [ '.yaml', [Function: loadYaml] ],
  //   [ '.yml', [Function: loadYaml] ],
  //   [ 'noExt', [Function: loadYaml] ]
  // ]
  ```
- Migrate from Flowtype to Typescript.
- Lazy load all default loaders.

## 5.2.1

- Chore: Upgrade `js-yaml` to avoid npm audit warning.

## 5.2.0

- Added: `packageProp` values can be arrays of strings, to allow for property names that include periods. (This was possible before, but not documented or deliberately supported.)
- Chore: Replaced the `lodash.get` dependency with a locally defined function.
- Chore: Upgrade `js-yaml` to avoid npm audit warning.

## 5.1.0

- Added: `packageProp` values can include periods to describe paths to nested objects within `package.json`.

## 5.0.7

- Fixed: JS loader bypasses Node's `require` cache, fixing a bug where updates to `.js` config files would not load even when Cosmiconfig was told not to cache.

## 5.0.6

- Fixed: Better error message if the end user tries an extension Cosmiconfig is not configured to understand.

## 5.0.5

- Fixed: `load` and `loadSync` work with paths relative to `process.cwd()`.

## 5.0.4

- Fixed: `rc` files with `.js` extensions included in default `searchPlaces`.

## 5.0.3

- Docs: Minor corrections to documentation. *Released to update package documentation on npm*.

## 5.0.2

- Fixed: Allow `searchSync` and `loadSync` to load JS configuration files whose export is a Promise.

## 5.0.1

The API has been completely revamped to increase clarity and enable a very wide range of new usage. **Please read the readme for all the details.**

While the defaults remain just as useful as before — and you can still pass no options at all — now you can also do all kinds of wild and crazy things.

- The `loaders` option allows you specify custom functions to derive config objects from files. Your loader functions could parse ES2015 modules or TypeScript, JSON5, even INI or XML. Whatever suits you.
- The `searchPlaces` option allows you to specify exactly where cosmiconfig looks within each directory it searches.
- The combination of `loaders` and `searchPlaces` means that you should be able to load pretty much any kind of configuration file you want, from wherever you want it to look.

Additionally, the overloaded `load()` function has been split up into several clear and focused functions:

- `search()` now searches up the directory tree, and `load()` loads a configuration file that you don't need to search for.
- The `sync` option has been replaced with separate synchronous functions: `searchSync()` and `loadSync()`.
- `clearFileCache()` and `clearDirectoryCache()` have been renamed to `clearLoadCache()` and `clearSearchPath()` respectively.

More details:

- The default JS loader uses `require`, instead of `require-from-string`. So you *could* use `require` hooks to control the loading of JS files (e.g. pass them through esm or Babel). In most cases it is probably preferable to use a custom loader.
- The options `rc`, `js`, and `rcExtensions` have all been removed. You can accomplish the same and more with `searchPlaces`.
- The default `searchPlaces` include `rc` files with extensions, e.g. `.thingrc.json`, `.thingrc.yaml`, `.thingrc.yml`. This is the equivalent of switching the default value of the old `rcExtensions` option to `true`.
- The option `rcStrictJson` has been removed. To get the same effect, you can specify `noExt: cosmiconfig.loadJson` in your `loaders` object.
- `packageProp` no longer accepts `false`. If you don't want to look in `package.json`, write a `searchPlaces` array that does not include it.
- By default, empty files are ignored by `search()`. The new option `ignoreEmptySearchPlaces` allows you to load them, instead, in case you want to do something with empty files.
- The option `configPath` has been removed. Just pass your filepaths directory to `load()`.
- Removed the `format` option.  Formats are now all handled via the file extensions specified in `loaders`.

(If you're wondering with happened to 5.0.0 ... it was a silly publishing mistake.)

## 4.0.0

- Licensing improvement: updated `parse-json` from `3.0.0` to `4.0.0`(see [sindresorhus/parse-json#12][parse-json-pr-12]).
- Changed: error message format for `JSON` parse errors(see [#101][pr-101]). If you were relying on the format of JSON-parsing error messages, this will be a breaking change for you.
- Changed: set default for `searchPath` as `process.cwd()` in `explorer.load`.

## 3.1.0

- Added: infer format based on filePath

## 3.0.1

- Fixed: memory leak due to bug in `require-from-string`.
- Added: for JSON files, append position to end of error message.

## 3.0.0

- Removed: support for loading config path using the `--config` flag. cosmiconfig will not parse command line arguments. Your application can parse command line arguments and pass them to cosmiconfig.
- Removed: `argv` config option.
- Removed: support for Node versions &lt; 4.
- Added: `sync` option.
- Fixed: Throw a clear error on getting empty config file.
- Fixed: when a `options.configPath` is `package.json`, return the package prop, not the entire JSON file.

## 2.2.2

- Fixed: `options.configPath` and `--config` flag are respected.

## 2.2.0, 2.2.1

- 2.2.0 included a number of improvements but somehow broke stylelint. The changes were reverted in 2.2.1, to be restored later.

## 2.1.3

- Licensing improvement: switched from `json-parse-helpfulerror` to `parse-json`.

## 2.1.2

- Fixed: bug where an `ENOENT` error would be thrown is `searchPath` referenced a non-existent file.
- Fixed: JSON parsing errors in Node v7.

## 2.1.1

- Fixed: swapped `graceful-fs` for regular `fs`, fixing a garbage collection problem.

## 2.1.0

- Added: Node 0.12 support.

## 2.0.2

- Fixed: Node version specified in `package.json`.

## 2.0.1

- Fixed: no more infinite loop in Windows.

## 2.0.0

- Changed: module now creates cosmiconfig instances with `load` methods (see README).
- Added: caching (enabled by the change above).
- Removed: support for Node versions &lt;4.

## 1.1.0

- Add `rcExtensions` option.

## 1.0.2

- Fix handling of `require()`'s within JS module configs.

## 1.0.1

- Switch Promise implementation to pinkie-promise.

## 1.0.0

- Initial release.

[parse-json-pr-12]: https://github.com/sindresorhus/parse-json/pull/12

[pr-101]: https://github.com/davidtheclark/cosmiconfig/pull/101
