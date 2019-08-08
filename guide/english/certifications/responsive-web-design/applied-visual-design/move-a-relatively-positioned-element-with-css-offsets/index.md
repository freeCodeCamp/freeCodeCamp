---
title: Move a Relatively Positioned Element with CSS Offsets
---

# Move a Relatively Positioned Element with CSS Offsets


---
## Hints

### Hint 1

Use the `left` property for offsetting the element right.


### Hint 2

Use the `bottom` property for offsetting the element top.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

#### Code Explanation

* The `h2{}` selects the `h2` element.
* `left: 15px;` offsets the `h2` `15px` to the right.
* `bottom: 10px;` offsets the `h2` `10px` to the top.

</details>