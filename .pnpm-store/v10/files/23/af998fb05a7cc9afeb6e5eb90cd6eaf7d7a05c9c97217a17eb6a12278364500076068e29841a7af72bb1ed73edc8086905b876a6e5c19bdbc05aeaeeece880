![logo](https://user-images.githubusercontent.com/2213682/146607186-8e13ddef-26a4-4ebf-befd-5aac9d77c090.png)

<div align="center">

[![fundraising](https://opencollective.com/core-js/all/badge.svg?label=fundraising)](https://opencollective.com/core-js) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/zloirock/core-js/blob/master/CONTRIBUTING.md) [![version](https://img.shields.io/npm/v/core-js-compat.svg)](https://www.npmjs.com/package/core-js-compat) [![core-js-compat downloads](https://img.shields.io/npm/dm/core-js-compat.svg?label=npm%20i%20core-js-compat)](https://npm-stat.com/charts.html?package=core-js&package=core-js-pure&package=core-js-compat&from=2014-11-18)

</div>

**I highly recommend reading this: [So, what's next?](https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md)**
---

[`core-js-compat` package](https://github.com/zloirock/core-js/tree/master/packages/core-js-compat) contains data about the necessity of [`core-js`](https://github.com/zloirock/core-js) modules and API for getting a list of required core-js modules by browserslist query.

```js
import compat from 'core-js-compat';

const {
  list,                       // array of required modules
  targets,                    // object with targets for each module
} = compat({
  targets: '> 1%',            // browserslist query or object of minimum environment versions to support, see below
  modules: [                  // optional list / filter of modules - regex, string or an array of them:
    'core-js/actual',         // - an entry point
    'esnext.array.unique-by', // - a module name (or just a start of a module name)
    /^web\./,                 // - regex that a module name must satisfy
  ],
  exclude: [                  // optional list / filter of modules to exclude, the signature is similar to `modules` option
    'web.atob',
  ],
  version: '3.36',            // used `core-js` version, by default - the latest
  inverse: false,             // inverse of the result - shows modules that are NOT required for the target environment
});

console.log(targets);
/* =>
{
  'es.error.cause': { ios: '14.5-14.8' },
  'es.aggregate-error.cause': { ios: '14.5-14.8' },
  'es.array.at': { ios: '14.5-14.8' },
  'es.array.find-last': { firefox: '100', ios: '14.5-14.8' },
  'es.array.find-last-index': { firefox: '100', ios: '14.5-14.8' },
  'es.array.includes': { firefox: '100' },
  'es.array.push': { chrome: '100', edge: '101', ios: '14.5-14.8', safari: '15.4' },
  'es.array.unshift': { ios: '14.5-14.8', safari: '15.4' },
  'es.object.has-own': { ios: '14.5-14.8' },
  'es.regexp.flags': { chrome: '100', edge: '101' },
  'es.string.at-alternative': { ios: '14.5-14.8' },
  'es.typed-array.at': { ios: '14.5-14.8' },
  'es.typed-array.find-last': { firefox: '100', ios: '14.5-14.8' },
  'es.typed-array.find-last-index': { firefox: '100', ios: '14.5-14.8' },
  'esnext.array.group': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.group-by': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.group-by-to-map': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.group-to-map': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.to-reversed': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.to-sorted': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.to-spliced': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.unique-by': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.array.with': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.typed-array.to-reversed': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.typed-array.to-sorted': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.typed-array.to-spliced': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'esnext.typed-array.with': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'web.dom-exception.stack': { chrome: '100', edge: '101', ios: '14.5-14.8', safari: '15.4' },
  'web.immediate': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' },
  'web.structured-clone': { chrome: '100', edge: '101', firefox: '100', ios: '14.5-14.8', safari: '15.4' }
}
*/
```

### `targets` option
`targets` could be [a `browserslist` query](https://github.com/browserslist/browserslist) or a targets object that specifies minimum environment versions to support:
```js
// browserslist query:
'defaults, not IE 11, maintained node versions'
// object (sure, all those fields optional):
{
  android: '4.0',         // Android WebView version
  bun: '0.1.2',           // Bun version
  chrome: '38',           // Chrome version
  'chrome-android': '18', // Chrome for Android version
  deno: '1.12',           // Deno version
  edge: '13',             // Edge version
  electron: '5.0',        // Electron framework version
  firefox: '15',          // Firefox version
  'firefox-android': '4', // Firefox for Android version
  hermes: '0.11',         // Hermes version
  ie: '8',                // Internet Explorer version
  ios: '13.0',            // iOS Safari version
  node: 'current',        // NodeJS version, you can use 'current' for set it to currently used
  opera: '12',            // Opera version
  'opera-android': '7',   // Opera for Android version
  phantom: '1.9',         // PhantomJS headless browser version
  quest: '5.0',           // Meta Quest Browser version
  'react-native': '0.70', // React Native version (default Hermes engine)
  rhino: '1.7.13',        // Rhino engine version
  safari: '14.0',         // Safari version
  samsung: '14.0',        // Samsung Internet version
  esmodules: true,        // That option set target to minimum supporting ES Modules versions of all browsers
  browsers: '> 0.25%',    // Browserslist query or object with target browsers
}
```

### Additional API:

```js
// equals of of the method from the example above
require('core-js-compat/compat')({ targets, modules, version }); // => { list: Array<ModuleName>, targets: { [ModuleName]: { [EngineName]: EngineVersion } } }
// or
require('core-js-compat').compat({ targets, modules, version }); // => { list: Array<ModuleName>, targets: { [ModuleName]: { [EngineName]: EngineVersion } } }

// full compat data:
require('core-js-compat/data'); // => { [ModuleName]: { [EngineName]: EngineVersion } }
// or
require('core-js-compat').data; // => { [ModuleName]: { [EngineName]: EngineVersion } }

// map of modules by `core-js` entry points:
require('core-js-compat/entries'); // => { [EntryPoint]: Array<ModuleName> }
// or
require('core-js-compat').entries; // => { [EntryPoint]: Array<ModuleName> }

// full list of modules:
require('core-js-compat/modules'); // => Array<ModuleName>
// or
require('core-js-compat').modules; // => Array<ModuleName>

// the subset of modules which available in the passed `core-js` version:
require('core-js-compat/get-modules-list-for-target-version')('3.36'); // => Array<ModuleName>
// or
require('core-js-compat').getModulesListForTargetVersion('3.36'); // => Array<ModuleName>
```

If you wanna help to improve this data, you could take a look at the related section of [`CONTRIBUTING.md`](https://github.com/zloirock/core-js/blob/master/CONTRIBUTING.md#how-to-update-core-js-compat-data). The visualization of compatibility data and the browser tests runner is available [here](http://zloirock.github.io/core-js/compat/), the example:

![compat-table](https://user-images.githubusercontent.com/2213682/217452234-ccdcfc5a-c7d3-40d1-ab3f-86902315b8c3.png)
