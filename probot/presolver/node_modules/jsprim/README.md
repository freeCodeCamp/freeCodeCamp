# jsprim: utilities for primitive JavaScript types

This module provides miscellaneous facilities for working with strings,
numbers, dates, and objects and arrays of these basic types.


### deepCopy(obj)

Creates a deep copy of a primitive type, object, or array of primitive types.


### deepEqual(obj1, obj2)

Returns whether two objects are equal.


### isEmpty(obj)

Returns true if the given object has no properties and false otherwise.  This
is O(1) (unlike `Object.keys(obj).length === 0`, which is O(N)).

### hasKey(obj, key)

Returns true if the given object has an enumerable, non-inherited property
called `key`.  [For information on enumerability and ownership of properties, see
the MDN
documentation.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)

### forEachKey(obj, callback)

Like Array.forEach, but iterates enumerable, owned properties of an object
rather than elements of an array.  Equivalent to:

    for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    callback(key, obj[key]);
            }
    }


### flattenObject(obj, depth)

Flattens an object up to a given level of nesting, returning an array of arrays
of length "depth + 1", where the first "depth" elements correspond to flattened
columns and the last element contains the remaining object .  For example:

    flattenObject({
        'I': {
            'A': {
                'i': {
                    'datum1': [ 1, 2 ],
                    'datum2': [ 3, 4 ]
                },
                'ii': {
                    'datum1': [ 3, 4 ]
                }
            },
            'B': {
                'i': {
                    'datum1': [ 5, 6 ]
                },
                'ii': {
                    'datum1': [ 7, 8 ],
                    'datum2': [ 3, 4 ],
                },
                'iii': {
                }
            }
        },
        'II': {
            'A': {
                'i': {
                    'datum1': [ 1, 2 ],
                    'datum2': [ 3, 4 ]
                }
            }
        }
    }, 3)

becomes:

    [
        [ 'I',  'A', 'i',   { 'datum1': [ 1, 2 ], 'datum2': [ 3, 4 ] } ],
        [ 'I',  'A', 'ii',  { 'datum1': [ 3, 4 ] } ],
        [ 'I',  'B', 'i',   { 'datum1': [ 5, 6 ] } ],
        [ 'I',  'B', 'ii',  { 'datum1': [ 7, 8 ], 'datum2': [ 3, 4 ] } ],
        [ 'I',  'B', 'iii', {} ],
        [ 'II', 'A', 'i',   { 'datum1': [ 1, 2 ], 'datum2': [ 3, 4 ] } ]
    ]

This function is strict: "depth" must be a non-negative integer and "obj" must
be a non-null object with at least "depth" levels of nesting under all keys.


### flattenIter(obj, depth, func)

This is similar to `flattenObject` except that instead of returning an array,
this function invokes `func(entry)` for each `entry` in the array that
`flattenObject` would return.  `flattenIter(obj, depth, func)` is logically
equivalent to `flattenObject(obj, depth).forEach(func)`.  Importantly, this
version never constructs the full array.  Its memory usage is O(depth) rather
than O(n) (where `n` is the number of flattened elements).

There's another difference between `flattenObject` and `flattenIter` that's
related to the special case where `depth === 0`.  In this case, `flattenObject`
omits the array wrapping `obj` (which is regrettable).


### pluck(obj, key)

Fetch nested property "key" from object "obj", traversing objects as needed.
For example, `pluck(obj, "foo.bar.baz")` is roughly equivalent to
`obj.foo.bar.baz`, except that:

1. If traversal fails, the resulting value is undefined, and no error is
   thrown.  For example, `pluck({}, "foo.bar")` is just undefined.
2. If "obj" has property "key" directly (without traversing), the
   corresponding property is returned.  For example,
   `pluck({ 'foo.bar': 1 }, 'foo.bar')` is 1, not undefined.  This is also
   true recursively, so `pluck({ 'a': { 'foo.bar': 1 } }, 'a.foo.bar')` is
   also 1, not undefined.


### randElt(array)

Returns an element from "array" selected uniformly at random.  If "array" is
empty, throws an Error.


### startsWith(str, prefix)

Returns true if the given string starts with the given prefix and false
otherwise.


### endsWith(str, suffix)

Returns true if the given string ends with the given suffix and false
otherwise.


### parseInteger(str, options)

Parses the contents of `str` (a string) as an integer. On success, the integer
value is returned (as a number). On failure, an error is **returned** describing
why parsing failed.

By default, leading and trailing whitespace characters are not allowed, nor are
trailing characters that are not part of the numeric representation. This
behaviour can be toggled by using the options below. The empty string (`''`) is
not considered valid input. If the return value cannot be precisely represented
as a number (i.e., is smaller than `Number.MIN_SAFE_INTEGER` or larger than
`Number.MAX_SAFE_INTEGER`), an error is returned. Additionally, the string
`'-0'` will be parsed as the integer `0`, instead of as the IEEE floating point
value `-0`.

