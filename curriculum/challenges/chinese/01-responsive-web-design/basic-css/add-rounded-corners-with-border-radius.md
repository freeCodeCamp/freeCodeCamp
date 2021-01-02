---
id: bad87fee1348bd9aedf08814
title: 用 border-radius 添加圆角边框
challengeType: 0
videoUrl: 'https://scrimba.com/c/cbZm2hg'
forumTopicId: 16649
---

# --description--

猫咪图片的四个角看起来很尖锐，我们可以使用 `border-radius` 属性来让它变得圆润。

# --instructions--

`border-radius` 的属性值单位可以是 `px`（像素）。请将猫咪图片 `border-radius` 的属性值设置为 10px。

**注意：**这个挑战有多个解决方法。例如，添加 `border-radius` 属性到 `.thick-green-border` 或 `.smaller-image` 都是可行的。

# --hints--

图片元素应具有 "thick-green-border" class。

```js
assert($('img').hasClass('thick-green-border'));
```

图片应含有 `10px` 的边框圆角。

```js
assert(
  $('img').css('border-top-left-radius') === '10px' &&
    $('img').css('border-top-right-radius') === '10px' &&
    $('img').css('border-bottom-left-radius') === '10px' &&
    $('img').css('border-bottom-right-radius') === '10px'
);
```

# --solutions--

