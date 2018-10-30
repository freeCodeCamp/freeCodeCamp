# type-check [![Build Status](https://travis-ci.org/gkz/type-check.png?branch=master)](https://travis-ci.org/gkz/type-check)

<a name="type-check" />

`type-check` is a library which allows you to check the types of JavaScript values at runtime with a Haskell like type syntax. It is great for checking external input, for testing, or even for adding a bit of safety to your internal code. It is a major component of [levn](https://github.com/gkz/levn). MIT license. Version 0.3.2. Check out the [demo](http://gkz.github.io/type-check/).

For updates on `type-check`, [follow me on twitter](https://twitter.com/gkzahariev).

    npm install type-check

## Quick Examples

```js
// Basic types:
var typeCheck = require('type-check').typeCheck;
typeCheck('Number', 1);               // true
typeCheck('Number', 'str');           // false
typeCheck('Error', new Error);        // true
typeCheck('Undefined', undefined);    // true

// Comment
typeCheck('count::Number', 1);        // true

// One type OR another type:
typeCheck('Number | String', 2);      // true
typeCheck('Number | String', 'str');  // true

// Wildcard, matches all types:
typeCheck('*', 2) // true

// Array, all elements of a single type:
typeCheck('[Number]', [1, 2, 3]);                // true
typeCheck('[Number]', [1, 'str', 3]);            // false

// Tuples, or fixed length arrays with elements of different types:
typeCheck('(String, Number)', ['str', 2]);       // true
typeCheck('(String, Number)', ['str']);          // false
typeCheck('(String, Number)', ['str', 2, 5]);    // false

// Object properties:
typeCheck('{x: Number, y: Boolean}', {x: 2, y: false});             // true
typeCheck('{x: Number, y: Boolean}',       {x: 2});                 // false
typeCheck('{x: Number, y: Maybe Boolean}', {x: 2});                 // true
typeCheck('{x: Number, y: Boolean}',      {x: 2, y: false, z: 3});  // false
typeCheck('{x: Number, y: Boolean, ...}', {x: 2, y: false, z: 3});  // true

// A particular type AND object properties:
typeCheck('RegExp{source: String, ...}', /re/i);          // true
typeCheck('RegExp{source: String, ...}', {source: 're'}); // false

// Custom types:
var opt = {customTypes:
  {Even: { typeOf: 'Number', validate: function(x) { return x % 2 === 0; }}}};
typeCheck('Even', 2, opt); // true

// Nested:
var type = '{a: (String, [Number], {y: Array, ...}), b: Error{message: String, ...}}'
typeCheck(type, {a: ['hi', [1, 2, 3], {y: [1, 'ms']}], b: new Error('oh no')}); // true
```

Check out the [type syntax format](#syntax) and [guide](#guide).

## Usage

`require('type-check');` returns an object that exposes four properties. `VERSION` is the current version of the library as a string. `typeCheck`, `parseType`, and `parsedTypeCheck` are functions.

```js
// typeCheck(type, input, options);
typeCheck('Number', 2);               // true

// parseType(type);
var parsedType = parseType('Number'); // object

// parsedTypeCheck(parsedType, input, options);
parsedTypeCheck(parsedType, 2);       // true
```

### typeCheck(type, input, options)

`typeCheck` checks a JavaScript value `input` against `type` written in the [type format](#type-format) (and taking account the optional `options`) and returns whether the `input` matches the `type`.

##### arguments
* type - `String` - the type written in the [type format](#type-format) which to check against
* input - `*` - any JavaScript value, which is to be checked against the type
* options - `Maybe Object` - an optional parameter specifying additional options, currently the only available option is specifying [custom types](#custom-types)

##### returns
`Boolean` - whether the input matches the type

##### example
```js
typeCheck('Number', 2); // true
```

### parseType(type)

`parseType` parses string `type` written in the [type format](#type-format) into an object representing the parsed type.

##### arguments
* type - `String` - the type written in the [type format](#type-format) which to parse

##### returns
`Object` - an object in the parsed type format representing the parsed type

##### example
```js
parseType('Number'); // [{type: 'Number'}]
```
### parsedTypeCheck(parsedType, input, options)

`parsedTypeCheck` checks a JavaScript value `input` against parsed `type` in the parsed type format (and taking account the optional `options`) and returns whether the `input` matches the `type`. Use this in conjunction with `parseType` if you are going to use a type more than once.

##### arguments
* type - `Object` - the type in the parsed type format which to check against
* input - `*` - any JavaScript value, which is to be checked against the type
* options - `Maybe Object` - an optional parameter specifying additional options, currently the only available option is specifying [custom types](#custom-types)

##### returns
`Boolean` - whether the input matches the type

##### example
```js
parsedTypeCheck([{type: 'Number'}], 2); // true
var parsedType = parseType('String');
parsedTypeCheck(parsedType, 'str');     // true
```

<a name="type-format" />
## Type Format

### Syntax

White space is ignored. The root node is a __Types__.

* __Identifier__ = `[\$\w]+` - a group of any lower or upper case letters, numbers, underscores, or dollar signs - eg. `String`
* __Type__ = an `Identifier`, an `Identifier` followed by a `Structure`, just a `Structure`, or a wildcard `*` - eg. `String`, `Object{x: Number}`, `{x: Number}`, `Array{0: String, 1: Boolean, length: Number}`, `*`
* __Types__ = optionally a comment (an `Indentifier` followed by a `::`), optionally the identifier `Maybe`, one or more `Type`, separated by `|` - eg. `Number`, `String | Date`, `Maybe Number`, `Maybe Boolean | String`
* __Structure__ = `Fields`, or a `Tuple`, or an `Array` - eg. `{x: Number}`, `(String, Number)`, `[Date]`
* __Fields__ = a `{`, followed one or more `Field` separated by a comma `,` (trailing comma `,` is permitted), optionally an `...` (always preceded by a comma `,`), followed by a `}` - eg. `{x: Number, y: String}`, `{k: Function, ...}`
* __Field__ = an `Identifier`, followed by a colon `:`, followed by `Types` - eg. `x: Date | String`, `y: Boolean`
* __Tuple__ = a `(`, followed by one or more `Types` separated by a comma `,` (trailing comma `,` is permitted), followed by a `)` - eg `(Date)`, `(Number, Date)`
* __Array__ = a `[` followed by exactly one `Types` followed by a `]` - eg. `[Boolean]`, `[Boolean | Null]`

### Guide

`type-check` uses `Object.toString` to find out the basic type of a value. Specifically,

```js
{}.toString.call(VALUE).slice(8, -1)
{}.toString.call(true).slice(8, -1) // 'Boolean'
```
A basic type, eg. `Number`, uses this check. This is much more versatile than using `typeof` - for example, with `document`, `typeof` produces `'object'` which isn't that useful, and our technique produces `'HTMLDocument'`.

You may check for multiple types by separating types with a `|`. The checker proceeds from left to right, and passes if the value is any of the types - eg. `String | Boolean` first checks if the value is a string, and then if it is a boolean. If it is none of those, then it returns false.

Adding a `Maybe` in front of a list of multiple types is the same as also checking for `Null` and `Undefined` - eg. `Maybe String` is equivalent to `Undefined | Null | String`.

You may add a comment to remind you of what the type is for by following an identifier with a `::` before a type (or multiple types). The comment is simply thrown out.

The wildcard `*` matches all types.

There are three types of structures for checking the contents of a value: 'fields', 'tuple', and 'array'.

If used by itself, a 'fields' structure will pass with any type of object as long as it is an instance of `Object` and the properties pass - this allows for duck typing - eg. `{x: Boolean}`.

To check if the properties pass, and the value is of a certain type, you can specify the type - eg. `Error{message: String}`.

If you want to make a field optional, you can simply use `Maybe` - eg. `{x: Boolean, y: Maybe String}` will still pass if `y` is undefined (or null).

If you don't care if the value has properties beyond what you have specified, you can use the 'etc' operator `...` - eg. `{x: Boolean, ...}` will match an object with an `x` property that is a boolean, and with zero or more other properties.

For an array, you must specify one or more types (separated by `|`) - it will pass for something of any length as long as each element passes the types provided - eg. `[Number]`, `[Number | String]`.

A tuple checks for a fixed number of elements, each of a potentially different type. Each element is separated by a comma - eg. `(String, Number)`.

An array and tuple structure check that the value is of type `Array` by default, but if another type is specified, they will check for that instead - eg. `Int32Array[Number]`. You can use the wildcard `*` to search for any type at all.

Check out the [type precedence](https://github.com/zaboco/type-precedence) library for type-check.

## Options

Options is an object. It is an optional parameter to the `typeCheck` and `parsedTypeCheck` functions. The only current option is `customTypes`.

<a name="custom-types" />
### Custom Types

__Example:__

```js
var options = {
  customTypes: {
    Even: {
      typeOf: 'Number',
      validate: function(x) {
        return x % 2 === 0;
      }
    }
  }
};
typeCheck('Even', 2, options); // true
typeCheck('Even', 3, options); // false
```

`customTypes` allows you to set up custom types for validation. The value of this is an object. The keys of the object are the types you will be matching. Each value of the object will be an object having a `typeOf` property - a string, and `validate` property - a function.

The `typeOf` property is the type the value should be, and `validate` is a function which should return true if the value is of that type. `validate` receives one parameter, which is the value that we are checking.

## Technical About

`type-check` is written in [LiveScript](http://livescript.net/) - a language that compiles to JavaScript. It also uses the [prelude.ls](http://preludels.com/) library.
