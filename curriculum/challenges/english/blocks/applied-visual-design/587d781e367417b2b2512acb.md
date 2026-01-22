---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

The next option for the CSS `position` property is `absolute`, which locks the element in place relative to its parent container. Unlike the `relative` position, this removes the element from the normal flow of the document, so surrounding items ignore it. The CSS offset properties (top or bottom and left or right) are used to adjust the position.

One nuance with absolute positioning is that it will be locked relative to its closest *positioned* ancestor. If you forget to add a position rule to the parent item, (this is typically done using `position: relative;`), the browser will keep looking up the chain and ultimately default to the `body` tag.

# --instructions--

Lock the `#searchbar` element to the top-right of its `section` parent by declaring its `position` as `absolute`. Give it `top` and `right` offsets of 50 pixels each.

# --hints--

The `#searchbar` element should have a `position` set to `absolute`.

```js
const searchbarElement = document.querySelector('#searchbar');
const searchbarStyle = window.getComputedStyle(searchbarElement);
assert.equal(searchbarStyle?.position, 'absolute');
```

Your code should use the `top` CSS offset of 50 pixels on the `#searchbar` element.

```js
const searchbarElement = document.querySelector('#searchbar');
const searchbarStyle = window.getComputedStyle(searchbarElement);
assert.equal(searchbarStyle?.top, '50px');
```

Your code should use the `right` CSS offset of 50 pixels on the `#searchbar` element.

```js
const searchbarElement = document.querySelector('#searchbar');
const searchbarStyle = window.getComputedStyle(searchbarElement);
assert.equal(searchbarStyle?.right, '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



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

# --solutions--

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
