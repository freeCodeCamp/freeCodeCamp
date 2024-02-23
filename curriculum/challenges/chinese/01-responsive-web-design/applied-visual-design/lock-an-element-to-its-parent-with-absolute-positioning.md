---
id: 587d781e367417b2b2512acb
title: 绝对定位的参照物是元素的父元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

接下来要介绍 CSS `position` 属性的取值选项 `absolute`，它的含义是相对于其包含块定位。 和 `relative` 定位不一样，绝对定位会将元素从当前的文档流里面移除，周围的元素会忽略它。 这样我们就可以用 CSS 的 top、bottom、left、right 属性来调整元素的位置。

绝对定位比较特殊的一点是元素的定位参照于最近的 *positioned* 祖先元素。 如果它的父元素没有添加定位规则（默认是 `position: relative;`），浏览器会继续寻找直到默认的 `body` 标签。

# --instructions--

通过设置 `position` 属性值为 `absolute`，将 `#searchbar` 元素固定到它的父元素 `section` 的右上角。 即设定其 `top` 和 `right` 为 50 像素。

# --hints--

`#searchbar` 元素的 `position` 属性值应为 `absolute`。

```js
assert($('#searchbar').css('position') == 'absolute');
```

`#searchbar` 元素的 `top` 属性值应为 50px。

```js
assert($('#searchbar').css('top') == '50px');
```

`#searchbar` 元素的 `right` 属性值应为 50px。

```js
assert($('#searchbar').css('right') == '50px');
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
