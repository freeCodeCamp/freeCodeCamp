---
id: 5a94fe8569fb03452672e464
title: 在网格中创建网格
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N78Ap'
forumTopicId: 301128
---

# --description--

将元素转换为网格只会影响其子代元素。因此，在把某个子代元素设置为网格后，就会得到一个嵌套的网格。

例如，设置类为`item3`的元素的`display`和`grid-template-columns`属性，就会得到一个嵌套的网格。

# --instructions--

用`display`和`grid-template-columns`，使类为`item3`元素转换为有两列且宽度为`auto`和`1fr`的网格。

# --hints--

`item3`类应该有`grid-template-columns`属性且值为`auto`和`1fr`。

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

`item3`类有`display`属性且值为`grid`。

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --solutions--

