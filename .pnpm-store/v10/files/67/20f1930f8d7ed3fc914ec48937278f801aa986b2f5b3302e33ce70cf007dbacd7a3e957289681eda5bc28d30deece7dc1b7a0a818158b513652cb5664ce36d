<span class="github-only">

The stable release documentation can be found here https://epeli.github.io/underscore.string/

</span>

# Underscore.string [![Build Status](https://secure.travis-ci.org/epeli/underscore.string.png?branch=master)](http://travis-ci.org/epeli/underscore.string) #

Javascript lacks complete string manipulation operations.
This is an attempt to fill that gap. List of build-in methods can be found
for example from [Dive Into JavaScript][d].
Originally started as an Underscore.js extension but is a full standalone
library nowadays.

Upgrading from 2.x to 3.x? Please read the [changelog][c].

[c]: https://github.com/epeli/underscore.string/blob/master/CHANGELOG.markdown#300

## Usage

### For Node.js, Browserify and Webpack

Install from npm

    npm install underscore.string

Require individual functions

```javascript
var slugify = require("underscore.string/slugify");

slugify("Hello world!");
// => hello-world
```

or load the full library to enable chaining

```javascript
var s = require("underscore.string");

s("   epeli  ").trim().capitalize().value();
// => "Epeli"
```

but especially when using with [Browserify][] the individual function approach
is recommended because using it you only add those functions to your bundle you
use.

[Browserify]: http://browserify.org/

### In Meteor

From your [Meteor][] project folder

```shell
    meteor add underscorestring:underscore.string
```

and you'll be able to access the library with the ***s*** global from both the server and the client.

```javascript
s.slugify("Hello world!");
// => hello-world

s("   epeli  ").trim().capitalize().value();
// => "Epeli"
```

[Meteor]: http://www.meteor.com/

### Others

The `dist/underscore.string.js` file is an [UMD][] build. You can load it using
an AMD loader such as [RequireJS][] or just stick it to a web page and access
the library from the ***s*** global.

[UMD]: https://github.com/umdjs/umd
[RequireJS]: http://requirejs.org/

### Underscore.js/Lo-Dash integration

It is still possible use as Underscore.js/Lo-Dash extension

```javascript
_.mixin(s.exports());
```
But it's not recommended since `include`, `contains`, `reverse` and `join`
are dropped because they collide with the functions already defined by Underscore.js.

### Lo-Dash-FP/Ramda integration

