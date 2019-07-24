---
title: Use CSS Grid Units to Change the Size of Columns and Rows
---
# Use CSS Grid Units to Change the Size of Columns and Rows

---
## Problem Explanation
This challenge requires you to set the width of the columns of the container to the ones as specified in the challenge description.


---
## Hints

### Hint 1

Change the `grid-template-columns` property.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Since the challenge requires you to set the width to `1fr`, `100px`, and `2fr`, change the `css grid-template-columns` property of `.container` to:

```css
grid-template-columns: 1fr 100px 2fr;
```

#### Relevant Links

* [An Introduction to the fr CSS unit - CSS tricks](https://css-tricks.com/introduction-fr-css-unit/)
</details>
