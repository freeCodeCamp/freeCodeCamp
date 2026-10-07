<div align="center">
  <img src="shots/logo.png" alt="kleur" height="120" />
</div>

<div align="center">
  <a href="https://npmjs.org/package/kleur">
    <img src="https://badgen.now.sh/npm/v/kleur" alt="version" />
  </a>
  <a href="https://travis-ci.org/lukeed/kleur">
    <img src="https://badgen.now.sh/travis/lukeed/kleur" alt="travis" />
  </a>
  <a href="https://npmjs.org/package/kleur">
    <img src="https://badgen.now.sh/npm/dm/kleur" alt="downloads" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=kleur">
    <img src="https://packagephobia.now.sh/badge?p=kleur" alt="install size" />
  </a>
</div>

<div align="center">The fastest Node.js library for formatting terminal text with ANSI colors~!</div>

## Features

* No dependencies
* Super [lightweight](#load-time) & [performant](#performance)
* Supports [nested](#nested-methods) & [chained](#chained-methods) colors
* No `String.prototype` modifications
* Conditional [color support](#conditional-support)
* Familiar [API](#api)

---

As of `v3.0` the Chalk-style syntax (magical getter) is no longer used.<br>If you need or require that syntax, consider using [`ansi-colors`](https://github.com/doowb/ansi-colors), which maintains `chalk` parity.

---


## Install

```
$ npm install --save kleur
```


## Usage

```js
const { red, white, blue, bold } = require('kleur');

// basic usage
red('red text');

// chained methods
blue().bold().underline('howdy partner');

// nested methods
bold(`${ white().bgRed('[ERROR]') } ${ red().italic('Something happened')}`);
```

### Chained Methods

```js
console.log(bold().red('this is a bold red message'));
console.log(bold().italic('this is a bold italicized message'));
console.log(bold().yellow().bgRed().italic('this is a bold yellow italicized message'));
console.log(green().bold().underline('this is a bold green underlined message'));
```

<img src="shots/1.png" width="300" />

### Nested Methods

```js
const { yellow, red, cyan } = require('kleur');

console.log(yellow(`foo ${red().bold('red')} bar ${cyan('cyan')} baz`));
console.log(yellow('foo ' + red().bold('red') + ' bar ' + cyan('cyan') + ' baz'));
```

<img src="shots/2.png" width="300" />


### Conditional Support

Toggle color support as needed; `kleur` includes simple auto-detection which may not cover all cases.

```js
const kleur = require('kleur');

// manually disable
kleur.enabled = false;

// or use another library to detect support
kleur.enabled = require('color-support').level;

console.log(kleur.red('I will only be colored red if the terminal supports colors'));
```


## API

Any `kleur` method returns a `String` when invoked with input; otherwise chaining is expected.

> It's up to the developer to pass the output to destinations like `console.log`, `process.stdout.write`, etc.

The methods below are grouped by type for legibility purposes only. They each can be [chained](#chained-methods) or [nested](#nested-methods) with one another.

***Colors:***
> black &mdash; red &mdash; green &mdash; yellow &mdash; blue &mdash; magenta &mdash; cyan &mdash; white &mdash; gray &mdash; grey

***Backgrounds:***
> bgBlack &mdash; bgRed &mdash; bgGreen &mdash; bgYellow &mdash; bgBlue &mdash; bgMagenta &mdash; bgCyan &mdash; bgWhite

***Modifiers:***
> reset &mdash; bold &mdash; dim &mdash; italic* &mdash; underline &mdash; inverse &mdash; hidden &mdash; strikethrough*

<sup>* <em>Not widely supported</em></sup>


## Benchmarks

> Using Node v10.13.0

### Load time

```
chalk       :: 14.543ms
kleur       ::  0.474ms
ansi-colors ::  1.923ms
```

### Performance

```
# All Colors
  ansi-colors  x 199,381 ops/sec ±1.04% (96 runs sampled)
  chalk        x  12,107 ops/sec ±2.07% (87 runs sampled)
  kleur        x 715,334 ops/sec ±0.30% (93 runs sampled)

# Stacked colors
  ansi-colors  x 24,494 ops/sec ±1.03% (93 runs sampled)
  chalk        x  2,650 ops/sec ±2.06% (85 runs sampled)
  kleur        x 75,798 ops/sec ±0.19% (97 runs sampled)

# Nested colors
  ansi-colors  x  77,766 ops/sec ±0.32% (94 runs sampled)
  chalk        x   5,596 ops/sec ±1.85% (86 runs sampled)
  kleur        x 137,660 ops/sec ±0.31% (93 runs sampled)
```


## Credits

This project originally forked [Brian Woodward](https://github.com/doowb)'s awesome [`ansi-colors`](https://github.com/doowb/ansi-colors) library.

Beginning with `kleur@3.0`, the Chalk-style syntax (magical getter) has been replaced with function calls per key:

```js
// Old:
c.red.bold.underline('old');

// New:
c.red().bold().underline('new');
```
> <sup><em>As I work more with Rust, the newer syntax feels so much better & more natural!</em></sup>

If you prefer the old syntax, you may migrate to `ansi-colors`. Versions below `kleur@3.0` have been deprecated.


## License

MIT © [Luke Edwards](https://lukeed.com)
