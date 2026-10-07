[![Build status][build-image]][build-url]
[![Tests coverage][cov-image]][cov-url]
[![npm version][npm-image]][npm-url]

# es5-ext

## ECMAScript 5 extensions

### (with respect to ECMAScript 6 standard)

Shims for upcoming ES6 standard and other goodies implemented strictly with ECMAScript conventions in mind.

It's designed to be used in compliant ECMAScript 5 or ECMAScript 6 environments. Older environments are not supported, although most of the features should work with correct ECMAScript 5 shim on board.

When used in ECMAScript 6 environment, native implementation (if valid) takes precedence over shims.

### Installation

```bash
npm install es5-ext
```

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

### Usage

#### ECMAScript 6 features

You can force ES6 features to be implemented in your environment, e.g. following will assign `from` function to `Array` (only if it's not implemented already).

```javascript
require("es5-ext/array/from/implement");
Array.from("foo"); // ['f', 'o', 'o']
```

You can also access shims directly, without fixing native objects. Following will return native `Array.from` if it's available and fallback to shim if it's not.

```javascript
var aFrom = require("es5-ext/array/from");
aFrom("foo"); // ['f', 'o', 'o']
```

If you want to use shim unconditionally (even if native implementation exists) do:

```javascript
var aFrom = require("es5-ext/array/from/shim");
aFrom("foo"); // ['f', 'o', 'o']
```

##### List of ES6 shims

It's about properties introduced with ES6 and those that have been updated in new spec.

- `Array.from` -> `require('es5-ext/array/from')`
- `Array.of` -> `require('es5-ext/array/of')`
- `Array.prototype.concat` -> `require('es5-ext/array/#/concat')`
- `Array.prototype.copyWithin` -> `require('es5-ext/array/#/copy-within')`
- `Array.prototype.entries` -> `require('es5-ext/array/#/entries')`
- `Array.prototype.fill` -> `require('es5-ext/array/#/fill')`
- `Array.prototype.filter` -> `require('es5-ext/array/#/filter')`
- `Array.prototype.find` -> `require('es5-ext/array/#/find')`
- `Array.prototype.findIndex` -> `require('es5-ext/array/#/find-index')`
- `Array.prototype.keys` -> `require('es5-ext/array/#/keys')`
- `Array.prototype.map` -> `require('es5-ext/array/#/map')`
- `Array.prototype.slice` -> `require('es5-ext/array/#/slice')`
- `Array.prototype.splice` -> `require('es5-ext/array/#/splice')`
- `Array.prototype.values` -> `require('es5-ext/array/#/values')`
- `Array.prototype[@@iterator]` -> `require('es5-ext/array/#/@@iterator')`
- `Math.acosh` -> `require('es5-ext/math/acosh')`
- `Math.asinh` -> `require('es5-ext/math/asinh')`
- `Math.atanh` -> `require('es5-ext/math/atanh')`
- `Math.cbrt` -> `require('es5-ext/math/cbrt')`
- `Math.clz32` -> `require('es5-ext/math/clz32')`
- `Math.cosh` -> `require('es5-ext/math/cosh')`
- `Math.exmp1` -> `require('es5-ext/math/expm1')`
- `Math.fround` -> `require('es5-ext/math/fround')`
- `Math.hypot` -> `require('es5-ext/math/hypot')`
- `Math.imul` -> `require('es5-ext/math/imul')`
- `Math.log1p` -> `require('es5-ext/math/log1p')`
- `Math.log2` -> `require('es5-ext/math/log2')`
- `Math.log10` -> `require('es5-ext/math/log10')`
- `Math.sign` -> `require('es5-ext/math/sign')`
- `Math.signh` -> `require('es5-ext/math/signh')`
- `Math.tanh` -> `require('es5-ext/math/tanh')`
- `Math.trunc` -> `require('es5-ext/math/trunc')`
- `Number.EPSILON` -> `require('es5-ext/number/epsilon')`
- `Number.MAX_SAFE_INTEGER` -> `require('es5-ext/number/max-safe-integer')`
- `Number.MIN_SAFE_INTEGER` -> `require('es5-ext/number/min-safe-integer')`
- `Number.isFinite` -> `require('es5-ext/number/is-finite')`
- `Number.isInteger` -> `require('es5-ext/number/is-integer')`
- `Number.isNaN` -> `require('es5-ext/number/is-nan')`
- `Number.isSafeInteger` -> `require('es5-ext/number/is-safe-integer')`
- `Object.assign` -> `require('es5-ext/object/assign')`
- `Object.keys` -> `require('es5-ext/object/keys')`
- `Object.setPrototypeOf` -> `require('es5-ext/object/set-prototype-of')`
- `Promise.prototype.finally` -> `require('es5-ext/promise/#/finally')`
- `RegExp.prototype.match` -> `require('es5-ext/reg-exp/#/match')`
- `RegExp.prototype.replace` -> `require('es5-ext/reg-exp/#/replace')`
- `RegExp.prototype.search` -> `require('es5-ext/reg-exp/#/search')`
- `RegExp.prototype.split` -> `require('es5-ext/reg-exp/#/split')`
- `RegExp.prototype.sticky` -> Implement with `require('es5-ext/reg-exp/#/sticky/implement')`, use as function with `require('es5-ext/reg-exp/#/is-sticky')`
- `RegExp.prototype.unicode` -> Implement with `require('es5-ext/reg-exp/#/unicode/implement')`, use as function with `require('es5-ext/reg-exp/#/is-unicode')`
- `String.fromCodePoint` -> `require('es5-ext/string/from-code-point')`
- `String.raw` -> `require('es5-ext/string/raw')`
- `String.prototype.codePointAt` -> `require('es5-ext/string/#/code-point-at')`
- `String.prototype.contains` -> `require('es5-ext/string/#/contains')`
- `String.prototype.endsWith` -> `require('es5-ext/string/#/ends-with')`
- `String.prototype.normalize` -> `require('es5-ext/string/#/normalize')`
- `String.prototype.repeat` -> `require('es5-ext/string/#/repeat')`
- `String.prototype.startsWith` -> `require('es5-ext/string/#/starts-with')`
- `String.prototype[@@iterator]` -> `require('es5-ext/string/#/@@iterator')`

#### Non ECMAScript standard features

**es5-ext** provides also other utils, and implements them as if they were proposed for a standard. It mostly offers methods (not functions) which can directly be assigned to native prototypes:

```javascript
Object.defineProperty(Function.prototype, "partial", {
  value: require("es5-ext/function/#/partial"),
  configurable: true,
  enumerable: false,
  writable: true
});
Object.defineProperty(Array.prototype, "flatten", {
  value: require("es5-ext/array/#/flatten"),
  configurable: true,
  enumerable: false,
  writable: true
});
Object.defineProperty(String.prototype, "capitalize", {
  value: require("es5-ext/string/#/capitalize"),
  configurable: true,
  enumerable: false,
  writable: true
});
```

See [es5-extend](https://github.com/wookieb/es5-extend#es5-extend), a great utility that automatically will extend natives for you.

**Important:** Remember to **not** extend natives in scope of generic reusable packages (e.g. ones you intend to publish to npm). Extending natives is fine **only** if you're the _owner_ of the global scope, so e.g. in final project you lead development of.

When you're in situation when native extensions are not good idea, then you should use methods indirectly:

```javascript
var flatten = require("es5-ext/array/#/flatten");

flatten.call([1, [2, [3, 4]]]); // [1, 2, 3, 4]
```

for better convenience you can turn methods into functions:

```javascript
var call = Function.prototype.call;
var flatten = call.bind(require("es5-ext/array/#/flatten"));

flatten([1, [2, [3, 4]]]); // [1, 2, 3, 4]
```

You can configure custom toolkit (like [underscorejs](http://underscorejs.org/)), and use it throughout your application

```javascript
var util = {};
util.partial = call.bind(require("es5-ext/function/#/partial"));
util.flatten = call.bind(require("es5-ext/array/#/flatten"));
util.startsWith = call.bind(require("es5-ext/string/#/starts-with"));

util.flatten([1, [2, [3, 4]]]); // [1, 2, 3, 4]
```

As with native ones most methods are generic and can be run on any type of object.

## API

### Global extensions

#### global _(es5-ext/global)_

Object that represents global scope

### Array Constructor extensions

#### from(arrayLike[, mapFn[, thisArg]]) _(es5-ext/array/from)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from).
Returns array representation of _iterable_ or _arrayLike_. If _arrayLike_ is an instance of array, its copy is returned.

#### generate([length[, …fill]]) _(es5-ext/array/generate)_

Generate an array of pre-given _length_ built of repeated arguments.

#### isPlainArray(x) _(es5-ext/array/is-plain-array)_

Returns true if object is plain array (not instance of one of the Array's extensions).

#### of([…items]) _(es5-ext/array/of)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.of).
Create an array from given arguments.

#### toArray(obj) _(es5-ext/array/to-array)_

Returns array representation of `obj`. If `obj` is already an array, `obj` is returned back.

#### validArray(obj) _(es5-ext/array/valid-array)_

Returns `obj` if it's an array, otherwise throws `TypeError`

### Array Prototype extensions

#### arr.binarySearch(compareFn) _(es5-ext/array/#/binary-search)_

In **sorted** list search for index of item for which _compareFn_ returns value closest to _0_.
It's variant of binary search algorithm

#### arr.clear() _(es5-ext/array/#/clear)_

Clears the array

#### arr.compact() _(es5-ext/array/#/compact)_

Returns a copy of the context with all non-values (`null` or `undefined`) removed.

#### arr.concat() _(es5-ext/array/#/concat)_

[_Updated with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.concat).
ES6's version of `concat`. Supports `isConcatSpreadable` symbol, and returns array of same type as the context.

#### arr.contains(searchElement[, position]) _(es5-ext/array/#/contains)_

Whether list contains the given value.

#### arr.copyWithin(target, start[, end]) _(es5-ext/array/#/copy-within)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.copywithin).

#### arr.diff(other) _(es5-ext/array/#/diff)_

Returns the array of elements that are present in context list but not present in other list.

#### arr.eIndexOf(searchElement[, fromIndex]) _(es5-ext/array/#/e-index-of)_

_egal_ version of `indexOf` method. [_SameValueZero_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero) logic is used for comparision

#### arr.eLastIndexOf(searchElement[, fromIndex]) _(es5-ext/array/#/e-last-index-of)_

_egal_ version of `lastIndexOf` method. [_SameValueZero_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero) logic is used for comparision

#### arr.entries() _(es5-ext/array/#/entries)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.entries).
Returns iterator object, which traverses the array. Each value is represented with an array, where first value is an index and second is corresponding to index value.

#### arr.exclusion([…lists]]) _(es5-ext/array/#/exclusion)_

Returns the array of elements that are found only in one of the lists (either context list or list provided in arguments).

#### arr.fill(value[, start, end]) _(es5-ext/array/#/fill)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.fill).

#### arr.filter(callback[, thisArg]) _(es5-ext/array/#/filter)_

[_Updated with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.filter).
ES6's version of `filter`, returns array of same type as the context.

#### arr.find(predicate[, thisArg]) _(es5-ext/array/#/find)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.find).
Return first element for which given function returns true

#### arr.findIndex(predicate[, thisArg]) _(es5-ext/array/#/find-index)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.findindex).
Return first index for which given function returns true

#### arr.first() _(es5-ext/array/#/first)_

Returns value for first defined index

#### arr.firstIndex() _(es5-ext/array/#/first-index)_

Returns first declared index of the array

#### arr.flatten() _(es5-ext/array/#/flatten)_

Returns flattened version of the array

#### arr.forEachRight(cb[, thisArg]) _(es5-ext/array/#/for-each-right)_

`forEach` starting from last element

#### arr.group(cb[, thisArg]) _(es5-ext/array/#/group)_

Group list elements by value returned by _cb_ function

#### arr.indexesOf(searchElement[, fromIndex]) _(es5-ext/array/#/indexes-of)_

Returns array of all indexes of given value

#### arr.intersection([…lists]) _(es5-ext/array/#/intersection)_

Computes the array of values that are the intersection of all lists (context list and lists given in arguments)

#### arr.isCopy(other) _(es5-ext/array/#/is-copy)_

Returns true if both context and _other_ lists have same content

#### arr.isUniq() _(es5-ext/array/#/is-uniq)_

Returns true if all values in array are unique

#### arr.keys() _(es5-ext/array/#/keys)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.keys).
Returns iterator object, which traverses all array indexes.

#### arr.last() _(es5-ext/array/#/last)_

Returns value of last defined index

#### arr.lastIndex() _(es5-ext/array/#/last)_

Returns last defined index of the array

#### arr.map(callback[, thisArg]) _(es5-ext/array/#/map)_

[_Updated with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.map).
ES6's version of `map`, returns array of same type as the context.

#### arr.remove(value[, …valuen]) _(es5-ext/array/#/remove)_

Remove values from the array

#### arr.separate(sep) _(es5-ext/array/#/separate)_

Returns array with items separated with `sep` value

#### arr.slice(callback[, thisArg]) _(es5-ext/array/#/slice)_

[_Updated with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.slice).
ES6's version of `slice`, returns array of same type as the context.

#### arr.someRight(cb[, thisArg]) _(es5-ext/array/#/someRight)_

`some` starting from last element

#### arr.splice(callback[, thisArg]) _(es5-ext/array/#/splice)_

[_Updated with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.splice).
ES6's version of `splice`, returns array of same type as the context.

#### arr.uniq() _(es5-ext/array/#/uniq)_

Returns duplicate-free version of the array

#### arr.values() _(es5-ext/array/#/values)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.values).
Returns iterator object which traverses all array values.

#### arr[@@iterator] _(es5-ext/array/#/@@iterator)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype-@@iterator).
Returns iterator object which traverses all array values.

### Boolean Constructor extensions

#### isBoolean(x) _(es5-ext/boolean/is-boolean)_

Whether value is boolean

### Date Constructor extensions

#### isDate(x) _(es5-ext/date/is-date)_

Whether value is date instance

#### validDate(x) _(es5-ext/date/valid-date)_

If given object is not date throw TypeError in other case return it.

### Date Prototype extensions

#### date.copy(date) _(es5-ext/date/#/copy)_

Returns a copy of the date object

#### date.daysInMonth() _(es5-ext/date/#/days-in-month)_

Returns number of days of date's month

#### date.floorDay() _(es5-ext/date/#/floor-day)_

Sets the date time to 00:00:00.000

#### date.floorMonth() _(es5-ext/date/#/floor-month)_

Sets date day to 1 and date time to 00:00:00.000

#### date.floorYear() _(es5-ext/date/#/floor-year)_

Sets date month to 0, day to 1 and date time to 00:00:00.000

#### date.format(pattern) _(es5-ext/date/#/format)_

Formats date up to given string. Supported patterns:

- `%Y` - Year with century, 1999, 2003
- `%y` - Year without century, 99, 03
- `%m` - Month, 01..12
- `%d` - Day of the month 01..31
- `%H` - Hour (24-hour clock), 00..23
- `%M` - Minute, 00..59
- `%S` - Second, 00..59
- `%L` - Milliseconds, 000..999

### Error Constructor extensions

#### custom(message/_, code, ext_/) _(es5-ext/error/custom)_

Creates custom error object, optinally extended with `code` and other extension properties (provided with `ext` object)

#### isError(x) _(es5-ext/error/is-error)_

Whether value is an error (instance of `Error`).

#### validError(x) _(es5-ext/error/valid-error)_

If given object is not error throw TypeError in other case return it.

### Error Prototype extensions

#### err.throw() _(es5-ext/error/#/throw)_

Throws error

### Function Constructor extensions

Some of the functions were inspired by [Functional JavaScript](http://osteele.com/sources/javascript/functional/) project by Olivier Steele

#### constant(x) _(es5-ext/function/constant)_

Returns a constant function that returns pregiven argument

_k(x)(y) =def x_

#### identity(x) _(es5-ext/function/identity)_

Identity function. Returns first argument

_i(x) =def x_

#### invoke(name[, …args]) _(es5-ext/function/invoke)_

Returns a function that takes an object as an argument, and applies object's
_name_ method to arguments.
_name_ can be name of the method or method itself.

_invoke(name, …args)(object, …args2) =def object\[name\]\(…args, …args2\)_

#### isArguments(x) _(es5-ext/function/is-arguments)_

Whether value is arguments object

#### isFunction(arg) _(es5-ext/function/is-function)_

Whether value is instance of function

#### noop() _(es5-ext/function/noop)_

No operation function

#### pluck(name) _(es5-ext/function/pluck)_

Returns a function that takes an object, and returns the value of its _name_
property

_pluck(name)(obj) =def obj[name]_

#### validFunction(arg) _(es5-ext/function/valid-function)_

If given object is not function throw TypeError in other case return it.

### Function Prototype extensions

Some of the methods were inspired by [Functional JavaScript](http://osteele.com/sources/javascript/functional/) project by Olivier Steele

#### fn.compose([…fns]) _(es5-ext/function/#/compose)_

Applies the functions in reverse argument-list order.

_f1.compose(f2, f3, f4)(…args) =def f1(f2(f3(f4(…arg))))_

`compose` can also be used in plain function form as:

_compose(f1, f2, f3, f4)(…args) =def f1(f2(f3(f4(…arg))))_

#### fn.copy() _(es5-ext/function/#/copy)_

Produces copy of given function

#### fn.curry([n]) _(es5-ext/function/#/curry)_

Invoking the function returned by this function only _n_ arguments are passed to the underlying function. If the underlying function is not saturated, the result is a function that passes all its arguments to the underlying function.
If _n_ is not provided then it defaults to context function length

_f.curry(4)(arg1, arg2)(arg3)(arg4) =def f(arg1, args2, arg3, arg4)_

#### fn.lock([…args]) _(es5-ext/function/#/lock)_

Returns a function that applies the underlying function to _args_, and ignores its own arguments.

_f.lock(…args)(…args2) =def f(…args)_

_Named after it's counterpart in Google Closure_

#### fn.not() _(es5-ext/function/#/not)_

Returns a function that returns boolean negation of value returned by underlying function.

_f.not()(…args) =def !f(…args)_

#### fn.partial([…args]) _(es5-ext/function/#/partial)_

Returns a function that when called will behave like context function called with initially passed arguments. If more arguments are suplilied, they are appended to initial args.

_f.partial(…args1)(…args2) =def f(…args1, …args2)_

#### fn.spread() _(es5-ext/function/#/spread)_

Returns a function that applies underlying function with first list argument

_f.match()(args) =def f.apply(null, args)_

#### fn.toStringTokens() _(es5-ext/function/#/to-string-tokens)_

Serializes function into two (arguments and body) string tokens. Result is plain object with `args` and `body` properties.

### Math extensions

#### acosh(x) _(es5-ext/math/acosh)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.acosh).

#### asinh(x) _(es5-ext/math/asinh)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.asinh).

#### atanh(x) _(es5-ext/math/atanh)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.atanh).

#### cbrt(x) _(es5-ext/math/cbrt)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.cbrt).

#### clz32(x) _(es5-ext/math/clz32)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.clz32).

#### cosh(x) _(es5-ext/math/cosh)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.cosh).

#### expm1(x) _(es5-ext/math/expm1)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.expm1).

#### fround(x) _(es5-ext/math/fround)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.fround).

#### hypot([…values]) _(es5-ext/math/hypot)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot).

#### imul(x, y) _(es5-ext/math/imul)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.imul).

#### log1p(x) _(es5-ext/math/log1p)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log1p).

#### log2(x) _(es5-ext/math/log2)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log2).

#### log10(x) _(es5-ext/math/log10)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.log10).

#### sign(x) _(es5-ext/math/sign)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sign).

#### sinh(x) _(es5-ext/math/sinh)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.sinh).

#### tanh(x) _(es5-ext/math/tanh)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.tanh).

#### trunc(x) _(es5-ext/math/trunc)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.trunc).

### Number Constructor extensions

#### EPSILON _(es5-ext/number/epsilon)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.epsilon).

The difference between 1 and the smallest value greater than 1 that is representable as a Number value, which is approximately 2.2204460492503130808472633361816 x 10-16.

#### isFinite(x) _(es5-ext/number/is-finite)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite).
Whether value is finite. Differs from global isNaN that it doesn't do type coercion.

#### isInteger(x) _(es5-ext/number/is-integer)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger).
Whether value is integer.

#### isNaN(x) _(es5-ext/number/is-nan)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan).
Whether value is NaN. Differs from global isNaN that it doesn't do type coercion.

#### isNumber(x) _(es5-ext/number/is-number)_

Whether given value is number

#### isSafeInteger(x) _(es5-ext/number/is-safe-integer)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger).

#### MAX*SAFE_INTEGER *(es5-ext/number/max-safe-integer)\_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.maxsafeinteger).
The value of Number.MAX_SAFE_INTEGER is 9007199254740991.

#### MIN*SAFE_INTEGER *(es5-ext/number/min-safe-integer)\_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.minsafeinteger).
The value of Number.MIN_SAFE_INTEGER is -9007199254740991 (253-1).

#### toInteger(x) _(es5-ext/number/to-integer)_

Converts value to integer

#### toPosInteger(x) _(es5-ext/number/to-pos-integer)_

Converts value to positive integer. If provided value is less than 0, then 0 is returned

#### toUint32(x) _(es5-ext/number/to-uint32)_

Converts value to unsigned 32 bit integer. This type is used for array lengths.
See: http://www.2ality.com/2012/02/js-integers.html

### Number Prototype extensions

#### num.pad(length[, precision]) _(es5-ext/number/#/pad)_

Pad given number with zeros. Returns string

### Object Constructor extensions

#### assign(target, source[, …sourcen]) _(es5-ext/object/assign)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
Extend _target_ by enumerable own properties of other objects. If properties are already set on target object, they will be overwritten.

#### clear(obj) _(es5-ext/object/clear)_

Remove all enumerable own properties of the object

#### compact(obj) _(es5-ext/object/compact)_

Returns copy of the object with all enumerable properties that have no falsy values

#### compare(obj1, obj2) _(es5-ext/object/compare)_

Universal cross-type compare function. To be used for e.g. array sort.

#### copy(obj) _(es5-ext/object/copy)_

Returns copy of the object with all enumerable properties.

#### copyDeep(obj) _(es5-ext/object/copy-deep)_

Returns deep copy of the object with all enumerable properties.

#### count(obj) _(es5-ext/object/count)_

Counts number of enumerable own properties on object

#### create(obj[, properties]) _(es5-ext/object/create)_

`Object.create` alternative that provides workaround for [V8 issue](http://code.google.com/p/v8/issues/detail?id=2804).

When `null` is provided as a prototype, it's substituted with specially prepared object that derives from Object.prototype but has all Object.prototype properties shadowed with undefined.

It's quirky solution that allows us to have plain objects with no truthy properties but with turnable prototype.

Use only for objects that you plan to switch prototypes of and be aware of limitations of this workaround.

#### eq(x, y) _(es5-ext/object/eq)_

Whether two values are equal, using [_SameValueZero_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero) algorithm.

#### every(obj, cb[, thisArg[, compareFn]]) _(es5-ext/object/every)_

Analogous to Array.prototype.every. Returns true if every key-value pair in this object satisfies the provided testing function.
Optionally _compareFn_ can be provided which assures that keys are tested in given order. If provided _compareFn_ is equal to `true`, then order is alphabetical (by key).

#### filter(obj, cb[, thisArg]) _(es5-ext/object/filter)_

Analogous to Array.prototype.filter. Returns new object with properites for which _cb_ function returned truthy value.

#### firstKey(obj) _(es5-ext/object/first-key)_

Returns first enumerable key of the object, as keys are unordered by specification, it can be any key of an object.

#### flatten(obj) _(es5-ext/object/flatten)_

Returns new object, with flatten properties of input object

_flatten({ a: { b: 1 }, c: { d: 1 } }) =def { b: 1, d: 1 }_

#### forEach(obj, cb[, thisArg[, compareFn]]) _(es5-ext/object/for-each)_

Analogous to Array.prototype.forEach. Calls a function for each key-value pair found in object
Optionally _compareFn_ can be provided which assures that properties are iterated in given order. If provided _compareFn_ is equal to `true`, then order is alphabetical (by key).

#### getPropertyNames() _(es5-ext/object/get-property-names)_

Get all (not just own) property names of the object

#### is(x, y) _(es5-ext/object/is)_

Whether two values are equal, using [_SameValue_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero) algorithm.

#### isArrayLike(x) _(es5-ext/object/is-array-like)_

Whether object is array-like object

#### isCopy(x, y) _(es5-ext/object/is-copy)_

Two values are considered a copy of same value when all of their own enumerable properties have same values.

#### isCopyDeep(x, y) _(es5-ext/object/is-copy-deep)_

Deep comparision of objects

#### isEmpty(obj) _(es5-ext/object/is-empty)_

True if object doesn't have any own enumerable property

#### isObject(arg) _(es5-ext/object/is-object)_

Whether value is not primitive

#### isPlainObject(arg) _(es5-ext/object/is-plain-object)_

Whether object is plain object, its protototype should be Object.prototype and it cannot be host object.

#### keyOf(obj, searchValue) _(es5-ext/object/key-of)_

Search object for value

#### keys(obj) _(es5-ext/object/keys)_

[_Updated with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys).
ES6's version of `keys`, doesn't throw on primitive input

#### map(obj, cb[, thisArg]) _(es5-ext/object/map)_

Analogous to Array.prototype.map. Creates a new object with properties which values are results of calling a provided function on every key-value pair in this object.

#### mapKeys(obj, cb[, thisArg]) _(es5-ext/object/map-keys)_

Create new object with same values, but remapped keys

#### mixin(target, source) _(es5-ext/object/mixin)_

Extend _target_ by all own properties of other objects. Properties found in both objects will be overwritten (unless they're not configurable and cannot be overwritten).
_It was for a moment part of ECMAScript 6 draft._

#### mixinPrototypes(target, …source]) _(es5-ext/object/mixin-prototypes)_

Extends _target_, with all source and source's prototype properties.
Useful as an alternative for `setPrototypeOf` in environments in which it cannot be shimmed (no `__proto__` support).

#### normalizeOptions(options) _(es5-ext/object/normalize-options)_

Normalizes options object into flat plain object.

Useful for functions in which we either need to keep options object for future reference or need to modify it for internal use.

- It never returns input `options` object back (always a copy is created)
- `options` can be undefined in such case empty plain object is returned.
- Copies all enumerable properties found down prototype chain.

#### primitiveSet([…names]) _(es5-ext/object/primitive-set)_

Creates `null` prototype based plain object, and sets on it all property names provided in arguments to true.

#### safeTraverse(obj[, …names]) _(es5-ext/object/safe-traverse)_

Safe navigation of object properties. See http://wiki.ecmascript.org/doku.php?id=strawman:existential_operator

#### serialize(value) _(es5-ext/object/serialize)_

Serialize value into string. Differs from [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) that it serializes also dates, functions and regular expresssions.

#### setPrototypeOf(object, proto) _(es5-ext/object/set-prototype-of)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.setprototypeof).
If native version is not provided, it depends on existence of `__proto__` functionality, if it's missing, `null` instead of function is exposed.

#### some(obj, cb[, thisArg[, compareFn]]) _(es5-ext/object/some)_

Analogous to Array.prototype.some Returns true if any key-value pair satisfies the provided
testing function.
Optionally _compareFn_ can be provided which assures that keys are tested in given order. If provided _compareFn_ is equal to `true`, then order is alphabetical (by key).

#### toArray(obj[, cb[, thisArg[, compareFn]]]) _(es5-ext/object/to-array)_

Creates an array of results of calling a provided function on every key-value pair in this object.
Optionally _compareFn_ can be provided which assures that results are added in given order. If provided _compareFn_ is equal to `true`, then order is alphabetical (by key).

#### unserialize(str) _(es5-ext/object/unserialize)_

Userializes value previously serialized with [serialize](#serializevalue-es5-extobjectserialize)

#### validCallable(x) _(es5-ext/object/valid-callable)_

If given object is not callable throw TypeError in other case return it.

#### validObject(x) _(es5-ext/object/valid-object)_

Throws error if given value is not an object, otherwise it is returned.

#### validValue(x) _(es5-ext/object/valid-value)_

Throws error if given value is `null` or `undefined`, otherwise returns value.

### Promise Prototype extensions

#### promise.finally(onFinally) _(es5-ext/promise/#/finally)_

[_Introduced with ECMAScript 2018_](https://tc39.github.io/ecma262/#sec-promise.prototype.finally).

### RegExp Constructor extensions

#### escape(str) _(es5-ext/reg-exp/escape)_

Escapes string to be used in regular expression

#### isRegExp(x) _(es5-ext/reg-exp/is-reg-exp)_

Whether object is regular expression

#### validRegExp(x) _(es5-ext/reg-exp/valid-reg-exp)_

If object is regular expression it is returned, otherwise TypeError is thrown.

### RegExp Prototype extensions

#### re.isSticky(x) _(es5-ext/reg-exp/#/is-sticky)_

Whether regular expression has `sticky` flag.

It's to be used as counterpart to [regExp.sticky](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.sticky) if it's not implemented.

#### re.isUnicode(x) _(es5-ext/reg-exp/#/is-unicode)_

Whether regular expression has `unicode` flag.

It's to be used as counterpart to [regExp.unicode](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-regexp.prototype.unicode) if it's not implemented.

#### re.match(string) _(es5-ext/reg-exp/#/match)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.match).

#### re.replace(string, replaceValue) _(es5-ext/reg-exp/#/replace)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.replace).

#### re.search(string) _(es5-ext/reg-exp/#/search)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.search).

#### re.split(string) _(es5-ext/reg-exp/#/search)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.split).

#### re.sticky _(es5-ext/reg-exp/#/sticky/implement)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.sticky).
It's a getter, so only `implement` and `is-implemented` modules are provided.

#### re.unicode _(es5-ext/reg-exp/#/unicode/implement)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.unicode).
It's a getter, so only `implement` and `is-implemented` modules are provided.

### String Constructor extensions

#### formatMethod(fMap) _(es5-ext/string/format-method)_

Creates format method. It's used e.g. to create `Date.prototype.format` method

#### fromCodePoint([…codePoints]) _(es5-ext/string/from-code-point)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.fromcodepoint)

#### isString(x) _(es5-ext/string/is-string)_

Whether object is string

#### randomUniq() _(es5-ext/string/random-uniq)_

Returns randomly generated id, with guarantee of local uniqueness (no same id will be returned twice)

#### raw(callSite[, …substitutions]) _(es5-ext/string/raw)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.raw)

### String Prototype extensions

#### str.at(pos) _(es5-ext/string/#/at)_

_Proposed for ECMAScript 6/7 standard, but not (yet) in a draft_

Returns a string at given position in Unicode-safe manner.
Based on [implementation by Mathias Bynens](https://github.com/mathiasbynens/String.prototype.at).

#### str.camelToHyphen() _(es5-ext/string/#/camel-to-hyphen)_

Convert camelCase string to hyphen separated, e.g. one-two-three -> oneTwoThree.
Useful when converting names from js property convention into filename convention.

#### str.capitalize() _(es5-ext/string/#/capitalize)_

Capitalize first character of a string

#### str.caseInsensitiveCompare(str) _(es5-ext/string/#/case-insensitive-compare)_

Case insensitive compare

#### str.codePointAt(pos) _(es5-ext/string/#/code-point-at)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.codepointat)

Based on [implementation by Mathias Bynens](https://github.com/mathiasbynens/String.prototype.codePointAt).

#### str.contains(searchString[, position]) _(es5-ext/string/#/contains)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.contains)

Whether string contains given string.

#### str.endsWith(searchString[, endPosition]) _(es5-ext/string/#/ends-with)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith).
Whether strings ends with given string

#### str.hyphenToCamel() _(es5-ext/string/#/hyphen-to-camel)_

Convert hyphen separated string to camelCase, e.g. one-two-three -> oneTwoThree.
Useful when converting names from filename convention to js property name convention.

#### str.indent(str[, count]) _(es5-ext/string/#/indent)_

Indents each line with provided _str_ (if _count_ given then _str_ is repeated _count_ times).

#### str.last() _(es5-ext/string/#/last)_

Return last character

#### str.normalize([form]) _(es5-ext/string/#/normalize)_

[_Introduced with ECMAScript 6_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize).
Returns the Unicode Normalization Form of a given string.
Based on Matsuza's version. Code used for integrated shim can be found at [github.com/walling/unorm](https://github.com/walling/unorm/blob/master/lib/unorm.js)

#### str.pad(fill[, length]) _(es5-ext/string/#/pad)_

Pad string with _fill_.
If _length_ si given than _fill_ is reapated _length_ times.
If _length_ is negative then pad is applied from right.

#### str.repeat(n) _(es5-ext/string/#/repeat)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat).
Repeat given string _n_ times

#### str.plainReplace(search, replace) _(es5-ext/string/#/plain-replace)_

Simple `replace` version. Doesn't support regular expressions. Replaces just first occurrence of search string. Doesn't support insert patterns, therefore it is safe to replace text with text obtained programmatically (there's no need for additional _\$_ characters escape in such case).

#### str.plainReplaceAll(search, replace) _(es5-ext/string/#/plain-replace-all)_

Simple `replace` version. Doesn't support regular expressions. Replaces all occurrences of search string. Doesn't support insert patterns, therefore it is safe to replace text with text obtained programmatically (there's no need for additional _\$_ characters escape in such case).

#### str.startsWith(searchString[, position]) _(es5-ext/string/#/starts-with)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith).
Whether strings starts with given string

#### str[@@iterator] _(es5-ext/string/#/@@iterator)_

[_Introduced with ECMAScript 6_](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype-@@iterator).
Returns iterator object which traverses all string characters (with respect to unicode symbols)

### Tests

    $ npm test

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

## es5-ext for enterprise

Available as part of the Tidelift Subscription

The maintainers of es5-ext and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-es5-ext?utm_source=npm-es5-ext&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

[build-image]: https://github.com/medikoo/es5-ext/workflows/Integrate/badge.svg
[build-url]: https://github.com/medikoo/es5-ext/actions?query=workflow%3AIntegrate
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/es5-ext.svg
[cov-url]: https://codecov.io/gh/medikoo/es5-ext
[npm-image]: https://img.shields.io/npm/v/es5-ext.svg
[npm-url]: https://www.npmjs.com/package/es5-ext
