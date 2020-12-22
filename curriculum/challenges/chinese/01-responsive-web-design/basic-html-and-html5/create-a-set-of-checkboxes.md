---
id: bad87fee1348bd9aedf08835
title: 创建一组复选框
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
---

# --description--

`checkboxes`（复选框）就好比多项选择题，正确答案有多个。

复选框是`input`选择框的另一种类型。

每一个复选框都应该嵌套在它自己的`label`（标签）元素中。

所有关联的复选框应该拥有相同的`name`属性。

最佳实践是在`label`元素上设置`for`属性，让其值与复选框的`id`属性值相等，这样就在`label`元素和它的子元素复选框之间创建了一种链接关系。例如：

下面是一个复选框的例子：

`<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>`

# --instructions--

给表单添加三个复选框，每个复选框都被嵌套进`label`元素中，并且它的`name`属性均为`personality`，它们的内容可以随意指定。

# --hints--

表单应该有三个复选框。

```js
assert($('input[type="checkbox"]').length > 2);
```

每个复选框都应该被嵌套进`label`元素中。

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

确保`label`元素有结束标记。

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

设置复选框的`name`属性均为`personality`。

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

每个复选框都应该在 `form` 标签内。

```js
assert($('label').parent().get(0).tagName.match('FORM'));
```

# --solutions--

