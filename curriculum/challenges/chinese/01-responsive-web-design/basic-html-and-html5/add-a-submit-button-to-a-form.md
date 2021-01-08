---
id: bad87fee1348bd9aedd08830
title: 给表单添加提交按钮
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
---

# --description--

让我们来给表单添加一个 `submit`（提交）按钮。点击提交按钮时，表单中的数据将会被发送到 `action` 属性指定的 URL 上。

例如：

`<button type="submit">this button submits the form</button>`

# --instructions--

请在表单（`form` 元素）底部创建一个 `button` 元素，将按钮的 `type` 属性值设置为 `submit`，内容文本为 `提交`。

# --hints--

表单内部应有一个 `button` 元素。

```js
assert($('form').children('button').length > 0);
```

按钮的 `type` 属性值应为 `submit`。

```js
assert($('button').attr('type') === 'submit');
```

提交按钮的文本应为 `Submit` 。

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

`button` 元素应有结束标签。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --solutions--

