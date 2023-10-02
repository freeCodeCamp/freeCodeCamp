---
id: bad87fee1348bd9aedf06756
title: 內聯樣式的優先級高於 ID 選擇器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

我們剛剛證明了，id 選擇器無論在 `style` 標籤的任何位置聲明，都會覆蓋 class 聲明的樣式。

其實還有其他方法可以覆蓋 CSS 樣式。 你還記得行內樣式嗎？

# --instructions--

使用行內樣式嘗試讓 `h1` 的字體顏色變白。 記住，內聯樣式看起來是像這樣：

```html
<h1 style="color: green;">
```

`h1` 元素應繼續保留 `blue-text` 和 `pink-text` 這兩個 class。

# --hints--

`h1` 元素應包含 `pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 元素應包含 `blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 的 id 屬性值應爲 `orange-text`。

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` 元素應含有行內樣式。

```js
assert(document.querySelector('h1[style]'));
```

`h1` 元素的字體顏色應該爲白色。

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
