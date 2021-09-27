---
id: 587d78a3367417b2b2512ad0
title: 使用 margin 屬性將元素水平居中
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

在應用設計中經常需要把一個塊級元素水平居中顯示。 一種常見的實現方式是把塊級元素的 `margin` 值設置爲 auto。

同樣的，這個方法也對圖片奏效。 圖片默認是內聯元素，但是可以通過設置其 `display` 屬性爲 `block`來把它變成塊級元素。

# --instructions--

通過添加一個值爲 `auto` 的 `margin` 屬性，將 `div` 在頁面居中。

# --hints--

`div` 應有一個 `margin`，設置爲 `auto`。

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
