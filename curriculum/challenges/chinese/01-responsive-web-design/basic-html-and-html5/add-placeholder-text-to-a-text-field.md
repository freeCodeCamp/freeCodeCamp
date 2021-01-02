---
id: bad87fee1348bd9aedf08830
title: 给输入框添加占位符文本
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
---

# --description--

`Placeholder` 占位符是用户在 `input` 输入框中输入任何东西前的预定义文本。

你可以像这样创建一个占位符：

`<input type="text" placeholder="this is placeholder text">`

**注意：**别忘了 `input` 元素是 "自闭和标签"，即不需要结束标签。

# --instructions--

把 `input` 输入框的 `placeholder` 占位符文本设置为 "cat photo URL"。

# --hints--

给现有的 `input` 输入框添加一个 `placeholder` 属性。

```js
assert($('input[placeholder]').length > 0);
```

设置 `placeholder` 属性的值为 `cat photo URL`。

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

`input` 元素不该有结束标签。

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

`input` 输入框的语法必须正确。

```js
assert($('input[type=text]').length > 0);
```

# --solutions--

