# align-text [![NPM version](https://badge.fury.io/js/align-text.svg)](http://badge.fury.io/js/align-text)  [![Build Status](https://travis-ci.org/jonschlinkert/align-text.svg)](https://travis-ci.org/jonschlinkert/align-text)

> Align the text in a string.

**Examples**

Align text values in an array:

```js
align([1, 2, 3, 100]);
//=> ['  1', '  2', '  3', '100']
```

Or [do stuff like this](./example.js):

[![screen shot 2015-06-09 at 2 08 34 am](https://cloud.githubusercontent.com/assets/383994/8051597/7b716fbc-0e4c-11e5-9aef-4493fd22db58.png)](./example.js)

Visit [the example](./example.js) to see how this works.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i align-text --save
```

## Usage

```js
var align = require('align-text');
align(text, callback_function_or_integer);
```

**Params**

* `text` can be a **string or array**. If a string is passed, a string will be returned. If an array is passed, an array will be returned.
* `callback|integer`: if an integer, the text will be indented by that amount. If a function, it must return an integer representing the amount of leading indentation to use as `align` loops over each line.

**Example**

```js
align(text, 4);
```

Would align:

```
abc
abc
abc
```

To:

```
    abc
    abc
    abc
```

## callback

### params

The callback is used to determine the indentation of each line and gets the following params:

* `len` the length of the "current" line
* `longest` the length of the longest line
* `line` the current line (string) being aligned
* `lines` the array of all lines

### return

The callback may return:

* an integer that represents the number of spaces to use for padding,
* or an object with the following properties:
  - `indent`: **{Number}** the amount of indentation to use. Default is `0` when an object is returned.
  - `character`: **{String}** the character to use for indentation. Default is `''` (empty string) when an object is returned.
  - `prefix`: **{String}** leading characters to use at the beginning of each line. `''` (empty string) when an object is returned.

**Integer example:**

```js
// calculate half the difference between the length
// of the current line and the longest line
function centerAlign(len, longest, line, lines) {
  return Math.floor((longest - len) / 2);
}
```

**Object example:**

```js
function centerAlign(len, longest, line, lines) {
  return {
    character: '\t',
    indent: Math.floor((longest - len) / 2),
    prefix: '~ ',
  }
}
```

## Usage examples

### Center align

Using the `centerAlign` function from above:

```js
align(text, centerAlign);
```

Would align this text:

```js
Lorem ipsum dolor sit amet
consectetur adipiscin
elit, sed do eiusmod tempor incididun
ut labore et dolor
magna aliqua. Ut enim ad mini
veniam, quis
```

Resulting in this:

```
     Lorem ipsum dolor sit amet,
        consectetur adipiscing
elit, sed do eiusmod tempor incididunt
         ut labore et dolore
    magna aliqua. Ut enim ad minim
             veniam, quis
```

**Customize**

If you wanted to add more padding on the left, just pass the number in the callback.

For example, to add 4 spaces before every line:

```js
function centerAlign(len, longest, line, lines) {
  return 4 + Math.floor((longest - len) / 2);
}
```

Would result in:

```
         Lorem ipsum dolor sit amet,
            consectetur adipiscing
    elit, sed do eiusmod tempor incididunt
             ut labore et dolore
        magna aliqua. Ut enim ad minim
                 veniam, quis
```

### Bullets

```js
align(text, function (len, max, line, lines) {
  return {prefix: ' - '};
});
```

Would return:

```
- Lorem ipsum dolor sit amet,
- consectetur adipiscing
- elit, sed do eiusmod tempor incididunt
- ut labore et dolore
- magna aliqua. Ut enim ad minim
- veniam, quis
```

### Different indent character

```js
align(text, function (len, max, line, lines) {
  return { 
    indent: Math.floor((max - len) / 2), 
    character: '~', 
  };
});
```

Would return

```
~~~~~Lorem ipsum dolor sit amet,
~~~~~~~~consectetur adipiscing
elit, sed do eiusmod tempor incididunt
~~~~~~~~~ut labore et dolore
~~~~magna aliqua. Ut enim ad minim
~~~~~~~~~~~~~veniam, quis
```

## Related projects

* [center-align](https://github.com/jonschlinkert/center-align): Center-align the text in a string.
* [justify](https://github.com/bahamas10/node-justify): Left or right (or both) justify text using a custom width and character
* [longest](https://github.com/jonschlinkert/longest): Get the longest item in an array.
* [right-align](https://github.com/jonschlinkert/right-align): Right-align the text in a string.
* [repeat-string](https://github.com/jonschlinkert/repeat-string): Repeat the given string n times. Fastest implementation for repeating a string.
* [word-wrap](https://github.com/jonschlinkert/word-wrap): Wrap words to a specified length.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/align-text/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 09, 2015._
