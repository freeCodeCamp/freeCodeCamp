---
id: 587d78a8367417b2b2512ae6
title: 以可变速率来给多个元素添加动画
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
---

# --description--

在前面的关卡里，我们通过修改 `@keyframes` 改变了两个相似动画元素的频率。你也可以通过改变多个元素的 `animation-duration` 来达到同样的效果。

在编辑器代码运行的动画里，天空中有三个以同样频率不停闪烁的星星。你可以设置每一个星星的 `animation-duration` 属性为不同的值来使其具有不同的闪烁频率。

# --instructions--

依次设置 class 为 `star-1`、`star-2`、`star-3` 的元素的 `animation-duration` 为 1s、0.9s、1.1s。

# --hints--

class 为 `star-1` 的 `animation-duration` 属性值应该 1s。

```js
assert($('.star-1').css('animation-duration') == '1s');
```

class 为 `star-2` 的 `animation-duration` 属性值应该 0.9s。

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

class 为 `star-3` 的 `animation-duration` 属性值应该 1.1s。

```js
assert($('.star-3').css('animation-duration') == '1.1s');
```

# --solutions--

