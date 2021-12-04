---
id: 587d78a6367417b2b2512adb
title: 使用 CSS Transform skex 屬性沿X軸傾斜元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

接下來要介紹的 `transform` 屬性是 `skewX()`：它使選擇的元素沿着 X 軸（橫向）傾斜指定的角度。

下面的代碼沿着 X 軸傾斜段落元素 -32 度。

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

使用 `transform` 屬性沿 X 軸傾斜 id 爲 `bottom` 的元素 24 度。

# --hints--

id 爲 `bottom` 的元素應該沿着 X 軸傾斜 24 度。

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
