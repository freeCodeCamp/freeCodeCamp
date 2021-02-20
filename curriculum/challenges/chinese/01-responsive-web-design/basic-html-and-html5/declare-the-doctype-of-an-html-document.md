---
id: 587d78aa367417b2b2512aed
title: 声明 HTML 的文档类型
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

之前的挑战涵盖了一些 HTML 元素和它们的用法。 另外有些元素为页面提供了整体结构，每个 HTML 文档中都应该有这些元素。

在文档的顶部，我们需要告诉浏览器网页所使用的 HTML 的版本。 HTML 是一个在不停发展的语言，大部分浏览器都支持 HTML 的最新标准，也就是 HTML5。 大部分主流浏览器都支持最新的 HTML5 规范。 但是一些陈旧的网页可能使用的是老版本的 HTML。

你可以通过 `<!DOCTYPE ...>` 来告诉浏览器页面上使用的 HTML 版本，"`...`" 部分就是版本号。 `<!DOCTYPE html>` 对应的就是 HTML5。

`!` 和大写的 `DOCTYPE` 是很重要的，尤其是对那些老的浏览器。 但 `html` 无论大写小写都可以。

所有的 HTML 代码都必须位于 `html` 标签中。 其中 `<html>` 位于 `<!DOCTYPE html>` 之后，`</html>` 位于网页的结尾。

这是一个网页结构的列子。 你的 HTML 代码会在两个 `html` 标签之间。

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

请在代码编辑器的顶部添加一个 `DOCTYPE` 为 HTML5 的声明。 在它下面添加 `html` 开始和结束标签，其中包裹一个 `h1` 元素。 标题可以包括任何文本。

# --hints--

网页中应包含 `<!DOCTYPE html>` 标签。

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

网页中应只存在一个 `html` 元素。

```js
assert($('html').length == 1);
```

`h1` 元素应该位于 `html` 元素内部。

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
