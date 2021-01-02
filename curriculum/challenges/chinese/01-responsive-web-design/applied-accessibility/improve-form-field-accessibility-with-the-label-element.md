---
id: 587d778a367417b2b2512aa6
title: 使用 label 元素提高表单的可访问性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
---

# --description--

合理地使用语义化 HTML 标签和属性可以提升页面的可访问性。在接下来的挑战中，你将会看到在表单中使用属性的场景。

`label` 标签的文本内容通常会是表单组件的名称或标签。这些文本表明了组件的意义，也提升了表单的可访问性。`label` 标签的 `for` 属性将标签与表单组件绑定；同时，屏幕阅读器也会读取 `for` 属性的属性值。

在 HTML 基础章节中，我们已经学习使用了单选按钮标签。在那次挑战中，为了让标签可以在点击的时候也选中输入框，我们将 `input` 标签嵌套在了 `label` 标签里面。在本节课程中，我们会了解到另外一种实现这个功能的方法，那就是使用 `for` 属性。

`for` 的属性值必须与表单组件的 `id` 属性值相同。举个例子：

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat 觉得他的博客文章会有很多人订阅，因此他想添加一个电子邮件注册表单。请为表示电子邮件的 `label` 标签添加 `for` 属性，并将其属性值设置为与 `input` 标签的 `id` 属性值相同。

# --hints--

`label `标签应该有一个非空的 `for` 属性。

```js
assert($('label').attr('for'));
```

`for` 的属性值应与用于输入邮箱的 `input` 标签 id 属性值相同。

```js
assert($('label').attr('for') == 'email');
```

# --solutions--

