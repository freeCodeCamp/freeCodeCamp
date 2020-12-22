---
id: bad87fee1348bd9aedf0887a
title: 用 h2 元素代表副标题
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
---

# --description--

在接下来的几节课里，我们将会由浅入深地制作一个 CatPhotoApp。

这节课将会引入`h2`元素。

这些元素用来告诉浏览器，网站的结构是什么样子。`h1`元素通常被用作主标题，`h2`元素通常被用作副标题，还有`h3`、`h4`、`h5`、`h6`元素，它们分别用作不同级别的标题。

# --instructions--

在`h1`元素下面创建一个`h2`元素，元素内容为：`CatPhotoApp`。

# --hints--

创建一个`h2`元素。

```js
assert($('h2').length > 0);
```

`h2`元素应该有结束标记。

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

`h2`元素的内容应为：`CatPhotoApp`。

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

`h1`元素的内容应为：`Hello World`。

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --solutions--

