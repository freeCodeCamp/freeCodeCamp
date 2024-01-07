---
id: bad87fee1348bd9aedf08726
title: 使用十六进制编码获得指定颜色
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

你知道在 CSS 里面还有其他方式来代表颜色吗？ 其中一个方法叫十六进制编码，简称 hex。

日常生活中，我们使用的计数方法一般是 <dfn>decimals</dfn>，或十进制，即使用数字 0 到 9 来表示。 而 <dfn>Hexadecimals</dfn>（或 <dfn>hex</dfn>）基于 16 位数字， 它包括 16 种不同字符。 像十进制一样，0-9 的符号代表 0 到 9 的值。 然后，A、B、C、D、E、F 代表 10 至 15 的值。 总的来说，0 到 F 在十六进制里代表数字，总共有 16 个值。 你可以在<a href="https://www.freecodecamp.org/news/hexadecimal-number-system/" target="_blank" rel="noopener noreferrer nofollow">此处</a>找到更多关于十六进制的信息。

在 CSS 里面，我们可以使用 6 个十六进制的数字来代表颜色，每两个数字控制一种颜色，分别是红（R）、绿（G）、蓝（B）。 例如，`#000000` 代表黑色，同时也是最小的值。 你可以在<a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">此处</a>找到更多关于 RGB 颜色系统的信息。

```css
body {
  color: #000000;
}
```

# --instructions--

将 `body` 元素的背景颜色由 `black` 改为它对应的十六进制编码 `#000000`。

# --hints--

`body` 元素的 `background-color` 应为黑色。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

应该使用黑色的十六进制代码，而不是 `black` 这个词。

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
