# ansi-colors [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W8YFZ425KND68) [![NPM version](https://img.shields.io/npm/v/ansi-colors.svg?style=flat)](https://www.npmjs.com/package/ansi-colors) [![NPM monthly downloads](https://img.shields.io/npm/dm/ansi-colors.svg?style=flat)](https://npmjs.org/package/ansi-colors) [![NPM total downloads](https://img.shields.io/npm/dt/ansi-colors.svg?style=flat)](https://npmjs.org/package/ansi-colors) [![Linux Build Status](https://img.shields.io/travis/doowb/ansi-colors.svg?style=flat&label=Travis)](https://travis-ci.org/doowb/ansi-colors)

> Easily add ANSI colors to your text and symbols in the terminal. A faster drop-in replacement for chalk, kleur and turbocolor (without the dependencies and rendering bugs).

Please consider following this project's author, [Brian Woodward](https://github.com/doowb), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save ansi-colors
```

![image](https://user-images.githubusercontent.com/383994/39635445-8a98a3a6-4f8b-11e8-89c1-068c45d4fff8.png)

## Why use this?

ansi-colors is _the fastest Node.js library for terminal styling_. A more performant drop-in replacement for chalk, with no dependencies.

* _Blazing fast_ - Fastest terminal styling library in node.js, 10-20x faster than chalk!

* _Drop-in replacement_ for [chalk](https://github.com/chalk/chalk).
* _No dependencies_ (Chalk has 7 dependencies in its tree!)

* _Safe_ - Does not modify the `String.prototype` like [colors](https://github.com/Marak/colors.js).
* Supports [nested colors](#nested-colors), **and does not have the [nested styling bug](#nested-styling-bug) that is present in [colorette](https://github.com/jorgebucaran/colorette), [chalk](https://github.com/chalk/chalk), and [kleur](https://github.com/lukeed/kleur)**.
* Supports [chained colors](#chained-colors).
* [Toggle color support](#toggle-color-support) on or off.

## Usage

```js
const c = require('ansi-colors');

console.log(c.red('This is a red string!'));
console.log(c.green('This is a red string!'));
console.log(c.cyan('This is a cyan string!'));
console.log(c.yellow('This is a yellow string!'));
```

![image](https://user-images.githubusercontent.com/383994/39653848-a38e67da-4fc0-11e8-89ae-98c65ebe9dcf.png)

## Chained colors

```js
console.log(c.bold.red('this is a bold red message'));
console.log(c.bold.yellow.italic('this is a bold yellow italicized message'));
console.log(c.green.bold.underline('this is a bold green underlined message'));
```

![image](https://user-images.githubusercontent.com/383994/39635780-7617246a-4f8c-11e8-89e9-05216cc54e38.png)

## Nested colors

```js
console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));
```

![image](https://user-images.githubusercontent.com/383994/39635817-8ed93d44-4f8c-11e8-8afd-8c3ea35f5fbe.png)

### Nested styling bug

`ansi-colors` does not have the nested styling bug found in [colorette](https://github.com/jorgebucaran/colorette), [chalk](https://github.com/chalk/chalk), and [kleur](https://github.com/lukeed/kleur).

```js
const { bold, red } = require('ansi-styles');
console.log(bold(`foo ${red.dim('bar')} baz`));

const colorette = require('colorette');
console.log(colorette.bold(`foo ${colorette.red(colorette.dim('bar'))} baz`));

const kleur = require('kleur');
console.log(kleur.bold(`foo ${kleur.red.dim('bar')} baz`));

const chalk = require('chalk');
console.log(chalk.bold(`foo ${chalk.red.dim('bar')} baz`));
```

**Results in the following**

(sans icons and labels)

![image](https://user-images.githubusercontent.com/383994/47280326-d2ee0580-d5a3-11e8-9611-ea6010f0a253.png)

## Toggle color support

Easily enable/disable colors.

```js
const c = require('ansi-colors');

// disable colors manually
c.enabled = false;

// or use a library to automatically detect support
c.enabled = require('color-support').hasBasic;

