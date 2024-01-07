---
id: 587d781d367417b2b2512ac5
title: 設置段落的 line-height
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWdcv'
forumTopicId: 301070
dashedName: set-the-line-height-of-paragraphs
---

# --description--

CSS 提供 `line-height` 屬性來設置行間的距離。 行高，顧名思義，可以用來設置每行文字所佔據的垂直空間。

# --instructions--

給 `p` 標籤添加 `line-height` 屬性並賦值 25px。

# --hints--

`p` 標籤的 `line-height` 屬性值應爲 25px。

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
