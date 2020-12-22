---
id: 587d78aa367417b2b2512aed
title: 声明 HTML 的文档类型
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
---

# --description--

到目前为止，我们学习了一些特定的 HTML 标签，还有一些标签是用来组成网页的总体结构，并且它们在每个 HTML 文档中都能看到。

在文档的顶部，你需要告诉浏览器你的网页用的 HTML 哪个版本。 HTML 是一个不停进化的语言，大部分浏览器都支持 HTML 的最新标准，也就是 HTML5。但是一些陈旧的网页可能使用的是 HTML 的旧版本。

你可以通过`<!DOCTYPE ...>`来告诉浏览器你使用的是 HTML 的哪个版本，"`...`" 部分就是版本的数字信息。`<!DOCTYPE html>`对应的就是 HTML5。

`!`和大写的`DOCTYPE`是很重要的，特别是对于老的浏览器。但`html`大写小写都可以。

所有的 HTML 代码都必须位于`html`标签中。其中`<html>`位于`<!DOCTYPE html>`的后面，`</html>`位于网页的结尾。

这是网页结构一个例子：

```html
<!DOCTYPE html>
<html>
  <!-- Your HTML code goes here -->
</html>
```

# --instructions--

在代码编辑器的顶部添加一个`DOCTYPE（文档类型）`为 HTML5 的声明，然后添加一个`html`元素，再添加一个`h1`元素，标题的文本可以随意填。

# --hints--

网页中应该包含`<!DOCTYPE html>`标签。

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

网页中只有一个`html`元素。

```js
assert($('html').length == 1);
```

`h1`元素应该位于`html`元素内部。

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --solutions--

