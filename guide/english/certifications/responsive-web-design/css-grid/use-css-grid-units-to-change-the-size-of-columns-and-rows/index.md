---
title: Use CSS Grid Units to Change the Size of Columns and Rows
---
## Use CSS Grid units to Change the Size of Columns and Rows

This challenge requires you to set the width of the columns of the container to the ones as specified in the challenge description.

### Hint

Change the `grid-template-columns` property.

### Solution

Since the challenge requires you to set the width to `1fr`, `100px`, and `2fr`, change the `css grid-template-columns` property of `.container` to:

````css
grid-template-columns: 1fr 100px 2fr;
````

#### More Infomation

* [An Introduction to the fr CSS unit - CSS tricks](https://css-tricks.com/introduction-fr-css-unit/)
