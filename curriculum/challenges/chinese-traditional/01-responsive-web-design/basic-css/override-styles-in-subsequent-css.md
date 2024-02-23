---
id: bad87fee1348bd9aedf04756
title: Class 選擇器的優先級高於繼承樣式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

我們的 `pink-text` class 覆蓋了 `body` 元素的 CSS 樣式！

我們剛剛證明了 class 會覆蓋 `body` 的 CSS 樣式。 那麼下一個問題是，要怎麼樣才能覆蓋 `pink-text` class 中所定義的樣式？

# --instructions--

創建一個 `blue-text` class，將元素的顏色設置爲藍色。 將它放在 `pink-text` class 下面。

將 `blue-text` class 應用於 `h1` 元素，看看它和該元素上的 `pink-text` class 哪一個會優先顯示。

將多個 class 屬性應用於一個 HTML 元素，需以空格來間隔這些屬性，例如：

```html
class="class1 class2"
```

**注意：** HTML 元素裏應用的 class 的先後順序無關緊要。

但是，在 `<style>` 標籤裏面聲明的 `class` 順序十分重要，之後的聲明會覆蓋之前的聲明。 第二個聲明的優先級始終高於第一個聲明。 由於 `.blue-text` 是在後面聲明的，所以它的樣式會覆蓋 `.pink-text` 裏的樣式。

# --hints--

`h1` 元素應包含 `pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 元素應包含 `blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`blue-text` 和 `pink-text` 需同時應用於 `h1` 元素上。

```js
assert($('.pink-text').hasClass('blue-text'));
```

`h1` 元素的顏色應爲藍色。

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
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
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