If you want to use underscore.string with [ramdajs](http://ramdajs.com/) or [Lo-Dash-FP](https://github.com/lodash/lodash-fp) you can use [underscore.string.fp](https://github.com/stoeffel/underscore.string.fp).

    npm install underscore.string.fp

```javascript
var S = require('underscore.string.fp');
var filter = require('lodash-fp').filter;
var filter = require('ramda').filter;

filter(S.startsWith('.'), [
  '.vimrc',
  'foo.md',
  '.zshrc'
]);
// => ['.vimrc', '.zshrc']
```

## Download
  
  * [Development version](https://npmcdn.com/underscore.string/dist/underscore.string.js) *Uncompressed with Comments*
  * [Production version](https://npmcdn.com/underscore.string/dist/underscore.string.min.js) *Minified*

## API

### Individual functions

#### numberFormat(number, [ decimals=0, decimalSeparator='.', orderSeparator=',']) => string

Formats the numbers.

```javascript
numberFormat(1000, 2);
// => "1,000.00"

numberFormat(123456789.123, 5, ".", ",");
// => "123,456,789.12300"
```


#### levenshtein(string1, string2) => number

Calculates [Levenshtein distance][ld] between two strings.
[ld]: http://en.wikipedia.org/wiki/Levenshtein_distance

```javascript
levenshtein("kitten", "kittah");
// => 2
```

#### capitalize(string, [lowercaseRest=false]) => string

Converts first letter of the string to uppercase. If `true` is passed as second argument the rest
of the string will be converted to lower case.

```javascript
capitalize("foo Bar");
// => "Foo Bar"

capitalize("FOO Bar", true);
// => "Foo bar"
```

#### decapitalize(string) => string

Converts first letter of the string to lowercase.

```javascript
decapitalize("Foo Bar");
// => "foo Bar"
```

#### chop(string, step) => array

```javascript
chop("whitespace", 3);
// => ["whi", "tes", "pac", "e"]
```

#### clean(string) => string

Trim and replace multiple spaces with a single space.

```javascript
clean(" foo    bar   ");
// => "foo bar"
```

#### cleanDiacritics(string) => string

Replace [diacritic][dc] characters with closest ASCII equivalents. Check the
[source][s] for supported characters. [Pull requests][p] welcome for missing
characters!

[dc]: https://en.wikipedia.org/wiki/Diacritic
[s]: https://github.com/epeli/underscore.string/blob/master/cleanDiacritics.js
[p]: https://github.com/epeli/underscore.string/blob/master/CONTRIBUTING.markdown

```javascript
cleanDiacritics("ääkkönen");
// => "aakkonen"
```

#### chars(string) => array

```javascript
chars("Hello");
// => ["H", "e", "l", "l", "o"]
```

#### swapCase(string) => string

Returns a copy of the string in which all the case-based characters have had their case swapped.

```javascript
swapCase("hELLO");
// => "Hello"
```

#### include(string, substring) => boolean

Tests if string contains a substring.

```javascript
include("foobar", "ob");
// => true
```

#### count(string, substring) => number

Returns number of occurrences of substring in string.

```javascript
count("Hello world", "l");
// => 3
```

#### escapeHTML(string) => string

Converts HTML special characters to their entity equivalents.
This function supports cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos.

```javascript
escapeHTML("<div>Blah blah blah</div>");
// => "&lt;div&gt;Blah blah blah&lt;/div&gt;"
```

#### unescapeHTML(string) => string

Converts entity characters to HTML equivalents.
This function supports cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos, nbsp.

```javascript
unescapeHTML("&lt;div&gt;Blah&nbsp;blah blah&lt;/div&gt;");
// => "<div>Blah blah blah</div>"
```

#### insert(string, index, substring) => string

```javascript
insert("Hellworld", 4, "o ");
// => "Hello world"
```

#### replaceAll(string, find, replace, [ignorecase=false]) => string

```javascript
replaceAll("foo", "o", "a");
// => "faa"
```

#### isBlank(string) => boolean

```javascript
isBlank(""); // => true
isBlank("\n"); // => true
isBlank(" "); // => true
isBlank("a"); // => false
```

#### join(separator, ...strings) => string

Joins strings together with given separator

```javascript
join(" ", "foo", "bar");
// => "foo bar"
```

#### lines(str) => array

Split lines to an array

```javascript
lines("Hello\nWorld");
// => ["Hello", "World"]
```

#### wrap(str, options) => string

Splits a line `str` (default '') into several lines of size `options.width` (default 75) using a `options.seperator` (default '\n'). If `options.trailingSpaces` is true, make each line at least `width` long using trailing spaces. If `options.cut` is true, create new lines in the middle of words. If `options.preserveSpaces` is true, preserve the space that should be there at the end of a line (only works if options.cut is false).

```javascript
wrap("Hello World", { width:5 })
// => "Hello\nWorld"

wrap("Hello World", { width:6, seperator:'.', trailingSpaces: true })
// => "Hello .World "

wrap("Hello World", { width:5, seperator:'.', cut:true, trailingSpaces: true })
// => "Hello. Worl.d    "

wrap("Hello World", { width:5, seperator:'.', preserveSpaces: true })
// => "Hello .World"

```

#### dedent(str, [pattern]) => string

Dedent unnecessary indentation or dedent by a pattern.

Credits go to @sindresorhus.
This implementation is similar to https://github.com/sindresorhus/strip-indent

```javascript
dedent("  Hello\n    World");
// => "Hello\n  World"

dedent("\t\tHello\n\t\t\t\tWorld");
// => "Hello\n\t\tWorld"

dedent("    Hello\n    World", "  "); // Dedent by 2 spaces
// => "  Hello\n  World"
```

#### reverse(string) => string

Return reversed string:

```javascript
reverse("foobar");
// => "raboof"
```

#### splice(string, index, howmany, substring) => string

Like an array splice.

```javascript
splice("https://edtsech@bitbucket.org/edtsech/underscore.strings", 30, 7, "epeli");
// => "https://edtsech@bitbucket.org/epeli/underscore.strings"
```

#### startsWith(string, starts, [position]) => boolean

This method checks whether the string begins with `starts` at `position` (default: 0).

```javascript
startsWith("image.gif", "image");
// => true

startsWith(".vimrc", "vim", 1);
// => true
```

#### endsWith(string, ends, [position]) => boolean

This method checks whether the string ends with `ends` at `position` (default: string.length).

```javascript
endsWith("image.gif", "gif");
// => true

endsWith("image.old.gif", "old", 9);
// => true
```

#### pred(string) => string

Returns the predecessor to str.

```javascript
pred("b");
// => "a"

pred("B");
// => "A"
```

#### succ(string) => string

Returns the successor to str.

```javascript
succ("a");
// => "b"

succ("A");
// => "B"
```


#### titleize(string) => string

```javascript
titleize("my name is epeli");
// => "My Name Is Epeli"
```

#### camelize(string, [decapitalize=false]) => string

Converts underscored or dasherized string to a camelized one. Begins with
a lower case letter unless it starts with an underscore, dash or an upper case letter.

```javascript
camelize("moz-transform");
// => "mozTransform"

camelize("-moz-transform");
// => "MozTransform"

camelize("_moz_transform");
// => "MozTransform"

camelize("Moz-transform");
// => "MozTransform"

camelize("-moz-transform", true);
// => "mozTransform"
```

#### classify(string) => string

Converts string to camelized class name. First letter is always upper case

```javascript
classify("some_class_name");
// => "SomeClassName"
```

#### underscored(string) => string

Converts a camelized or dasherized string into an underscored one

```javascript
underscored("MozTransform");
// => "moz_transform"
```

#### dasherize(string) => string

Converts a underscored or camelized string into an dasherized one

```javascript
dasherize("MozTransform");
// => "-moz-transform"
```

#### humanize(string) => string

Converts an underscored, camelized, or dasherized string into a humanized one.
Also removes beginning and ending whitespace, and removes the postfix '_id'.

```javascript
humanize("  capitalize dash-CamelCase_underscore trim  ");
// => "Capitalize dash camel case underscore trim"
```

#### trim(string, [characters]) => string

Trims defined characters from begining and ending of the string.
Defaults to whitespace characters.

```javascript
trim("  foobar   ");
// => "foobar"

trim("_-foobar-_", "_-");
// => "foobar"
```


#### ltrim(string, [characters]) => string

Left trim. Similar to trim, but only for left side.

#### rtrim(string, [characters]) => string

Right trim. Similar to trim, but only for right side.

#### truncate(string, length, [truncateString = '...']) => string

```javascript
truncate("Hello world", 5);
// => "Hello..."

truncate("Hello", 10);
// => "Hello"
```

#### prune(string, length, pruneString) => string

Elegant version of truncate.  Makes sure the pruned string does not exceed the
original length.  Avoid half-chopped words when truncating.

```javascript
prune("Hello, world", 5);
// => "Hello..."

prune("Hello, world", 8);
// => "Hello..."

prune("Hello, world", 5, " (read a lot more)");
// => "Hello, world" (as adding "(read a lot more)" would be longer than the original string)

prune("Hello, cruel world", 15);
// => "Hello, cruel..."

prune("Hello", 10);
// => "Hello"
```

#### words(str, delimiter=/\s+/) => array

Split string by delimiter (String or RegExp), /\s+/ by default.

```javascript
words("   I   love   you   ");
// => ["I", "love", "you"]

words("I_love_you", "_");
// => ["I", "love", "you"]

words("I-love-you", /-/);
// => ["I", "love", "you"]

words("   ")
// => []
```

#### sprintf(string format, ...arguments) => string

C like string formatting. Makes use of the [sprintf-js](https://npmjs.org/package/sprintf-js) package.

**This function will be removed in the next major release, use the [sprintf-js](https://npmjs.org/package/sprintf-js) package instead.**

```javascript
sprintf("%.1f", 1.17);
// => "1.2"
```

#### pad(str, length, [padStr, type]) => string

pads the `str` with characters until the total string length is equal to the passed `length` parameter. By default, pads on the **left** with the space char (`" "`). `padStr` is truncated to a single character if necessary.

```javascript
pad("1", 8);
// => "       1"

pad("1", 8, "0");
// => "00000001"

pad("1", 8, "0", "right");
// => "10000000"

pad("1", 8, "0", "both");
// => "00001000"

pad("1", 8, "bleepblorp", "both");
// => "bbbb1bbb"
```

#### lpad(str, length, [padStr]) => string

left-pad a string. Alias for `pad(str, length, padStr, "left")`

```javascript
lpad("1", 8, "0");
// => "00000001"
```

#### rpad(str, length, [padStr]) => string

right-pad a string. Alias for `pad(str, length, padStr, "right")`

```javascript
rpad("1", 8, "0");
// => "10000000"
```

#### lrpad(str, length, [padStr]) => string

left/right-pad a string. Alias for `pad(str, length, padStr, "both")`

```javascript
lrpad("1", 8, '0');
// => "00001000"
```


#### toNumber(string, [decimals]) => number

Parse string to number. Returns NaN if string can't be parsed to number.

```javascript
toNumber("2.556");
// => 3

toNumber("2.556", 1);
// => 2.6

toNumber("999.999", -1);
// => 990
```

#### strRight(string, pattern) => string

Searches a string from left to right for a pattern and returns a substring consisting of the characters in the string that are to the right of the pattern or all string if no match found.

```javascript
strRight("This_is_a_test_string", "_");
// => "is_a_test_string"
```

#### strRightBack(string, pattern) => string

Searches a string from right to left for a pattern and returns a substring consisting of the characters in the string that are to the right of the pattern or all string if no match found.

```javascript
strRightBack("This_is_a_test_string", "_");
// => "string"
```

#### strLeft(string, pattern) => string

Searches a string from left to right for a pattern and returns a substring consisting of the characters in the string that are to the left of the pattern or all string if no match found.

```javascript
strLeft("This_is_a_test_string", "_");
// => "This";
```

#### strLeftBack(string, pattern) => string

Searches a string from right to left for a pattern and returns a substring consisting of the characters in the string that are to the left of the pattern or all string if no match found.

```javascript
strLeftBack("This_is_a_test_string", "_");
// => "This_is_a_test";
```

#### stripTags(string) => string

Removes all html tags from string.

```javascript
stripTags("a <a href=\"#\">link</a>");
// => "a link"

stripTags("a <a href=\"#\">link</a><script>alert(\"hello world!\")</script>");
// => "a linkalert("hello world!")"
```

#### toSentence(array, [delimiter, lastDelimiter]) => string

Join an array into a human readable sentence.

```javascript
toSentence(["jQuery", "Mootools", "Prototype"]);
// => "jQuery, Mootools and Prototype";

toSentence(["jQuery", "Mootools", "Prototype"], ", ", " unt ");
// => "jQuery, Mootools unt Prototype";
```

#### toSentenceSerial(array, [delimiter, lastDelimiter]) => string

The same as `toSentence`, but adjusts delimeters to use [Serial comma](http://en.wikipedia.org/wiki/Serial_comma).

```javascript
toSentenceSerial(["jQuery", "Mootools"]);
// => "jQuery and Mootools"

toSentenceSerial(["jQuery", "Mootools", "Prototype"]);
// => "jQuery, Mootools, and Prototype"

toSentenceSerial(["jQuery", "Mootools", "Prototype"], ", ", " unt ");
// => "jQuery, Mootools, unt Prototype"
```

#### repeat(string, count, [separator]) => string

Repeats a string count times.

```javascript
repeat("foo", 3);
// => "foofoofoo"

repeat("foo", 3, "bar");
// => "foobarfoobarfoo"
```

#### surround(string, wrap) => string

Surround a string with another string.

```javascript
surround("foo", "ab");
// => "abfooab"
```

#### quote(string, quoteChar) or q(string, quoteChar) => string

Quotes a string. `quoteChar` defaults to `"`.

```javascript
quote("foo", '"');
// => '"foo"';
```
#### unquote(string, quoteChar) => string

Unquotes a string. `quoteChar` defaults to `"`.

```javascript
unquote('"foo"');
// => "foo"

unquote("'foo'", "'");
// => "foo"
```


#### slugify(string) => string

Transform text into an ascii slug which can be used in safely in URLs. Replaces whitespaces, accentuated, and special characters with a dash. Limited set of non-ascii characters are transformed to similar versions in the ascii character set such as `ä` to `a`.

```javascript
slugify("Un éléphant à l\'orée du bois");
// => "un-elephant-a-l-oree-du-bois"
```

***Caution: this function is charset dependent***

#### naturalCmp(string1, string2) => number

Naturally sort strings like humans would do. None numbers are compared by their [ASCII values](http://www.asciitable.com/). Note: this means "a" > "A". Use `.toLowerCase` if this isn't to be desired.

Just past it to `Array#sort`.

```javascript
["foo20", "foo5"].sort(naturalCmp);
// => ["foo5", "foo20"]
```

#### toBoolean(string) => boolean

Turn strings that can be commonly considered as booleas to real booleans. Such as "true", "false", "1" and "0". This function is case insensitive.

```javascript
toBoolean("true");
// => true

toBoolean("FALSE");
// => false

toBoolean("random");
// => undefined
```

It can be customized by giving arrays of truth and falsy value matcher as parameters. Matchers can be also RegExp objects.

```javascript
toBoolean("truthy", ["truthy"], ["falsy"]);
// => true

toBoolean("true only at start", [/^true/]);
// => true
```

#### map(string, function) => string

Creates a new string with the results of calling a provided function on every character of the given string.

```javascript
map("Hello world", function(x) {
  return x;
});
// => "Hello world"

map(12345, function(x) {
  return x;
});
// => "12345"

map("Hello world", function(x) {
  if (x === 'o') x = 'O';
  return x;
});
// => "HellO wOrld"
```

### Library functions

If you require the full library you can use chaining and aliases

#### s(string) => chain

Start a chain. Returns an immutable chain object with the string functions as
methods which return a new chain object instead of the plain string value.

The chain object includes also following native Javascript string methods:

  - [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  - [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  - [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
  - [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
  - [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
  - [substring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
  - [substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
  - [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

#### chain.value()

Return the string value from the chain

```javascript
s("  foo  ").trim().capitalize().value();
// => "Foo"
```

When calling a method which does not return a string the resulting value is
immediately returned

```javascript
s(" foobar ").trim().startsWith("foo");
// => true
```

#### chain.tap(function) => chain

Tap into the chain with a custom function

```javascript
s("foo").tap(function(value){
  return value + "bar";
}).value();
// => "foobar"
```


#### Aliases

```javascript
strip     = trim
lstrip    = ltrim
rstrip    = rtrim
center    = lrpad
rjust     = lpad
ljust     = rpad
contains  = include
q         = quote
toBool    = toBoolean
camelcase = camelize
```

## Maintainers ##

This library is maintained by

  - Esa-Matti Suuronen – ***[@epeli](https://github.com/epeli)***
  - Christoph Hermann – ***[@stoeffel](https://github.com/stoeffel)***

## Licence ##

The MIT License

Copyright (c) 2011 Esa-Matti Suuronen esa-matti@suuronen.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[d]: http://www.diveintojavascript.com/core-javascript-reference/the-string-object
