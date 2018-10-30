wide-align
----------

A wide-character aware text alignment function for use in terminals / on the
console.

### Usage

```
var align = require('wide-align')

// Note that if you view this on a unicode console, all of the slashes are
// aligned. This is because on a console, all narrow characters are
// an en wide and all wide characters are an em. In browsers, this isn't
// held to and wide characters like "古" can be less than two narrow
// characters even with a fixed width font.

console.log(align.center('abc', 10))     // '   abc    '
console.log(align.center('古古古', 10))  // '  古古古  '
console.log(align.left('abc', 10))       // 'abc       '
console.log(align.left('古古古', 10))    // '古古古    '
console.log(align.right('abc', 10))      // '       abc'
console.log(align.right('古古古', 10))   // '    古古古'
```

### Functions

#### `align.center(str, length)` → `str`

Returns *str* with spaces added to both sides such that that it is *length*
chars long and centered in the spaces.

#### `align.left(str, length)` → `str`

Returns *str* with spaces to the right such that it is *length* chars long.

### `align.right(str, length)` → `str`

Returns *str* with spaces to the left such that it is *length* chars long.

### Origins

These functions were originally taken from 
[cliui](https://npmjs.com/package/cliui). Changes include switching to the
MUCH faster pad generation function from
[lodash](https://npmjs.com/package/lodash), making center alignment pad
both sides and adding left alignment.
