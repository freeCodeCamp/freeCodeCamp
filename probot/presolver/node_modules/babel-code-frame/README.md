# babel-code-frame

> Generate errors that contain a code frame that point to source locations.

## Install

```sh
npm install --save-dev babel-code-frame
```

## Usage

```js
import codeFrame from 'babel-code-frame';

const rawLines = `class Foo {
  constructor()
}`;
const lineNumber = 2;
const colNumber = 16;

const result = codeFrame(rawLines, lineNumber, colNumber, { /* options */ });

console.log(result);
```

```sh
  1 | class Foo {
> 2 |   constructor()
    |                ^
  3 | }
```

If the column number is not known, you may pass `null` instead.

## Options

### `highlightCode`

`boolean`, defaults to `false`.

Toggles syntax highlighting the code as JavaScript for terminals.

### `linesAbove`

`number`, defaults to `2`.

Adjust the number of lines to show above the error.

### `linesBelow`

`number`, defaults to `3`.

Adjust the number of lines to show below the error.

### `forceColor`

`boolean`, defaults to `false`.

Enable this to forcibly syntax highlight the code as JavaScript (for non-terminals); overrides `highlightCode`.
