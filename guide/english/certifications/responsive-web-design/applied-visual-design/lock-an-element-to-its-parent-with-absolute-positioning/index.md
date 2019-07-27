---
title: Lock an Element to its Parent with Absolute Positioning
---

# Lock an Element to its Parent with Absolute Positioning


---
## Hints

### Hint 1

Use `position: absolute;`.


### Hint 2

Use the `right` and `top` properties.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

#### Code Explanation

*  `#searchbar{}` selects all the elements with the ID of `searchbar`.
*  `position: absolute;` positions the element with respect to its nearest ancestor having `position: relative;`.
*  `top: 50px;` and `right: 50px;` offsets the element by `50px` to the bottom and left respectively.
</details>
