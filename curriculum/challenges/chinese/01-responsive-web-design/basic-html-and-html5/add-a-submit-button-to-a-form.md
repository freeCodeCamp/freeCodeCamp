---
id: bad87fee1348bd9aedd08830
title: 给表单添加提交按钮
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
---

# --description--

让我们来给表单添加一个`submit`提交按钮，当点击提交按钮时，表单中的数据将会被发送到`action`属性指定的 URL 上。

例如：

`<button type="submit">this button submits the form</button>`

# --instructions--

在表单的底部创建一个`button`按钮，按钮的`type`属性值为`submit`，文本为`提交`。

# --hints--

表单内部应该有一个按钮。

```js
assert($('form').children('button').length > 0);
```

按钮的`type`属性值应该为`submit`。

```js
assert($('button').attr('type') === 'submit');
```

提交按钮的文本应该为`提交`。

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

确保按钮有结束标记。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --solutions--

