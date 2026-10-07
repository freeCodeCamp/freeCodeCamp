# ansi-escapes

> [ANSI escape codes](https://www2.ccs.neu.edu/research/gpc/VonaUtils/vona/terminal/vtansi.htm) for manipulating the terminal

## Install

```sh
npm install ansi-escapes
```

## Usage

```js
import ansiEscapes from 'ansi-escapes';

// Moves the cursor two rows up and to the left
process.stdout.write(ansiEscapes.cursorUp(2) + ansiEscapes.cursorLeft);
//=> '\u001B[2A\u001B[1000D'
```

Or use named exports...

```js
import {cursorUp, cursorLeft} from 'ansi-escapes';

// etc, as above...
```

**You can also use it in the browser with Xterm.js:**

```js
import ansiEscapes from 'ansi-escapes';
import {Terminal} from 'xterm';
import 'xterm/css/xterm.css';

const terminal = new Terminal({…});

// Moves the cursor two rows up and to the left
terminal.write(ansiEscapes.cursorUp(2) + ansiEscapes.cursorLeft);
//=> '\u001B[2A\u001B[1000D'
```

## API

### cursorTo(x, y?)

Set the absolute position of the cursor. `x0` `y0` is the top left of the screen.

### cursorMove(x, y?)

Set the position of the cursor relative to its current position.

### cursorUp(count)

Move cursor up a specific amount of rows. Default is `1`.

### cursorDown(count)

Move cursor down a specific amount of rows. Default is `1`.

### cursorForward(count)

Move cursor forward a specific amount of columns. Default is `1`.

### cursorBackward(count)

Move cursor backward a specific amount of columns. Default is `1`.

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

### clearViewport

Clear only the visible terminal screen (viewport) without affecting scrollback buffer or terminal state.

This is a safer alternative to `clearScreen` that works consistently across terminals.

### clearScreen

Clear the terminal screen.

> [!WARNING]
> This uses RIS (Reset to Initial State) which may also clear scrollback buffer in some terminals (xterm.js, VTE) and reset terminal modes. Consider using `clearViewport()` for safer viewport-only clearing.

### clearTerminal

Clear the whole terminal, including scrollback buffer. (Not just the visible part of it)

### enterAlternativeScreen

Enter the [alternative screen](https://terminalguide.namepad.de/mode/p47/).

### exitAlternativeScreen

Exit the [alternative screen](https://terminalguide.namepad.de/mode/p47/), assuming `enterAlternativeScreen` was called before.

### beginSynchronizedOutput

Begin [synchronized output](https://contour-terminal.org/vt-extensions/synchronized-output/) to reduce flicker during renders.

### endSynchronizedOutput

End [synchronized output](https://contour-terminal.org/vt-extensions/synchronized-output/).

### synchronizedOutput(text)

Wrap output in [synchronized output](https://contour-terminal.org/vt-extensions/synchronized-output/) sequences to reduce flicker during renders.

### beep

Output a beeping sound.

### link(text, url)

Create a clickable link.

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) Use [`supports-hyperlinks`](https://github.com/jamestalmage/supports-hyperlinks) to detect link support.

### image(filePath, options?)

Display an image.

See [term-img](https://github.com/sindresorhus/term-img) for a higher-level module.

#### input

Type: `Buffer`

Buffer of an image. Usually read in with `fs.readFile()`.

#### options

Type: `object`

##### width
##### height

Type: `string | number`

The width and height are given as a number followed by a unit, or the word "auto".

- `N`: N character cells.
- `Npx`: N pixels.
- `N%`: N percent of the session's width or height.
- `auto`: The image's inherent size will be used to determine an appropriate dimension.

##### preserveAspectRatio

Type: `boolean`\
Default: `true`

### setCwd(path?)

Type: `string`\
Default: `process.cwd()`

Set the current working directory for both iTerm2 and ConEmu.

### iTerm.setCwd(path?)

Type: `string`\
Default: `process.cwd()`

[Inform iTerm2](https://www.iterm2.com/documentation-escape-codes.html) of the current directory to help semantic history and enable [Cmd-clicking relative paths](https://coderwall.com/p/b7e82q/quickly-open-files-in-iterm-with-cmd-click).

### ConEmu.setCwd(path?)

Type: `string`\
Default: `process.cwd()`

[Inform ConEmu](https://conemu.github.io/en/AnsiEscapeCodes.html#ConEmu_specific_OSC) about shell current working directory.

### iTerm.annotation(message, options?)

Creates an escape code to display an "annotation" in iTerm2.

An annotation looks like this when shown:

<img src="https://user-images.githubusercontent.com/924465/64382136-b60ac700-cfe9-11e9-8a35-9682e8dc4b72.png" width="500">

See the [iTerm Proprietary Escape Codes documentation](https://iterm2.com/documentation-escape-codes.html) for more information.

#### message

Type: `string`

The message to display within the annotation.

The `|` character is disallowed and will be stripped.

#### options

Type: `object`

##### length

Type: `number`\
Default: The remainder of the line

Nonzero number of columns to annotate.

##### x

Type: `number`\
Default: Cursor position

Starting X coordinate.

Must be used with `y` and `length`.

##### y

Type: `number`\
Default: Cursor position

Starting Y coordinate.

Must be used with `x` and `length`.

##### isHidden

Type: `boolean`\
Default: `false`

Create a "hidden" annotation.

Annotations created this way can be shown using the "Show Annotations" iTerm command.

## Related

- [ansi-styles](https://github.com/chalk/ansi-styles) - ANSI escape codes for styling strings in the terminal
