---
id: bad87fee1348bd9aede08830
title: 创建一个表单
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cmQ3Kfa'
forumTopicId: 16817
---

# --description--

我们可以只通过 HTML 来实现发送数据给服务器的表单，只需要给 `form` 元素添加 `action` 属性即可。

例如:

`<form action="/url-where-you-want-to-submit-form-data"></form>`

# --instructions--

把现有的 `input` 输入框放到一个新建的 `form` 表单里，然后设置表单的 `action` 属性为 `"https://freecatphotoapp.com/submit-cat-photo"`。

# --hints--

现有的 `input` 输入框应位于新创建的 `form` 表单里面。

```js
const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'cat photo URL'
);
```

表单的 `action` 属性值应设置为 `https://freecatphotoapp.com/submit-cat-photo`。

```js
assert(
  $('form').attr('action') === 'https://freecatphotoapp.com/submit-cat-photo'
);
```

`form` 元素应有开始标签和结束标签。

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
);
```

# --solutions--

