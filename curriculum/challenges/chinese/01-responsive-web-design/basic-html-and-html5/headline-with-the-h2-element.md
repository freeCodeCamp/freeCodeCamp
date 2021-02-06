---
id: bad87fee1348bd9aedf0887a
title: 用 h2 元素代表副标题
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

在接下来的几节课里，我们将会一步一步地制作一个展示猫咪图片的 HTML5 app。

这节课中，我们将会为页面引入作为第二级标题的 `h2` 元素。

这些元素用来告诉浏览器网站的结构是什么样子。 `h1` 元素通常被用作主标题，`h2` 元素通常被用作副标题， 还有 `h3`、`h4`、`h5`、`h6` 元素，它们分别用作不同级别的标题。

# --instructions--

在内容为 "Hello World" 的 `h1` 元素下面创建一个 `h2` 元素，其内容为 “CatPhotoApp”。

# --hints--

应创建一个 `h2` 元素。

```js
assert($('h2').length > 0);
```

`h2` 元素应该有结束标签。

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

`h2` 元素的内容应为：`CatPhotoApp`。

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

`h1` 元素的内容应为：`Hello World`。

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

`h1` 元素应出现在 `h2` 元素之前。

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
