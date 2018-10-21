---
title: Boolean
---
## Boolean

The Boolean object is an object wrapper for a boolean (true or false) value. You can explicitly define a Boolean as `new Boolean([value])`. The optional `value` argument is converted to a boolean value. If value is not specified, `0`, `-0`, `null`, `false`, `NaN`, `undefined`, or the empty string (`""`), the object is set to false. All other values, including any object or the string "false", create an object with a value of true. An interesting exception is when DOM's `document.all` is passed as an argument to the `Boolean` constructor, it is evaluated as `false`<sup>1</sup>.

Boolean primitive value (`true` and `false` ) is not same as `Boolean` object values (`true` and `false`).

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[The Difference Between Boolean Objects and Boolean Primitives in JavaScript -- A Drip of JavaScript](http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html)

### Sources

1. [You Don't Know JavaScript, Chapter 4](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md), line :364. Accessed on October 31, 2017.

