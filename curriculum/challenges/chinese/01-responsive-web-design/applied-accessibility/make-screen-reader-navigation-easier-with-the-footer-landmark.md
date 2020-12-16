---
id: 587d7788367417b2b2512aa3
title: 使用 footer 元素使屏幕阅读器更容易导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
---

# --description--

与`header`和`nav`类似，`footer`也具有语义化特性，可以使辅助设备快速定位到它。它位于页面底部，用于呈现版权信息或者相关文档链接。

# --instructions--

Camper Cat 的忍者训练页面进展顺利。请将他在页面底部呈现版权信息的`div`标签更改为`footer`标签。

# --hints--

你的代码中应该包含 1 个`footer`标签。

```js
assert($('footer').length == 1);
```

你的代码中不应包含`div`标签。

```js
assert($('div').length == 0);
```

你代码中的`footer`应该是闭合的。

```js
assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g));
```

# --solutions--

