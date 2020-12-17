---
id: bad87fee1348bd9aedd08835
title: 给单选按钮和复选框添加默认选中项
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cWk3Qh6'
forumTopicId: 301094
---

# --description--

如果想设置某个单选按钮或多选按钮默认被选中，只需给`input`元素添加 "checked" 属性。 例如:

`<input type="radio" name="test-name" checked>`

# --instructions--

把第一个`radio button`和第一个`checkbox`都设置为默认选中。

# --hints--

表单的第一个单选按钮应该被默认选中。

```js
assert($('input[type="radio"]').prop('checked'));
```

表单的第一个多选按钮应该被默认选中。

```js
assert($('input[type="checkbox"]').prop('checked'));
```

# --solutions--

