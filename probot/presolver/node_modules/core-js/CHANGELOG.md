## Changelog
##### 2.5.7 - 2018.05.26
- Get rid of reserved variable name `final`, related [#400](https://github.com/zloirock/core-js/issues/400)

##### 2.5.6 - 2018.05.07
- Forced replace native `Promise` in V8 6.6 (Node 10 and Chrome 66) because of [a bug with resolving custom thenables](https://bugs.chromium.org/p/chromium/issues/detail?id=830565)
- Added a workaround for usage buggy native LG WebOS 2 `Promise` in microtask implementation, [#396](https://github.com/zloirock/core-js/issues/396)
- Added modern version internal debugging information about used versions

##### 2.5.5 - 2018.04.08
- Fix some edge cases of `Reflect.set`, [#392](https://github.com/zloirock/core-js/issues/392) and [#393](https://github.com/zloirock/core-js/issues/393)

##### 2.5.4 - 2018.03.27
- Fixed one case of deoptimization built-in iterators in V8, related [#377](https://github.com/zloirock/core-js/issues/377)
- Fixed some cases of iterators feature detection, [#368](https://github.com/zloirock/core-js/issues/368)
- Fixed manually entered NodeJS domains issue in `Promise`, [#367](https://github.com/zloirock/core-js/issues/367)
- Fixed `Number.{parseInt, parseFloat}` entry points
- Fixed `__(define|lookup)[GS]etter__` import in the `library` version

##### 2.5.3 - 2017.12.12
- Fixed calling `onunhandledrejectionhandler` multiple times for one `Promise` chain, [#318](https://github.com/zloirock/core-js/issues/318)
- Forced replacement of `String#{padStart, padEnd}` in Safari 10 because of [a bug](https://bugs.webkit.org/show_bug.cgi?id=161944), [#280](https://github.com/zloirock/core-js/issues/280)
- Fixed `Array#@@iterator` in a very rare version of `WebKit`, [#236](https://github.com/zloirock/core-js/issues/236) and [#237](https://github.com/zloirock/core-js/issues/237)
- One more [#345](https://github.com/zloirock/core-js/issues/345)-related fix

##### 2.5.2 - 2017.12.09
- `MutationObserver` no longer used for microtask implementation in iOS Safari because of bug with scrolling, [#339](https://github.com/zloirock/core-js/issues/339)
- Fixed `JSON.stringify(undefined, replacer)` case in the wrapper from the `Symbol` polyfill, [#345](https://github.com/zloirock/core-js/issues/345)
- `Array()` calls changed to `new Array()` for V8 optimisation

##### 2.5.1 - 2017.09.01
- Updated `Promise#finally` per [tc39/proposal-promise-finally#37](https://github.com/tc39/proposal-promise-finally/issues/37)
- Optimized usage of some internal helpers for reducing size of `shim` version
- Fixed some entry points for virtual methods

##### 2.5.0 - 2017.08.05
- Added `Promise#finally` [stage 3 proposal](https://github.com/tc39/proposal-promise-finally), [#225](https://github.com/zloirock/core-js/issues/225)
- Added `Promise.try` [stage 1 proposal](https://github.com/tc39/proposal-promise-try)
- Added `Array#flatten` and `Array#flatMap` [stage 1 proposal](https://tc39.github.io/proposal-flatMap)
- Added `.of` and `.from` methods on collection constructors [stage 1 proposal](https://github.com/tc39/proposal-setmap-offrom):
  - `Map.of`
  - `Set.of`
  - `WeakSet.of`
  - `WeakMap.of`
  - `Map.from`
  - `Set.from`
  - `WeakSet.from`
  - `WeakMap.from`
- Added `Math` extensions [stage 1 proposal](https://github.com/rwaldron/proposal-math-extensions), [#226](https://github.com/zloirock/core-js/issues/226):
  - `Math.clamp`
  - `Math.DEG_PER_RAD`
  - `Math.degrees`
  - `Math.fscale`
  - `Math.RAD_PER_DEG`
  - `Math.radians`
  - `Math.scale`
- Added `Math.signbit` [stage 1 proposal](http://jfbastien.github.io/papers/Math.signbit.html)
- Updated `global` [stage 3 proposal](https://github.com/tc39/proposal-global) - added `global` global object, `System.global` deprecated
- Updated `Object.getOwnPropertyDescriptors` to the [final version](https://tc39.github.io/ecma262/2017/#sec-object.getownpropertydescriptors) - it should not create properties if descriptors are `undefined`
- Updated the list of iterable DOM collections, [#249](https://github.com/zloirock/core-js/issues/249), added:
  - `CSSStyleDeclaration#@@iterator`
  - `CSSValueList#@@iterator`
  - `ClientRectList#@@iterator`
  - `DOMRectList#@@iterator`
  - `DOMStringList#@@iterator`
  - `DataTransferItemList#@@iterator`
  - `FileList#@@iterator`
  - `HTMLAllCollection#@@iterator`
  - `HTMLCollection#@@iterator`
  - `HTMLFormElement#@@iterator`
  - `HTMLSelectElement#@@iterator`
  - `MimeTypeArray#@@iterator`
  - `NamedNodeMap#@@iterator`
  - `PaintRequestList#@@iterator`
  - `Plugin#@@iterator`
  - `PluginArray#@@iterator`
  - `SVGLengthList#@@iterator`
  - `SVGNumberList#@@iterator`
  - `SVGPathSegList#@@iterator`
  - `SVGPointList#@@iterator`
  - `SVGStringList#@@iterator`
  - `SVGTransformList#@@iterator`
  - `SourceBufferList#@@iterator`
  - `TextTrackCueList#@@iterator`
  - `TextTrackList#@@iterator`
  - `TouchList#@@iterator`
- Updated stages of proposals:
  - [`Object.getOwnPropertyDescriptors`](https://github.com/tc39/proposal-object-getownpropertydescriptors) to [stage 4 (ES2017)](https://tc39.github.io/ecma262/2017/#sec-object.getownpropertydescriptors)
  - [String padding](https://github.com/tc39/proposal-string-pad-start-end) to [stage 4 (ES2017)](https://tc39.github.io/ecma262/2017/#sec-string.prototype.padend)
  - [`global`](https://github.com/tc39/proposal-global) to [stage 3](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-09/sept-28.md#revisit-systemglobal--global)
  - [String trimming](https://github.com/tc39/proposal-string-left-right-trim) to [stage 2](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-07/jul-27.md#10iic-trimstarttrimend)
- Updated typed arrays to the modern (ES2016+) arguments validation, 
[#293](https://github.com/zloirock/core-js/pull/293)
- Fixed `%TypedArray%.from` Safari bug, [#285](https://github.com/zloirock/core-js/issues/285)
- Fixed compatibility with old version of Prototype.js, [#278](https://github.com/zloirock/core-js/issues/278), [#289](https://github.com/zloirock/core-js/issues/289)
- `Function#name` no longer cache the result for correct behaviour with inherited constructors, [#296](https://github.com/zloirock/core-js/issues/296)
- Added errors on incorrect context of collection methods, [#272](https://github.com/zloirock/core-js/issues/272)
- Fixed conversion typed array constructors to string, fix [#300](https://github.com/zloirock/core-js/issues/300)
- Fixed `Set#size` with debugger ReactNative for Android, [#297](https://github.com/zloirock/core-js/issues/297)
- Fixed an issue with Electron-based debugger, [#230](https://github.com/zloirock/core-js/issues/230)
- Fixed compatibility with incomplete third-party `WeakMap` polyfills, [#252](https://github.com/zloirock/core-js/pull/252)
- Added a fallback for `Date#toJSON` in engines without native `Date#toISOString`, [#220](https://github.com/zloirock/core-js/issues/220)
- Added support for Sphere Dispatch API, [#286](https://github.com/zloirock/core-js/pull/286)
- Seriously changed the coding style and the [ESLint config](https://github.com/zloirock/core-js/blob/master/.eslintrc.js)
- Updated many dev dependencies (`webpack`, `uglify`, etc)
- Some other minor fixes and optimizations

##### 2.4.1 - 2016.07.18
- Fixed `script` tag for some parsers, [#204](https://github.com/zloirock/core-js/issues/204), [#216](https://github.com/zloirock/core-js/issues/216)
- Removed some unused variables, [#217](https://github.com/zloirock/core-js/issues/217), [#218](https://github.com/zloirock/core-js/issues/218)
- Fixed MS Edge `Reflect.construct` and `Reflect.apply` - they should not allow primitive as `argumentsList` argument

##### 1.2.7 [LEGACY] - 2016.07.18
- Some fixes for issues like [#159](https://github.com/zloirock/core-js/issues/159), [#186](https://github.com/zloirock/core-js/issues/186), [#194](https://github.com/zloirock/core-js/issues/194), [#207](https://github.com/zloirock/core-js/issues/207)

##### 2.4.0 - 2016.05.08
- Added `Observable`, [stage 1 proposal](https://github.com/zenparsing/es-observable)
- Fixed behavior `Object.{getOwnPropertySymbols, getOwnPropertyDescriptor}` and `Object#propertyIsEnumerable` on `Object.prototype`
- `Reflect.construct` and `Reflect.apply` should throw an error if `argumentsList` argument is not an object, [#194](https://github.com/zloirock/core-js/issues/194)

##### 2.3.0 - 2016.04.24
- Added `asap` for enqueuing microtasks, [stage 0 proposal](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask)
- Added well-known symbol `Symbol.asyncIterator` for [stage 2 async iteration proposal](https://github.com/tc39/proposal-async-iteration)
- Added well-known symbol `Symbol.observable` for [stage 1 observables proposal](https://github.com/zenparsing/es-observable)
- `String#{padStart, padEnd}` returns original string if filler is empty string, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#stringprototypepadstartpadend)
- `Object.values` and `Object.entries` moved to stage 4 from 3, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#objectvalues--objectentries)
- `System.global` moved to stage 2 from 1, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#systemglobal)
- `Map#toJSON` and `Set#toJSON` rejected and will be removed from the next major release, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-31.md#mapprototypetojsonsetprototypetojson)
- `Error.isError` withdrawn and will be removed from the next major release, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#erroriserror)
- Added fallback for `Function#name` on non-extensible functions and functions with broken `toString` conversion, [#193](https://github.com/zloirock/core-js/issues/193)

##### 2.2.2 - 2016.04.06
- Added conversion `-0` to `+0` to `Array#{indexOf, lastIndexOf}`, [ES2016 fix](https://github.com/tc39/ecma262/pull/316)
- Added fixes for some `Math` methods in Tor Browser
- `Array.{from, of}` no longer calls prototype setters
- Added workaround over Chrome DevTools strange behavior, [#186](https://github.com/zloirock/core-js/issues/186)

##### 2.2.1 - 2016.03.19
- Fixed `Object.getOwnPropertyNames(window)` `2.1+` versions bug, [#181](https://github.com/zloirock/core-js/issues/181)

##### 2.2.0 - 2016.03.15
- Added `String#matchAll`, [proposal](https://github.com/tc39/String.prototype.matchAll)
- Added `Object#__(define|lookup)[GS]etter__`, [annex B ES2017](https://github.com/tc39/ecma262/pull/381)
- Added `@@toPrimitive` methods to `Date` and `Symbol`
- Fixed `%TypedArray%#slice` in Edge ~ 13 (throws with `@@species` and wrapped / inherited constructor)
- Some other minor fixes

##### 2.1.5 - 2016.03.12
- Improved support NodeJS domains in `Promise#then`, [#180](https://github.com/zloirock/core-js/issues/180)
- Added fallback for `Date#toJSON` bug in Qt Script, [#173](https://github.com/zloirock/core-js/issues/173#issuecomment-193972502)

##### 2.1.4 - 2016.03.08
- Added fallback for `Symbol` polyfill in Qt Script, [#173](https://github.com/zloirock/core-js/issues/173)
- Added one more fallback for IE11 `Script Access Denied` error with iframes, [#165](https://github.com/zloirock/core-js/issues/165)

##### 2.1.3 - 2016.02.29
- Added fallback for [`es6-promise` package bug](https://github.com/stefanpenner/es6-promise/issues/169), [#176](https://github.com/zloirock/core-js/issues/176)

##### 2.1.2 - 2016.02.29
- Some minor `Promise` fixes:
  - Browsers `rejectionhandled` event better HTML spec complaint
  - Errors in unhandled rejection handlers should not cause any problems
  - Fixed typo in feature detection

##### 2.1.1 - 2016.02.22
- Some `Promise` improvements:
  - Feature detection:
    - **Added detection unhandled rejection tracking support - now it's available everywhere**, [#140](https://github.com/zloirock/core-js/issues/140)
    - Added detection `@@species` pattern support for completely correct subclassing
    - Removed usage `Object.setPrototypeOf` from feature detection and noisy console message about it in FF
  - `Promise.all` fixed for some very specific cases

##### 2.1.0 - 2016.02.09
- **API**:
  - ES5 polyfills are split and logic, used in other polyfills, moved to internal modules
    - **All entry point works in ES3 environment like IE8- without `core-js/(library/)es5`**
    - **Added all missed single entry points for ES5 polyfills**
    - Separated ES5 polyfills moved to the ES6 namespace. Why?
      - Mainly, for prevent duplication features in different namespaces - logic of most required ES5 polyfills changed in ES6+:
        - Already added changes for: `Object` statics - should accept primitives, new whitespaces lists in `String#trim`, `parse(Int|float)`, `RegExp#toString` logic, `String#split`, etc
        - Should be changed in the future: `@@species` and `ToLength` logic in `Array` methods, `Date` parsing, `Function#bind`, etc
        - Should not be changed only several features like `Array.isArray` and `Date.now`
      - Some ES5 polyfills required for modern engines
    - All old entry points should work fine, but in the next major release API can be changed
  - `Object.getOwnPropertyDescriptors` moved to the stage 3, [January TC39 meeting](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-01/2016-01-28.md#objectgetownpropertydescriptors-to-stage-3-jordan-harband-low-priority-but-super-quick)
  - Added `umd` option for [custom build process](https://github.com/zloirock/core-js#custom-build-from-external-scripts), [#169](https://github.com/zloirock/core-js/issues/169)
  - Returned entry points for `Array` statics, removed in `2.0`, for compatibility with `babel` `6` and for future fixes
- **Deprecated**:
  - `Reflect.enumerate` deprecated and will be removed from the next major release, [January TC39 meeting](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-01/2016-01-28.md#5xix-revisit-proxy-enumerate---revisit-decision-to-exhaust-iterator)
- **New Features**:
  - Added [`Reflect` metadata API](https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md) as a pre-strawman feature, [#152](https://github.com/zloirock/core-js/issues/152):
    - `Reflect.defineMetadata`
    - `Reflect.deleteMetadata`
    - `Reflect.getMetadata`
    - `Reflect.getMetadataKeys`
    - `Reflect.getOwnMetadata`
    - `Reflect.getOwnMetadataKeys`
    - `Reflect.hasMetadata`
    - `Reflect.hasOwnMetadata`
    - `Reflect.metadata`
  - Implementation / fixes `Date#toJSON`
  - Fixes for `parseInt` and `Number.parseInt`
  - Fixes for `parseFloat` and `Number.parseFloat`
  - Fixes for `RegExp#toString`
  - Fixes for `Array#sort`
  - Fixes for `Number#toFixed`
  - Fixes for `Number#toPrecision`
  - Additional fixes for `String#split` (`RegExp#@@split`)
- **Improvements**:
  - Correct subclassing wrapped collections, `Number` and `RegExp` constructors with native class syntax
  - Correct support `SharedArrayBuffer` and buffers from other realms in typed arrays wrappers 
  - Additional validations for `Object.{defineProperty, getOwnPropertyDescriptor}` and `Reflect.defineProperty`
- **Bug Fixes**:
  - Fixed some cases `Array#lastIndexOf` with negative second argument

##### 2.0.3 - 2016.01.11
- Added fallback for V8 ~ Chrome 49 `Promise` subclassing bug causes unhandled rejection on feature detection, [#159](https://github.com/zloirock/core-js/issues/159)
- Added fix for very specific environments with global `window === null`

##### 2.0.2 - 2016.01.04
- Temporarily removed `length` validation from `Uint8Array` constructor wrapper. Reason - [bug in `ws` module](https://github.com/websockets/ws/pull/645) (-> `socket.io`) which passes to `Buffer` constructor -> `Uint8Array` float and uses [the `V8` bug](https://code.google.com/p/v8/issues/detail?id=4552) for conversion to int (by the spec should be thrown an error). [It creates problems for many people.](https://github.com/karma-runner/karma/issues/1768) I hope, it will be returned after fixing this bug in `V8`.

##### 2.0.1 - 2015.12.31
- Forced usage `Promise.resolve` polyfill in the `library` version for correct work with wrapper
- `Object.assign` should be defined in the strict mode -> throw an error on extension non-extensible objects, [#154](https://github.com/zloirock/core-js/issues/154)

##### 2.0.0 - 2015.12.24
- Added implementations and fixes [Typed Arrays](https://github.com/zloirock/core-js#ecmascript-6-typed-arrays)-related features
  - `ArrayBuffer`, `ArrayBuffer.isView`, `ArrayBuffer#slice`
  - `DataView` with all getter / setter methods
  - `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array` and `Float64Array` constructors
  - `%TypedArray%.{for, of}`, `%TypedArray%#{copyWithin, every, fill, filter, find, findIndex, forEach, indexOf, includes, join, lastIndexOf, map, reduce, reduceRight, reverse, set, slice, some, sort, subarray, values, keys, entries, @@iterator, ...}`
- Added [`System.global`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/tc39/proposal-global), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-19.md#systemglobal-jhd)
- Added [`Error.isError`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/ljharb/proposal-is-error), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-19.md#jhd-erroriserror)
- Added [`Math.{iaddh, isubh, imulh, umulh}`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://gist.github.com/BrendanEich/4294d5c212a6d2254703)
- `RegExp.escape` moved from the `es7` to the non-standard `core` namespace, [July TC39 meeting](https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#62-regexpescape) - too slow, but it's condition of stability, [#116](https://github.com/zloirock/core-js/issues/116)
- [`Promise`](https://github.com/zloirock/core-js#ecmascript-6-promise)
  - Some performance optimisations
  - Added basic support [`rejectionHandled` event / `onrejectionhandled` handler](https://github.com/zloirock/core-js#unhandled-rejection-tracking) to the polyfill
  - Removed usage `@@species` from `Promise.{all, race}`, [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-18.md#conclusionresolution-2)
- Some improvements [collections polyfills](https://github.com/zloirock/core-js#ecmascript-6-collections)
  - `O(1)` and preventing possible leaks with frozen keys, [#134](https://github.com/zloirock/core-js/issues/134)
  - Correct observable state object keys
- Renamed `String#{padLeft, padRight}` -> [`String#{padStart, padEnd}`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/tc39/proposal-string-pad-start-end), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-17.md#conclusionresolution-2) (they want to rename it on each meeting?O_o), [#132](https://github.com/zloirock/core-js/issues/132)
- Added [`String#{trimStart, trimEnd}` as aliases for `String#{trimLeft, trimRight}`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/sebmarkbage/ecmascript-string-left-right-trim), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-17.md#conclusionresolution-2)
- Added [annex B HTML methods](https://github.com/zloirock/core-js#ecmascript-6-string) - ugly, but also [the part of the spec](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.anchor)
- Added little fix for [`Date#toString`](https://github.com/zloirock/core-js#ecmascript-6-date) - `new Date(NaN).toString()` [should be `'Invalid Date'`](http://www.ecma-international.org/ecma-262/6.0/#sec-todatestring)
- Added [`{keys, values, entries, @@iterator}` methods to DOM collections](https://github.com/zloirock/core-js#iterable-dom-collections) which should have [iterable interface](https://heycam.github.io/webidl/#idl-iterable) or should be [inherited from `Array`](https://heycam.github.io/webidl/#LegacyArrayClass) - `NodeList`, `DOMTokenList`, `MediaList`, `StyleSheetList`, `CSSRuleList`.
- Removed Mozilla `Array` generics - [deprecated and will be removed from FF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods), [looks like strawman is dead](http://wiki.ecmascript.org/doku.php?id=strawman:array_statics), available [alternative shim](https://github.com/plusdude/array-generics)
- Removed `core.log` module
- CommonJS API
  - Added entry points for [virtual methods](https://github.com/zloirock/core-js#commonjs-and-prototype-methods-without-global-namespace-pollution)
  - Added entry points for [stages proposals](https://github.com/zloirock/core-js#ecmascript-7-proposals)
  - Some other minor changes
- [Custom build from external scripts](https://github.com/zloirock/core-js#custom-build-from-external-scripts) moved to the separate package for preventing problems with dependencies
- Changed `$` prefix for internal modules file names because Team Foundation Server does not support it, [#129](https://github.com/zloirock/core-js/issues/129)
- Additional fix for `SameValueZero` in V8 ~ Chromium 39-42 collections
- Additional fix for FF27 `Array` iterator
- Removed usage shortcuts for `arguments` object - old WebKit bug, [#150](https://github.com/zloirock/core-js/issues/150)
- `{Map, Set}#forEach` non-generic, [#144](https://github.com/zloirock/core-js/issues/144)
- Many other improvements

##### 1.2.6 - 2015.11.09
* Reject with `TypeError` on attempt resolve promise itself
* Correct behavior with broken `Promise` subclass constructors / methods
* Added `Promise`-based fallback for microtask
* Fixed V8 and FF `Array#{values, @@iterator}.name`
* Fixed IE7- `[1, 2].join(undefined) -> '1,2'`
* Some other fixes / improvements / optimizations

##### 1.2.5 - 2015.11.02
* Some more `Number` constructor fixes:
  * Fixed V8 ~ Node 0.8 bug: `Number('+0x1')` should be `NaN`
  * Fixed `Number(' 0b1\n')` case, should be `1`
  * Fixed `Number()` case, should be `0`

##### 1.2.4 - 2015.11.01
* Fixed `Number('0b12') -> NaN` case in the shim
* Fixed V8 ~ Chromium 40- bug - `Weak(Map|Set)#{delete, get, has}` should not throw errors [#124](https://github.com/zloirock/core-js/issues/124)
* Some other fixes and optimizations

##### 1.2.3 - 2015.10.23
* Fixed some problems related old V8 bug `Object('a').propertyIsEnumerable(0) // => false`, for example, `Object.assign({}, 'qwe')` from the last release
* Fixed `.name` property and `Function#toString` conversion some polyfilled methods
* Fixed `Math.imul` arity in Safari 8-

##### 1.2.2 - 2015.10.18
* Improved optimisations for V8
* Fixed build process from external packages, [#120](https://github.com/zloirock/core-js/pull/120)
* One more `Object.{assign, values, entries}` fix for [**very** specific case](https://github.com/ljharb/proposal-object-values-entries/issues/5)

##### 1.2.1 - 2015.10.02
* Replaced fix `JSON.stringify` + `Symbol` behavior from `.toJSON` method to wrapping `JSON.stringify` - little more correct, [compat-table/642](https://github.com/kangax/compat-table/pull/642)
* Fixed typo which broke tasks scheduler in WebWorkers in old FF, [#114](https://github.com/zloirock/core-js/pull/114)

##### 1.2.0 - 2015.09.27
* Added browser [`Promise` rejection hook](#unhandled-rejection-tracking), [#106](https://github.com/zloirock/core-js/issues/106)
* Added correct [`IsRegExp`](http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp) logic to [`String#{includes, startsWith, endsWith}`](https://github.com/zloirock/core-js/#ecmascript-6-string) and [`RegExp` constructor](https://github.com/zloirock/core-js/#ecmascript-6-regexp), `@@match` case, [example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match#Disabling_the_isRegExp_check)
* Updated [`String#leftPad`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) [with proposal](https://github.com/ljharb/proposal-string-pad-left-right/issues/6): string filler truncated from the right side
* Replaced V8 [`Object.assign`](https://github.com/zloirock/core-js/#ecmascript-6-object) - its properties order not only [incorrect](https://github.com/sindresorhus/object-assign/issues/22), it is non-deterministic and it causes some problems
* Fixed behavior with deleted in getters properties for `Object.{`[`assign`](https://github.com/zloirock/core-js/#ecmascript-6-object)`, `[`entries, values`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)`}`, [example](http://goo.gl/iQE01c)
* Fixed [`Math.sinh`](https://github.com/zloirock/core-js/#ecmascript-6-math) with very small numbers in V8 near Chromium 38
* Some other fixes and optimizations

##### 1.1.4 - 2015.09.05
* Fixed support symbols in FF34-35 [`Object.assign`](https://github.com/zloirock/core-js/#ecmascript-6-object)
* Fixed [collections iterators](https://github.com/zloirock/core-js/#ecmascript-6-iterators) in FF25-26
* Fixed non-generic WebKit [`Array.of`](https://github.com/zloirock/core-js/#ecmascript-6-array)
* Some other fixes and optimizations

##### 1.1.3 - 2015.08.29
* Fixed support Node.js domains in [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise), [#103](https://github.com/zloirock/core-js/issues/103)

##### 1.1.2 - 2015.08.28
* Added `toJSON` method to [`Symbol`](https://github.com/zloirock/core-js/#ecmascript-6-symbol) polyfill and to MS Edge implementation for expected `JSON.stringify` result w/o patching this method
* Replaced [`Reflect.construct`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) implementations w/o correct support third argument
* Fixed `global` detection with changed `document.domain` in ~IE8, [#100](https://github.com/zloirock/core-js/issues/100)

##### 1.1.1 - 2015.08.20
* Added more correct microtask implementation for [`Promise`](#ecmascript-6-promise)

##### 1.1.0 - 2015.08.17
* Updated [string padding](https://github.com/zloirock/core-js/#ecmascript-7-proposals) to [actual proposal](https://github.com/ljharb/proposal-string-pad-left-right) - renamed, minor internal changes:
  * `String#lpad` -> `String#padLeft`
  * `String#rpad` -> `String#padRight`
* Added [string trim functions](#ecmascript-7-proposals) - [proposal](https://github.com/sebmarkbage/ecmascript-string-left-right-trim), defacto standard - required only for IE11- and fixed for some old engines:
  * `String#trimLeft`
  * `String#trimRight`
* [`String#trim`](https://github.com/zloirock/core-js/#ecmascript-6-string) fixed for some engines by es6 spec and moved from `es5` to single `es6` module
* Splitted [`es6.object.statics-accept-primitives`](https://github.com/zloirock/core-js/#ecmascript-6-object)
* Caps for `freeze`-family `Object` methods moved from `es5` to `es6` namespace and joined with [es6 wrappers](https://github.com/zloirock/core-js/#ecmascript-6-object)
* `es5` [namespace](https://github.com/zloirock/core-js/#commonjs) also includes modules, moved to `es6` namespace - you can use it as before
* Increased `MessageChannel` priority in `$.task`, [#95](https://github.com/zloirock/core-js/issues/95)
* Does not get `global.Symbol` on each getting iterator, if you wanna use alternative `Symbol` shim - add it before `core-js`
* [`Reflect.construct`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) optimized and fixed for some cases
* Simplified [`Reflect.enumerate`](https://github.com/zloirock/core-js/#ecmascript-6-reflect), see [this question](https://esdiscuss.org/topic/question-about-enumerate-and-property-decision-timing)
* Some corrections in [`Math.acosh`](https://github.com/zloirock/core-js/#ecmascript-6-math)
* Fixed [`Math.imul`](https://github.com/zloirock/core-js/#ecmascript-6-math) for old WebKit
* Some fixes in string / RegExp [well-known symbols](https://github.com/zloirock/core-js/#ecmascript-6-regexp) logic
* Some other fixes and optimizations

##### 1.0.1 - 2015.07.31
* Some fixes for final MS Edge, replaced broken native `Reflect.defineProperty`
* Some minor fixes and optimizations
* Changed compression `client/*.min.js` options for safe `Function#name` and `Function#length`, should be fixed [#92](https://github.com/zloirock/core-js/issues/92)

##### 1.0.0 - 2015.07.22
* Added logic for [well-known symbols](https://github.com/zloirock/core-js/#ecmascript-6-regexp):
  * `Symbol.match`
  * `Symbol.replace`
  * `Symbol.split`
  * `Symbol.search`
* Actualized and optimized work with iterables:
  * Optimized  [`Map`, `Set`, `WeakMap`, `WeakSet` constructors](https://github.com/zloirock/core-js/#ecmascript-6-collections), [`Promise.all`, `Promise.race`](https://github.com/zloirock/core-js/#ecmascript-6-promise) for default `Array Iterator`
  * Optimized  [`Array.from`](https://github.com/zloirock/core-js/#ecmascript-6-array) for default `Array Iterator`
  * Added [`core.getIteratorMethod`](https://github.com/zloirock/core-js/#ecmascript-6-iterators) helper
* Uses enumerable properties in shimmed instances - collections, iterators, etc for optimize performance
* Added support native constructors to [`Reflect.construct`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) with 2 arguments
* Added support native constructors to [`Function#bind`](https://github.com/zloirock/core-js/#ecmascript-5) shim with `new`
* Removed obsolete `.clear` methods native [`Weak`-collections](https://github.com/zloirock/core-js/#ecmascript-6-collections)
* Maximum modularity, reduced minimal custom build size, separated into submodules:
  * [`es6.reflect`](https://github.com/zloirock/core-js/#ecmascript-6-reflect)
  * [`es6.regexp`](https://github.com/zloirock/core-js/#ecmascript-6-regexp)
  * [`es6.math`](https://github.com/zloirock/core-js/#ecmascript-6-math)
  * [`es6.number`](https://github.com/zloirock/core-js/#ecmascript-6-number)
  * [`es7.object.to-array`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
  * [`core.object`](https://github.com/zloirock/core-js/#object)
  * [`core.string`](https://github.com/zloirock/core-js/#escaping-strings)
  * [`core.iter-helpers`](https://github.com/zloirock/core-js/#ecmascript-6-iterators)
  * Internal modules (`$`, `$.iter`, etc)
* Many other optimizations
* Final cleaning non-standard features
  * Moved `$for` to [separate library](https://github.com/zloirock/forof). This work for syntax - `for-of` loop and comprehensions
  * Moved `Date#{format, formatUTC}` to [separate library](https://github.com/zloirock/dtf). Standard way for this - `ECMA-402`
  * Removed `Math` methods from `Number.prototype`. Slight sugar for simple `Math` methods calling
  * Removed `{Array#, Array, Dict}.turn`
  * Removed `core.global`
* Uses `ToNumber` instead of `ToLength` in [`Number Iterator`](https://github.com/zloirock/core-js/#number-iterator), `Array.from(2.5)` will be `[0, 1, 2]` instead of `[0, 1]`
* Fixed [#85](https://github.com/zloirock/core-js/issues/85) - invalid `Promise` unhandled rejection message in nested `setTimeout`
* Fixed [#86](https://github.com/zloirock/core-js/issues/86) - support FF extensions
* Fixed [#89](https://github.com/zloirock/core-js/issues/89) - behavior `Number` constructor in strange case

##### 0.9.18 - 2015.06.17
* Removed `/` from [`RegExp.escape`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) escaped characters

##### 0.9.17 - 2015.06.14
* Updated [`RegExp.escape`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) to the [latest proposal](https://github.com/benjamingr/RexExp.escape)
* Fixed conflict with webpack dev server + IE buggy behavior

##### 0.9.16 - 2015.06.11
* More correct order resolving thenable in [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) polyfill
* Uses polyfill instead of [buggy V8 `Promise`](https://github.com/zloirock/core-js/issues/78)

##### 0.9.15 - 2015.06.09
* [Collections](https://github.com/zloirock/core-js/#ecmascript-6-collections) from `library` version return wrapped native instances
* Fixed collections prototype methods in `library` version
* Optimized [`Math.hypot`](https://github.com/zloirock/core-js/#ecmascript-6-math)

##### 0.9.14 - 2015.06.04
* Updated [`Promise.resolve` behavior](https://esdiscuss.org/topic/fixing-promise-resolve)
* Added fallback for IE11 buggy `Object.getOwnPropertyNames` + iframe
* Some other fixes

##### 0.9.13 - 2015.05.25
* Added fallback for [`Symbol` polyfill](https://github.com/zloirock/core-js/#ecmascript-6-symbol) for old Android
* Some other fixes

##### 0.9.12 - 2015.05.24
* Different instances `core-js` should use / recognize the same symbols
* Some fixes

##### 0.9.11 - 2015.05.18
* Simplified [custom build](https://github.com/zloirock/core-js/#custom-build)
  * Added custom build js api
  * Added `grunt-cli` to `devDependencies` for `npm run grunt`
* Some fixes

##### 0.9.10 - 2015.05.16
* Wrapped `Function#toString` for correct work wrapped methods / constructors with methods similar to the [`lodash` `isNative`](https://github.com/lodash/lodash/issues/1197)
* Added proto versions of methods to export object in `default` version for consistency with `library` version

##### 0.9.9 - 2015.05.14
* Wrapped `Object#propertyIsEnumerable` for [`Symbol` polyfill](https://github.com/zloirock/core-js/#ecmascript-6-symbol)
* [Added proto versions of methods to `library` for ES7 bind syntax](https://github.com/zloirock/core-js/issues/65)
* Some other fixes

##### 0.9.8 - 2015.05.12
* Fixed [`Math.hypot`](https://github.com/zloirock/core-js/#ecmascript-6-math) with negative arguments
* Added `Object#toString.toString` as fallback for [`lodash` `isNative`](https://github.com/lodash/lodash/issues/1197)

##### 0.9.7 - 2015.05.07
* Added [support DOM collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Streamlining_cross-browser_behavior) to IE8- `Array#slice`

##### 0.9.6 - 2015.05.01
* Added [`String#lpad`, `String#rpad`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)

##### 0.9.5 - 2015.04.30
* Added cap for `Function#@@hasInstance`
* Some fixes and optimizations

##### 0.9.4 - 2015.04.27
* Fixed `RegExp` constructor

##### 0.9.3 - 2015.04.26
* Some fixes and optimizations

##### 0.9.2 - 2015.04.25
* More correct [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) unhandled rejection tracking and resolving / rejection priority

##### 0.9.1 - 2015.04.25
* Fixed `__proto__`-based [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) subclassing in some environments

##### 0.9.0 - 2015.04.24
* Added correct [symbols](https://github.com/zloirock/core-js/#ecmascript-6-symbol) descriptors
  * Fixed behavior `Object.{assign, create, defineProperty, defineProperties, getOwnPropertyDescriptor, getOwnPropertyDescriptors}` with symbols
  * Added [single entry points](https://github.com/zloirock/core-js/#commonjs) for `Object.{create, defineProperty, defineProperties}`
* Added [`Map#toJSON`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
* Removed non-standard methods `Object#[_]` and `Function#only` - they solves syntax problems, but now in compilers available arrows and ~~in near future will be available~~ [available](http://babeljs.io/blog/2015/05/14/function-bind/) [bind syntax](https://github.com/zenparsing/es-function-bind)
* Removed non-standard undocumented methods `Symbol.{pure, set}`
* Some fixes and internal changes

##### 0.8.4 - 2015.04.18
* Uses `webpack` instead of `browserify` for browser builds - more compression-friendly result

##### 0.8.3 - 2015.04.14
* Fixed `Array` statics with single entry points

##### 0.8.2 - 2015.04.13
* [`Math.fround`](https://github.com/zloirock/core-js/#ecmascript-6-math) now also works in IE9-
* Added [`Set#toJSON`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
* Some optimizations and fixes

##### 0.8.1 - 2015.04.03
* Fixed `Symbol.keyFor`

##### 0.8.0 - 2015.04.02
* Changed [CommonJS API](https://github.com/zloirock/core-js/#commonjs)
* Splitted and renamed some modules
* Added support ES3 environment (ES5 polyfill) to **all** default versions - size increases slightly (+ ~4kb w/o gzip), many issues disappear, if you don't need it - [simply include only required namespaces / features / modules](https://github.com/zloirock/core-js/#commonjs)
* Removed [abstract references](https://github.com/zenparsing/es-abstract-refs) support - proposal has been superseded =\
* [`$for.isIterable` -> `core.isIterable`, `$for.getIterator` -> `core.getIterator`](https://github.com/zloirock/core-js/#ecmascript-6-iterators), temporary available in old namespace
* Fixed iterators support in v8 `Promise.all` and `Promise.race`
* Many other fixes

##### 0.7.2 - 2015.03.09
* Some fixes

##### 0.7.1 - 2015.03.07
* Some fixes

##### 0.7.0 - 2015.03.06
* Rewritten and splitted into [CommonJS modules](https://github.com/zloirock/core-js/#commonjs)

##### 0.6.1 - 2015.02.24
* Fixed support [`Object.defineProperty`](https://github.com/zloirock/core-js/#ecmascript-5) with accessors on DOM elements on IE8

##### 0.6.0 - 2015.02.23
* Added support safe closing iteration - calling `iterator.return` on abort iteration, if it exists
* Added basic support [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) unhandled rejection tracking in shim
* Added [`Object.getOwnPropertyDescriptors`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
* Removed `console` cap - creates too many problems
* Restructuring [namespaces](https://github.com/zloirock/core-js/#custom-build)
* Some fixes

##### 0.5.4 - 2015.02.15
* Some fixes

##### 0.5.3 - 2015.02.14
* Added [support binary and octal literals](https://github.com/zloirock/core-js/#ecmascript-6-number) to `Number` constructor
* Added [`Date#toISOString`](https://github.com/zloirock/core-js/#ecmascript-5)

##### 0.5.2 - 2015.02.10
* Some fixes

##### 0.5.1 - 2015.02.09
* Some fixes

##### 0.5.0 - 2015.02.08
* Systematization of modules
* Splitted [`es6` module](https://github.com/zloirock/core-js/#ecmascript-6)
* Splitted `console` module: `web.console` - only cap for missing methods, `core.log` - bound methods & additional features
* Added [`delay` method](https://github.com/zloirock/core-js/#delay)
* Some fixes

##### 0.4.10 - 2015.01.28
* [`Object.getOwnPropertySymbols`](https://github.com/zloirock/core-js/#ecmascript-6-symbol) polyfill returns array of wrapped keys

##### 0.4.9 - 2015.01.27
* FF20-24 fix

##### 0.4.8 - 2015.01.25
* Some [collections](https://github.com/zloirock/core-js/#ecmascript-6-collections) fixes

##### 0.4.7 - 2015.01.25
* Added support frozen objects as [collections](https://github.com/zloirock/core-js/#ecmascript-6-collections) keys

##### 0.4.6 - 2015.01.21
* Added [`Object.getOwnPropertySymbols`](https://github.com/zloirock/core-js/#ecmascript-6-symbol)
* Added [`NodeList.prototype[@@iterator]`](https://github.com/zloirock/core-js/#ecmascript-6-iterators)
* Added basic `@@species` logic - getter in native constructors
* Removed `Function#by`
* Some fixes

##### 0.4.5 - 2015.01.16
* Some fixes

##### 0.4.4 - 2015.01.11
* Enabled CSP support

##### 0.4.3 - 2015.01.10
* Added `Function` instances `name` property for IE9+

##### 0.4.2 - 2015.01.10
* `Object` static methods accept primitives
* `RegExp` constructor can alter flags (IE9+)
* Added `Array.prototype[Symbol.unscopables]`

##### 0.4.1 - 2015.01.05
* Some fixes

##### 0.4.0 - 2015.01.03
* Added [`es6.reflect`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) module:
  * Added `Reflect.apply`
  * Added `Reflect.construct`
  * Added `Reflect.defineProperty`
  * Added `Reflect.deleteProperty`
  * Added `Reflect.enumerate`
  * Added `Reflect.get`
  * Added `Reflect.getOwnPropertyDescriptor`
  * Added `Reflect.getPrototypeOf`
  * Added `Reflect.has`
  * Added `Reflect.isExtensible`
  * Added `Reflect.preventExtensions`
  * Added `Reflect.set`
  * Added `Reflect.setPrototypeOf`
* `core-js` methods now can use external `Symbol.iterator` polyfill
* Some fixes

##### 0.3.3 - 2014.12.28
* [Console cap](https://github.com/zloirock/core-js/#console) excluded from node.js default builds

##### 0.3.2 - 2014.12.25
* Added cap for [ES5](https://github.com/zloirock/core-js/#ecmascript-5) freeze-family methods
* Fixed `console` bug

##### 0.3.1 - 2014.12.23
* Some fixes

##### 0.3.0 - 2014.12.23
* Optimize [`Map` & `Set`](https://github.com/zloirock/core-js/#ecmascript-6-collections):
  * Use entries chain on hash table
  * Fast & correct iteration
  * Iterators moved to [`es6`](https://github.com/zloirock/core-js/#ecmascript-6) and [`es6.collections`](https://github.com/zloirock/core-js/#ecmascript-6-collections) modules

##### 0.2.5 - 2014.12.20
* `console` no longer shortcut for `console.log` (compatibility problems)
* Some fixes

##### 0.2.4 - 2014.12.17
* Better compliance of ES6
* Added [`Math.fround`](https://github.com/zloirock/core-js/#ecmascript-6-math) (IE10+)
* Some fixes

##### 0.2.3 - 2014.12.15
* [Symbols](https://github.com/zloirock/core-js/#ecmascript-6-symbol):
  * Added option to disable addition setter to `Object.prototype` for Symbol polyfill:
    * Added `Symbol.useSimple`
    * Added `Symbol.useSetter`
  * Added cap for well-known Symbols:
    * Added `Symbol.hasInstance`
    * Added `Symbol.isConcatSpreadable`
    * Added `Symbol.match`
    * Added `Symbol.replace`
    * Added `Symbol.search`
    * Added `Symbol.species`
    * Added `Symbol.split`
    * Added `Symbol.toPrimitive`
    * Added `Symbol.unscopables`

##### 0.2.2 - 2014.12.13
* Added [`RegExp#flags`](https://github.com/zloirock/core-js/#ecmascript-6-regexp) ([December 2014 Draft Rev 29](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#december_6_2014_draft_rev_29))
* Added [`String.raw`](https://github.com/zloirock/core-js/#ecmascript-6-string)

##### 0.2.1 - 2014.12.12
* Repair converting -0 to +0 in [native collections](https://github.com/zloirock/core-js/#ecmascript-6-collections)

##### 0.2.0 - 2014.12.06
* Added [`es7.proposals`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) and [`es7.abstract-refs`](https://github.com/zenparsing/es-abstract-refs) modules
* Added [`String#at`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
* Added real [`String Iterator`](https://github.com/zloirock/core-js/#ecmascript-6-iterators), older versions used Array Iterator
* Added abstract references support:
  * Added `Symbol.referenceGet`
  * Added `Symbol.referenceSet`
  * Added `Symbol.referenceDelete`
  * Added `Function#@@referenceGet`
  * Added `Map#@@referenceGet`
  * Added `Map#@@referenceSet`
  * Added `Map#@@referenceDelete`
  * Added `WeakMap#@@referenceGet`
  * Added `WeakMap#@@referenceSet`
  * Added `WeakMap#@@referenceDelete`
  * Added `Dict.{...methods}[@@referenceGet]`
* Removed deprecated `.contains` methods
* Some fixes

##### 0.1.5 - 2014.12.01
* Added [`Array#copyWithin`](https://github.com/zloirock/core-js/#ecmascript-6-array)
* Added [`String#codePointAt`](https://github.com/zloirock/core-js/#ecmascript-6-string)
* Added [`String.fromCodePoint`](https://github.com/zloirock/core-js/#ecmascript-6-string)

##### 0.1.4 - 2014.11.27
* Added [`Dict.mapPairs`](https://github.com/zloirock/core-js/#dict)

##### 0.1.3 - 2014.11.20
* [TC39 November meeting](https://github.com/rwaldron/tc39-notes/tree/master/es6/2014-11):
  * [`.contains` -> `.includes`](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-11/nov-18.md#51--44-arrayprototypecontains-and-stringprototypecontains)
    * `String#contains` -> [`String#includes`](https://github.com/zloirock/core-js/#ecmascript-6-string)
    * `Array#contains` -> [`Array#includes`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
    * `Dict.contains` -> [`Dict.includes`](https://github.com/zloirock/core-js/#dict)
  * [Removed `WeakMap#clear`](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-11/nov-19.md#412-should-weakmapweakset-have-a-clear-method-markm)
  * [Removed `WeakSet#clear`](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-11/nov-19.md#412-should-weakmapweakset-have-a-clear-method-markm)

##### 0.1.2 - 2014.11.19
* `Map` & `Set` bug fix

##### 0.1.1 - 2014.11.18
* Public release