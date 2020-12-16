---
id: 5a90376038fddaf9a66b5d3c
title: 使用 justify-items 水平对齐所有项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
---

# --description--

有时你想让 CSS 网格中的网格项共享对齐方式。你可以像之前学习的那样分别设置它们的对齐方式，也可以对网格容器使用`justify-items`使它们一次性沿行轴对齐。对于这个属性你能使用在之前的两个挑战中学到的所有值，与之前不同的是，它将使网格中**所有**的网格项按所设置的方式对齐。

# --instructions--

使用`justify-items`属性设置所有网格项水平居中。

# --hints--

`container`类应该有`justify-items`属性且值为`center`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

