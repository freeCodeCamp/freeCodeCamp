---
id: bad87fee1348bd9aedf08815
title: 用 border-radius 制作圆形图片
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvrcB'
forumTopicId: 18229
---

# --description--

除像素外，你也可以使用百分比来指定 `border-radius` 的值。

# --instructions--

将 `border-radius` 的属性值设置为 `50%`。

# --hints--

图片的边框圆角应设置为 `50%`，这样图片就会是圆形的。

```js
assert(parseInt($('img').css('border-top-left-radius')) > 48);
```

值应为 `50%`。

```js
assert(code.match(/50%/g));
```

# --solutions--

