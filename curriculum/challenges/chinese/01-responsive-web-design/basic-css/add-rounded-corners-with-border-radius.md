---
id: bad87fee1348bd9aedf08814
title: 用 border-radius 添加圆角边框
challengeType: 0
videoUrl: 'https://scrimba.com/c/cbZm2hg'
forumTopicId: 16649
---

# --description--

猫咪图片边角很尖锐，我们可以使用`border-radius`属性来让它变得圆润。

# --instructions--

`border-radius`可以用`px`像素单位来赋值。给猫咪图片设置 10px 的`border-radius`。

注意：这个挑战有多个解决方法。例如，添加`border-radius`属性到`.thick-green-border`class 或`.smaller-image`class 里都是可行的。

# --hints--

图片元素应具有 "thick-green-border" class 属性。

```js
assert($('img').hasClass('thick-green-border'));
```

图片应含有`10px`的边框圆角。

```js
assert(
  $('img').css('border-top-left-radius') === '10px' &&
    $('img').css('border-top-right-radius') === '10px' &&
    $('img').css('border-bottom-left-radius') === '10px' &&
    $('img').css('border-bottom-right-radius') === '10px'
);
```

# --solutions--

