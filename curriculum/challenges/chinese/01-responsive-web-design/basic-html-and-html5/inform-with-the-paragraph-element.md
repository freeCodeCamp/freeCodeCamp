---
id: bad87fee1348bd9aedf08801
title: 用 p 元素代表段落
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

`p` 元素是网站上段落文本的首选元素。 `p` 是“paragraph（段落）”的缩写。

你可以像这样创建一个段落：

```html
<p>I'm a p tag!</p>
```

# --instructions--

在 `h2` 元素下方添加一个 `p` 元素，其内容是 `Hello Paragraph`。

**注意：** 按照惯例，所有 HTML 标签都应该是小写字母，例如应使用 `<p></p>`，而不会使用 `<P></P>`。

# --hints--

应包含一个 `p` 元素。

```js
assert($('p').length > 0);
```

`p` 元素的内容文本应为 `Hello Paragraph`。

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

`p` 元素应有结束标签。

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
