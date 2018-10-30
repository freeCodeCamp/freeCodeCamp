For recent changelog see CHANGELOG.md

-----

v0.10.15  --  2017.03.20
* Fix Object.isValue (it was actually isNotValue)

v0.10.14  --  2017.03.15
* Object.isValue util

v0.10.13  --  2017.03.13
* Introduce JSON.safeStringify
* Improve message handling in error/custom
* Fix Array#concat shim
* Improve Array#flatten algorithm so it's stack trace friendly
* Make Object.isObject ES3 compatible

v0.10.12  --  2016.07.01
* Ensure symbols are copied in Object.mixin
* Prevent RangeError errors in array#flatten
* Do not validate invalidate dates in validDate

v0.10.11  --  2015.12.18
* Ensure that check for implementation of RegExp flags doesn't crash in V8 (thanks @mathiasbynens)

v0.10.10  --  2015.12.11
* Add Object.isNumberValue util

v0.10.9  --  2015.12.01
* Add Object.ensureNaturalNumber and Object.ensureNaturalNumberValue

v0.10.8  --  2015.10.02
* Add Number.isNatural
* Add Object.find and Object.findKey
* Support arrays in Object.copyDeep
* Fix iteration issue in forEachRight and someRight
* Fix detection of native sinh
* Depend on es6-symbol v3

v0.10.7  --  2015.04.22
* New utlitities. They're convention differs from v0.10, as they were supposed to land in v1.
  Still they're non breaking and start the conventions to be used in v1
  * Object.validateArrayLike
  * Object.validateArrayLikeObject
  * Object.validateStringifiable
  * Object.validateStringifiableValue
  * Universal utilities for array-like/iterable objects
    * Iterable.is
    * Iterable.validate
    * Iterable.validateObject
    * Iterable.forEach
* Fix camelToHyphen resolution, it must be absolutely reversable by hyphenToCamel
* Fix calculations of large numbers in Math.tanh
* Fix algorithm of Math.sinh
* Fix indexes to not use real symbols
* Fix length of String.fromCodePoint
* Fix tests of Array#copyWithin
* Update Travis CI configuration

v0.10.6  --  2015.02.02
* Fix handling of infinite values in Math.trunc
* Fix handling of getters in Object.normalizeOptions

v0.10.5  --  2015.01.20
* Add Function#toStringTokens
* Add Object.serialize and Object.unserialize
* Add String.randomUniq
* Fix Strin#camelToHyphen issue with tokens that end with digit
* Optimise Number.isInteger logic
* Improve documentation
* Configure lint scripts
* Fix spelling of LICENSE

v0.10.4  --  2014.04.30
* Assure maximum spec compliance of Array.of and Array.from (thanks @mathiasbynens)
* Improve documentations

v0.10.3  --  2014.04.29
Provide accurate iterators handling:
* Array.from improvements:
  * Assure right unicode symbols resolution when processing strings in Array.from
  * Rely on ES6 symbol shim and use native @@iterator Symbol if provided by environment
* Add methods:
  * Array.prototype.entries
  * Array.prototype.keys
  * Array.prototype.values
  * Array.prototype[@@iterator]
  * String.prototype[@@iterator]

Improve documentation

v0.10.2  --  2014.04.24
- Simplify and deprecate `isCallable`. It seems in ES5 based engines there are
  no callable objects which are `typeof obj !== 'function'`
- Update Array.from map callback signature (up to latest resolution of TC39)
- Improve documentation

v0.10.1  --  2014.04.14
Bump version for npm
(Workaround for accidental premature publish & unpublish of v0.10.0 a while ago)

v0.10.0  --  2014.04.13
Major update:
- All methods and function specified for ECMAScript 6 are now introduced as
  shims accompanied with functions through which (optionally) they can be
  implementend on native objects
- Filename convention was changed to shorter and strictly lower case names. e.g.
  `lib/String/prototype/starts-with` became `string/#/starts-with`
