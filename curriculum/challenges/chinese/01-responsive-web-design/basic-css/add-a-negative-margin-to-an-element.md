---
id: bad87fee1348bd9aedf08823
title: 给元素添加负外边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpyGs3'
forumTopicId: 16166
---

# --description--

元素的 `margin（外边距）` 用来控制元素 `border（边框）` 与其周围元素之间的距离大小。

如果你把元素的 `margin` 设置为负值，元素会变得占用更多空间。

# --instructions--

请将蓝色框的 `margin` 设为负值，跟红色框 `margin` 的属性值设置成一样的大小。

将蓝色框的 `margin` 设置为 `-15px`，它会让蓝色框填满整个黄色框。

# --hints--

class 为 `blue-box` 的元素的 `margin` 应设置为 `-15px`。

```js
assert($('.blue-box').css('margin-top') === '-15px');
```

# --solutions--

