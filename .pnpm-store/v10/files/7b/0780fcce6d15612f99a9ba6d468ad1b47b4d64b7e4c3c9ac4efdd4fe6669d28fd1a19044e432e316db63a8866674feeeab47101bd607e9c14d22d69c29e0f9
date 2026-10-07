# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [18.1.3](https://www.github.com/yargs/yargs-parser/compare/v18.1.2...v18.1.3) (2020-04-16)


### Bug Fixes

* **setArg:** options using camel-case and dot-notation populated twice ([#268](https://www.github.com/yargs/yargs-parser/issues/268)) ([f7e15b9](https://www.github.com/yargs/yargs-parser/commit/f7e15b9800900b9856acac1a830a5f35847be73e))

### [18.1.2](https://www.github.com/yargs/yargs-parser/compare/v18.1.1...v18.1.2) (2020-03-26)


### Bug Fixes

* **array, nargs:** support -o=--value and --option=--value format ([#262](https://www.github.com/yargs/yargs-parser/issues/262)) ([41d3f81](https://www.github.com/yargs/yargs-parser/commit/41d3f8139e116706b28de9b0de3433feb08d2f13))

### [18.1.1](https://www.github.com/yargs/yargs-parser/compare/v18.1.0...v18.1.1) (2020-03-16)


### Bug Fixes

* \_\_proto\_\_ will now be replaced with \_\_\_proto\_\_\_ in parse ([#258](https://www.github.com/yargs/yargs-parser/issues/258)), patching a potential 
prototype pollution vulnerability. This was reported by the Snyk Security Research Team.([63810ca](https://www.github.com/yargs/yargs-parser/commit/63810ca1ae1a24b08293a4d971e70e058c7a41e2))

## [18.1.0](https://www.github.com/yargs/yargs-parser/compare/v18.0.0...v18.1.0) (2020-03-07)


### Features

* introduce single-digit boolean aliases ([#255](https://www.github.com/yargs/yargs-parser/issues/255)) ([9c60265](https://www.github.com/yargs/yargs-parser/commit/9c60265fd7a03cb98e6df3e32c8c5e7508d9f56f))

## [18.0.0](https://www.github.com/yargs/yargs-parser/compare/v17.1.0...v18.0.0) (2020-03-02)


### ⚠ BREAKING CHANGES

* the narg count is now enforced when parsing arrays.

### Features

* NaN can now be provided as a value for nargs, indicating "at least" one value is expected for array ([#251](https://www.github.com/yargs/yargs-parser/issues/251)) ([9db4be8](https://www.github.com/yargs/yargs-parser/commit/9db4be81417a2c7097128db34d86fe70ef4af70c))

## [17.1.0](https://www.github.com/yargs/yargs-parser/compare/v17.0.1...v17.1.0) (2020-03-01)


### Features

* introduce greedy-arrays config, for specifying whether arrays consume multiple positionals ([#249](https://www.github.com/yargs/yargs-parser/issues/249)) ([60e880a](https://www.github.com/yargs/yargs-parser/commit/60e880a837046314d89fa4725f923837fd33a9eb))

### [17.0.1](https://www.github.com/yargs/yargs-parser/compare/v17.0.0...v17.0.1) (2020-02-29)


### Bug Fixes

* normalized keys were not enumerable ([#247](https://www.github.com/yargs/yargs-parser/issues/247)) ([57119f9](https://www.github.com/yargs/yargs-parser/commit/57119f9f17cf27499bd95e61c2f72d18314f11ba))

## [17.0.0](https://www.github.com/yargs/yargs-parser/compare/v16.1.0...v17.0.0) (2020-02-10)


### ⚠ BREAKING CHANGES

* this reverts parsing behavior of booleans to that of yargs@14
* objects used during parsing are now created with a null
prototype. There may be some scenarios where this change in behavior
leaks externally.

### Features

* boolean arguments will not be collected into an implicit array ([#236](https://www.github.com/yargs/yargs-parser/issues/236)) ([34c4e19](https://www.github.com/yargs/yargs-parser/commit/34c4e19bae4e7af63e3cb6fa654a97ed476e5eb5))
* introduce nargs-eats-options config option ([#246](https://www.github.com/yargs/yargs-parser/issues/246)) ([d50822a](https://www.github.com/yargs/yargs-parser/commit/d50822ac10e1b05f2e9643671ca131ac251b6732))


### Bug Fixes

* address bugs with "uknown-options-as-args" ([bc023e3](https://www.github.com/yargs/yargs-parser/commit/bc023e3b13e20a118353f9507d1c999bf388a346))
* array should take precedence over nargs, but enforce nargs ([#243](https://www.github.com/yargs/yargs-parser/issues/243)) ([4cbc188](https://www.github.com/yargs/yargs-parser/commit/4cbc188b7abb2249529a19c090338debdad2fe6c))
* support keys that collide with object prototypes ([#234](https://www.github.com/yargs/yargs-parser/issues/234)) ([1587b6d](https://www.github.com/yargs/yargs-parser/commit/1587b6d91db853a9109f1be6b209077993fee4de))
* unknown options terminated with digits now handled by unknown-options-as-args ([#238](https://www.github.com/yargs/yargs-parser/issues/238)) ([d36cdfa](https://www.github.com/yargs/yargs-parser/commit/d36cdfa854254d7c7e0fe1d583818332ac46c2a5))

## [16.1.0](https://www.github.com/yargs/yargs-parser/compare/v16.0.0...v16.1.0) (2019-11-01)


### ⚠ BREAKING CHANGES

* populate error if incompatible narg/count or array/count options are used (#191)

### Features

* options that have had their default value used are now tracked ([#211](https://www.github.com/yargs/yargs-parser/issues/211)) ([a525234](https://www.github.com/yargs/yargs-parser/commit/a525234558c847deedd73f8792e0a3b77b26e2c0))
* populate error if incompatible narg/count or array/count options are used ([#191](https://www.github.com/yargs/yargs-parser/issues/191)) ([84a401f](https://www.github.com/yargs/yargs-parser/commit/84a401f0fa3095e0a19661670d1570d0c3b9d3c9))


### Reverts

* revert 16.0.0 CHANGELOG entry ([920320a](https://www.github.com/yargs/yargs-parser/commit/920320ad9861bbfd58eda39221ae211540fc1daf))

## [15.0.0](https://github.com/yargs/yargs-parser/compare/v14.0.0...v15.0.0) (2019-10-07)


### Features

* rework `collect-unknown-options` into `unknown-options-as-args`, providing more comprehensive functionality ([ef771ca](https://github.com/yargs/yargs-parser/commit/ef771ca))


### BREAKING CHANGES

* rework `collect-unknown-options` into `unknown-options-as-args`, providing more comprehensive functionality



## [14.0.0](https://github.com/yargs/yargs-parser/compare/v13.1.1...v14.0.0) (2019-09-06)


### Bug Fixes

* boolean arrays with default values ([#185](https://github.com/yargs/yargs-parser/issues/185)) ([7d42572](https://github.com/yargs/yargs-parser/commit/7d42572))
* boolean now behaves the same as other array types ([#184](https://github.com/yargs/yargs-parser/issues/184)) ([17ca3bd](https://github.com/yargs/yargs-parser/commit/17ca3bd))
* eatNargs() for 'opt.narg === 0' and boolean typed options ([#188](https://github.com/yargs/yargs-parser/issues/188)) ([c5a1db0](https://github.com/yargs/yargs-parser/commit/c5a1db0))
* maybeCoerceNumber now takes precedence over coerce return value ([#182](https://github.com/yargs/yargs-parser/issues/182)) ([2f26436](https://github.com/yargs/yargs-parser/commit/2f26436))
* take into account aliases when appending arrays from config object ([#199](https://github.com/yargs/yargs-parser/issues/199)) ([f8a2d3f](https://github.com/yargs/yargs-parser/commit/f8a2d3f))


### Features

* add configuration option to "collect-unknown-options" ([#181](https://github.com/yargs/yargs-parser/issues/181)) ([7909cc4](https://github.com/yargs/yargs-parser/commit/7909cc4))
* maybeCoerceNumber() now takes into account arrays ([#187](https://github.com/yargs/yargs-parser/issues/187)) ([31c204b](https://github.com/yargs/yargs-parser/commit/31c204b))


### BREAKING CHANGES

* unless "parse-numbers" is set to "false", arrays of numeric strings are now parsed as numbers, rather than strings.
* we have dropped the broken "defaulted" functionality; we would like to revisit adding this in the future.
* maybeCoerceNumber now takes precedence over coerce return value (#182)



### [13.1.1](https://www.github.com/yargs/yargs-parser/compare/v13.1.0...v13.1.1) (2019-06-10)


### Bug Fixes

* convert values to strings when tokenizing ([#167](https://www.github.com/yargs/yargs-parser/issues/167)) ([57b7883](https://www.github.com/yargs/yargs-parser/commit/57b7883))
* nargs should allow duplicates when duplicate-arguments-array=false ([#164](https://www.github.com/yargs/yargs-parser/issues/164)) ([47ccb0b](https://www.github.com/yargs/yargs-parser/commit/47ccb0b))
* should populate "_" when given config with "short-option-groups" false ([#179](https://www.github.com/yargs/yargs-parser/issues/179)) ([6055974](https://www.github.com/yargs/yargs-parser/commit/6055974))

## [13.1.0](https://github.com/yargs/yargs-parser/compare/v13.0.0...v13.1.0) (2019-05-05)


### Features

* add `strip-aliased` and `strip-dashed` configuration options. ([#172](https://github.com/yargs/yargs-parser/issues/172)) ([a3936aa](https://github.com/yargs/yargs-parser/commit/a3936aa))
* support boolean which do not consume next argument. ([#171](https://github.com/yargs/yargs-parser/issues/171)) ([0ae7fcb](https://github.com/yargs/yargs-parser/commit/0ae7fcb))



<a name="13.0.0"></a>
# [13.0.0](https://github.com/yargs/yargs-parser/compare/v12.0.0...v13.0.0) (2019-02-02)


### Features

* don't coerce number from string with leading '0' or '+' ([#158](https://github.com/yargs/yargs-parser/issues/158)) ([18d0fd5](https://github.com/yargs/yargs-parser/commit/18d0fd5))


### BREAKING CHANGES

* options with leading '+' or '0' now parse as strings



<a name="12.0.0"></a>
# [12.0.0](https://github.com/yargs/yargs-parser/compare/v11.1.1...v12.0.0) (2019-01-29)


### Bug Fixes

* better handling of quoted strings ([#153](https://github.com/yargs/yargs-parser/issues/153)) ([2fb71b2](https://github.com/yargs/yargs-parser/commit/2fb71b2))


### Features

* default value is now used if no right-hand value provided for numbers/strings ([#156](https://github.com/yargs/yargs-parser/issues/156)) ([5a7c46a](https://github.com/yargs/yargs-parser/commit/5a7c46a))


### BREAKING CHANGES

* a flag with no right-hand value no longer populates defaulted options with `undefined`.
* quotes at beginning and endings of strings are not removed during parsing.



<a name="11.1.1"></a>
## [11.1.1](https://github.com/yargs/yargs-parser/compare/v11.1.0...v11.1.1) (2018-11-19)


### Bug Fixes

* ensure empty string is added into argv._ ([#140](https://github.com/yargs/yargs-parser/issues/140)) ([79cda98](https://github.com/yargs/yargs-parser/commit/79cda98))


### Reverts

* make requiresArg work in conjunction with arrays ([#136](https://github.com/yargs/yargs-parser/issues/136)) ([f4a3063](https://github.com/yargs/yargs-parser/commit/f4a3063))



<a name="11.1.0"></a>
# [11.1.0](https://github.com/yargs/yargs-parser/compare/v11.0.0...v11.1.0) (2018-11-10)


### Bug Fixes

* handling of one char alias ([#139](https://github.com/yargs/yargs-parser/issues/139)) ([ee56e31](https://github.com/yargs/yargs-parser/commit/ee56e31))


### Features

* add halt-at-non-option configuration option ([#130](https://github.com/yargs/yargs-parser/issues/130)) ([a849fce](https://github.com/yargs/yargs-parser/commit/a849fce))



<a name="11.0.0"></a>
# [11.0.0](https://github.com/yargs/yargs-parser/compare/v10.1.0...v11.0.0) (2018-10-06)


### Bug Fixes

* flatten-duplicate-arrays:false for more than 2 arrays ([#128](https://github.com/yargs/yargs-parser/issues/128)) ([2bc395f](https://github.com/yargs/yargs-parser/commit/2bc395f))
* hyphenated flags combined with dot notation broke parsing ([#131](https://github.com/yargs/yargs-parser/issues/131)) ([dc788da](https://github.com/yargs/yargs-parser/commit/dc788da))
* make requiresArg work in conjunction with arrays ([#136](https://github.com/yargs/yargs-parser/issues/136)) ([77ae1d4](https://github.com/yargs/yargs-parser/commit/77ae1d4))


### Chores

* update dependencies ([6dc42a1](https://github.com/yargs/yargs-parser/commit/6dc42a1))


### Features

* also add camelCase array options ([#125](https://github.com/yargs/yargs-parser/issues/125)) ([08c0117](https://github.com/yargs/yargs-parser/commit/08c0117))
* array.type can now be provided, supporting coercion ([#132](https://github.com/yargs/yargs-parser/issues/132)) ([4b8cfce](https://github.com/yargs/yargs-parser/commit/4b8cfce))


### BREAKING CHANGES

* drops Node 4 support
* the argv object is now populated differently (correctly) when hyphens and dot notation are used in conjunction.



<a name="10.1.0"></a>
# [10.1.0](https://github.com/yargs/yargs-parser/compare/v10.0.0...v10.1.0) (2018-06-29)


### Features

* add `set-placeholder-key` configuration ([#123](https://github.com/yargs/yargs-parser/issues/123)) ([19386ee](https://github.com/yargs/yargs-parser/commit/19386ee))



<a name="10.0.0"></a>
# [10.0.0](https://github.com/yargs/yargs-parser/compare/v9.0.2...v10.0.0) (2018-04-04)


### Bug Fixes

* do not set boolean flags if not defined in `argv` ([#119](https://github.com/yargs/yargs-parser/issues/119)) ([f6e6599](https://github.com/yargs/yargs-parser/commit/f6e6599))


### BREAKING CHANGES

* `boolean` flags defined without a `default` value will now behave like other option type and won't be set in the parsed results when the user doesn't set the corresponding CLI arg.

Previous behavior:
```js
var parse = require('yargs-parser');

parse('--flag', {boolean: ['flag']});
// => { _: [], flag: true }

parse('--no-flag', {boolean: ['flag']});
// => { _: [], flag: false }

parse('', {boolean: ['flag']});
// => { _: [], flag: false }
```

New behavior:
```js
var parse = require('yargs-parser');

parse('--flag', {boolean: ['flag']});
// => { _: [], flag: true }

parse('--no-flag', {boolean: ['flag']});
// => { _: [], flag: false }

parse('', {boolean: ['flag']});
// => { _: [] } => flag not set similarly to other option type
```



<a name="9.0.2"></a>
## [9.0.2](https://github.com/yargs/yargs-parser/compare/v9.0.1...v9.0.2) (2018-01-20)


### Bug Fixes

* nargs was still aggressively consuming too many arguments ([9b28aad](https://github.com/yargs/yargs-parser/commit/9b28aad))



<a name="9.0.1"></a>
## [9.0.1](https://github.com/yargs/yargs-parser/compare/v9.0.0...v9.0.1) (2018-01-20)


### Bug Fixes

* nargs was consuming too many arguments ([4fef206](https://github.com/yargs/yargs-parser/commit/4fef206))



<a name="9.0.0"></a>
# [9.0.0](https://github.com/yargs/yargs-parser/compare/v8.1.0...v9.0.0) (2018-01-20)


### Features

* narg arguments no longer consume flag arguments ([#114](https://github.com/yargs/yargs-parser/issues/114)) ([60bb9b3](https://github.com/yargs/yargs-parser/commit/60bb9b3))


### BREAKING CHANGES

* arguments of form --foo, -abc, will no longer be consumed by nargs



<a name="8.1.0"></a>
# [8.1.0](https://github.com/yargs/yargs-parser/compare/v8.0.0...v8.1.0) (2017-12-20)


### Bug Fixes

* allow null config values ([#108](https://github.com/yargs/yargs-parser/issues/108)) ([d8b14f9](https://github.com/yargs/yargs-parser/commit/d8b14f9))
* ensure consistent parsing of dot-notation arguments ([#102](https://github.com/yargs/yargs-parser/issues/102)) ([c9bd79c](https://github.com/yargs/yargs-parser/commit/c9bd79c))
* implement [@antoniom](https://github.com/antoniom)'s fix for camel-case expansion ([3087e1d](https://github.com/yargs/yargs-parser/commit/3087e1d))
* only run coercion functions once, despite aliases. ([#76](https://github.com/yargs/yargs-parser/issues/76)) ([#103](https://github.com/yargs/yargs-parser/issues/103)) ([507aaef](https://github.com/yargs/yargs-parser/commit/507aaef))
* scientific notation circumvented bounds check ([#110](https://github.com/yargs/yargs-parser/issues/110)) ([3571f57](https://github.com/yargs/yargs-parser/commit/3571f57))
* tokenizer should ignore spaces at the beginning of the argString ([#106](https://github.com/yargs/yargs-parser/issues/106)) ([f34ead9](https://github.com/yargs/yargs-parser/commit/f34ead9))


### Features

* make combining arrays a configurable option ([#111](https://github.com/yargs/yargs-parser/issues/111)) ([c8bf536](https://github.com/yargs/yargs-parser/commit/c8bf536))
* merge array from arguments with array from config ([#83](https://github.com/yargs/yargs-parser/issues/83)) ([806ddd6](https://github.com/yargs/yargs-parser/commit/806ddd6))



<a name="8.0.0"></a>
# [8.0.0](https://github.com/yargs/yargs-parser/compare/v7.0.0...v8.0.0) (2017-10-05)


### Bug Fixes

* Ignore multiple spaces between arguments. ([#100](https://github.com/yargs/yargs-parser/issues/100)) ([d137227](https://github.com/yargs/yargs-parser/commit/d137227))


### Features

* allow configuration of prefix for boolean negation ([#94](https://github.com/yargs/yargs-parser/issues/94)) ([00bde7d](https://github.com/yargs/yargs-parser/commit/00bde7d))
* reworking how numbers are parsed ([#104](https://github.com/yargs/yargs-parser/issues/104)) ([fba00eb](https://github.com/yargs/yargs-parser/commit/fba00eb))


### BREAKING CHANGES

* strings that fail `Number.isSafeInteger()` are no longer coerced into numbers. 



<a name="7.0.0"></a>
# [7.0.0](https://github.com/yargs/yargs-parser/compare/v6.0.1...v7.0.0) (2017-05-02)


### Chores

* revert populate-- logic ([#91](https://github.com/yargs/yargs-parser/issues/91)) ([6003e6d](https://github.com/yargs/yargs-parser/commit/6003e6d))


### BREAKING CHANGES

* populate-- now defaults to false.



<a name="6.0.1"></a>
## [6.0.1](https://github.com/yargs/yargs-parser/compare/v6.0.0...v6.0.1) (2017-05-01)


### Bug Fixes

* default '--' to undefined when not provided; this is closer to the array API ([#90](https://github.com/yargs/yargs-parser/issues/90)) ([4e739cc](https://github.com/yargs/yargs-parser/commit/4e739cc))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/yargs/yargs-parser/compare/v4.2.1...v6.0.0) (2017-05-01)


### Bug Fixes

* environment variables should take precedence over config file ([#81](https://github.com/yargs/yargs-parser/issues/81)) ([76cee1f](https://github.com/yargs/yargs-parser/commit/76cee1f))
* parsing hints should apply for dot notation keys ([#86](https://github.com/yargs/yargs-parser/issues/86)) ([3e47d62](https://github.com/yargs/yargs-parser/commit/3e47d62))


### Chores

* upgrade to newest version of camelcase ([#87](https://github.com/yargs/yargs-parser/issues/87)) ([f1903aa](https://github.com/yargs/yargs-parser/commit/f1903aa))


### Features

* add -- option which allows arguments after the -- flag to be returned separated from positional arguments ([#84](https://github.com/yargs/yargs-parser/issues/84)) ([2572ca8](https://github.com/yargs/yargs-parser/commit/2572ca8))
* when parsing stops, we now populate "--" by default ([#88](https://github.com/yargs/yargs-parser/issues/88)) ([cd666db](https://github.com/yargs/yargs-parser/commit/cd666db))


### BREAKING CHANGES

* rather than placing arguments in "_", when parsing is stopped via "--"; we now populate an array called "--" by default.
* camelcase now requires Node 4+.
* environment variables will now override config files (args, env, config-file, config-object)



<a name="5.0.0"></a>
# [5.0.0](https://github.com/yargs/yargs-parser/compare/v4.2.1...v5.0.0) (2017-02-18)


### Bug Fixes

* environment variables should take precedence over config file ([#81](https://github.com/yargs/yargs-parser/issues/81)) ([76cee1f](https://github.com/yargs/yargs-parser/commit/76cee1f))


### BREAKING CHANGES

* environment variables will now override config files (args, env, config-file, config-object)



<a name="4.2.1"></a>
## [4.2.1](https://github.com/yargs/yargs-parser/compare/v4.2.0...v4.2.1) (2017-01-02)


### Bug Fixes

* flatten/duplicate regression ([#75](https://github.com/yargs/yargs-parser/issues/75)) ([68d68a0](https://github.com/yargs/yargs-parser/commit/68d68a0))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/yargs/yargs-parser/compare/v4.1.0...v4.2.0) (2016-12-01)


### Bug Fixes

* inner objects in configs had their keys appended to top-level key when dot-notation was disabled ([#72](https://github.com/yargs/yargs-parser/issues/72)) ([0b1b5f9](https://github.com/yargs/yargs-parser/commit/0b1b5f9))


### Features

* allow multiple arrays to be provided, rather than always combining ([#71](https://github.com/yargs/yargs-parser/issues/71)) ([0f0fb2d](https://github.com/yargs/yargs-parser/commit/0f0fb2d))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/yargs/yargs-parser/compare/v4.0.2...v4.1.0) (2016-11-07)


### Features

* apply coercions to default options ([#65](https://github.com/yargs/yargs-parser/issues/65)) ([c79052b](https://github.com/yargs/yargs-parser/commit/c79052b))
* handle dot notation boolean options ([#63](https://github.com/yargs/yargs-parser/issues/63)) ([02c3545](https://github.com/yargs/yargs-parser/commit/02c3545))



<a name="4.0.2"></a>
## [4.0.2](https://github.com/yargs/yargs-parser/compare/v4.0.1...v4.0.2) (2016-09-30)


### Bug Fixes

* whoops, let's make the assign not change the Object key order ([29d069a](https://github.com/yargs/yargs-parser/commit/29d069a))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/yargs/yargs-parser/compare/v4.0.0...v4.0.1) (2016-09-30)


### Bug Fixes

* lodash.assign was deprecated ([#59](https://github.com/yargs/yargs-parser/issues/59)) ([5e7eb11](https://github.com/yargs/yargs-parser/commit/5e7eb11))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/yargs/yargs-parser/compare/v3.2.0...v4.0.0) (2016-09-26)


### Bug Fixes

* coerce should be applied to the final objects and arrays created ([#57](https://github.com/yargs/yargs-parser/issues/57)) ([4ca69da](https://github.com/yargs/yargs-parser/commit/4ca69da))


### BREAKING CHANGES

* coerce is no longer applied to individual arguments in an implicit array.



<a name="3.2.0"></a>
# [3.2.0](https://github.com/yargs/yargs-parser/compare/v3.1.0...v3.2.0) (2016-08-13)


### Features

* coerce full array instead of each element ([#51](https://github.com/yargs/yargs-parser/issues/51)) ([cc4dc56](https://github.com/yargs/yargs-parser/commit/cc4dc56))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/yargs/yargs-parser/compare/v3.0.0...v3.1.0) (2016-08-09)


### Bug Fixes

* address pkgConf parsing bug outlined in [#37](https://github.com/yargs/yargs-parser/issues/37) ([#45](https://github.com/yargs/yargs-parser/issues/45)) ([be76ee6](https://github.com/yargs/yargs-parser/commit/be76ee6))
* better parsing of negative values ([#44](https://github.com/yargs/yargs-parser/issues/44)) ([2e43692](https://github.com/yargs/yargs-parser/commit/2e43692))
* check aliases when guessing defaults for arguments fixes [#41](https://github.com/yargs/yargs-parser/issues/41) ([#43](https://github.com/yargs/yargs-parser/issues/43)) ([f3e4616](https://github.com/yargs/yargs-parser/commit/f3e4616))


### Features

* added coerce option, for providing specialized argument parsing ([#42](https://github.com/yargs/yargs-parser/issues/42)) ([7b49cd2](https://github.com/yargs/yargs-parser/commit/7b49cd2))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/yargs/yargs-parser/compare/v2.4.1...v3.0.0) (2016-08-07)


### Bug Fixes

* parsing issue with numeric character in group of options ([#19](https://github.com/yargs/yargs-parser/issues/19)) ([f743236](https://github.com/yargs/yargs-parser/commit/f743236))
* upgraded lodash.assign ([5d7fdf4](https://github.com/yargs/yargs-parser/commit/5d7fdf4))

### BREAKING CHANGES

* subtle change to how values are parsed in a group of single-character arguments.
* _first released in 3.1.0, better handling of negative values should be considered a breaking change._



<a name="2.4.1"></a>
## [2.4.1](https://github.com/yargs/yargs-parser/compare/v2.4.0...v2.4.1) (2016-07-16)


### Bug Fixes

* **count:** do not increment a default value ([#39](https://github.com/yargs/yargs-parser/issues/39)) ([b04a189](https://github.com/yargs/yargs-parser/commit/b04a189))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/yargs/yargs-parser/compare/v2.3.0...v2.4.0) (2016-04-11)


### Features

* **environment:** Support nested options in environment variables ([#26](https://github.com/yargs/yargs-parser/issues/26)) thanks [@elas7](https://github.com/elas7) \o/ ([020778b](https://github.com/yargs/yargs-parser/commit/020778b))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/yargs/yargs-parser/compare/v2.2.0...v2.3.0) (2016-04-09)


### Bug Fixes

* **boolean:** fix for boolean options with non boolean defaults (#20) ([2dbe86b](https://github.com/yargs/yargs-parser/commit/2dbe86b)), closes [(#20](https://github.com/(/issues/20)
* **package:** remove tests from tarball ([0353c0d](https://github.com/yargs/yargs-parser/commit/0353c0d))
* **parsing:** handle calling short option with an empty string as the next value. ([a867165](https://github.com/yargs/yargs-parser/commit/a867165))
* boolean flag when next value contains the strings 'true' or 'false'. ([69941a6](https://github.com/yargs/yargs-parser/commit/69941a6))
* update dependencies; add standard-version bin for next release (#24) ([822d9d5](https://github.com/yargs/yargs-parser/commit/822d9d5))

### Features

* **configuration:** Allow to pass configuration objects to yargs-parser ([0780900](https://github.com/yargs/yargs-parser/commit/0780900))
* **normalize:** allow normalize to work with arrays ([e0eaa1a](https://github.com/yargs/yargs-parser/commit/e0eaa1a))
