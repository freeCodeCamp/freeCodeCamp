---
id: 5a9036ee38fddaf9a66b5d37
title: 使用 grid-gap 为网格添加间距
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 1301118
---

# --description--

`grid-gap`属性是前两个挑战中的`grid-row-gap`属性和`grid-column-gap`属性的简写，它更方便使用。如果`grid-gap`只有一个值，那么这个值表示行与行之间、列与列之间的间距。如果`grid-gap`有两个值，那么第一个值表示行间距，第二个值表示列间距。

# --instructions--

使用`grid-gap`属性设置行间距为`10px`，设置列间距为`20px`。

# --hints--

`container`类应该有`grid-gap`属性，在行之间设置`10px`的间距，在列之间设置`20px`的间距。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

