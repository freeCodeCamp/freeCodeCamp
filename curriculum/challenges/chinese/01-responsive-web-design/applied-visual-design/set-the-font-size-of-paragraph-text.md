---
id: 587d781c367417b2b2512ac4
title: 设置段落文本的 font-size
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJ36Cr'
forumTopicId: 301068
dashedName: set-the-font-size-of-paragraph-text
---

# --description--

CSS 里面的 `font-size` 属性不只限于标题，还可以应用于任何包含文字的元素内。

# --instructions--

把段落的 `font-size` 属性值设置为 16px，让它看起来更清晰。

# --hints--

`p` 标签的 `font-size` 属性值应为 16px。

```js
assert($('p').css('font-size') == '16px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 10px;
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
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```
