---
id: bad87fee1348bd9aec908847
title: 分割你的 Bootstrap Row
challengeType: 0
forumTopicId: 18306
---

# --description--

现在我们已经有了一个 Bootstrap Row，让我们把它分成两列来放置我们的元素。

在行内创建两个 class 属性为 `col-xs-6` 的 `div` 元素。

# --hints--

将两个 `div class='col-xs-6'` 元素内嵌入你的 `div class='row'` 元素中。

```js
assert($('div.row > div.col-xs-6').length > 1);
```

确保你的 `div` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --solutions--

