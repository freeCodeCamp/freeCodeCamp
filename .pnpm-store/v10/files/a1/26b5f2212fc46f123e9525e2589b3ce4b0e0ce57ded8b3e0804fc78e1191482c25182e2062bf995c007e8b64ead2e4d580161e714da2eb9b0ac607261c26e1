# ansi-styles

> [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles) for styling strings in the terminal

You probably want the higher-level [chalk](https://github.com/chalk/chalk) module for styling your strings.

<img src="screenshot.svg" width="900">

## Install

```
$ npm install ansi-styles
```

## Usage

```js
const style = require('ansi-styles');

console.log(`${style.green.open}Hello world!${style.green.close}`);


// Color conversion between 256/truecolor
// NOTE: When converting from truecolor to 256 colors, the original color
//       may be degraded to fit the new color palette. This means terminals
//       that do not support 16 million colors will best-match the
//       original color.
console.log(`${style.color.ansi256(style.rgbToAnsi256(199, 20, 250))}Hello World${style.color.close}`)
console.log(`${style.color.ansi16m(...style.hexToRgb('#abcdef'))}Hello World${style.color.close}`)
```

## API

Each style has an `open` and `close` property.

## Styles

### Modifiers

- `reset`
- `bold`
- `dim`
- `italic` *(Not widely supported)*
- `underline`
- `overline` *Supported on VTE-based terminals, the GNOME terminal, mintty, and Git Bash.*
- `inverse`
- `hidden`
- `strikethrough` *(Not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright` (alias: `gray`, `grey`)
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlackBright` (alias: `bgGray`, `bgGrey`)
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

## Advanced usage

By default, you get a map of styles, but the styles are also available as groups. They are non-enumerable so they don't show up unless you access them explicitly. This makes it easier to expose only a subset in a higher-level module.

- `style.modifier`
- `style.color`
- `style.bgColor`

###### Example

```js
console.log(style.color.green.open);
```

Raw escape codes (i.e. without the CSI escape prefix `\u001B[` and render mode postfix `m`) are available under `style.codes`, which returns a `Map` with the open codes as keys and close codes as values.

###### Example

```js
console.log(style.codes.get(36));
//=> 39
```

## [256 / 16 million (TrueColor) support](https://gist.github.com/XVilka/8346728)

`ansi-styles` allows converting between various color formats and ANSI escapes, with support for 256 and 16 million colors.

The following color spaces from `color-convert` are supported:

- `rgb`
- `hex`
- `ansi256`

To use these, call the associated conversion function with the intended output, for example:

```js
style.color.ansi256(style.rgbToAnsi256(100, 200, 15)); // RGB to 256 color ansi foreground code
style.bgColor.ansi256(style.hexToAnsi256('#C0FFEE')); // HEX to 256 color ansi foreground code

style.color.ansi16m(100, 200, 15); // RGB to 16 million color foreground code
style.bgColor.ansi16m(...style.hexToRgb('#C0FFEE')); // Hex (RGB) to 16 million color foreground code
```

## Related

- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - ANSI escape codes for manipulating the terminal

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Josh Junon](https://github.com/qix-)

## For enterprise

Available as part of the Tidelift Subscription.

The maintainers of `ansi-styles` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-ansi-styles?utm_source=npm-ansi-styles&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