- Generated functions are guaranteed to have expected length
- Objects with null prototype (created via `Object.create(null)`) are widely
  supported (older version have crashed due to implied `obj.hasOwnProperty` and
  related invocations)
- Support array subclasses
- When handling lists do not limit its length to Uint32 range
- Use newly introduced `Object.eq` for strict equality in place of `Object.is`
- Iteration of Object have been improved so properties that were hidden or
  removed after iteration started are not iterated.

Additions:
- `Array.isPlainArray`
- `Array.validArray`
- `Array.prototype.concat` (as updated with ES6)
- `Array.prototype.copyWithin` (as introduced with ES6)
- `Array.prototype.fill` (as introduced with ES6)
- `Array.prototype.filter` (as updated with ES6)
- `Array.prototype.findIndex` (as introduced with ES6)
- `Array.prototype.map` (as updated with ES6)
- `Array.prototype.separate`
- `Array.prototype.slice` (as updated with ES6)
- `Array.prototype.splice` (as updated with ES6)
- `Function.prototype.copy`
- `Math.acosh` (as introduced with ES6)
- `Math.atanh` (as introduced with ES6)
- `Math.cbrt` (as introduced with ES6)
- `Math.clz32` (as introduced with ES6)
- `Math.cosh` (as introduced with ES6)
- `Math.expm1` (as introduced with ES6)
- `Math.fround` (as introduced with ES6)
- `Math.hypot` (as introduced with ES6)
- `Math.imul` (as introduced with ES6)
- `Math.log2` (as introduced with ES6)
- `Math.log10` (as introduced with ES6)
- `Math.log1p` (as introduced with ES6)
- `Math.sinh` (as introduced with ES6)
- `Math.tanh` (as introduced with ES6)
- `Math.trunc` (as introduced with ES6)
- `Number.EPSILON` (as introduced with ES6)
- `Number.MIN_SAFE_INTEGER` (as introduced with ES6)
- `Number.MAX_SAFE_INTEGER` (as introduced with ES6)
- `Number.isFinite` (as introduced with ES6)
- `Number.isInteger` (as introduced with ES6)
- `Number.isSafeInteger` (as introduced with ES6)
- `Object.create` (with fix for V8 issue which disallows prototype turn of
  objects derived from null
- `Object.eq` - Less restrictive version of `Object.is` based on SameValueZero
  algorithm
- `Object.firstKey`
- `Object.keys` (as updated with ES6)
- `Object.mixinPrototypes`
- `Object.primitiveSet`
- `Object.setPrototypeOf` (as introduced with ES6)
- `Object.validObject`
- `RegExp.escape`
- `RegExp.prototype.match` (as introduced with ES6)
- `RegExp.prototype.replace` (as introduced with ES6)
- `RegExp.prototype.search` (as introduced with ES6)
- `RegExp.prototype.split` (as introduced with ES6)
- `RegExp.prototype.sticky` (as introduced with ES6)
- `RegExp.prototype.unicode` (as introduced with ES6)
- `String.fromCodePoint` (as introduced with ES6)
- `String.raw` (as introduced with ES6)
- `String.prototype.at`
- `String.prototype.codePointAt` (as introduced with ES6)
- `String.prototype.normalize` (as introduced with ES6)
- `String.prototype.plainReplaceAll`

Removals:
- `reserved` set
- `Array.prototype.commonLeft`
- `Function.insert`
- `Function.remove`
- `Function.prototype.silent`
- `Function.prototype.wrap`
- `Object.descriptor` Move to external `d` project.
  See: https://github.com/medikoo/d
- `Object.diff`
- `Object.extendDeep`
- `Object.reduce`
- `Object.values`
- `String.prototype.trimCommonLeft`

Renames:
- `Function.i` into `Function.identity`
- `Function.k` into `Function.constant`
- `Number.toInt` into `Number.toInteger`
- `Number.toUint` into `Number.toPosInteger`
- `Object.extend` into `Object.assign` (as introduced in ES 6)
- `Object.extendProperties` into `Object.mixin`, with improved internal
  handling, so it matches temporarily specified `Object.mixin` for ECMAScript 6
- `Object.isList` into `Object.isArrayLike`
- `Object.mapToArray` into `Object.toArray` (with fixed function length)
- `Object.toPlainObject` into `Object.normalizeOptions` (as this is the real
  use case where we use this function)
- `Function.prototype.chain` into `Function.prototype.compose`
- `Function.prototype.match` into `Function.prototype.spread`
- `String.prototype.format` into `String.formatMethod`

Improvements & Fixes:
- Remove workaround for primitive values handling in object iterators
- `Array.from`: Update so it follows ES 6 spec
- `Array.prototype.compact`: filters just null and undefined values
  (not all falsies)
- `Array.prototype.eIndexOf` and `Array.prototype.eLastIndexOf`: fix position
  handling, improve internals
- `Array.prototype.find`: return undefined not null, in case of not found
  (follow ES 6)
- `Array.prototype.remove` fix function length
- `Error.custom`: simplify, Custom class case is addressed by outer
  `error-create` project -> https://github.com/medikoo/error-create
- `Error.isError` true only for Error instances (remove detection of host
  Exception objects)
- `Number.prototype.pad`: Normalize negative pad
- `Object.clear`: Handle errors same way as in `Object.assign`
- `Object.compact`: filters just null and undefined values (not all falsies)
- `Object.compare`: Take into account NaN values
- `Object.copy`: Split into `Object.copy` and `Object.copyDeep`
- `Object.isCopy`: Separate into `Object.isCopy` and `Object.isCopyDeep`, where
  `isCopyDeep` handles nested plain objects and plain arrays only
- `String.prototype.endsWith`: Adjust up to ES6 specification
- `String.prototype.repeat`: Adjust up to ES6 specification and improve algorithm
- `String.prototype.simpleReplace`: Rename into `String.prototype.plainReplace`
- `String.prototype.startsWith`: Adjust up to ES6 specification
- Update lint rules, and adjust code to that
- Update Travis CI configuration
- Remove Makefile (it's cross-env utility)

v0.9.2  --  2013.03.11
Added:
* Array.prototype.isCopy
* Array.prototype.isUniq
* Error.CustomError
* Function.validFunction
* Object.extendDeep
* Object.descriptor.binder
* Object.safeTraverse
* RegExp.validRegExp
* String.prototype.capitalize
* String.prototype.simpleReplace

Fixed:
* Fix Array.prototype.diff for sparse arrays
* Accept primitive objects as input values in Object iteration methods and
  Object.clear, Object.count, Object.diff, Object.extend,
  Object.getPropertyNames, Object.values
* Pass expected arguments to callbacks of Object.filter, Object.mapKeys,
  Object.mapToArray, Object.map
* Improve callable callback support in Object.mapToArray

v0.9.1  --  2012.09.17
* Object.reduce - reduce for hash-like collections
* Accapt any callable object as callback in Object.filter, mapKeys and map
* Convention cleanup

v0.9.0  --  2012.09.13
We're getting to real solid API

Removed:
* Function#memoize - it's grown up to be external package, to be soon published
  as 'memoizee'
* String.guid - it doesn't fit es5-ext (extensions) concept, will be provided as
  external package
# Function.arguments - obsolete
# Function.context - obsolete
# Function#flip - not readable when used, so it was never used
# Object.clone - obsolete and confusing

Added:
* String#camelToHyphen - String format convertion

Renamed:
* String#dashToCamelCase -> String#hyphenToCamel

Fixes:
* Object.isObject - Quote names in literals that match reserved keywords
  (older implementations crashed on that)
* String#repeat - Do not accept negative values (coerce them to 1)

Improvements:
* Array#remove - Accepts many arguments, we can now remove many values at once
* Object iterators (forEach, map, some) - Compare function invoked with scope
  object bound to this
* Function#curry - Algorithm cleanup
* Object.isCopy - Support for all types, not just plain objects
* Object.isPlainObject - Support for cross-frame objects
* Do not memoize any of the functions, it shouldn't be decided internally
* Remove Object.freeze calls in reserved, it's not up to convention
* Improved documentation
* Better linting (hard-core approach using both JSLint mod and JSHint)
* Optional arguments are now documented in funtions signature

v0.8.2  --  2012.06.22
Fix errors in Array's intersection and exclusion methods, related to improper
usage of contains method

v0.8.1  --  2012.06.13
Reorganized internal logic of Function.prototype.memoize. So it's more safe now
and clears cache properly. Additionally preventCache option was provided.

v0.8.0  --  2012.05.28
Again, major overhaul. Probably last experimental stuff was trashed, all API
looks more like standard extensions now.

Changes:
* Turn all Object.prototype extensions into functions and move them to Object
namespace. We learned that extending Object.prototype is bad idea in any case.
* Rename Function.prototype.curry into Function.prototype.partial. This function
  is really doing partial application while currying is slightly different
  concept.
* Convert Function.prototype.ncurry to new implementation of
  Function.prototype.curry, it now serves real curry concept additionaly it
  covers use cases for aritize and hold, which were removed.
* Rename Array's peek to last, and provide support for sparse arrays in it
* Rename Date's monthDaysCount into daysInMonth
* Simplify object iterators, now order of iteration can be configured with just
  compareFn argument (no extra byKeys option)
* Rename Object.isDuplicate to Object.isCopy
* Rename Object.isEqual to Object.is which is compatible with future 'is'
  keyword
* Function.memoize is now Function.prototype.memoize. Additionally clear cache
  functionality is added, and access to original arguments object.
* Rename validation functions: assertNotNull to validValue, assertCallable to
  validCallable. validValue was moved to Object namespace. On success they now
  return validated value instead of true, it supports better composition.
  Additionally created Date.validDate and Error.validError
* All documentation is now held in README.md not in code files.
* Move guid to String namespace. All guids now start with numbers.
* Array.generate: fill argument is now optional
* Object.toArray is now Array.from (as new ES6 specification draft suggests)
* All methods that rely on indexOf or lastIndexOf, now rely on egal (Object.is)
  versions of them (eIndexOf, eLastIndexOf)
* Turn all get* functions that returned methods into actuall methods (get*
  functionality can still be achieved with help of Function.prototype.partial).
  So: Date.getFormat is now Date.prototype.format,
  Number.getPad is now Number.prototype.pad,
  String.getFormat is now String.prototype.format,
  String.getIndent is now String.prototype.indent,
  String.getPad is now String.prototype.pad
* Refactored Object.descriptor, it is now just two functions, main one and
  main.gs, main is for describing values, and gs for describing getters and
  setters. Configuration is passed with first argument as string e.g. 'ce' for
  configurable and enumerable. If no configuration string is provided then by
  default it returns configurable and writable but not enumerable for value or
  configurable but not enumerable for getter/setter
* Function.prototype.silent now returns prepared function (it was
  expected to be fixed for 0.7)
* Reserved keywords map (reserved) is now array not hash.
* Object.merge is now Object.extend (while former Object.extend was completely
  removed) - 'extend' implies that we change object, not creating new one (as
  'merge' may imply). Similarily Object.mergeProperties was renamed to
  Object.extendProperties
* Position argument support in Array.prototype.contains and
  String.prototype.contains (so it follows ES6 specification draft)
* endPosition argument support in String.prototype.endsWith and fromPosition
  argument support in String.prototype.startsWith (so it follows ES6
  specification draft)
* Better and cleaner String.prototype.indent implementation. No default value
  for indent string argument, optional nest value (defaults to 1), remove
  nostart argument
* Correct length values for most methods (so they reflect length of similar
  methods in standard)
* Length argument is now optional in number and string pad methods.
* Improve arguments validation in general, so it adheres to standard conventions
* Fixed format of package.json

Removed methods and functions:
* Object.prototype.slice - Object is not ordered collection, so slice doesn't
  make sense.
* Function's rcurry, rncurry, s - too cumbersome for JS, not many use cases for
  that
* Function.prototype.aritize and Function.prototype.hold - same functionality
  can be achieved with new Function.prototype.curry
* Function.prototype.log - provided more generic Function.prototype.wrap for
  same use case
* getNextIdGenerator - no use case for that (String.guid should be used if
  needed)
* Object.toObject - Can be now acheived with Object(validValue(x))
* Array.prototype.someValue - no real use case (personally used once and
  case was already controversial)
* Date.prototype.duration - moved to external package
* Number.getAutoincrement - No real use case
* Object.prototype.extend, Object.prototype.override,
  Object.prototype.plainCreate, Object.prototype.plainExtend - It was probably
  too complex, same should be achieved just with Object.create,
  Object.descriptor and by saving references to super methods in local scope.
* Object.getCompareBy - Functions should be created individually for each use
  case
* Object.get, Object.getSet, Object.set, Object.unset - Not many use cases and
  same can be easily achieved with simple inline function
* String.getPrefixWith - Not real use case for something that can be easily
  achieved with '+' operator
* Object.isPrimitive - It's just negation of Object.isObject
* Number.prototype.isLess, Number.prototype.isLessOrEqual - they shouldn't be in
  Number namespace and should rather be addressed with simple inline functions.
* Number.prototype.subtract - Should rather be addressed with simple inline
  function

New methods and functions:
* Array.prototype.lastIndex - Returns last declared index in array
* String.prototype.last - last for strings
* Function.prototype.wrap - Wrap function with other, it allows to specify
  before and after behavior transform return value or prevent original function
  from being called.
* Math.sign - Returns sign of a number (already in ES6 specification draft)
* Number.toInt - Converts value to integer (already in ES6 specification draft)
* Number.isNaN - Returns true if value is NaN (already in ES6 specification
  draft)
* Number.toUint - Converts value to unsigned integer
* Number.toUint32 - Converts value to 32bit unsigned integer
* Array.prototype.eIndexOf, eLastIndexOf - Egal version (that uses Object.is) of
  standard methods (all methods that were using native indexOf or lastIndexOf
  now uses eIndexOf and elastIndexOf respectively)
* Array.of - as it's specified for ES6

Fixes:
* Fixed binarySearch so it always returns valid list index
* Object.isList - it failed on lists that are callable (e.g. NodeList in Nitro
  engine)
* Object.map now supports third argument for callback

v0.7.1  --  2012.01.05
New methods:
* Array.prototype.firstIndex - returns first valid index of array (for
	sparse arrays it may not be '0'

Improvements:
* Array.prototype.first - now returns value for index returned by firstIndex
* Object.prototype.mapToArray - can be called without callback, then array of
	key-value pairs is returned

Fixes
* Array.prototype.forEachRight, object's length read through UInt32 conversion

v0.7.0  --  2011.12.27
Major update.
Stepped back from experimental ideas and introduced more standard approach
taking example from how ES5 methods and functions are designed. One exceptions
is that, we don’t refrain from declaring methods for Object.prototype - it’s up
to developer whether how he decides to use it in his context (as function or as
method).

In general:
* Removed any method 'functionalization' and functionalize method itself.
	es5-ext declares plain methods, which can be configured to work as functions
	with call.bind(method) - see documentation.
* Removed separation of Object methods for ES5 (with descriptors) and
	ES3 (plain) - we're following ES5 idea on that, some methods are intended just
	for enumerable properties and some are for all properties, all are declared
	for Object.prototype
* Removed separation of Array generic (collected in List folder) and not generic
	methods (collected in Array folder). Now all methods are generic and are in
	Array/prototype folder. This separation also meant, that methods in Array are
	usually destructive. We don’t do that separation now, there’s generally no use
	case for destructive iterators, we should be fine with one version of each
	method, (same as ES5 is fine with  e.g. one, non destructive 'filter' method)
* Folder structure resembles tree of native ES5 Objects
* All methods are written with ES5 conventions in mind, it means that most
	methods are generic and can be run on any object. In more detail:
	** Array.prototype and Object.prototype methods can be run on any object (any
		not null or undefined value),
	** Date.prototype methods should be called only on Date instances.
	** Function.prototype methods can be called on any callable objects (not
		necessarily functions)
	** Number.prototype & String.prototype methods can be called on any value, in
		case of Number it it’ll be degraded to number, in case of string it’ll be
		degraded to string.
* Travis CI support (only for Node v0.6 branch, as v0.4 has buggy V8 version)

Improvements for existing functions and methods:
* Function.memoize (was Function.cache) is now fully generic, can operate on any
	type of arguments and it’s NaN safe (all NaN objects are considered equal)
* Method properties passed to Object.prototype.extend or
	Object.prototype.override can aside of _super optionally take prototype object
	via _proto argument
* Object iterators: forEach, mapToArray and every can now iterate in specified
	order
* pluck, invoke and other functions that return reusable functions or methods
	have now their results memoized.

New methods:
* Global: assertNotNull, getNextIdGenerator, guid, isEqual, isPrimitive,
	toObject
* Array: generate
* Array.prototype: binarySearch, clear, contains, diff, exclusion, find, first,
	forEachRight, group, indexesOf, intersection, remove, someRight, someValue
* Boolean: isBoolean
* Date: isDate
* Function: arguments, context, insert, isArguments, remove
* Function.prototype: not, silent
* Number: getAutoincrement, isNumber
* Number.prototype: isLessOrEqual, isLess, subtract
* Object: assertCallable, descriptor (functions for clean descriptors),
	getCompareBy, isCallable, isObject
* Object.prototype: clone (real clone), compact, count, diff, empty,
	getPropertyNames, get, keyOf, mapKeys, override, plainCreate, plainExtend,
	slice, some, unset
* RegExp: isRegExp
* String: getPrefixWith, isString
* String.prototype: caseInsensitiveCompare, contains, isNumeric

Renamed methods:
* Date.clone -> Date.prototype.copy
* Date.format -> Date.getFormat
* Date/day/floor -> Date.prototype.floorDay
* Date/month/floor -> Date.prototype.floorMonth
* Date/month/year -> Date.prototype.floorYear
* Function.cache -> Function.memoize
* Function.getApplyArg -> Function.prototype.match
* Function.sequence -> Function.prototype.chain
* List.findSameStartLength -> Array.prototype.commonLeft
* Number.pad -> Number.getPad
* Object/plain/clone -> Object.prototype.copy
* Object/plain/elevate -> Object.prototype.flatten
* Object/plain/same -> Object.prototype.isDuplicate
* Object/plain/setValue -> Object.getSet
* String.format -> String.getFormat
* String.indent -> String.getIndent
* String.pad -> String.getPad
* String.trimLeftStr -> String.prototype.trimCommonLeft
* Object.merge -> Object.prototype.mergeProperties
* Object/plain/pluck -> Object.prototype.get
* Array.clone is now Array.prototype.copy and can be used also on any array-like
	objects
* List.isList -> Object.isList
* List.toArray -> Object.prototype.toArray
* String/convert/dashToCamelCase -> String.prototype.dashToCamelCase

Removed methods:
* Array.compact - removed destructive version (that operated on same array), we
	have now non destructive version as Array.prototype.compact.
* Function.applyBind -> use apply.bind directly
* Function.bindBind -> use bind.bind directly
* Function.callBind -> use call.bind directly
* Fuction.clone -> no valid use case
* Function.dscope -> controversial approach, shouldn’t be considered seriously
* Function.functionalize -> It was experimental but standards are standards
* List/sort/length -> It can be easy obtained by Object.getCompareBy(‘length’)
* List.concat -> Concat’s for array-like’s makes no sense, just convert to array
	first
* List.every -> Use Array.prototype.every directly
* List.filter -> Use Array.prototype.filter directly
* List.forEach -> User Array.prototype.forEach directly
* List.isListObject -> No valid use case, do: isList(list) && (typeof list ===
	'object’)
* List.map -> Use Array.prototype.map directly
* List.reduce -> Use Array.prototype.reduce directly
* List.shiftSame -> Use Array.prototype.commonLeft and do slice
* List.slice -> Use Array.prototype.slice directly
* List.some -> Use Array.prototype.some directly
* Object.bindMethods -> it was version that considered descriptors, we have now
	Object.prototype.bindMethods which operates only on enumerable properties
* Object.every -> version that considered all properties, we have now
	Object.prototype.every which iterates only enumerables
* Object.invoke -> no use case
* Object.mergeDeep -> no use case
* Object.pluck -> no use case
* Object.same -> it considered descriptors, now there’s only Object.isDuplicate
	which compares only enumerable properties
* Object.sameType -> no use case
* Object.toDescriptor and Object.toDescriptors -> replaced by much nicer
	Object.descriptor functions
* Object/plain/link -> no use case (it was used internally only by
	Object/plain/merge)
* Object/plain/setTrue -> now easily configurable by more universal
	Object.getSet(true)
* String.trimRightStr -> Eventually String.prototype.trimCommonRight will be
	added

v0.6.3  --  2011.12.12
* Cleared npm warning for misnamed property in package.json

v0.6.2  --  2011.08.12
* Calling String.indent without scope (global scope then) now treated as calling
  it with null scope, it allows more direct invocations when using default nest
  string: indent().call(str, nest)

v0.6.1  --  2011.08.08
* Added TAD test suite to devDependencies, configured test commands.
  Tests can be run with 'make test' or 'npm test'

v0.6.0  --  2011.08.07
New methods:
* Array: clone, compact (in place)
* Date: format, duration, clone, monthDaysCount, day.floor, month.floor,
  year.floor
* Function: getApplyArg, , ncurry, rncurry, hold, cache, log
* List: findSameStartLength, shiftSame, peek, isListObject
* Number: pad
* Object: sameType, toString, mapToArray, mergeDeep, toDescriptor,
  toDescriptors, invoke
* String: startsWith, endsWith, indent, trimLeftStr, trimRightStr, pad, format

Fixed:
* Object.extend does now prototypal extend as exptected
* Object.merge now tries to overwrite only configurable properties
* Function.flip

Improved:
* Faster List.toArray
* Better global retrieval
* Functionalized all Function methods
* Renamed bindApply and bindCall to applyBind and callBind
* Removed Function.inherit (as it's unintuitive curry clone)
* Straightforward logic in Function.k
* Fixed naming of some tests files (letter case issue)
* Renamed Function.saturate into Function.lock
* String.dashToCamelCase digits support
* Strings now considered as List objects
* Improved List.compact
* Concise logic for List.concat
* Test wit TAD in clean ES5 context

v0.5.1  --  2011.07.11
* Function's bindBind, bindCall and bindApply now more versatile

v0.5.0  --  2011.07.07
* Removed Object.is and List.apply
* Renamed Object.plain.is to Object.plain.isPlainObject (keep naming convention
  consistent)
* Improved documentation

v0.4.0  --  2011.07.05
* Take most functions on Object to Object.plain to keep them away from object
  descriptors
* Object functions with ES5 standard in mind (object descriptors)

v0.3.0  --  2011.06.24
* New functions
* Consistent file naming (dash instead of camelCase)

v0.2.1  --  2011.05.28
* Renamed Functions.K and Function.S to to lowercase versions (use consistent
  naming)

v0.2.0  --  2011.05.28
* Renamed Array folder to List (as its generic functions for array-like objects)
* Added Makefile
* Added various functions

v0.1.0  --  2011.05.24
* Initial version
