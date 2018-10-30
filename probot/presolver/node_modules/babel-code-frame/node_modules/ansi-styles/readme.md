# ansi-styles [![Build Status](https://travis-ci.org/chalk/ansi-styles.svg?branch=master)](https://travis-ci.org/chalk/ansi-styles)

> [ANSI escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles) for styling strings in the terminal

You probably want the higher-level [chalk](https://github.com/chalk/chalk) module for styling your strings.

![](screenshot.png)


## Install

```
$ npm install --save ansi-styles
```


## Usage

```js
var ansi = require('ansi-styles');

console.log(ansi.green.open + 'Hello world!' + ansi.green.close);
```


## API

Each style has an `open` and `close` property.


## Styles

### Modifiers

- `reset`
- `bold`
- `dim`
- `italic` *(not widely supported)*
- `underline`
- `inverse`
- `hidden`
- `strikethrough` *(not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`


## Advanced usage

By default you get a map of styles, but the styles are also available as groups. They are non-enumerable so they don't show up unless you access them explicitly. This makes it easier to expose only a subset in a higher-level module.

- `ansi.modifiers`
- `ansi.colors`
- `ansi.bgColors`


###### Example

```js
console.log(ansi.colors.green.open);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
