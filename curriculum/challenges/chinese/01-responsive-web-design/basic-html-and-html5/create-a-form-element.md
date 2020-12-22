---
id: bad87fee1348bd9aede08830
title: 创建一个表单
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cmQ3Kfa'
forumTopicId: 16817
---

# --description--

如果想使用 HTML 向服务器提交数据，可以给`form`添加`action`属性。

例如:

`<form action="/url-where-you-want-to-submit-form-data"></form>`

# --instructions--

在`input`输入框外层创建一个`form`表单，然后设置表单的`action`属性为`"https://freecatphotoapp.com/submit-cat-photo"`。

# --hints--

在`input`输入框外层创建一个`form`表单。

```js
assert(
  $('form') &&
    $('form').children('input') &&
    $('form').children('input').length > 0
);
```

确保表单的`action`属性为`"https://freecatphotoapp.com/submit-cat-photo"`。

```js
assert(
  $('form').attr('action') === 'https://freecatphotoapp.com/submit-cat-photo'
);
```

确保表单有开始标记和结束标记。

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
);
```

# --solutions--

