---
id: 587d781e367417b2b2512acb
title: 絕對定位的參照物是元素的父元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

接下來要介紹 CSS `position` 屬性的取值選項 `absolute`，它的含義是相對於其包含塊定位。 和 `relative` 定位不一樣，絕對定位會將元素從當前的文檔流裏面移除，周圍的元素會忽略它。 這樣我們就可以用 CSS 的 top、bottom、left、right 屬性來調整元素的位置。

絕對定位比較特殊的一點是元素的定位參照於最近的 *positioned* 祖先元素。 如果它的父元素沒有添加定位規則（默認是 `position: relative;`），瀏覽器會繼續尋找直到默認的 `body` 標籤。

# --instructions--

通過設置 `position` 屬性值爲 `absolute`，將 `#searchbar` 元素固定到它的父元素 `section` 的右上角。 即設定其 `top` 和 `right` 爲 50 像素。

# --hints--

`#searchbar` 元素的 `position` 屬性值應爲 `absolute`。

```js
assert($('#searchbar').css('position') == 'absolute');
```

`#searchbar` 元素的 `top` 屬性值應爲 50px。

```js
assert($('#searchbar').css('top') == '50px');
```

`#searchbar` 元素的 `right` 屬性值應爲 50px。

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
