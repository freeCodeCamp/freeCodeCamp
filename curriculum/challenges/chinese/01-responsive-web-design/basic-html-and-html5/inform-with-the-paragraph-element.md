---
id: bad87fee1348bd9aedf08801
title: 用 p 元素代表段落
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
---

# --description--

`p`是`paragraph`的缩写，通常用来创建一个段落，就和你写作文一样。

你可以像这样创建一个段落：

`<p>I'm a p tag!</p>`

# --instructions--

在`h2`元素下面新增一个`p`元素，元素内容是：`Hello Paragraph`。

# --hints--

创建一个`p`元素。

```js
assert($('p').length > 0);
```

`p`元素的内容应为：`Hello Paragraph`。

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

`p`元素应该有结束标记。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --solutions--

