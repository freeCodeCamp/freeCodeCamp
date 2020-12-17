---
id: bd7123c8c441eddfaeb5bdef
title: 向 HTML 元素问好
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
---

# --description--

欢迎参加 freeCodeCamp 的编程挑战赛，这些挑战将会帮助你逐步掌握 Web 开发。

HTML 是英文 Hyper Text Markup Language（超文本标记语言）的缩写。首先，我们来用 HTML 制作一个简单的网页，你可以直接在网页内置的代码编辑器中编辑代码。

你看到代码编辑器中的`<h1>Hello</h1>`了吗? 那就是一个 HTML 元素。

大部分 HTML 元素都有一个`开始标记`和一个`结束标记`。

开始标记像这样：`<h1>`

结束标记像这样：`</h1>`

开始标记和结束标记的唯一区别就是结束标记多了一个`/`。

每个挑战都有测试，任何时候点击**运行测试**按钮就可以运行测试。如果代码通过测试，将会弹出一个窗口，你就可以进入下一个挑战。反之，测试区会显示你没有通过测试的原因。

# --instructions--

请把`h1`元素的内容改为：`Hello World`。

# --hints--

`h1`元素的内容应该为：`Hello World`。

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --solutions--

