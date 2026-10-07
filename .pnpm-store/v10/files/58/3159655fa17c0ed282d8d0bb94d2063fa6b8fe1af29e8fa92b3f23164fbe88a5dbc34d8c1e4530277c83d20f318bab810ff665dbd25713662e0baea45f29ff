# 🌈Colorette

> Easily set your terminal text color & styles.

- No dependecies
- Automatic color support detection
- Up to [2x faster](#benchmarks) than alternatives
- TypeScript support
- [`NO_COLOR`](https://no-color.org) friendly
- Node >= `10`

> [**Upgrading from Colorette `1.x`?**](https://github.com/jorgebucaran/colorette/issues/70)

## Quickstart

```js
import { blue, bold, underline } from "colorette"

console.log(
  blue("I'm blue"),
  bold(blue("da ba dee")),
  underline(bold(blue("da ba daa")))
)
```

Here's an example using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

```js
console.log(`
  There's a ${underline(blue("house"))},
  With a ${bold(blue("window"))},
  And a ${blue("corvette")}
  And everything is blue
`)
```

You can also nest styles without breaking existing color sequences.

```js
console.log(bold(`I'm ${blue(`da ba ${underline("dee")} da ba`)} daa`))
```

Need to override terminal color detection? You can do that too.

```js
import { createColors } from "colorette"

const { blue } = createColors({ useColor: false })

console.log(blue("Blue? Nope, nah"))
```

## Installation

```console
npm install colorette
```

## API

### \<color\>()

> See all [supported colors](#supported-colors).

```js
import { blue } from "colorette"

blue("I'm blue") //=> \x1b[34mI'm blue\x1b[39m
```

### createColors()

Override terminal color detection via `createColors({ useColor })`.

```js
import { createColors } from "colorette"

const { blue } = createColors({ useColor: false })
```

### isColorSupported

`true` if your terminal supports color, `false` otherwise. Used internally, but exposed for convenience.

## Environment

You can override color detection from the CLI by setting the `--no-color` or `--color` flags.

```console
$ ./example.js --no-color | ./consumer.js
```

Or if you can't use CLI flags, by setting the `NO_COLOR=` or `FORCE_COLOR=` environment variables.

```console
$ NO_COLOR= ./example.js | ./consumer.js
```

## Supported colors

| Colors  | Background Colors | Bright Colors | Bright Background Colors | Modifiers         |
| ------- | ----------------- | ------------- | ------------------------ | ----------------- |
| black   | bgBlack           | blackBright   | bgBlackBright            | dim               |
| red     | bgRed             | redBright     | bgRedBright              | **bold**          |
| green   | bgGreen           | greenBright   | bgGreenBright            | hidden            |
| yellow  | bgYellow          | yellowBright  | bgYellowBright           | _italic_          |
| blue    | bgBlue            | blueBright    | bgBlueBright             | <u>underline</u>  |
| magenta | bgMagenta         | magentaBright | bgMagentaBright          | ~~strikethrough~~ |
| cyan    | bgCyan            | cyanBright    | bgCyanBright             | reset             |
| white   | bgWhite           | whiteBright   | bgWhiteBright            |                   |
| gray    |                   |               |                          |                   |

## [Benchmarks](https://github.com/jorgebucaran/colorette/actions/workflows/bench.yml)

```console
npm --prefix bench start
```

```diff
  chalk         1,786,703 ops/sec
  kleur         1,618,960 ops/sec
  colors          646,823 ops/sec
  ansi-colors     786,149 ops/sec
  picocolors    2,871,758 ops/sec
+ colorette     3,002,751 ops/sec
```

## Acknowledgments

Colorette started out in 2015 by [@jorgebucaran](https://github.com/jorgebucaran) as a lightweight alternative to [Chalk](https://github.com/chalk/chalk) and was introduced originally as [Clor](https://github.com/jorgebucaran/colorette/commit/b01b5b9961ceb7df878583a3002e836fae9e37ce). Our terminal color detection logic borrows heavily from [@sindresorhus](https://github.com/sindresorhus) and [@Qix-](https://github.com/Qix-) work on Chalk. The idea of slicing strings to clear bleeding sequences was adapted from a similar technique used by [@alexeyraspopov](https://github.com/alexeyraspopov) in [picocolors](https://github.com/alexeyraspopov/picocolors). Thank you to all our contributors! <3

## License

[MIT](LICENSE.md)
