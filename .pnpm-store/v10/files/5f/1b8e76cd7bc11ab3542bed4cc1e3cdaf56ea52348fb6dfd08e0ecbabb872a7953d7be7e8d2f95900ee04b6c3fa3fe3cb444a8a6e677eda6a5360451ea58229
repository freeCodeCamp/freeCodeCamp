# @inquirer/ansi

A lightweight package providing ANSI escape sequences for terminal cursor manipulation and screen clearing.

# Installation

<table>
<tr>
  <th>npm</th>
  <th>yarn</th>
</tr>
<tr>
<td>

```sh
npm install @inquirer/ansi
```

</td>
<td>

```sh
yarn add @inquirer/ansi
```

</td>
</tr>
</table>

## Usage

```js
import {
  cursorUp,
  cursorDown,
  cursorTo,
  cursorLeft,
  cursorHide,
  cursorShow,
  eraseLines,
} from '@inquirer/ansi';

// Move cursor up 3 lines
process.stdout.write(cursorUp(3));

// Move cursor to specific position (x: 10, y: 5)
process.stdout.write(cursorTo(10, 5));

// Hide/show cursor
process.stdout.write(cursorHide);
process.stdout.write(cursorShow);

// Clear 5 lines
process.stdout.write(eraseLines(5));
```

Or when used inside an inquirer prompt:

```js
import { cursorHide } from '@inquirer/ansi';
import { createPrompt } from '@inquirer/core';

export default createPrompt((config, done: (value: void) => void) => {
  return `Choose an option${cursorHide}`;
});
```

## API

### Cursor Movement

- **`cursorUp(count?: number)`** - Move cursor up by `count` lines (default: 1)
- **`cursorDown(count?: number)`** - Move cursor down by `count` lines (default: 1)
- **`cursorTo(x: number, y?: number)`** - Move cursor to position (x, y). If y is omitted, only moves horizontally
- **`cursorLeft`** - Move cursor to beginning of line

### Cursor Visibility

- **`cursorHide`** - Hide the cursor
- **`cursorShow`** - Show the cursor

### Screen Manipulation

- **`eraseLines(count: number)`** - Clear `count` lines and position cursor at the beginning of the first cleared line

# License

Copyright (c) 2025 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart))<br/>
Licensed under the MIT license.
