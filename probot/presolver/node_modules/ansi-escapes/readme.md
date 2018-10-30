# ansi-escapes [![Build Status](https://travis-ci.org/sindresorhus/ansi-escapes.svg?branch=master)](https://travis-ci.org/sindresorhus/ansi-escapes)

> [ANSI escape codes](http://www.termsys.demon.co.uk/vtansi.htm) for manipulating the terminal


## Install

```
$ npm install ansi-escapes
```


## Usage

```js
const ansiEscapes = require('ansi-escapes');

// Moves the cursor two rows up and to the left
process.stdout.write(ansiEscapes.cursorUp(2) + ansiEscapes.cursorLeft);
//=> '\u001B[2A\u001B[1000D'
```


## API

### cursorTo(x, [y])

Set the absolute position of the cursor. `x0` `y0` is the top left of the screen.

### cursorMove(x, [y])

Set the position of the cursor relative to its current position.

### cursorUp(count)

Move cursor up a specific amount of rows. Default is `1`.

### cursorDown(count)

Move cursor down a specific amount of rows. Default is `1`.

### cursorForward(count)

Move cursor forward a specific amount of rows. Default is `1`.

### cursorBackward(count)

Move cursor backward a specific amount of rows. Default is `1`.

### cursorLeft

Move cursor to the left side.

### cursorSavePosition

Save cursor position.

### cursorRestorePosition

Restore saved cursor position.

### cursorGetPosition

Get cursor position.

### cursorNextLine

Move cursor to the next line.

### cursorPrevLine

Move cursor to the previous line.

### cursorHide

Hide cursor.

### cursorShow

Show cursor.

### eraseLines(count)

Erase from the current cursor position up the specified amount of rows.

### eraseEndLine

Erase from the current cursor position to the end of the current line.

### eraseStartLine

Erase from the current cursor position to the start of the current line.

### eraseLine

Erase the entire current line.

### eraseDown

Erase the screen from the current line down to the bottom of the screen.

### eraseUp

Erase the screen from the current line up to the top of the screen.

### eraseScreen

Erase the screen and move the cursor the top left position.

### scrollUp

Scroll display up one line.

### scrollDown

Scroll display down one line.

### clearScreen

Clear the terminal screen.

### beep

Output a beeping sound.

### link(text, url)

Create a clickable link.

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) Use [`supports-hyperlinks`](https://github.com/jamestalmage/supports-hyperlinks) to detect link support.

### image(input, [options])

Display an image.

*Currently only supported on iTerm2 >=3*

See [term-img](https://github.com/sindresorhus/term-img) for a higher-level module.

#### input

Type: `Buffer`

Buffer of an image. Usually read in with `fs.readFile()`.

#### options

##### width
##### height

Type: `string` `number`

The width and height are given as a number followed by a unit, or the word "auto".

- `N`: N character cells.
- `Npx`: N pixels.
- `N%`: N percent of the session's width or height.
- `auto`: The image's inherent size will be used to determine an appropriate dimension.

##### preserveAspectRatio

Type: `boolean`<br>
Default: `true`

### iTerm.setCwd([path])

Type: `string`<br>
Default: `process.cwd()`

[Inform iTerm2](https://www.iterm2.com/documentation-escape-codes.html) of the current directory to help semantic history and enable [Cmd-clicking relative paths](https://coderwall.com/p/b7e82q/quickly-open-files-in-iterm-with-cmd-click).


## Related

- [ansi-styles](https://github.com/chalk/ansi-styles) - ANSI escape codes for styling strings in the terminal


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
