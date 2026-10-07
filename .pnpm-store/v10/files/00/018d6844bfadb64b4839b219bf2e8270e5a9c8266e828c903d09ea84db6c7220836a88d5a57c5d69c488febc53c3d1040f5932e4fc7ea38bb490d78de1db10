1.24.2 / 2026-04-07
=================
 - [Fix] `IfAbruptCloseIterator`: handle all abrupt completions, not just throw
 - [Robustness] use `+x` instead of `Number(x)`
 - [Robustness] use `isFinite`/`parseInt` intrinsics, and isNaN helper
 - [Robustness] ensure `undefined` is `undefined`
 - [patch] add a TODO to remove an unused helper
 - [Dev Deps] update `@ljharb/eslint-config`, `npmignore`

1.24.1 / 2025-12-12
=================
 - [Fix] `ES2025`+: `GeneratorResumeAbrupt`: properly handle return completions
 - [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `@unicode/unicode-15.0.0`, `make-generator-function`, `npmignore`, `ses`

1.24.0 / 2025-05-28
=================
 - [New] add `ES2025` (#159)
 - [New] `ES2023`+: add `GetNamedTimeZoneEpochNanoseconds`, `GetUTCEpochNanoseconds`, `IsTimeZoneOffsetString`
 - [New] `ES2015`+: `CharacterRange`: also accept CharSets
 - [New] `ES2024`+: add `AllCharacters`, `CharacterComplement`
 - [Refactor] StringIndexOf: anticipate ES2025 not found sentinel change
 - [Deps] update `stop-iteration-iterator`
 - [Tests] increase coverage

1.23.10 / 2025-05-21
=================
 - [Fix] properly handle Float16Array
 - [Fix] `ES2024`+: `IsViewOutOfBounds`: properly handle resizable array buffers
 - [Fix] `ES2024`+: `IsTypedArrayOutOfBounds`: properly handle resizable arrays
 - [Fix] `ES2024`+: `GetViewByteLength`, `TypedArrayByteLength`, `TypedArrayLength`: properly handle resizable arrays
 - [Fix] `ES2020`+: `abs` should accept bigints too
 - [Fix] `ES2024`+: `ArrayBufferByteLength`: return the byte length for SABs, not NaN
 - [Fix] `ES2024`+: `ArrayBufferCopyAndDetach`: properly handle resizable ArrayBuffers; add tests
 - [Fix] `ES2021`: `SetTypedArrayFromTypedArray`: get proper source element size
 - [Fix] `ES2023`+: `SetTypedArrayFromTypedArray`: ArrayBuffer shouldn‘t be bound
 - [Fix] `ES2022`,`ES2023`: `ValidateIntegerTypedArray`: return the buffer
 - [patch] `ES2023`+: `SortIndexedProperties`: improve error message
 - [patch] clean up some comments
 - [patch] `ES2023`+: `InternalizeJSONProperty`: remove extra argument
 - [patch] `ES2020`+`: `GetIterator`: fix comment to indicate that it changed in ES2018
 - [Refactor] Typed Array stuff: store "choices" string in the table file
 - [Refactor] `ES2021`+: use isInteger directly in a few AOs
 - [Refactor] `ES2022`+: `ValidateAndApplyPropertyDescriptor`: use `typeof` over `Type()`
 - [Refactor] `helpers/getIteratorMethod`: no longer require a passed-in `IsArray`
 - [Refactor] `ES2017`+: `Num{ber,eric}ToRawBytes`, `RawBytesToNum{ber,eric}`: use TAO table sizes
 - [Refactor] `ES2015`+: `{,Ordinary}ObjectCreate`: prefer `__proto__` syntax over `Object.create`
 - [Refactor] `CopyDataProperties` tests are the same in ES2020 as in ES2018
 - [Refactor] `ES2016` - `ES2020`: `UTF16Encoding`: match `UTF16EncodeCodePoint`
 - [Refactor] use `es-object-atoms/isObject` directly
 - [Refactor] add `isSameType` helper, and use it
 - [Refactor] `ES2017`+: `WordCharacters`: `String.prototype.indexOf` should always be present
 - [Refactor] use `arr[arr.length] = x` instead of `$push(arr, x)`
 - [Robustness] `ES2015`+: `ObjectDefineProperties`: use `OrdinaryGetOwnProperty` to handle a missing `gOPD`
 - [meta] add missing comments
 - [meta] fix operations npmignores
 - [meta] fix URL in comment
 - [meta] note `isNegativeZero` helper is slated for removal (#155)
 - [Deps] update `call-bound`, `which-typed-array`, `es-object-atoms`, `get-intrinsic`, `get-proto`, `regexp.prototype.flags`, `is-weakref`, `object-inspect`
 - [Dev Deps] pin `glob` to v7
 - [Dev Deps] update `@unicode/unicode-15.0.0`, `es-value-fixtures`, `for-each`, `has-strict-mode`, `ses`
 - [Tests] avoid an OOM in node 20 on SES tests
 - [Tests] compare correct TA type
 - [Tests] consolidate map of AO property names to prose names
 - [Tests] extract common helpers
 - [Tests] increase coverage
 - [Tests] increase coverage
 - [Tests] node 20 throws with RABs that are not a multiple of 4 and 8
 - [Tests] refactor TA types arrays to year-taking functions
 - [Tests] refactor test megafile into file-per-method tests
 - [Tests] remove now-unused test mega-file
 - [Tests] some cleanups
 - [Tests] use proper import

1.23.9 / 2025-01-02
=================
  * [Refactor] use `get-proto` directly
  * [Refactor] use `set-proto` directly
  * [Refactor] use `Reflect.setPrototypeOf` and `dunder-proto` in `setProto` helper
  * [Refactor] `ES2015`+: `ArrayCreate`: use `setProto` helper
  * [Deps] update `es-set-tostringtag`, `own-keys`
  * [Dev Deps] update `is-core-module`
  * [Tests] use `own-keys` directly

1.23.8 / 2024-12-28
=================
  * [Refactor] use `own-keys`
  * [Refactor] use `safe-push-apply`

1.23.7 / 2024-12-20
=================
  * [Refactor] create and use `helpers/isPropertyKey`
  * [Refactor] add `timeValue` helper, use it
  * [Deps] update `array-buffer-byte-length`, `data-view-buffer`, `data-view-byte-length`, `data-view-byte-offset`, `function.prototype.name`, `get-symbol-description`, `is-array-buffer`, `is-shared-array-buffer`, `is-typed-array`, `math-intrinsics`, `object.assign`, `typed-array-buffer`, `typed-array-byte-length`, `typed-array-byte-offset`, `unbox-primitive`, `which-typed-array`
  * [Deps] remove unused dep
  * [Dev Deps] update `array.prototype.indexof`, `has-bigints`, `is-registered-symbol`, `safe-bigint`

1.23.6 / 2024-12-15
=================
  * [Fix] `ES2015` - `ES2019`: `IntegerIndexedElementSet`: reject BigInt Typed Arrays prior to ES2020
  * [Fix] `ES2023`+: `SetTypedArrayFromTypedArray`: provide missing `cloneConstructor` argument to `CloneArrayBuffer`
  * [Fix] `ES2024`+: `FindViaPredicate`: spec enums are uppercase now
  * [Fix] `ES2017` - `ES2019`: `SetValueInBuffer`: handle proper number of arguments
  * [Fix] `ES2015`+: `QuoteJSONString`: properly handle surrogates
  * [Fix] `ES2015`+: `TestIntegrityLevel`: properly handle envs without property descriptors
  * [patch] `ES2018` - `ES2023`: `thisSymbolValue`: only require `Symbol.prototype.valueOf` for boxed Symbols
  * [Robustness] `ES2015` - `ES2016`: `SetValueInBuffer`: salt dictionary keys in case of pre-proto envs
  * [Refactor] use `math-intrinsics`
  * [Refactor] use `call-bound` directly
  * [Refactor] `ES2015`+: `GetIterator`: hoist an object to module scope
  * [Refactor] use `typeof` over `Type()` when possible
  * [Refactor] `ES2015` - `ES2016`: `GetValueFromBuffer`: remove unnecessary extra helper argument
  * [Refactor] misc cleanups
  * [Refactor] make and use `isObject` helper
  * [Refactor] `ES5`+: `MonthFromTime`: throw a `RangeError` for an out of range timestamp
  * [Refactor] use `+` over `Number()`
  * [Deps] update `arraybuffer.prototype.slice`, `call-bind`, `es-define-property`, `es-to-primitive`, `function.prototype.name`, `get-intrinsic`, `gopd`, `has-proto`, `has-symbols`, `internal-slot`, `is-data-view`, `is-regex`, `is-string`, `which-typed-array`, `is-weakref`, `safe-array-concat`, `safe-regex-test`, `string.prototype.trim`, `string.prototype.trimend`, `typed-array-byte-offset`, `typed-array-length`
  * [meta] remove unnecessary unspackles
  * [Tests] `isStringOrUndefined`: increase coverage
  * [Tests] bigint tests are ES2020+ only
  * [Dev Deps] update `array.prototype.flatmap`, `is-core-module`, `is-registered-symbol`

1.23.5 / 2024-11-14
=================
  * [Fix] `ES2015`+: `CompletionRecord`: ensure `?` works on any non-abrupt completion

1.23.4 / 2024-11-12
=================
  * [Fix] `ES2024`+: Iterator Records can now have non-functions in `[[NextMethod]]`
  * [meta] update spec URL comments
  * [Deps] update `globalthis`, `object-inspect`, `regexp.prototype.flags`
  * [Dev Deps] update `@ljharb/eslint-config`, `@unicode/unicode-15.0.0`, `diff`, `es-value-fixtures`, `is-core-module`, `mock-property`, `ses`, `tape`
  * [actions] split out node 10-20, and 20+
  * [Tests] switch to `npm audit` from `aud`
  * [Tests] use `.assertion` instead of monkeypatching tape
  * [Tests] increase coverage

1.23.3 / 2024-03-29
=================
  * [Fix] `ES2024`: `StringPad`, `StringPaddingBuiltinsImpl`: prefer uppercase spec enums
  * [Fix] `helpers/bytesAsInteger`: avoid a crash in node 10.4 - 10.8
  * [Fix] `ES5`: `CheckObjectCoercible`: restore `optMessage` optional arg
  * [Refactor] `ES2022`+: update `TimeString` to use `ToZeroPaddedDecimalString`
  * [Robustness] use cached copies of builtins
  * [Deps] update `string.prototype.trimstart`, `typed-array-length`
  * [Dev Deps] update `array.from`, `array.prototype.filter`, `array.prototype.indexof`, `object.fromentries`, `safe-bigint`

1.23.2 / 2024-03-17
=================
  * [Fix] `records/regexp-record`: add optional `[[UnicodeSets]]` boolean field
  * [Fix] `ES2024`+: `AddValueToKeyedGroup`: avoid adding matched values twice
  * [Fix] `ES5`: `CheckObjectCoercible`: use the right function name
  * [Fix] `ES2024`+: `AddEntriesFromIterable`, `GetIterator`, `GroupBy`: properly capitalize spec enums
  * [Deps] update `string.prototype.trim`, `string.prototype.trimend`
  * [Tests] increase coverage

1.23.1 / 2024-03-16
=================
  * [Refactor] use `es-object-atoms`
  * [Deps] update `hasown`, `which-typed-array`, `data-view-byte-length`, `safe-array-concat`
  * [Dev Deps] update `diff`

1.23.0 / 2024-03-04
=================
  * [New] add `ES2024`
  * [New] `ES2015`+: add `InternalizeJSONProperty`
  * [New] `ES2015`+: add `IntegerIndexedElement{Get,Set}`
  * [New] `ES2018`+: add `TimeZoneString`
  * [New] `ES2022`+: add `DefineMethodProperty`
  * [New] `ES2023`: add `DefaultTimeZone`
  * [Fix] `ES2023`+: `SetTypedArrayFrom{TypedArray,ArrayLike}`: match engine reality
  * [Fix] `ES2024`+: `GetViewByteLength`, `IsViewOutOfBounds`: support engines with only own DV properties
  * [Tests] use `safe-bigint`

1.22.5 / 2024-02-28
=================
  * [Fix] `ES2015`+: `DetachArrayBuffer`: node v21.0.0+ structuredClone throws with an already-detached ArrayBuffer
  * [Fix] `helpers/assertRecord`: partial revert of 87c340d2; unintentional breaking change
  * [patch] records: fix indentation, improve object checks
  * [Refactor] extract TA tables to separate files
  * [meta] extract "list spackled files" to separate run-script
  * [Deps] update `available-typed-arrays`, `es-set-tostringtag`, `has-proto`, `is-negative-zero`, `is-shared-array-buffer`, `typed-array-buffer`, `typed-array-byte-length`, `typed-array-byte-offset`, `typed-array-length`
  * [Dev Deps] update `available-regexp-flags`, `tape`
  * [Dev Deps] pin `jackspeak` and `glob`, since v2.1.2+ and v10.3.8+ respectively depend on npm aliases, which kill the install process in npm < 6
  * [Tests] use `define-{accessor,data}-property`
  * [Tests] fix some test cases
  * [Tests] use `safeBigInt` for `Z()` pattern to handle node 10.4 - 10.8

1.22.4 / 2024-02-13
=================
  * [Fix] `ES2017`+: `IsDetachedBuffer`: properly allow SABs
  * [Fix] `ES2022`+: `ToBigInt`: properly throw on an unparseable string
  * [Fix] `ES2015`+: `ValidateTypedArray`: proper detachment check and return value
  * [Fix] `ES2022`+: `GetSubstitution`: match updated semantics
  * [Refactor] prefer `typeof` over `Type()`, except for Object, where possible
  * [Refactor] use `es-errors` instead of `get-intrinsic` where possible
  * [Refactor] use `es-define-property`
  * [Refactor] records: extract predicates to individual files
  * [Refactor] `ES2015`+: `Canonicalize`, `WordCharacters`: use explicit `.json` extension for imports
  * [Deps] update `array-buffer-byte-length`, `arraybuffer.prototype.slice`, `available-typed-arrays`, `call-bind`, `es-set-tostringtag`, `get-intrinsic`, `get-symbol-description`, `has-proper    ty-descriptors`, `has-property-descriptors`, `hasown`, `internal-slot`, `is-array-buffer`, `is-typed-array`, `object.assign`, `regexp.prototype.flags`, `safe-array-concat`, `safe-regex-test`, `typed-array-buffer`, `which-typed-array`
  * [eslint] remove unused overrides
  * [Tests] increase/fix coverage
  * [Dev Deps] update `aud`, `npmignore`, `mock-property`, `tape`

1.22.3 / 2023-10-20
=================
  * [Fix] `ES2015`+: `GetSubstitution`: accept `undefined` instead of a hole
  * [Refactor] use `hasown` instead of `has`
  * [Deps] update `call-bind`, `get-intrinsic`, `object-inspect`, `which-typed-array`
  * [Dev Deps] update `function-bind`, `is-core-module`, `mock-property`, `tape`

1.22.2 / 2023-09-14
=================
  * [Fix] `ES2015`+: `NewPromiseCapability`: use AOs from the current year, not 2022
  * [Refactor] `ES2021`+: `SetTypedArrayFromArrayLike`: use `IsBigIntElementType`
  * [Refactor] properly name `helpers/typedArrayConstructors`
  * [Refactor] simplify helpers
  * [Deps] update `arraybuffer.prototype.slice`, `function.prototype.name`, `is-typed-array`, `regexp.prototype.flags`, `safe-array-concat`, `string.prototype.trim`, `string.prototype.trimend`, `string.prototype.trimstart`, `which-typed-array`
  * [actions] update actions
  * [Tests] run SES tests on more node versions
  * [Dev Deps] update `@unicode/unicode-15.0.0`, `array.from`, `array.prototype.filter`, `array.prototype.flatmap`, `array.prototype.indexof`, `is-core-module`, `object.fromentries`, `ses`, `tape`

1.22.1 / 2023-07-15
=================
  * [Deps] add missing `safe-array-concat` dep

1.22.0 / 2023-07-15
=================
  * [New] add `ES2023`
  * [New] `ES2021+`: add `SetTypedArrayFromArrayLike`, `SetTypedArrayFromTypedArray`
  * [New] `ES2021`+: add `CloneArrayBuffer`
  * [New] `ES2020`+: add `IsValidIntegerIndex`
  * [New] `ES2015`+: add `GetValueFromBuffer`, `SetValueInBuffer`
  * [New] `ES2016`+: add `TypedArrayCreate`, `TypedArraySpeciesCreate`
  * [New] `ES2015`+: add `IsWordChar`
  * [New] `ES2017`+ add `WordCharacters`
  * [New] `ES2015`+: add `Canonicalize`
  * [New] `ES2015`+: add `NewPromiseCapability`
  * [Fix] `ES2017+`: `NumberToRawBytes`, `NumericToRawBytes`: reimplement Float64, fix integer scenarios
  * [Refactor] add `helpers/isLineTerminator`
  * [Refactor] add `isInteger` helper, and use it
  * [Refactor] extract `isStringOrHole` to a helper
  * [Refactor] `ES2017`+: `RawBytesToNumber`, `RawBytesToNumeric`: extract common code to helpers
  * [Refactor] make a `MAX_VALUE` helper
  * [Tests] fix RawBytesToNumeric tests in node v10.4-10.8
  * [Tests] fix buffer test cases in node v10.4-v10.8

1.21.3 / 2023-07-12
=================
  * [Fix] `ES2017+`: `RawBytesToNumber`, `RawBytesToNumeric`: properly handle some scenarios
  * [Fix] `ES2015`+: `GetV`: the receiver is `V`, not `O`
  * [Fix] `ES2017`+: `RawBytesToNumber`, `RawBytesToNumeric`: fix exponent calculation for Float64, improve tests
  * [Fix] `ES2017`+: `RawBytesToNumber`, `RawBytesToNumeric`: fix logic, improve tests
  * [Fix] `ES2019`+: `thisTimeValue`: fix spackling
  * [Robustness] `ES2017`+: `NumberToRawBytes`, `NumericToRawBytes`: use `SameValue` instead of `Object.is`
  * [Refactor] `ES2021`+: `ValidateAtomicAccess`: use `typed-array-byte-offset`
  * [Refactor] `ES2019`+: `AddEntriesFromIterable`: use `ThrowCompletion`
  * [patch] `ES2015`+: `ObjectDefineProperties`: satisfy TODO
  * [patch] `ES2015`+: `GetV`: improve error message
  * [patch] fix spec URLs
  * [Deps] update `get-intrinsic`, `regexp.prototype.flags`, `which-typed-array`
  * [actions] fix permissions
  * [Tests] add buffer test case fixtures + tests
  * [Tests] skip test that modifies the env in SES
  * [Tests] fix regex flags tests for node 20
  * [Dev Deps] update `@ljharb/eslint-config`, `aud`, `available-regexp-flags`, `is-core-module`, `tape`

1.21.2 / 2023-03-12
=================
  * [Fix] `ES2015`+: `CreateDataProperty`: use `OrdinaryDefineOwnProperty`
  * [Fix] `ES2015`+: `CreateDataProperty`: use `OrdinaryDefineOwnProperty`
  * [Fix] `ES2015`+: `GetPrototypeFromConstructor`: add missing assertion that `intrinsicDefaultProto` is an object
  * [Fix] `ES2015`+: `IsDetachedBuffer`: ensure a nullish error does not crash
  * [Fix] `ES2015`+: `ToDateString`: properly handle time values that aren’t "now"
  * [Fix] `ES2015`+: `ToUint8Clamp`: avoid an extra observable ToNumber
  * [Fix] `ES2015`+`: `GetMethod`: when `func` is not callable and `P` is a symbol, avoid the wrong TypeError
  * [Fix] `ES2020`+: `ToBigInt`: properly throw on anything besides string, bigint, boolean
  * [Fix] `ES2021`+: `SplitMatch`: instead of `false`, return `'not-matched'`
  * [Fix] `helpers/assertRecord`: handle nullish input
  * [Fix] `helpers/isFullyPopulatedPropertyDescriptor`: handle primitive inputs
  * [Robustness] `ES5`: `ToNumber`: avoid relying on runtime `.test` and `.replace`
  * [Refactor] `ES2015`: mark `IsDataDescriptor` and `IsAccessorDescriptor` as spackled
  * [Refactor] `ES2015`+: `IsDetachedBuffer`: use `array-buffer-byte-length` package
  * [Refactor] `ES2015`+: `OrdinaryHasInstance`: rely on falsiness
  * [Refactor] `ES2016`+: `CreateListFromArrayLike`: hoist default element types to module level
  * [Refactor] `ES2022`+: `StringToNumber`, `ToNumber`: use `string.prototype.trim`
  * [patch] `ES2022`+: `IsLessThan`: fix a comment
  * [patch] `ES2022`+: `TypedArrayElementSize`, `TypedArrayElementType`: throw a SyntaxError with an unknown TA type
  * [patch] `ES2022`+: `IsLessThan`: fix a comment
  * [patch] `ES2020`+: `thisBigIntValue`: throw a SyntaxError, not TypeError, for unsupported features
  * [patch] `helpers/getIteratorMethod`: `String` is always available
  * [patch] fix commented spec URLs
  * [patch] omit `%` for `callBound`
  * [meta] fix spec URLs
  * [meta] fix spackle metadata, comments
  * [Deps] update `get-intrinsic`, `internal-slot`, `is-array-buffer`, `object-inspect`
  * [Deps] move `function-bind` to dev deps
  * [Tests] String.fromCharCode takes numbers, not strings
  * [Tests] use `makeIteratorRecord` helper
  * [Tests] increase coverage
  * [Tests] fix tests that throw a sentinel
  * [Dev Deps] update `array.from`, `available-regexp-flags`, `tape`

1.21.1 / 2023-01-10
=================
  * [Fix] move `available-typed-arrays` to runtime deps
  * [Fix] `ES2021`+: `NumberToBigInt`: throw the proper error on an env without BigInts
  * [Fix] `ES2018`+: `CreateAsyncFromSyncIterator`: properly check `next` method args length
  * [Fix] `ES2020`-`ES2021`: Abstract Relational Comparison: handle BigInts properly
  * [Fix] `ES2022`+: `StringToBigInt`: invalid BigInts should be `undefined`, not `NaN` as in previous years
  * [Fix] `helpers/isFinite`: properly handle BigInt values
  * [Fix] `ES2020`+: `CreateListFromArrayLike`: accept BigInts
  * [Fix] `ES2019`+: `AsyncFromSyncIteratorContinuation`: throw a SyntaxError when > 1 arg is passed
  * [patch] `ES2020`+: `GetIterator`: use SyntaxError for intentionally unsupported
  * [patch] `ES2015`+: `GetPrototypeFromContructor`: use SyntaxError for intentionally unsupported
  * [patch] `ES2022`+: `StringToNumber`: fix non-string assertion failure message
  * [Deps] update `es-set-tostringtag`, `is-array-buffer`
  * [Tests] increase coverage
  * [Tests] exclude coverage from files that have been replaced by an extracted package

1.21.0 / 2023-01-04
=================
  * [New] `ES2015`+: add `IsDetachedBuffer`
  * [New] `ES2015+`: add `DetachArrayBuffer`
  * [New] `ES2020`+: add `NumericToRawBytes`
  * [New] `ES2017` - `ES2019`: add `NumberToRawBytes`
  * [New] `ES2020+`: add `RawBytesToNumeric`
  * [New] `ES2017-ES2019`: add `RawBytesToNumber`
  * [New] `ES2017`+: add `ValidateAtomicAccess`
  * [New] `ES2021`+: add `ValidateIntegerTypedArray`
  * [New] `ES2015`+: add `ValidateTypedArray`
  * [New] `ES2015`+: add `GetGlobalObject`
  * [New] `ES2022`+: add `TypedArrayElementSize`, `TypedArrayElementType`
  * [New] `ES2015`+: add `max`, `min`
  * [New] `helpers/assertRecord`: add predicates for PromiseCapability and AsyncGeneratorRequest Records
  * [New] `ES2018`+: add `AsyncIteratorClose`
  * [New] `ES2015`+: `IteratorClose`: also accept a Completion Record instance instead of a completion thunk
  * [New] `ES2015`+ (CompletionRecord, NormalCompletion), `ES2018`+ (ThrowCompletion): add new AOs
  * [New] `ES2015`+ (`ObjectCreate`) and `ES2020`+ (`OrdinaryObjectCreate`): use `internal-slot` to support additional slots
  * [New] `ES2018`+: add `CreateAsyncFromSyncIterator`
  * [patch] `ES2015`+: `GetMethod`: better failure message
  * [Refactor] use `es-set-tostringtag` package
  * [Refactor] use `has-proto` package
  * [Deps] update `has-proto`, `es-set-tostringtag`, `internal-slot`
  * [meta] fix spackle script to `git add` after all writing is done
  * [meta] autogenerate esX entry points
  * [meta] use a leading slash in gitattributes for proper spackle matching
  * [Tests] fix comments on missing AOs
  * [Tests] filter out host-defined AOs
  * [Dev Deps] update `@ljharb/eslint-config`, `aud`

1.20.5 / 2022-12-07
=================
  * [Fix] `ES2020+`: `floor`: make it work with BigInts as well
  * [Refactor] use `gopd`
  * [Tests] add `mod` helper tests (#147)
  * [Deps] update `string.prototype.trimend`, `string.prototype.trimstart`
  * [Dev Deps] update `array.prototype.filter`, `array.prototype.flatmap`, `array.prototype.indexof`, `object.fromentries`

1.20.4 / 2022-10-06
=================
  * [Fix] `ES2021+`: values that truncate to -0 in `ToIntegerOrInfinity` (#146)
  * [Deps] update `is-callable`

1.20.3 / 2022-09-22
=================
  * [Refactor] extract regex tester to `safe-regex-test` package
  * [Deps] update `get-intrinsic`, `is-callable`
  * [Dev Deps] update `aud`, `tape`

1.20.2 / 2022-09-01
=================
  * [Fix] `ES2020+`: `SameValueNonNumeric`: properly throw on BigInt values
  * [Deps] update `object.assign`, `get-intrinsic`, `object-inspect`
  * [Dev Deps] update `array.prototype.indexof`, `diff`, `es-value-fixtures`, `tape`
  * [meta] `spackle`: always mkdirp new files to be written
  * [Tests] fix vscode auto-const from 8fc256d

1.20.1 / 2022-05-16
=================
  * [Fix] `thisTimeValue`: use `getTime`, not `valueOf`, to get the time value
  * [Refactor] create `IsArray` helper
  * [Deps] update `regexp.prototype.flags`
  * [Dev Deps] use `for-each` instead of `foreach`

1.20.0 / 2022-05-05
=================
  * [New] add ES2022
  * [New] `ES2015+`: add `ObjectDefineProperties`
  * [Refactor] create `fromPropertyDescriptor` helper
  * [Refactor] use `has-property-descriptors`
  * [Deps] update `string.prototype.trimend`, `string.prototype.trimstart`, `unbox-primitive`
  * [meta] use `npmignore` to autogenerate an npmignore file
  * [Dev Deps] update `es-value-fixtures`, `has-bigints`, `functions-have-names`
  * [Tests] copy GetIntrinsic tests over from `get-intrinsic`

1.19.5 / 2022-04-13
=================
  * [Fix] `DefineOwnProperty`: FF 4-22 throws an exception when defining length of an array
  * [Dev Deps] update `@ljharb/eslint-config`

1.19.4 / 2022-04-12
=================
  * [Fix] `ES2015+`: `CreateDataProperty`: a nonwritable but configurable property is still converted to a data property

1.19.3 / 2022-04-11
=================
  * [Fix] `ES2015+`: `GetIterator`, `IterableToArrayLike`: in Symbol-less envs, handle boxed string objects
  * [Robustness] use `exec` instead of `test`, since the latter observably looks up `exec`
  * [Deps] update `is-shared-array-buffer`
  * [actions] restrict permissions
  * [Dev Deps] update `tape`
  * [Tests] add test coverage
  * [Tests] avoid a bug in node v4.0 with bound function names

1.19.2 / 2022-03-28
=================
  * [Fix] `ES2018+`: `EnumerableOwnPropertyNames`, `ToIntegerOrInfinity`, `UTF16SurrogatePairToCodePoint`: proper function names
  * [Fix] `ES2015+`: `GetOwnPropertyKeys`/`IsExtensible`/`{Set,Test}IntegrityLevel`: avoid a crash in IE 8 on missing ES5 intrinsics
  * [Fix] `helpers/DefineOwnProperty`: avoid a crash in IE 8
  * [Fix] `ES2015+`: `StringCreate`: properly check for `prototype` being `String.prototype`
  * [Docs] `ES2015+`: `GetV`: Fix spec URL
  * [meta] operations: use a URL object instead of a URL string
  * [meta] remove defunct greenkeeper config
  * [meta] better `eccheck` command; fix indentation
  * [Tests] node v0.6 lacks `RegExp.prototype.source`
  * [Tests] remove a stray `console.log`
  * [Tests] properly set the lastIndex in IE 8
  * [Tests] skip test due to IE 6-8 sparse/undefined bug
  * [Tests] in IE 8, an empty regex is `` and not `(?:)`
  * [Tests] ES3 engines don’t have `.bind`
  * [Tests] avoid needless failures in ES3 engines that don't support descriptors
  * [Tests] add test to cover https://github.com/tc39/ecma262/issues/2611
  * [Deps] update `has-symbols`, `is-negative-zero`, `is-weakref`, `object-inspect`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `object.fromentries`, `safe-publish-latest`, `tape`
  * [actions] reuse common workflows
  * [actions] update codecov uploader

1.19.1 / 2021-10-02
=================
  * [Fix] `ES2020+`: `CreateRegExpStringIterator`: should not have enumerable methods
  * [Dev Deps] update `array.prototype.filter`, `array.prototype.indexof`

1.19.0 / 2021-09-30
=================
  * [New] `ES2021+`: `IterableToList`: make `method` parameter optional (#61)
  * [New] add ES2021
  * [New] `ES2020+`: add `StringToBigInt`, `ToBigInt`, `ToBigInt64`, `ToBigUint64`
  * [New] `ES2017`+: add `IsSharedArrayBuffer`, `OrdinaryToPrimitive`
  * [New] `ES2015+`: add `CharacterRange`, `IsCompatiblePropertyDescriptor`
  * [New] `ES2020+`: add `CreateRegExpStringIterator`
  * [Fix] `ES2020+`: `ToBigInt64`/`ToBigUint64`: avoid node v10.4-v10.8 bug with limited BigInt range
  * [Fix] `ES2020+`: `AbstractRelationalComparison`, `AbstractEqualityComparison`: support BigInt
  * [Fix] `ES2020+`: `ToBigInt64`/`ToBigUint64`: Improve the definitions of twoSixtyThree and twoSixtyFour (#140)
  * [meta] do not publish .gitattributes
  * [Tests] Correct the behavior of `safeBigInt`
  * [Tests] Exclude dotfiles from the testing sweep (#141)

1.18.7 / 2021-09-28
=================
  * [Fix] `getOwnPropertyDescriptor` helper: avoid crashing in IE < 9
  * [Fix] `ArraySetLength`: `node` `v0.6` has a bug where array lengths can be Set but not Defined
  * [eslint] remove unused directive
  * [Tests] fix spelling

1.18.6 / 2021-09-07
=================
  * [Fix] `ES2020+`: `NumberToBigInt`: throw a SyntaxError when BigInts are not supported
  * [Refactor] extract getSymbolDescription logic to `get-symbol-description`
  * [Refactor] `ES2018+`: `AbstractRelationalComparison`: use `IsStringPrefix`
  * [Deps] update `is-callable`, `is-regex`, `is-string`
  * [Dev Deps] update `@ljharb/eslint-config`, `tape`
  * [Tests] `GetSubstitution`: add cases

1.18.5 / 2021-08-01
=================
  * [meta] remove "exports" (#133)
  * [Dev Deps] update `eslint`

1.18.4 / 2021-07-29
=================
  * [meta] partial revert of b54cfe8525faff482450e843a49d43be3a086225
  * [Deps] update `internal-slot`, `object-inspect`
  * [Dev Deps] update `eslint`, `tape`
  * [Tests] `ArraySetLength`: increase coverage

1.18.3 / 2021-05-27
=================
  * [Fix] `ES2020+`: `ToNumber`: ensure it throws on a BigInt (#130)

1.18.2 / 2021-05-25
=================
  * [meta] add `helpers` to "exports" field, for back compat

1.18.1 / 2021-05-25
=================
  * [readme] update and clarify entry points
  * [meta] add "exports" field, with escape hatch
  * [meta] add `sideEffects` field
  * [meta] use `prepublishOnly`, for npm 7+
  * [eslint] clean up eslint rules
  * [Deps] update `is-regex`, `is-string`, `object-inspect`, `unbox-primitive`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `tape`
  * [actions] disable fail-fast on matrix jobs
  * [actions] use `node/install` action instead of `node/run`
  * [actions] update codeql-analysis to new best practices

1.18.0 / 2021-03-03
=================
  * [New] add `ES2020`, and a number of additional AOs: See the changelog entries for the prereleases for more information:
     - [next.3](./CHANGELOG.md#1180-next3--2021-03-01)
     - [next.2](./CHANGELOG.md#1180-next2--2021-01-17)
     - [next.1](./CHANGELOG.md#1180-next1--2020-09-30)
     - [next.0](./CHANGELOG.md#1180-next0--2020-08-14)
  * [Refactor] `ES5+`: `Abstract Relational Comparison`: increase coverage
  * [Tests] increase coverage
  * [Tests] do not run coverage on node 0.6

1.18.0-next.3 / 2021-03-01
=================
  * [New] `ES2015`: add `StringGetIndexProperty`
  * [New] `ES2015+`: add `RegExpCreate`, `SplitMatch`, `StringCreate`
  * [New] `ES2016-ES2019`: add `UTF16Decode`
  * [New] `ES2020+`: add `NumberToBigInt`
  * [New] `ES2020+: add `BigInt::`/`Number::` methods:
  * [Fix] `ES5`: `ToNumber`: properly refuse to parse ES6+ forms
  * [Fix] `ES2015+`: `Invoke`: optional argumentsList must be a List of arguments, not a list of arguments
  * [Fix] `ES2016+`: `UTF16Encoding`: properly return a string code point instead of a numeric code point
  * [Fix] `ES2020`: `NumberBitwiseOp`: assert that x and y are Numbers
  * [readme] remove travis/testling badge, fix repo URLs
  * [meta] `ES2015`: add missing `CreateArrayIterator` AO
  * [meta] `ES2015-ES2017`: add missing `DaylightSavingTA` AO
  * [meta] rerun `npm run spackle` to update URLs left after 11d8c8df11c0d15d094a6035afed662e22b440ef
  * [meta] update ecma URLs
  * [meta] unignore 2020 operations list
  * [meta] update operations scripts linting
  * [meta] refactor getOps script to fetch all years at once
  * [meta] refactor operations script to keep years in one place
  * [meta] fix ES2015 spec URL
  * [Deps] update `has-symbols`, `string.prototype.trimend`, `string.prototype.trimstart`, `get-intrinsic`, `is-callable`, `is-regex`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `array.prototype.indexof`, `aud`, `es-value-fixtures`, `object.fromentries`, `tape`, `diff`
  * [operations] detect ES2020+ style `T::` numeric operations
  * [Tests] increase coverage
  * [Tests] `BigInt(1e17)` throws on node v10.4-v10.6
  * [Tests] improve coverage on `Number::` methods
  * [Tests] `tape` v5 `.equal` now uses strict equality, so no more need for `is()`
  * [Tests] improve BigInt:: and Number:: coverage
  * [Tests] actually run all the helpers tests
  * [Tests] ensure "expected missing" ops list is accurate
  * [Tests] abstract away per-operation skips
  * [Tests] skip BigInt:: tests on envs without BigInts
  * [Tests] use `es-value-fixtures`
  * [actions] update workflows

1.18.0-next.2 / 2021-01-17
=================
  * [New] `helpers`: add `isByteValue`, `isCodePoint`, `some`
  * [Fix] `ES2018+`: fix `GetSubstitution` with named captures
  * [Fix] `ES2020`: `GetIterator`: add omitted `hint` parameter
  * [Fix] `ES2018`/`ES2019`: `SetFunctionLength`: Infinities should throw
  * [Fix] `ES2020`: `ToIndex` uses `SameValue` instead of `SameValueZero`
  * [Fix] `ES2020`: `CopyDataProperties` uses `CreateDataPropertyOrThrow` instead of `CreateDataProperty`
  * [Refactor] use extracted `call-bind` instead of local helpers
  * [Refactor] use extracted `get-intrinsic` package
  * [Deps] update `call-bind`, `get-intrinsic`, `is-callable`, `is-negative-zero`, `is-regex`, `object-inspect`, `object.assign`, `string.prototype.trimend`, `string.prototype.trimstart`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `array.prototype.indexof`, `aud`, `diff`, `functions-have-names`, `has-bigints`, `has-strict-mode`, `object-is`, `object.fromentries`, `tape`
  * [actions] switch Automatic Rebase workflow to `pull_request_target` event
  * [actions] add "Allow Edits" workflow
  * [meta] pin cheerio to v1.0.0-rc.3, to fix getOps
  * [meta] make all URLs consistent, and point to spec artifacts
  * [meta] refactor `deltas` script; update eslint on operations scripts
  * [meta] do not publish .github dir (#123)
  * [Tests] add `v.notNonNegativeIntegers`, `v.nonConstructorFunctions`
  * [Tests] migrate tests to Github Actions
  * [Tests] run coverage on all tests
  * [Tests] add `npm run test:ses`

1.18.0-next.1 / 2020-09-30
=================
  * [Fix] `ES2020`: `ToInteger`: `-0` should always be normalized to `+0` (#116)
  * [patch] `GetIntrinsic`: Adapt to override-mistake-fix pattern (#115)
  * [Fix] `callBind`: ensure compatibility with SES
  * [Deps] update `is-callable`, `object.assign`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`
  * [eslint] fix warning
  * [Tests] temporarily allow SES tests to fail (#115)
  * [Tests] ses-compat - initialize module after ses lockdown (#113)
  * [Tests] [Refactor] use defineProperty helper rather than assignment
  * [Tests] [Refactor] clean up defineProperty test helper

1.18.0-next.0 / 2020-08-14
=================
  * [New] add `ES2020`
  * [New] `GetIntrinsic`: add `%AggregateError%`, `%FinalizationRegistry%`, and `%WeakRef%`
  * [New] `ES5`+: add `abs`, `floor`; use `modulo` consistently
  * [New] `GetIntrinsic`: Cache accessed intrinsics (#98)
  * [New] `GetIntrinsic`: Add ES201x function intrinsics (#97)
  * [New] `ES2015`+: add `QuoteJSONString`, `OrdinaryCreateFromConstructor`
  * [New] `ES2017`+: add `StringGetOwnProperty`
  * [New] `ES2016`+: add `UTF16Encoding`
  * [New] `ES2018`+: add `SetFunctionLength`, `UnicodeEscape`
  * [New] add `isLeadingSurrogate`/`isTrailingSurrogate` helpers
  * [Fix] `ES5`+: `ToPropertyDescriptor`: use intrinsic TypeError
  * [Fix] `ES2018+`: `CopyDataProperties`/`NumberToString`: use intrinsic TypeError
  * [Deps] update `is-regex`, `object-inspect`
  * [Dev Deps] update `eslint`

1.17.7 / 2020-09-30
=================
  * [Fix] `ES2020`: `ToInteger`: `-0` should always be normalized to `+0` (#116)
  * [patch] `GetIntrinsic`: Adapt to override-mistake-fix pattern (#115)
  * [Fix] `callBind`: ensure compatibility with SES
  * [Deps] update `is-callable`, `is-regex`, `object-inspect`, `object.assign`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`

1.17.6 / 2020-06-13
=================
  * [Fix] `helpers/getSymbolDescription`: use the global Symbol registry when available (#92)
  * [Fix] `ES2015+`: `IsConstructor`: when `Reflect.construct` is available, be spec-accurate (#93)
  * [Fix] `ES2015+`: `Set`: Always return boolean value (#101)
  * [Fix] `ES2015+`: `Set`: ensure exceptions are thrown in IE 9 when requested
  * [Fix] Use `Reflect.apply(…)` if available (#99)
  * [Fix] `helpers/floor`: module-cache `Math.floor`
  * [Fix] `helpers/getSymbolDescription`: Prefer bound `description` getter when present
  * [Fix] `2016`: Use `getIteratorMethod` in `IterableToArrayLike` (#94)
  * [Fix] `helpers/OwnPropertyKeys`: Use `Reflect.ownKeys(…)` if available (#91)
  * [Fix] `2018+`: Fix `CopyDataProperties` depending on `this` (#95)
  * [meta] mark spackled files as autogenerated
  * [meta] `Type`: fix spec URL
  * [meta] `ES2015`: complete ops list
  * [Deps] update `is‑callable`, `is‑regex`
  * [Deps] switch from `string.prototype.trimleft`/`string.prototype.trimright` to `string.prototype.trimstart`/`string.prototype.trimend`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `in-publish`, `object-is`, `tape`; add `aud`
  * [eslint] `helpers/isPropertyDescriptor`: fix indentation
  * [Tests] `helpers/getSymbolDescription`: add test cases; some envs have `Symbol.for` but can not infer a name (#92)
  * [Tests] try out CodeQL analysis
  * [Tests] reformat expected missing ops
  * [Tests] Run tests with `undefined` this (#96)

1.17.5 / 2020-03-22
=================
  * [Fix] `CreateDataProperty`: update an existing property
  * [Fix] run missing spackle from cd7504701879ddea0f5981e99cbcf93bfea9171d
  * [Dev Deps] update `make-arrow-function`, `tape`, `@ljharb/eslint-config`

1.17.4 / 2020-01-21
=================
  * [Fix] `2015+`: add code to handle IE 8’s problems
  * [Tests] fix tests for IE 8

1.17.3 / 2020-01-19
=================
  * [Fix] `ObjectCreate` `2015+`: Fall back to `__proto__` and normal `new` in older browsers
  * [Fix] `GetIntrinsic`: ensure the `allowMissing` property actually works on dotted intrinsics

1.17.2 / 2020-01-14
=================
  * [Fix] `helpers/OwnPropertyKeys`: include non-enumerables too

1.17.1 / 2020-01-14
=================
  * [Refactor] add `OwnPropertyKeys` helper, use it in `CopyDataProperties`
  * [Refactor] `IteratorClose`: remove useless assignment
  * [Dev Deps] update `eslint`, `tape`, `diff`

1.17.0 / 2019-12-20
=================
  * [New] Split up each operation into its own file (prereleased)
  * [Fix] `GetIntrinsic`: IE 8 has a broken `Object.getOwnPropertyDescriptor`
  * [Fix] `object.assign` is a runtime dep (prereleased)
  * [Refactor] `GetIntrinsic`: remove the internal property salts, since % already handles that
  * [Refactor] `GetIntrinsic`: further simplification
  * [Deps] update `is-callable`, `string.prototype.trimleft`, `string.prototype.trimright`, `is-regex`
  * [Dev Deps] update `@ljharb/eslint-config`, `object-is`, `object.fromentries`, `tape`
  * [Tests] add `.eslintignore`
  * [meta] remove unused Makefile and associated utils
  * [meta] only run spackle script in publish (#78) (prereleased)

1.17.0-next.1 / 2019-12-11
=================
  * [Fix] `object.assign` is a runtime dep
  * [meta] only run spackle script in publish (#78)

1.17.0-next.0 / 2019-12-11
=================
  * [New] Split up each operation into its own file

1.16.3 / 2019-12-04
=================
  * [Fix] `GetIntrinsic`: when given a path to a getter, return the actual getter
  * [Dev Deps] update `eslint`

1.16.2 / 2019-11-24
=================
  * [Fix] IE 6-7 lack JSON
  * [Fix] IE 6-8 strings can’t use array slice, they need string slice
  * [Dev Deps] update `eslint`

1.16.1 / 2019-11-24
=================
  * [Fix] `GetIntrinsics`: turns out IE 8 throws when `Object.getOwnPropertyDescriptor(arguments);`, and does not throw on `callee` anyways
  * [Deps] update `es-to-primitive`, `has-symbols`, `object-inspect`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`
  * [meta] re-include year files inside `operations`
  * [meta] add `funding` field
  * [actions] add Automatic Rebase github action
  * [Tests] use shared travis-ci config
  * [Tests] disable `check-coverage`, and let codecov do it

1.16.0 / 2019-10-18
=================
  * [New] `ES2015+`: add `SetFunctionName`
  * [New] `ES2015+`: add `GetPrototypeFromConstructor`, with caveats
  * [New] `ES2015+`: add `CreateListFromArrayLike`
  * [New] `ES2016+`: add `OrdinarySetPrototypeOf`
  * [New] `ES2016+`: add `OrdinaryGetPrototypeOf`
  * [New] add `getSymbolDescription` and `getInferredName` helpers
  * [Fix] `GetIterator`: add fallback for pre-Symbol environments, tests
  * [Dev Deps] update `object.fromentries`
  * [Tests] add `node` `v12.2`

1.15.0 / 2019-10-02
=================
  * [New] `ES2018`+: add `DateString`, `TimeString`
  * [New] `ES2015`+: add `ToDateString`
  * [New] `ES5`+: add `msFromTime`, `SecFromTime`, `MinFromTime`, `HourFromTime`, `TimeWithinDay`, `Day`, `DayFromYear`, `TimeFromYear`, `YearFromTime`, `WeekDay`, `DaysInYear`, `InLeapYear`, `DayWithinYear`, `MonthFromTime`, `DateFromTime`, `MakeDay`, `MakeDate`, `MakeTime`, `TimeClip`, `modulo`
  * [New] add `regexTester` helper
  * [New] add `callBound` helper
  * [New] add ES2020’s intrinsic dot notation
  * [New] add `isPrefixOf` helper
  * [New] add `maxSafeInteger` helper
  * [Deps] update `string.prototype.trimleft`, `string.prototype.trimright`
  * [Dev Deps] update `eslint`
  * [Tests] on `node` `v12.11`
  * [meta] npmignore operations scripts; add "deltas"

1.14.2 / 2019-09-08
=================
  * [Fix] `ES2016`: `IterableToArrayLike`: add proper fallback for strings, pre-Symbols
  * [Tests] on `node` `v12.10`

1.14.1 / 2019-09-03
=================
  * [meta] republish with some extra files removed

1.14.0 / 2019-09-02
=================
  * [New] add ES2019
  * [New] `ES2017+`: add `IterableToList`
  * [New] `ES2016`: add `IterableToArrayLike`
  * [New] `ES2015+`: add `ArrayCreate`, `ArraySetLength`, `OrdinaryDefineOwnProperty`, `OrdinaryGetOwnProperty`, `OrdinaryHasProperty`, `CreateHTML`, `GetOwnPropertyKeys`, `InstanceofOperator`, `SymbolDescriptiveString`, `GetSubstitution`, `ValidateAndApplyPropertyDescriptor`, `IsPromise`, `OrdinaryHasInstance`, `TestIntegrityLevel`, `SetIntegrityLevel`
  * [New] add `callBind` helper, and use it
  * [New] add helpers: `isPropertyDescriptor`, `every`
  * [New] ES5+: add `Abstract Relational Comparison`
  * [New] ES5+: add `Abstract Equality Comparison`, `Strict Equality Comparison`
  * [Fix] `ES2015+`: `GetIterator`: only require native Symbols when `method` is omitted
  * [Fix] `ES2015`: `Call`: error message now properly displays Symbols using `object-inspect`
  * [Fix] `ES2015+`: `ValidateAndApplyPropertyDescriptor`: use ES2017 logic to bypass spec bugs
  * [Fix] `ES2015+`: `CreateDataProperty`, `DefinePropertyOrThrow`, `ValidateAndApplyPropertyDescriptor`: add fallbacks for ES3
  * [Fix] `ES2015+`: `FromPropertyDescriptor`: no longer requires a fully complete Property Descriptor
  * [Fix] `ES5`: `IsPropertyDescriptor`: call into `IsDataDescriptor` and `IsAccessorDescriptor`
  * [Refactor] use `has-symbols` for Symbol detection
  * [Fix] `helpers/assertRecord`: remove `console.log`
  * [Deps] update `object-keys`
  * [readme] add security note
  * [meta] change http URLs to https
  * [meta] linter cleanup
  * [meta] fix getOps script
  * [meta] add FUNDING.yml
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`, `semver`, `replace`, `cheerio`, `tape`
  * [Tests] up to `node` `v12.9`, `v11.15`, `v10.16`, `v8.16`, `v6.17`
  * [Tests] temporarily allow node 0.6 to fail; segfaulting in travis
  * [Tests] use the values helper more in es5 tests
  * [Tests] fix linting to apply to all files
  * [Tests] run `npx aud` only on prod deps
  * [Tests] add v.descriptors helpers
  * [Tests] use `npx aud` instead of `npm audit` with hoops
  * [Tests] use `eclint` instead of `editorconfig-tools`
  * [Tests] some intrinsic cleanup
  * [Tests] migrate es5 tests to use values helper
  * [Tests] add some missing ES2015 ops

1.13.0 / 2019-01-02
=================
  * [New] add ES2018
  * [New] add ES2015/ES2016: EnumerableOwnNames; ES2017: EnumerableOwnProperties
  * [New] `ES2015+`: add `thisBooleanValue`, `thisNumberValue`, `thisStringValue`, `thisTimeValue`
  * [New] `ES2015+`: add `DefinePropertyOrThrow`, `DeletePropertyOrThrow`, `CreateMethodProperty`
  * [New] add `assertRecord` helper
  * [Deps] update `is-callable`, `has`, `object-keys`, `es-to-primitive`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `semver`, `safe-publish-latest`, `replace`
  * [Tests] use `npm audit` instead of `nsp`
  * [Tests] remove `jscs`
  * [Tests] up to `node` `v11.6`, `v10.15`, `v8.15`, `v6.16`
  * [Tests] move descriptor factories to `values` helper
  * [Tests] add `getOps` to programmatically fetch abstract operation names

1.12.0 / 2018-05-31
=================
  * [New] add `GetIntrinsic` entry point
  * [New] `ES2015`+: add `ObjectCreate`
  * [Robustness]: `ES2015+`: ensure `Math.{abs,floor}` and `Function.call` are cached

1.11.0 / 2018-03-21
=================
  * [New] `ES2015+`: add iterator abstract ops
  * [Dev Deps] update `eslint`, `nsp`, `object.assign`, `semver`, `tape`
  * [Tests] up to `node` `v9.8`, `v8.10`, `v6.13`

1.10.0 / 2017-11-24
=================
  * [New] ES2015+: `AdvanceStringIndex`
  * [Dev Deps] update `eslint`, `nsp`
  * [Tests] require node 0.6 to pass again
  * [Tests] up to `node` `v9.2`, `v8.9`, `v6.12`; use `nvm install-latest-npm`; pin included builds to LTS

1.9.0 / 2017-09-30
=================
  * [New] `es2015+`: add `ArraySpeciesCreate`
  * [New] ES2015+: add `CreateDataProperty` and `CreateDataPropertyOrThrow`
  * [Tests] consolidate duplicated tests
  * [Tests] increase coverage
  * [Dev Deps] update `nsp`, `eslint`

1.8.2 / 2017-09-03
=================
  * [Fix] `es2015`+: `ToNumber`: provide the proper hint for Date objects (#27)
  * [Dev Deps] update `eslint`

1.8.1 / 2017-08-30
=================
  * [Fix] ES2015+: `ToPropertyKey`: should return a symbol for Symbols (#26)
  * [Deps] update `function-bind`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`
  * [Docs] github broke markdown parsing

1.8.0 / 2017-08-04
=================
  * [New] add ES2017
  * [New] move es6+ to es2015+; leave es6/es7 as aliases
  * [New] ES5+: add `IsPropertyDescriptor`, `IsAccessorDescriptor`, `IsDataDescriptor`, `IsGenericDescriptor`, `FromPropertyDescriptor`, `ToPropertyDescriptor`
  * [New] ES2015+: add `CompletePropertyDescriptor`, `Set`, `HasOwnProperty`, `HasProperty`, `IsConcatSpreadable`, `Invoke`, `CreateIterResultObject`, `RegExpExec`
  * [Fix] es7/es2016: do not mutate ES6
  * [Fix] assign helper only supports one source
  * [Deps] update `is-regex`
  * [Dev Deps] update `nsp`, `eslint`, `@ljharb/eslint-config`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`, `semver`, `tape`
  * [Tests] add tests for missing and excess operations
  * [Tests] add codecov for coverage
  * [Tests] up to `node` `v8.2`, `v7.10`, `v6.11`, `v4.8`; newer npm breaks on older node
  * [Tests] use same lists of value types across tests; ensure tests are the same when ops are the same
  * [Tests] ES2015: add ToNumber symbol tests
  * [Tests] switch to `nyc` for code coverage
  * [Tests] make IsRegExp tests consistent across editions

1.7.0 / 2017-01-22
=================
  * [New] ES6: Add `GetMethod` (#16)
  * [New] ES6: Add `GetV` (#16)
  * [New] ES6: Add `Get` (#17)
  * [Tests] up to `node` `v7.4`, `v6.9`, `v4.6`; improve test matrix
  * [Dev Deps] update `tape`, `nsp`, `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`

1.6.1 / 2016-08-21
=================
  * [Fix] ES6: IsConstructor should return true for `class` constructors.

1.6.0 / 2016-08-20
=================
  * [New] ES5 / ES6: add `Type`
  * [New] ES6: `SpeciesConstructor`
  * [Dev Deps] update `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`; add `safe-publish-latest`
  * [Tests] up to `node` `v6.4`, `v5.12`, `v4.5`

1.5.1 / 2016-05-30
=================
  * [Fix] `ES.IsRegExp`: actually look up `Symbol.match` on the argument
  * [Refactor] create `isNaN` helper
  * [Deps] update `is-callable`, `function-bind`
  * [Deps] update `es-to-primitive`, fix ES5 tests
  * [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`, `tape`, `nsp`
  * [Tests] up to `node` `v6.2`, `v5.11`, `v4.4`
  * [Tests] use pretest/posttest for linting/security

1.5.0 / 2015-12-27
=================
  * [New] adds `Symbol.toPrimitive` support via `es-to-primitive`
  * [Deps] update `is-callable`, `es-to-primitive`
  * [Dev Deps] update `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`, `tape`
  * [Tests] up to `node` `v5.3`

1.4.3 / 2015-11-04
=================
  * [Fix] `ES6.ToNumber`: should give `NaN` for explicitly signed hex strings (#4)
  * [Refactor] `ES6.ToNumber`: No need to double-trim
  * [Refactor] group tests better
  * [Tests] should still pass on `node` `v0.8`

1.4.2 / 2015-11-02
=================
  * [Fix] ensure `ES.ToNumber` trims whitespace, and does not trim non-whitespace (#3)

1.4.1 / 2015-10-31
=================
  * [Fix] ensure only 0-1 are valid binary and 0-7 are valid octal digits (#2)
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`
  * [Tests] on `node` `v5.0`
  * [Tests] fix npm upgrades for older node versions
  * package.json: use object form of "authors", add "contributors"

1.4.0 / 2015-09-26
=================
  * [Deps] update `is-callable`
  * [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`
  * [Tests] on `node` `v4.2`
  * [New] Add `SameValueNonNumber` to ES7

1.3.2 / 2015-09-26
=================
  * [Fix] Fix `ES6.IsRegExp` to properly handle `Symbol.match`, per spec.
  * [Tests] up to `io.js` `v3.3`, `node` `v4.1`
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`

1.3.1 / 2015-08-15
=================
  * [Fix] Ensure that objects that `toString` to a binary or octal literal also convert properly

1.3.0 / 2015-08-15
=================
  * [New] ES6’s ToNumber now supports binary and octal literals.
  * [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`, `tape`
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG
  * [Tests] up to `io.js` `v3.0`

1.2.2 / 2015-07-28
=================
  * [Fix] Both `ES5.CheckObjectCoercible` and `ES6.RequireObjectCoercible` return the value if they don't throw.
  * [Tests] Test on latest `io.js` versions.
  * [Dev Deps] Update `eslint`, `jscs`, `tape`, `semver`, `covert`, `nsp`

1.2.1 / 2015-03-20
=================
  * Fix `isFinite` helper.

1.2.0 / 2015-03-19
=================
  * Use `es-to-primitive` for ToPrimitive methods.
  * Test on latest `io.js` versions; allow failures on all but 2 latest `node`/`io.js` versions.

1.1.2 / 2015-03-20
=================
  * Fix isFinite helper.

1.1.1 / 2015-03-19
=================
  * Fix isPrimitive check for functions
  * Update `eslint`, `editorconfig-tools`, `semver`, `nsp`

1.1.0 / 2015-02-17
=================
  * Add ES7 export (non-default).
  * All grade A-supported `node`/`iojs` versions now ship with an `npm` that understands `^`.
  * Test on `iojs-v1.2`.

1.0.1 / 2015-01-30
=================
  * Use `is-callable` instead of an internal function.
  * Update `tape`, `jscs`, `nsp`, `eslint`

1.0.0 / 2015-01-10
=================
  * v1.0.0
