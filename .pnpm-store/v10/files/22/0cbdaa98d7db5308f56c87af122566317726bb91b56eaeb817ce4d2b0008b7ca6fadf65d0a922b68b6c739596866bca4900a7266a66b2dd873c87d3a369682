# boxen

> Create boxes in the terminal

![](screenshot.png)

## Install

```
$ npm install boxen
```

## Usage

```js
const boxen = require('boxen');

console.log(boxen('unicorn', {padding: 1}));
/*
┌─────────────┐
│             │
│   unicorn   │
│             │
└─────────────┘
*/

console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));
/*

   ╔═════════════╗
   ║             ║
   ║   unicorn   ║
   ║             ║
   ╚═════════════╝

*/

console.log(boxen('unicorns love rainbows', {title: 'magical', titleAlignment: 'center'}));
/*
┌────── magical ───────┐
│unicorns love rainbows│
└──────────────────────┘
*/
```

## API

### boxen(text, options?)

#### text

Type: `string`

Text inside the box.

#### options

Type: `object`

##### borderColor

Type: `string`\
Values: `'black'` `'red'` `'green'` `'yellow'` `'blue'` `'magenta'` `'cyan'` `'white'` `'gray'` or a hex value like `'#ff0000'`

Color of the box border.

##### borderStyle

Type: `string | object`\
Default: `'single'`\
Values:
- `'single'`
```
┌───┐
│foo│
└───┘
```
- `'double'`
```
╔═══╗
║foo║
╚═══╝
```
- `'round'` (`'single'` sides with round corners)
```
╭───╮
│foo│
╰───╯
```
- `'bold'`
```
┏━━━┓
┃foo┃
┗━━━┛
```
- `'singleDouble'` (`'single'` on top and bottom, `'double'` on right and left)
```
╓───╖
║foo║
╙───╜
```
- `'doubleSingle'` (`'double'` on top and bottom, `'single'` on right and left)
```
╒═══╕
│foo│
╘═══╛
```
- `'classic'`
```
+---+
|foo|
+---+
```

Style of the box border.

Can be any of the above predefined styles or an object with the following keys:

```js
{
	topLeft: '+',
	topRight: '+',
	bottomLeft: '+',
	bottomRight: '+',
	horizontal: '-',
	vertical: '|'
}
```

##### dimBorder

Type: `boolean`\
Default: `false`

Reduce opacity of the border.

##### title

Type: `string`

Display a title at the top of the box.
If needed, the box will horizontally expand to fit the title.

Example:
```js
console.log(boxen('foo bar', {title: 'example'}));
/*
┌ example ┐
│foo bar  │
└─────────┘
*/
```

##### titleAlignment

Type: `string`\
Default: `'left'`

Align the title in the top bar.

Values:
- `'left'`
```js
/*
┌ example ──────┐
│foo bar foo bar│
└───────────────┘
*/
```
- `'center'`
```js
/*
┌─── example ───┐
│foo bar foo bar│
└───────────────┘
*/
```
- `'right'`
```js
/*
┌────── example ┐
│foo bar foo bar│
└───────────────┘
*/
```

##### padding

Type: `number | object`\
Default: `0`

Space between the text and box border.

Accepts a number or an object with any of the `top`, `right`, `bottom`, `left` properties. When a number is specified, the left/right padding is 3 times the top/bottom to make it look nice.

##### margin

Type: `number | object`\
Default: `0`

Space around the box.

Accepts a number or an object with any of the `top`, `right`, `bottom`, `left` properties. When a number is specified, the left/right margin is 3 times the top/bottom to make it look nice.

##### float

Type: `string`\
Default: `'left'`\
Values: `'right'` `'center'` `'left'`

Float the box on the available terminal screen space.

##### backgroundColor

Type: `string`\
Values: `'black'` `'red'` `'green'` `'yellow'` `'blue'` `'magenta'` `'cyan'` `'white'` `'gray'` or a hex value like `'#ff0000'`

Color of the background.

##### textAlignment

Type: `string`\
Default: `'left'`\
Values: `'left'` `'center'` `'right'`

Align the text in the box based on the widest line.

## Related

- [boxen-cli](https://github.com/sindresorhus/boxen-cli) - CLI for this module
- [cli-boxes](https://github.com/sindresorhus/cli-boxes) - Boxes for use in the terminal
- [ink-box](https://github.com/sindresorhus/ink-box) - Box component for Ink that uses this package

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-boxen?utm_source=npm-boxen&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
