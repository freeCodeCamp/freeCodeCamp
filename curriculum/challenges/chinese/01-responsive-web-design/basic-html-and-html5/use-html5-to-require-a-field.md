---
id: bad87fee1348bd9aedc08830
title: 给表单添加一个必填字段
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMd4EcQ'
forumTopicId: 18360
---

# --description--

当你设计表单时，你可以指定某些字段为必填项(required)，只有当用户填写了该字段后，才可以提交表单。

如果你想把文本输入框设置为必填项，在`input`元素中加上 required 属性就可以了，例如：`<input type="text" required>`

# --instructions--

给`input`元素加上`required`属性，这样用户就必须先在输入框里填入内容，然后才可以提交表单。

# --hints--

`input`元素必须有`required`属性。

```js
assert($('input').prop('required'));
```

# --solutions--

