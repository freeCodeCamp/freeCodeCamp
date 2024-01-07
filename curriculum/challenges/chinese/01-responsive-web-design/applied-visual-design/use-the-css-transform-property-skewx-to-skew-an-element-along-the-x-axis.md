---
id: 587d78a6367417b2b2512adb
title: 使用 CSS Transform skex 属性沿X轴倾斜元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

接下来要介绍的 `transform` 属性是 `skewX()`：它使选择的元素沿着 X 轴（横向）倾斜指定的角度。

下面的代码沿着 X 轴倾斜段落元素 -32 度。

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

使用 `transform` 属性沿 X 轴倾斜 id 为 `bottom` 的元素 24 度。

# --hints--

id 为 `bottom` 的元素应该沿着 X 轴倾斜 24 度。

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
