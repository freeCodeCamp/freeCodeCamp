---
id: bad87fee1348bd9aedf08816
title: 用 a 实现网页间的跳转
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
---

# --description--

你可以用 `a`（Anchor，简写 a）来实现网页间的跳转。

`a` 需要一个`href`属性指向目的地，它还需要有 `a` 文本，例如：

`<a href="https://freecodecamp.org">传送至</a>`

然后你的浏览器会显示一个可以点击的文本，点击该文本就会跳转到`https://freecodecamp.org`。

# --instructions--

创建一个 `a`，它的`href`属性为`https://freecatphotoapp.com` ，它的文本为`cat photos`。

# --hints--

`a`元素的 `a` 文本应为：`cat photos`。

```js
assert(/cat photos/gi.test($('a').text()));
```

`a`元素的`href`属性应为："`http&#58;//freecatphotoapp<wbr>.com`"。

```js
assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($('a').attr('href')));
```

确保`a`元素有结束标记。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --solutions--

