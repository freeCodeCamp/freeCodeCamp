---
id: 587d778b367417b2b2512aa8
title: 添加可访问的日期选择器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
---

# --description--

表单中经常出现 `input` 标签，它可以用来创建多种表单控件。它的 `type` 属性指定了所要创建的 `input` 标签类型。

在以前的挑战中，我们已经见过 `text` 与 `submit` 类型的 `input` 标签。HTML5 规范添加了 `date` 类型来创建日期选择器。如果浏览器支持，在点击 `input` 标签时，日期选择器会显示出来，这让用户填写表单变得更加容易。

对于旧版本的浏览器，由于不支持 `date`，此时 `type` 属性会被浏览器设置为 `text`。这种情况下，我们可以利用 `label` 标签或者占位符文本来提示用户需要输入的日期格式。

举个例子：

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat 想举办一场比武大会，他想收集参赛者的最佳参赛时间。请为 Camper Cat 的页面添加一个 `input` 标签，其 `type` 属性值为 "date"，`id` 为 "pickdate"，`name` 属性值为 "date"。

# --hints--

应有 1 个 `input` 标签。

```js
assert($('input').length == 2);
```

`input` 标签的 `type` 属性值应该为 date。

```js
assert($('input').attr('type') == 'date');
```

`input` 标签的 `id` 应为 pickdate。

```js
assert($('input').attr('id') == 'pickdate');
```

`input` 标签的 `name` 属性值应该为 date。

```js
assert($('input').attr('name') == 'date');
```

# --solutions--