console.log(c.red('I will only be colored red if the terminal supports colors'));
```

## Strip ANSI codes

Use the `.unstyle` method to strip ANSI codes from a string.

```js
console.log(c.unstyle(c.blue.bold('foo bar baz')));
//=> 'foo bar baz'
```

## Available styles

**Note** that bright and bright-background colors are not always supported.

| Colors  | Background Colors | Bright Colors | Bright Background Colors |
| ------- | ----------------- | ------------- | ------------------------ |
| black   | bgBlack           | blackBright   | bgBlackBright            |
| red     | bgRed             | redBright     | bgRedBright              |
| green   | bgGreen           | greenBright   | bgGreenBright            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           |
| blue    | bgBlue            | blueBright    | bgBlueBright             |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |
| gray    |                   |               |                          |
| grey    |                   |               |                          |

_(`gray` is the U.S. spelling, `grey` is more commonly used in the Canada and U.K.)_

### Style modifiers

* dim
* **bold**

* hidden
* _italic_

* underline
* inverse
* ~~strikethrough~~

* reset

## Aliases

Create custom aliases for styles.

```js
const colors = require('ansi-colors');

colors.alias('primary', colors.yellow);
colors.alias('secondary', colors.bold);

console.log(colors.primary.secondary('Foo'));
```

## Themes

A theme is an object of custom aliases.

```js
const colors = require('ansi-colors');

colors.theme({
  danger: colors.red,
  dark: colors.dim.gray,
  disabled: colors.gray,
  em: colors.italic,
  heading: colors.bold.underline,
  info: colors.cyan,
  muted: colors.dim,
  primary: colors.blue,
  strong: colors.bold,
  success: colors.green,
  underline: colors.underline,
  warning: colors.yellow
});

// Now, we can use our custom styles alongside the built-in styles!
console.log(colors.danger.strong.em('Error!'));
console.log(colors.warning('Heads up!'));
console.log(colors.info('Did you know...'));
console.log(colors.success.bold('It worked!'));
```

## Performance

**Libraries tested**

* ansi-colors v3.0.4
* chalk v2.4.1

### Mac

> MacBook Pro, Intel Core i7, 2.3 GHz, 16 GB.

**Load time**

Time it takes to load the first time `require()` is called:

* ansi-colors - `1.915ms`
* chalk - `12.437ms`

**Benchmarks**

```
# All Colors
  ansi-colors x 173,851 ops/sec ±0.42% (91 runs sampled)
  chalk x 9,944 ops/sec ±2.53% (81 runs sampled)))

# Chained colors
  ansi-colors x 20,791 ops/sec ±0.60% (88 runs sampled)
  chalk x 2,111 ops/sec ±2.34% (83 runs sampled)

# Nested colors
  ansi-colors x 59,304 ops/sec ±0.98% (92 runs sampled)
  chalk x 4,590 ops/sec ±2.08% (82 runs sampled)
```

### Windows

> Windows 10, Intel Core i7-7700k CPU @ 4.2 GHz, 32 GB

**Load time**

Time it takes to load the first time `require()` is called:

* ansi-colors - `1.494ms`
* chalk - `11.523ms`

**Benchmarks**

```
# All Colors
  ansi-colors x 193,088 ops/sec ±0.51% (95 runs sampled))
  chalk x 9,612 ops/sec ±3.31% (77 runs sampled)))

# Chained colors
  ansi-colors x 26,093 ops/sec ±1.13% (94 runs sampled)
  chalk x 2,267 ops/sec ±2.88% (80 runs sampled))

# Nested colors
  ansi-colors x 67,747 ops/sec ±0.49% (93 runs sampled)
  chalk x 4,446 ops/sec ±3.01% (82 runs sampled))
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Related projects

You might also be interested in these projects:

* [ansi-wrap](https://www.npmjs.com/package/ansi-wrap): Create ansi colors by passing the open and close codes. | [homepage](https://github.com/jonschlinkert/ansi-wrap "Create ansi colors by passing the open and close codes.")
* [strip-color](https://www.npmjs.com/package/strip-color): Strip ANSI color codes from a string. No dependencies. | [homepage](https://github.com/jonschlinkert/strip-color "Strip ANSI color codes from a string. No dependencies.")

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 48 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 42 | [doowb](https://github.com/doowb) |  
| 6  | [lukeed](https://github.com/lukeed) |  
| 2  | [Silic0nS0ldier](https://github.com/Silic0nS0ldier) |  
| 1  | [dwieeb](https://github.com/dwieeb) |  
| 1  | [jorgebucaran](https://github.com/jorgebucaran) |  
| 1  | [madhavarshney](https://github.com/madhavarshney) |  
| 1  | [chapterjason](https://github.com/chapterjason) |  

### Author

**Brian Woodward**

* [GitHub Profile](https://github.com/doowb)
* [Twitter Profile](https://twitter.com/doowb)
* [LinkedIn Profile](https://linkedin.com/in/woodwardbrian)

### License

Copyright © 2019, [Brian Woodward](https://github.com/doowb).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on July 01, 2019._