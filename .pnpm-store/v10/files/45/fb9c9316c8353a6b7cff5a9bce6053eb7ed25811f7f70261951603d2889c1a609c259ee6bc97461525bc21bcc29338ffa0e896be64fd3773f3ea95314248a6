# ora

> Elegant terminal spinner

<p align="center">
	<br>
	<img src="screenshot.svg" width="500">
	<br>
</p>

## Install

```
$ npm install ora
```

## Usage

```js
const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
```

## API

### ora(text)
### ora(options)

If a string is provided, it is treated as a shortcut for [`options.text`](#text).

#### options

Type: `object`

##### text

Type: `string`

Text to display after the spinner.

##### prefixText

Type: `string | () => string`

Text or a function that returns text to display before the spinner. No prefix text will be displayed if set to an empty string.

##### spinner

Type: `string | object`\
Default: `'dots'` <img src="screenshot-spinner.gif" width="14">

Name of one of the [provided spinners](https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json). See `example.js` in this repo if you want to test out different spinners. On Windows, it will always use the `line` spinner as the Windows command-line doesn't have proper Unicode support.

Or an object like:

```js
{
	interval: 80, // Optional
	frames: ['-', '+', '-']
}
```

##### color

Type: `string`\
Default: `'cyan'`\
Values: `'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'`

Color of the spinner.

##### hideCursor

Type: `boolean`\
Default: `true`

Set to `false` to stop Ora from hiding the cursor.

##### indent

Type: `number`\
Default: `0`

Indent the spinner with the given number of spaces.

##### interval

Type: `number`\
Default: Provided by the spinner or `100`

Interval between each frame.

Spinners provide their own recommended interval, so you don't really need to specify this.

##### stream

Type: `stream.Writable`\
Default: `process.stderr`

Stream to write the output.

You could for example set this to `process.stdout` instead.

##### isEnabled

Type: `boolean`

Force enable/disable the spinner. If not specified, the spinner will be enabled if the `stream` is being run inside a TTY context (not spawned or piped) and/or not in a CI environment.

Note that `{isEnabled: false}` doesn't mean it won't output anything. It just means it won't output the spinner, colors, and other ansi escape codes. It will still log text.

##### isSilent

Type: `boolean`\
Default: `false`

Disable the spinner and all log text. All output is suppressed and `isEnabled` will be considered `false`.

##### discardStdin

Type: `boolean`\
Default: `true`

Discard stdin input (except Ctrl+C) while running if it's TTY. This prevents the spinner from twitching on input, outputting broken lines on <kbd>Enter</kbd> key presses, and prevents buffering of input while the spinner is running.

This has no effect on Windows as there's no good way to implement discarding stdin properly there.

### Instance

#### .start(text?)

Start the spinner. Returns the instance. Set the current text if `text` is provided.

#### .stop()

Stop and clear the spinner. Returns the instance.

#### .succeed(text?)

Stop the spinner, change it to a green `✔` and persist the current text, or `text` if provided. Returns the instance. See the GIF below.

#### .fail(text?)

Stop the spinner, change it to a red `✖` and persist the current text, or `text` if provided. Returns the instance. See the GIF below.

#### .warn(text?)

Stop the spinner, change it to a yellow `⚠` and persist the current text, or `text` if provided. Returns the instance.

#### .info(text?)

Stop the spinner, change it to a blue `ℹ` and persist the current text, or `text` if provided. Returns the instance.

#### .isSpinning

A boolean of whether the instance is currently spinning.

#### .stopAndPersist(options?)

Stop the spinner and change the symbol or text. Returns the instance. See the GIF below.

##### options

Type: `object`

###### symbol

Type: `string`\
Default: `' '`

Symbol to replace the spinner with.

###### text

Type: `string`\
Default: Current `'text'`

Text to be persisted after the symbol

###### prefixText

Type: `string`\
Default: Current `prefixText`

Text to be persisted before the symbol. No prefix text will be displayed if set to an empty string.

<img src="screenshot-2.gif" width="480">

#### .clear()

Clear the spinner. Returns the instance.

#### .render()

Manually render a new frame. Returns the instance.

#### .frame()

Get a new frame.

#### .text

Change the text after the spinner.

#### .prefixText

Change the text before the spinner. No prefix text will be displayed if set to an empty string.

#### .color

Change the spinner color.

#### .spinner

Change the spinner.

#### .indent

Change the spinner indent.

### ora.promise(action, text)
### ora.promise(action, options)

Starts a spinner for a promise. The spinner is stopped with `.succeed()` if the promise fulfills or with `.fail()` if it rejects. Returns the spinner instance.

#### action

Type: `Promise`

## FAQ

### How do I change the color of the text?

Use [Chalk](https://github.com/chalk/chalk):

```js
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora(`Loading ${chalk.red('unicorns')}`).start();
```

### Why does the spinner freeze?

JavaScript is single-threaded, so synchronous operations blocks the thread, including the spinner animation. Prefer asynchronous operations whenever possible.

## Related

- [cli-spinners](https://github.com/sindresorhus/cli-spinners) - Spinners for use in the terminal
- [listr](https://github.com/SamVerschueren/listr) - Terminal task list
- [CLISpinner](https://github.com/kiliankoe/CLISpinner) - Terminal spinner library for Swift
- [halo](https://github.com/ManrajGrover/halo) - Python port
- [spinners](https://github.com/FGRibreau/spinners) - Terminal spinners for Rust
- [marquee-ora](https://github.com/joeycozza/marquee-ora) - Scrolling marquee spinner for Ora
- [briandowns/spinner](https://github.com/briandowns/spinner) - Terminal spinner/progress indicator for Go
- [tj/go-spin](https://github.com/tj/go-spin) - Terminal spinner package for Go
- [observablehq.com/@victordidenko/ora](https://observablehq.com/@victordidenko/ora) - Ora port to Observable notebooks
- [spinnies](https://github.com/jcarpanelli/spinnies) - Terminal multi-spinner library for Node.js
- [kia](https://github.com/HarryPeach/kia) - Simple terminal spinners for Deno 🦕
