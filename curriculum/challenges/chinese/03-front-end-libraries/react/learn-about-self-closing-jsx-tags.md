---
id: 5a24c314108439a4d4036161
title: 了解自动闭合的 JSX 标记
challengeType: 6
forumTopicId: 301396
---

# --description--

到目前为止，你已经看到 JSX 与 HTML 的不同之处在于使用`className`和使用`class`来定义 HTML 的 class。

JSX 不同于 HTML 的另一个重要方面是自闭合标签。

在HTML中，几乎所有的标签都有一个开始和结束标签：`<div></div>`，结束标签在你要关闭的标签名之前始终具有正斜杠。但是，HTML 中有一些称为“自闭合标签”的特殊实例，它们在另一个标签开始之前，不需要开始和结束标签都存在。

例如，换行标签可以写成`<br>`或者`<br />`，但是不应该写成`<br></br>`，因为它不包含任何内容。

在 JSX 中，规则略有不同。任何 JSX 元素都可以使用自闭合标签编写，并且每个元素都必须关闭。例如，换行标签必须始终编写为`<br />`。另一方面`<div>`可以写成`<div />`或者`<div></div>`。不同之处在于，在第一个语法版本中，无法在`<div />`中包含任何内容。在后面的挑战中你会发现，这种语法在渲染 React 组件时非常有用。

# --instructions--

修复代码编辑器中的错误，使其成为有效的 JSX 并成功转换。确保你不更改任何内容--你只需要在需要的地方关闭标签。

# --hints--

常量`JSX`应该返回一个`div`元素。

```js
assert.strictEqual(JSX.type, 'div');
```

`div`应该包含一个`br`标签。

```js
assert(Enzyme.shallow(JSX).find('br').length === 1);
```

`div`应该包含一个`hr`标签。

```js
assert(Enzyme.shallow(JSX).find('hr').length === 1);
```

# --solutions--

