---
id: 587d7fad367417b2b2512be2
title: 通过单击事件更改文本
challengeType: 6
forumTopicId: 301500
---

# --description--

当点击事件发生时，你可以使用 JavaScript 更新 HTML 元素。

例如，当用户点击 "Get Message" 按钮时，它将改变类名`message`元素的文本为 "Here is the message"。

通过在点击事件内添加以下代码实现：

`document.getElementsByClassName('message')[0].textContent="Here is the message";`

# --instructions--

在`onclick`事件处理器中添加代码，改变`message`元素内的文字为 "Here is the message"。

# --hints--

你的代码应该使用`document.getElementsByClassName`方法来选择类名为`message`的元素，然后将其`innerHTML`改为给定文字。

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.textContent\s*?=\s*?('|")Here is the message\2/g
  )
);
```

# --solutions--

