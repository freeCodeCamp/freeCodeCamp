---
id: bad87fee1348bd9acde08812
title: 使图片自适应移动端
challengeType: 0
forumTopicId: 18232
---

# --description--

首先，在已有的图片下面添加一张新的图片. 设置 `src` 属性为 `https://bit.ly/fcc-running-cats`。

如果图片的大小恰恰和我们手机屏幕尺寸大小一样自然是最好的。

幸运的是现在通过 Bootstrap，我们仅仅只需要为 image 标签上设置 class 属性为 `img-responsive` 就可以让它完美的适应你页面的宽度了。

# --hints--

该页面拥有总计两个图片。

```js
assert($('img').length === 2);
```

新的图片应该在旧的图片下面并且含有 class 属性 `img-responsive`。

```js
assert($('img:eq(1)').hasClass('img-responsive'));
```

新的图片不应该含有 class 属性 `smaller-image`。

```js
assert(!$('img:eq(1)').hasClass('smaller-image'));
```

新图片的 `src` 属性应该为 `https://bit.ly/fcc-running-cats`。

```js
assert($('img:eq(1)').attr('src') === 'https://bit.ly/fcc-running-cats');
```

确保新的 `img` 元素有一个闭合的右尖括号 “/>”。

```js
assert(
  code.match(/<img/g) &&
    code.match(/<img[^<]*>/g).length === 2 &&
    code.match(/<img/g).length === 2
);
```

# --solutions--

