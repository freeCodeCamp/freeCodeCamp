---
id: bad87fee1348bd9aedf08816
title: 用 a 实现网页间的跳转
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
---

# --description--

你可以用 `a`（Anchor，简写为 a）来实现网页间的跳转。

`a` 需要一个 `href` 属性指向跳转的目的地，同时，它还应有内容，例如：

`<a href="https://freecodecamp.org">链接到 freeCodeCamp</a>`

在浏览器中，以上的标签会将文字 **"链接到 freeCodeCamp"** 展示成一个可点击的超链接。点击该文本就会跳转到 `https://freecodecamp.org`。

# --instructions--

创建一个内容文本为 `cat photos` 的 `a` 元素，并将其 `href` 属性值设置为 `https://freecatphotoapp.com`。

# --hints--

`a` 元素的内容文本应为：`cat photos`。

```js
assert(/cat photos/gi.test($('a').text()));
```

你的 `a` 元素应链接到 `https://freecatphotoapp.com`。

```js
assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($('a').attr('href')));
```

确保 `a` 元素有结束标签。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --solutions--

