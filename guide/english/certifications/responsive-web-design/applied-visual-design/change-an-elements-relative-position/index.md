---
title: Change an Element's Relative Position
---

# Change an Element's Relative Position

---
## Problem Explanation

You need to write a CSS selector which will move all the `h2` elements on the page by `15px` from the top.


---
## Hints

### Hint 1

Use `position: relative;`.


### Hint 2

Use the `top: ;` property.


### Hint 3

Target the `h2` using `h2{}`.


<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

#### Code Explanation

* The `h2{}` selects all the `h2` elements on the page where the corresponding stylesheet/styles would be imported/used.
* `position: relative;` sets the `h2` to be positioned relatively, but in normal flow, i.e. it would have no effect on the surrounding element's positions.
* `top: 15px;` moves the `h2` `15px` from the top, as required by the challenge.

* Note: Changing an element's position to relative does not remove it from the normal flow - other elements around it still behave as if that item were in its default position.

</details>