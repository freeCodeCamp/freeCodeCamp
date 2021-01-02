---
id: 587d7788367417b2b2512aa3
title: 使用 footer 元素来让屏幕阅读器更容易进行导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
---

# --description--

与 `header` 和 `nav` 类似，`footer` 元素也具有语义化的特性，可以让辅助工具快速定位到它。它位于页面底部，用于呈现版权信息或者相关文档链接。

# --instructions--

Camper Cat 的忍者训练页面进展顺利。请将他在页面底部呈现版权信息的 `div` 元素更改为 `footer` 元素。

# --hints--

应存在一个 `footer` 标签。

```js
assert($('footer').length == 1);
```

不应存在 `div` 标签。

```js
assert($('div').length == 0);
```

确保 `footer` 元素有结束标签。

```js
assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g));
```

# --solutions--