This function accepts both upper and lowercase characters for digits, similar to
`parseInt()`, `Number()`, and [strtol(3C)](https://illumos.org/man/3C/strtol).

The following may be specified in `options`:

Option             | Type    | Default | Meaning
------------------ | ------- | ------- | ---------------------------
base               | number  | 10      | numeric base (radix) to use, in the range 2 to 36
allowSign          | boolean | true    | whether to interpret any leading `+` (positive) and `-` (negative) characters
allowImprecise     | boolean | false   | whether to accept values that may have lost precision (past `MAX_SAFE_INTEGER` or below `MIN_SAFE_INTEGER`)
allowPrefix        | boolean | false   | whether to interpret the prefixes `0b` (base 2), `0o` (base 8), `0t` (base 10), or `0x` (base 16)
allowTrailing      | boolean | false   | whether to ignore trailing characters
trimWhitespace     | boolean | false   | whether to trim any leading or trailing whitespace/line terminators
leadingZeroIsOctal | boolean | false   | whether a leading zero indicates octal

Note that if `base` is unspecified, and `allowPrefix` or `leadingZeroIsOctal`
are, then the leading characters can change the default base from 10. If `base`
is explicitly specified and `allowPrefix` is true, then the prefix will only be
accepted if it matches the specified base. `base` and `leadingZeroIsOctal`
cannot be used together.

**Context:** It's tricky to parse integers with JavaScript's built-in facilities
for several reasons:

- `parseInt()` and `Number()` by default allow the base to be specified in the
  input string by a prefix (e.g., `0x` for hex).
- `parseInt()` allows trailing nonnumeric characters.
- `Number(str)` returns 0 when `str` is the empty string (`''`).
- Both functions return incorrect values when the input string represents a
  valid integer outside the range of integers that can be represented precisely.
  Specifically, `parseInt('9007199254740993')` returns 9007199254740992.
- Both functions always accept `-` and `+` signs before the digit.
- Some older JavaScript engines always interpret a leading 0 as indicating
  octal, which can be surprising when parsing input from users who expect a
  leading zero to be insignificant.

While each of these may be desirable in some contexts, there are also times when
none of them are wanted. `parseInteger()` grants greater control over what
input's permissible.

### iso8601(date)

Converts a Date object to an ISO8601 date string of the form
"YYYY-MM-DDTHH:MM:SS.sssZ".  This format is not customizable.


### parseDateTime(str)

Parses a date expressed as a string, as either a number of milliseconds since
the epoch or any string format that Date accepts, giving preference to the
former where these two sets overlap (e.g., strings containing small numbers).


### hrtimeDiff(timeA, timeB)

Given two hrtime readings (as from Node's `process.hrtime()`), where timeA is
later than timeB, compute the difference and return that as an hrtime.  It is
illegal to invoke this for a pair of times where timeB is newer than timeA.

### hrtimeAdd(timeA, timeB)

Add two hrtime intervals (as from Node's `process.hrtime()`), returning a new
hrtime interval array.  This function does not modify either input argument.


### hrtimeAccum(timeA, timeB)

Add two hrtime intervals (as from Node's `process.hrtime()`), storing the
result in `timeA`.  This function overwrites (and returns) the first argument
passed in.


### hrtimeNanosec(timeA), hrtimeMicrosec(timeA), hrtimeMillisec(timeA)

This suite of functions converts a hrtime interval (as from Node's
`process.hrtime()`) into a scalar number of nanoseconds, microseconds or
milliseconds.  Results are truncated, as with `Math.floor()`.


### validateJsonObject(schema, object)

Uses JSON validation (via JSV) to validate the given object against the given
schema.  On success, returns null.  On failure, *returns* (does not throw) a
useful Error object.


### extraProperties(object, allowed)

Check an object for unexpected properties.  Accepts the object to check, and an
array of allowed property name strings.  If extra properties are detected, an
array of extra property names is returned.  If no properties other than those
in the allowed list are present on the object, the returned array will be of
zero length.

### mergeObjects(provided, overrides, defaults)

Merge properties from objects "provided", "overrides", and "defaults".  The
intended use case is for functions that accept named arguments in an "args"
object, but want to provide some default values and override other values.  In
that case, "provided" is what the caller specified, "overrides" are what the
function wants to override, and "defaults" contains default values.

The function starts with the values in "defaults", overrides them with the
values in "provided", and then overrides those with the values in "overrides".
For convenience, any of these objects may be falsey, in which case they will be
ignored.  The input objects are never modified, but properties in the returned
object are not deep-copied.

For example:

    mergeObjects(undefined, { 'objectMode': true }, { 'highWaterMark': 0 })

returns:

    { 'objectMode': true, 'highWaterMark': 0 }

For another example:

    mergeObjects(
        { 'highWaterMark': 16, 'objectMode': 7 }, /* from caller */
        { 'objectMode': true },                   /* overrides */
        { 'highWaterMark': 0 });                  /* default */

returns:

    { 'objectMode': true, 'highWaterMark': 16 }


# Contributing

See separate [contribution guidelines](CONTRIBUTING.md).
