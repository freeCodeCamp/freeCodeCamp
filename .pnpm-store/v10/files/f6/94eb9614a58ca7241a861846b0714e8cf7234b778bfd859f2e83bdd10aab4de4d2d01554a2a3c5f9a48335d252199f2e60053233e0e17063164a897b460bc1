## 0.5.16 (31 Mar 2025)

### Fixes

- Fixed out of order cleanup when using top-level await (#898)

## 0.5.15 (3 Jun 2024)

### Fixes

- Fixed wrong import in error overlay for `ansi-html` (#853)

## 0.5.14 (1 Jun 2024)

### Fixes

- Moved to `ansi-html` `v0.0.9` and `schema-utils` `v4.x` (#848)

### Internal

- Run tests on latest versions of Node.js 18, 20 and 22 (#848)
- Bumped `jest` to v29 and some other development dependencies (#848)
- Removed `yalc` (#849)

## 0.5.13 (28 Apr 2024)

### Fixes

- Fixed module system inferring (ESM vs CJS) to start from the point of each file (#771)

## 0.5.12 (27 Apr 2024)

### Fixes

- Fixed incorrect `sockProtocol` override (#835)
- Relaxed peer dependency requirement on `webpack-dev-server` to allow v5.x (#837)

## 0.5.11 (15 Aug 2023)

### Features

- Added support to exclude dynamically generated modules from other loaders (#769)

### Fixes

- Fixed unnecessary memory leaks due to `prevExports` (#766)
- Relaxed peer dependency requirement on `type-fest` to allow v4.x (#767)
- Fixed module type resolution when there is difference across contexts (#768)

## 0.5.10 (24 Nov 2022)

### Fixes

- Bumped `loader-utils` to fix security vulnerability (#700)

## 0.5.9 (10 Nov 2022)

### Fixes

- Bumped `loader-utils` to fix security vulnerability (#685)

## 0.5.8 (9 Oct 2022)

### Fixes

- Fixed performance issue regarding `require.resolve` in loader injection (#669)
- Bumped `core-js-pure` to not depend on deprecated versions (#674)

## 0.5.7 (23 May 2022)

### Fixes

- Removed debug `console.log` statement (#631)

### Internal

- Run tests on Node.js 18 (#631)

## 0.5.6 (10 May 2022)

### Fixes

- Fixed faulty `this` type import in loader (#624)
- Made current script detection more robust for edge cases (#630)

### Internal

- Swapped to new `ReactDOM.createRoot` API in examples (#626)

## 0.5.5 (4 April 2022)

### Fixes

- Handle unknown `moduleId` for dynamically generated modules (#547)
- Handle WDS `auto` value on `port` (#574)
- Fixed `react-refresh@0.12.0` compatibility (#576)
- Fixed crash when parsing compile errors in overlay (#577)
- Respect virtual modules when injecting loader (#593)
- Allow `port` to be missing for WDS, also some general refactoring (#623)

### Internal

- A couple documentation changes in README (#575, 8c39623, #597)
- Bumped dependencies for testing infrastructure (#526, #564, #567, #581, #588, #591, #594, #616)

## 0.5.4 (22 December 2021)

### Fixes

- Skip loader injection for files referenced as assets (#545)
- Changed failures of `exports` capturing to warn instead of throw (#546)

## 0.5.3 (28 November 2021)

### Fixes

- Updated overlay for unsafe area in Safari (#528)
- Fixed performance in large projects due to memory leak in loader (#537)

## 0.5.2 (19 November 2021)

### Features

- Added support for WDS v4 `client.webSocketURL` (#529)

### Fixes

- Fixed lost module context due to interceptor by always using regular functions (#531)
- Relaxed peer dependency requirement on `react-refresh` (#534)

## 0.5.1 (15 September 2021)

### Fixes

- Relaxed peer dependency requirement on `type-fest` to allow v2.x (#507, #508)

### Internal

- Fixed typos in README (#509)

## 0.5.0 (14 September 2021)

### BREAKING

- While most of the public API did not change,
  we've re-written a large chunk of the runtime code to support a wider range of use cases.
  This is likely to provide more stability, but if `0.4.x` works in your setup but `0.5.x` doesn't,
  please file us an issue - we would love to address it!
- The `disableRefreshCheck` option have been removed (#285).
  It has long been effect-less and deprecated since `0.3.x`.
- The `overlay.useLegacyWDSSockets` have been removed (#498).
  It is aimed to support WDS below `3.6.0` (published in June 2019),
  but looking at current usage and download stats,
  we've decided it is best to drop support for the old socket format moving forward.
- Handling of port `0` have been removed (#337).
- `html-entities` have been bumped to `2.x` (#321).
- `react-refresh` have been bumped to `0.10.0` (#353).

### Features

- Added WDS v4 support with new socket defaults through Webpack config (#241, #286, #392, #413, #479)
- Added the `overlay.sockProtocol` option (#242)
- Added monorepo compatibility via the the `library` option (#273)
- Rewritten URL handling using WHATWG `URL` APIs with automatic pony-filling (#278, #332, #378)
- Rewritten Webpack 5 compatibility using new APIs and hooks (#319, #372, #434, #483)
- Rewritten refresh runtime to be fully module system aware (#337, #461, #482, #492)
- Rewritten Webpack 4 and 5 checks using feature detection on compiler (#415)
- Added support for `experiments.topLevelAwait` (#435, #447, #493)
- Added retry logic when socket initialisation fails (#446)

### Fixes

- Relaxed peer dependency requirement on `type-fest` (#257, c02018a, #484)
- Relaxed requirement on the `overlay` option to accept relative paths (#284)
- Patched unstable initialisation of global scope across module boundaries (#290, #369, #464, #505)
- Patched quote escaping in injected runtime code (#306)
- Invalidate updates outside of Refresh boundary for consistency (#307)
- Properly throw when an ambiguous entrypoint is received while using Webpack 4 (#320)
- Fixed overlay script source detection for WDS when no `src` is found (#331)
- Fixed possible Stack Overflow through self-referencing (#370, #380)
- Relaxed errors on HMR not found to not crash JS parsing (#371)
- Ensure overlay code won't run if disabled (#374)
- Relaxed peer dependency requirement on `@types/webpack` (#414)
- Fixed compiler error overlay crashes when messages are empty (#462)
- Swapped `ansi-html` to `ansi-html-community` to fix ReDoS vulnerability (#501)

### Internal

- More stable testing infrastructure (#234)
- Run tests by default on Webpack 5 (#440)
- Rewrite documentation and fix outstanding issues (#283, #291, #311, #376, #480, #497, #499)
- Added documentation on community plugins: `react-refresh-typescript` and `swc` (#248, fbe1f27, #450)

## 0.4.3 (2 November 2020)

### Fixes

- Fixed Yarn 2 PnP compatibility with absolute `react-refresh/runtime` imports (#230)
- Fixed Webpack 5 compatibility by requiring `__webpack_require__` (#233)
- Fixed IE 11 compatibility in socket code (4033e6af)
- Relaxed peer dependency requirement for `react-refresh` to allow `0.9.x` (747c19ba)

## 0.4.2 (3 September 2020)

### Fixes

- Patched loader to use with Node.js global `fetch` polyfills (#193)
- Patched default `include` and `exclude` options to be case-insensitive (#194)

## 0.4.1 (28 July 2020)

### Fixes

- Fixed accidental use of testing alias `webpack.next` in published plugin code (#167)

## 0.4.0 (28 July 2020)

### BREAKING

- Minimum required Node.js version have been bumped to 10 as Node.js 8 is EOL now.
- Minimum required Webpack version is now `v4.43.0` or later as we adopted the new `module.hot.invalidate` API (#89).
  The new API enabled us to bail out of the HMR loop less frequently and provide a better experience.
  If you really cannot upgrade, you can stay on `0.3.3` for the time being.
- While most of our public API did not change, this release is closer to a rewrite than a refactor.
  A lot of files have moved to provide easier access for advanced users and frameworks (#122).
  You can check the difference in the PR to see what have moved and where they are now.
- The `useLegacyWDSSockets` option is now scoped under the `overlay` option (#153).

### Features

- Adopted the `module.hot.invalidate()` API, which means we will now bail out less often (#89)
- Attach runtime on Webpack's global scope instead of `window`, making the plugin platform-agnostic (#102)
- Added stable support for **Webpack 5** and beta support for **Module Federation** (#123, #132, #164)
- Socket integration URL detection via `document.currentScript` (#133)
- Relaxed requirements for "required" `overlay` options to receive `false` as value (#154)
- Prefixed all errors thrown by the plugin (#161)
- Eliminated use of soon-to-be-deprecated `lodash.debounce` package (#163)

### Fixes

- Fixed circular references for `__react_refresh_error_overlay__` and `__react_refresh_utils` (#116)
- Fixed IE11 compatibility (#106, #121)
- Rearranged directories to provide more ergonomic imports (#122)
- Fixed issues with Babel/ESLint/Flow regarding loader ordering and runtime cleanup (#129, #140)
- Correctly detecting the HMR plugin (#130, #160)
- Fixed unwanted injection of error overlay in non-browser environment (#146)
- Scoped the `useLegacyWDSSockets` options under `overlay` to reflect its true use (#153)
- Fixed non-preserved relative ordering of Webpack entries (#165)

### Internal

- Full HMR test suite - we are confident the plugin works! (#93, #96)
- Unit tests for all plugin-related Node.js code (#127)

## 0.3.3 (29 May 2020)

### Fixes

- Removed unrecoverable React errors check and its corresponding bail out logic on hot dispose (#104)

## 0.3.2 (22 May 2020)

### Fixes

- Fixed error in overlay when stack trace is unavailable (#91)
- Fixed IE11 compatibility (#98)

## 0.3.1 (11 May 2020)

### Fixes

- Relaxed peer dependency requirements for `webpack-plugin-serve`

## 0.3.0 (10 May 2020)

### BREAKING

- Deprecated the `disableRefreshCheck` flag (#60)

### Features

- Added custom error overlay support (#44)
- Added example project to use TypeScript without usual Babel settings (#46)
- Added custom socket parameters for WDS (#52)
- Added TypeScript definition files (#65)
- Added stricter options validation rules (#62)
- Added option to configure socket runtime to support more hot integrations (#64)
- Added support for `webpack-plugin-serve` (#74)

### Fixes

- Fixed non-dismissible overlay for build warnings (#57)
- Fixed electron compatibility (#58)
- Fixed optional peer dependencies to be truly optional (#59)
- Fixed compatibility issues caused by `node-url` (#61)
- Removed check for `react` import for compatibility (#69)

## 0.2.0 (2 March 2020)

### Features

- Added `webpack-hot-middleware` support (#23)

### Fixes

- Fixed dependency on a global `this` variable to better support web workers (#29)

## 0.1.3 (19 December 2019)

### Fixes

- Fixed runtime template injection when the `runtimeChunks` optimization is used in Webpack (#26)

## 0.1.2 (18 December 2019)

### Fixes

- Fixed caching of Webpack loader to significantly improve performance (#22)

## 0.1.1 (13 December 2019)

### Fixes

- Fixed usage of WDS SockJS fallback (#17)

## 0.1.0 (7 December 2019)

- Initial public release
