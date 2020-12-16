---
id: bad87fee1348bd9aedf06756
title: 内联样式的优先级高于 ID 选择器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
---

# --description--

我们刚刚证明了，id 选择器无论在`style`标签哪里声明，都会覆盖 class 声明的样式，

其实还有其他方法可以覆盖重写 CSS 样式。你还记得行内样式吗？

# --instructions--

使用行内样式尝试让`h1`的字体颜色变白。像下面这样使用：

`<h1 style="color: green">`

`h1`元素需继续保留`blue-text`和`pink-text`class。

# --hints--

`h1`元素应该包含`pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`h1`元素应该包含`blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`h1`元素应该包含一个名为`orange-text`的id。

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1`元素应该含有行内样式。

```js
assert(document.querySelector('h1[style]'));
```

`h1`元素的字体颜色应该为白色。

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
```

# --solutions--

