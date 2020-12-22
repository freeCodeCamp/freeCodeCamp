---
id: 587d778a367417b2b2512aa6
title: 使用 label 元素提高表单的可访问性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
---

# --description--

合理地使用语义化的 HTML 标签和属性可以提升页面可访问性。在接下来的挑战中，你将会看到使用表单属性的重要场景。

`label`标签用于呈现特定表单控件的文本，通常是选项的名称。这些文本代表了选项的含义，使表单具有更好的可读性。`label`标签的`for`属性指定了与`label`绑定的表单控件，并且屏幕阅读器也会读取`for`属性。

在 HTML 基础章节的课程中，我们已经了解了单选按钮标签。在那节课程中，我们为了可以点击单选按钮的名称，将`input`标签放在`label`标签中。在本节课程中，我们介绍了另外一种实现这个功能的方法，那就是使用`for`属性。

`for`属性的值必须与表单控件的`id`属性的值相同。举个例子：

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat 希望他的博客文章能有很多订阅，他想添加一个电子邮件注册表单。请为表示电子邮件的`label`标签添加`for`属性，并设置属性值与`input`标签的`id`属性值相同。

# --hints--

你的`label`标签应该有 1 个非空的`for`属性。

```js
assert($('label').attr('for'));
```

`for`属性的值应该与`input`标签的 id 值 email 相同。

```js
assert($('label').attr('for') == 'email');
```

# --solutions--

