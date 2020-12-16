---
id: 587d778b367417b2b2512aa8
title: 添加可访问的日期选择器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
---

# --description--

表单中经常出现`input`标签，它可以用来创建多种表单控件。它的`type`属性指定了所要创建的`input`标签类型。

在以前的挑战中，你可能已经见过`text`与`submit`类型的`input`标签，HTML5 引入了`date`类型来创建时间选择器。依赖于浏览器的支持，当点击`input`标签时，时间选择器会显示出来，这可以让用户填写表单更加容易。

对于旧版本的浏览器，`type`属性的默认值是`text`。这种情况下，可以利用`label`标签或者占位文本来提示用户`input`标签的输入类型为日期。

举个例子：

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat 想举办一场比武大会，他想收集参赛者的最佳参赛时间。请为 Camper Cat 的页面添加一个`input`标签，其`type`属性值为 date，`id`属性为 pickdate，`name`属性为 date。

# --hints--

你的代码中应该有 1 个`input`标签。

```js
assert($('input').length == 2);
```

你的`input`标签的`type`属性值应该为 date。

```js
assert($('input').attr('type') == 'date');
```

你的`input`标签的`id`属性值应该为 pickdate。

```js
assert($('input').attr('id') == 'pickdate');
```

你的`input`标签的`name`属性值应该为 date。

```js
assert($('input').attr('name') == 'date');
```

# --solutions--

