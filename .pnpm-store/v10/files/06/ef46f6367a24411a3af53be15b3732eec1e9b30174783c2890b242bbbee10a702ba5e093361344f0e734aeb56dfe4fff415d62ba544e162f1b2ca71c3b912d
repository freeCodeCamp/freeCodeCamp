# Graphemer: Unicode Character Splitter 🪓

## Introduction

This library continues the work of [Grapheme Splitter](https://github.com/orling/grapheme-splitter) and supports the following unicode versions:

- Unicode 15 and below `[v1.4.0]`
- Unicode 14 and below `[v1.3.0]`
- Unicode 13 and below `[v1.1.0]`
- Unicode 11 and below `[v1.0.0]` (Unicode 10 supported by `grapheme-splitter`)

In JavaScript there is not always a one-to-one relationship between string characters and what a user would call a separate visual "letter". Some symbols are represented by several characters. This can cause issues when splitting strings and inadvertently cutting a multi-char letter in half, or when you need the actual number of letters in a string.

For example, emoji characters like "🌷","🎁","💩","😜" and "👍" are represented by two JavaScript characters each (high surrogate and low surrogate). That is,

```javascript
'🌷'.length == 2;
```

The combined emoji are even longer:

```javascript
'🏳️‍🌈'.length == 6;
```

What's more, some languages often include combining marks - characters that are used to modify the letters before them. Common examples are the German letter ü and the Spanish letter ñ. Sometimes they can be represented alternatively both as a single character and as a letter + combining mark, with both forms equally valid:

```javascript
var two = 'ñ'; // unnormalized two-char n+◌̃, i.e. "\u006E\u0303";
var one = 'ñ'; // normalized single-char, i.e. "\u00F1"

console.log(one != two); // prints 'true'
```

Unicode normalization, as performed by the popular punycode.js library or ECMAScript 6's String.normalize, can **sometimes** fix those differences and turn two-char sequences into single characters. But it is **not** enough in all cases. Some languages like Hindi make extensive use of combining marks on their letters, that have no dedicated single-codepoint Unicode sequences, due to the sheer number of possible combinations.
For example, the Hindi word "अनुच्छेद" is comprised of 5 letters and 3 combining marks:

अ + न + ु + च + ् + छ + े + द

which is in fact just 5 user-perceived letters:

अ + नु + च् + छे + द

and which Unicode normalization would not combine properly.
There are also the unusual letter+combining mark combinations which have no dedicated Unicode codepoint. The string Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘ obviously has 5 separate letters, but is in fact comprised of 58 JavaScript characters, most of which are combining marks.

Enter the `graphemer` library. It can be used to properly split JavaScript strings into what a human user would call separate letters (or "extended grapheme clusters" in Unicode terminology), no matter what their internal representation is. It is an implementation on the [Default Grapheme Cluster Boundary](http://unicode.org/reports/tr29/#Default_Grapheme_Cluster_Table) of [UAX #29](http://www.unicode.org/reports/tr29/).

## Installation

Install `graphemer` using the NPM command below:

```
$ npm i graphemer
```

## Usage

If you're using [Typescript](https://www.typescriptlang.org/) or a compiler like [Babel](https://babeljs.io/) (or something like Create React App) things are pretty simple; just import, initialize and use!

```javascript
import Graphemer from 'graphemer';

const splitter = new Graphemer();

// split the string to an array of grapheme clusters (one string each)
const graphemes = splitter.splitGraphemes(string);

// iterate the string to an iterable iterator of grapheme clusters (one string each)
const graphemeIterator = splitter.iterateGraphemes(string);

// or do this if you just need their number
const graphemeCount = splitter.countGraphemes(string);
```

If you're using vanilla Node you can use the `require()` method.

```javascript
const Graphemer = require('graphemer').default;

const splitter = new Graphemer();

const graphemes = splitter.splitGraphemes(string);
```

## Examples

```javascript
import Graphemer from 'graphemer';

const splitter = new Graphemer();

// plain latin alphabet - nothing spectacular
splitter.splitGraphemes('abcd'); // returns ["a", "b", "c", "d"]

// two-char emojis and six-char combined emoji
splitter.splitGraphemes('🌷🎁💩😜👍🏳️‍🌈'); // returns ["🌷","🎁","💩","😜","👍","🏳️‍🌈"]

// diacritics as combining marks, 10 JavaScript chars
splitter.splitGraphemes('Ĺo͂řȩm̅'); // returns ["Ĺ","o͂","ř","ȩ","m̅"]

// individual Korean characters (Jamo), 4 JavaScript chars
splitter.splitGraphemes('뎌쉐'); // returns ["뎌","쉐"]

// Hindi text with combining marks, 8 JavaScript chars
splitter.splitGraphemes('अनुच्छेद'); // returns ["अ","नु","च्","छे","द"]

// demonic multiple combining marks, 75 JavaScript chars
splitter.splitGraphemes('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞'); // returns ["Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍","A̴̵̜̰͔ͫ͗͢","L̠ͨͧͩ͘","G̴̻͈͍͔̹̑͗̎̅͛́","Ǫ̵̹̻̝̳͂̌̌͘","!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞"]
```

## TypeScript

Graphemer is built with TypeScript and, of course, includes type declarations.

```javascript
import Graphemer from 'graphemer';

const splitter = new Graphemer();

const split: string[] = splitter.splitGraphemes('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞');
```

## Contributing

See [Contribution Guide](./CONTRIBUTING.md).

## Acknowledgements

This library is a fork of the incredible work done by Orlin Georgiev and Huáng Jùnliàng at https://github.com/orling/grapheme-splitter.

The original library was heavily influenced by Devon Govett's excellent [grapheme-breaker](https://github.com/devongovett/grapheme-breaker) CoffeeScript library.
