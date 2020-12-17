---
id: 5a9036e138fddaf9a66b5d33
title: 使用 grid-template-rows 添加多行
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
---

# --description--

在上个挑战中，你创建的网格会自动设置行数。你可以像用`grid-template-columns`设置网格的列一样，用`grid-template-rows`设置网格的行。

# --instructions--

给网格添加两行，使每行高度均为`50px`。

# --hints--

`container`类应该有`grid-template-rows`属性，且该属性的两个值均为`50px`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

