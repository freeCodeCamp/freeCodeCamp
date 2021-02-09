---
id: 587d781d367417b2b2512ac5
title: 设置段落的 line-height
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWdcv'
forumTopicId: 301070
dashedName: set-the-line-height-of-paragraphs
---

# --description--

CSS 提供 `line-height` 属性来设置行间的距离。 行高，顾名思义，可以用来设置每行文字所占据的垂直空间。

# --instructions--

给 `p` 标签添加 `line-height` 属性并赋值 25px。

# --hints--

`p` 标签的 `line-height` 属性值应为 25px。

```js
assert($('p').css('line-height') == '25px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 16px;

  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 16px;
    line-height: 25px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
