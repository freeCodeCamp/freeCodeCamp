## [3.0.5]

### Fixed
- Upgraded ua-parser-js dependency

## [3.0.4]

### Fixed
- Fixed missing `lib` folder

## [3.0.3]

### Fixed
- Updated cross-fetch to resolve CVE-2022-0235
- Bump copy-props from 2.0.4 to 2.0.5

## [3.0.2]

### Fixed
- Fixed usage of "// @flow weak" in one file to support Flow 0.167


## [3.0.1]

### Fixed
- Upgraded ua-parser-js dependency


## [3.0.0] - 2020-10-07

### Breaking
- Removed `core-js` from `fbjs`. Please use your own Map/Set polyfills in older browsers.

## [2.0.0] - 2020-07-29

### Changed
- Upgraded `core-js` dependency to ^3.6.4
- Replaced `isomorphic-fetch` dependency with `cross-fetch`

### Fixed
- Fixed `__DEV__` check in `invariant`


## [1.0.0] - 2018-09-18

### Added
- More modules, primarily focused on the requirements of Fixed Data Table.

### Removed
- Remove whitelisting of React PropType warning from `warning` module.
- Removed runtime dependency on immutable, reducing package size.

### Changed
- More flow annotations: `joinClasses`, `flatMapArray`
- Upgraded `core-js` dependency to ^2.4.1

### Fixed
- Fixed strict argument arity issues with `Deferred` module.
- `getDocumentScrollElement` now correctly returns the `<html>` element in Chrome 61 instead of `<body>`.

## [0.8.5] - 2016-09-27

### Fixed
- Fixed all remaining issues resulting in Flow errors when `fbjs` is a dependency of a dependency.

### Removed
- Removed now extraneous `flow/lib/Promise.js`.


## [0.8.4] - 2016-08-19

### Changed
- Moved `try/catch` in `warning` module to helper function to prevent deopts.


## [0.8.3] - 2016-05-25

### Added
- `Deferred`: added `Deferred.prototype.catch` to avoid having to call this directly on the Promise.
- `UnicodeUtilsExtra`: added several methods for escaping strings.

### Changed
- More Flow annotations: `containsNode`, `emptyFunction`, `memoizeStringOnly`
- Added explicit `<any>` type arguments to in anticipation of a future Flow change requiring them.
- `Object.assign` calls now replaced with usage of `object-assign` module.

### Fixed
- Type imports in .js.flow files are now properly using relative paths.
- `DataTransfer`: handle Firefox better


## [0.8.2] - 2016-05-05

### Removed
- Removed extraneous production dependency


## [0.8.1] - 2016-04-18

### Added
- We now include a `Promise` class definition in `flow/lib` to account for the changes in Flow v0.23 which removed non-spec methods. This will allow our code to continue typechecking while using these methods.


## [0.8.0] - 2016-04-04

### Added
- Several additional modules. Notably, a collection of Unicode utilities and many new `functional` helpers.
- `CSSCore`: added `matchesSelector` method

### Changed
- Copyright headers updated to reflect current boilerplate
- `@providesModule` headers removed from generated source code
- Flow files now contain relative requires, improving compatibility with Haste and CommonJS module systems

### Fixed
- `isEmpty`: Protect from breaking in environments without `Symbol` defined


## [0.7.2] - 2016-02-05

### Fixed
- `URI`: correctly store reference to value in constructor and return it when stringifying

### Removed
- Backed out rejection tracking for React Native `Promise` implementation. That code now lives in React Native.


## [0.7.1] - 2016-02-02

### Fixed

- Corrected require path issue for native `Promise` module


## [0.7.0] - 2016-01-27

### Added
- `Promise` for React Native with rejection tracking in `__DEV__` and a `finally` method
- `_shouldPolyfillES6Collection`: check if ES6 Collections need to be polyfilled.

### Removed
- `toArray`: removed in favor of using `Array.from` directly.

### Changed
- `ErrorUtils`: Re-uses any global instance that already exists
- `fetch`: Switched to `isomorphic-fetch` when a global implementation is missing
- `shallowEqual`: handles `NaN` values appropriately (as equal), now using `Object.is` semantics


## [0.6.1] - 2016-01-06

### Changed
- `getActiveElement`: no longer throws in non-browser environment (again)


## [0.6.0] - 2015-12-29

### Changed
- Flow: Original source files in `fbjs/flow/include` have been removed in favor of placing original files alongside compiled files in lib with a `.flow` suffix. This requires Flow version 0.19 or greater and a change to `.flowconfig` files to remove the include path.


## [0.5.1] - 2015-12-13

### Added
- `base62` module


## [0.5.0] - 2015-12-04

### Changed

- `getActiveElement`: No longer handles a non-existent `document`


## [0.4.0] - 2015-10-16

### Changed

- `invariant`: Message is no longer prefixed with "Invariant Violation: ".


## [0.3.2] - 2015-10-12

### Added
- Apply appropriate transform (`loose-envify`) when bundling with `browserify`


## [0.3.1] - 2015-10-01

### Fixed
- Ensure the build completes correctly before packaging


## [0.3.0] - 2015-10-01

### Added
- More modules: `memoizeStringOnly`, `joinClasses`
- `UserAgent`: Query information about current user agent

### Changed
- `fetchWithRetries`: Reject failure with an Error, not the response
- `getActiveElement`: no longer throws in non-browser environment
