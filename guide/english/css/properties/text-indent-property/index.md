---
title: Text Indent Property
---
## Text Indent Property

The `text-indent` css property specifies the amount of indentation (empty space) that is put before lines of text in a block. By default, this controls the indentation of only the first formatted line of the block, but the `hanging` and `each-line` keywords can be used to change this behavior.

**Keywords**

`hanging` - Indentation affects the first line of the block container as well as each line after a forced line break, but does not affect lines after a soft wrap break.

`each-line` - Inverts which lines are indented. All lines except the first line will be indented.

**Syntax**

```css
  /* <length> values */
  text-indent: 40px;
  
  /* <percentage> value relative to the containing block width */
  text-indent: 10%;
  
  /* Keyword values */
  text-indent: 2em each-line;
  text-indent: 2em hanging;
  text-indent: 2em hanging each-line;

```

_Note: currently support for keywords `hanging` and `each-line` is only available behind the Experimental Web Platform features flag_

### More Information:

- [MDN Doc on `text-indent`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
- [Browser support for `text-indent`](http://caniuse.com/#feat=css-text-indent)
