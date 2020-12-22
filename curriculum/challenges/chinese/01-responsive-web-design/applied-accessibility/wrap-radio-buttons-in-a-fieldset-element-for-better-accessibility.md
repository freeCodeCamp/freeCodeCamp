---
id: 587d778b367417b2b2512aa7
title: 将单选按钮包裹在 fieldset 元素中以获得更好的可访问性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVefw'
forumTopicId: 301030
---

# --description--

下一个表单主题与单选按钮的可访问性有关。在上一个挑战中，单选按钮含有一个拥有`for`属性的`label`标签，`for`属性指向相关选项的`id`。然而单选按钮通常成组出现，用户必须其中选择一项。本次挑战介绍一种可以语义化呈现单选按钮组的方法。

使用`fieldset`标签将单选按钮组包含在里面就可以实现这个目的，通常还会使用`legend`标签来为单选按钮组提供文字说明。屏幕阅读器也可以朗读这些文字。

当选项的含义很明确时，如：性别选择，`fieldset`标签与`legend`标签就可以省略。这时，使用含有`for`属性的`label`标签就足够了。

举个例子：

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

# --instructions--

当用户使用邮件注册时，Camper Cat 想知道他们的忍者等级。通过上一个挑战的学习，Camper Cat 创建了一组单选按钮，并为每个选项的`label`标签添加了`for`属性，但是 Camper Cat 的代码依然需要你的帮助。请将包含单选按钮组的`div`标签替换为`fieldset`标签；将`p`标签替换为`legend`标签。

# --hints--

你的代码应该使用 1 个`fieldset`标签包含单选按钮组。

```js
assert($('fieldset').length == 1);
```

确保`fieldset`标签是闭合的。

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

你的代码应该有 1 个包含询问用户忍者等级文字的`legend`标签。

```js
assert($('legend').length == 1);
```

你的代码不应该含有`div`标签。

```js
assert($('div').length == 0);
```

你的代码不应该有包含询问用户忍者等级文字的`p`标签。

```js
assert($('p').length == 4);
```

# --solutions--

