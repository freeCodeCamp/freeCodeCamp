---
id: bad87fee1348bd9aedf04756
title: Class 选择器的优先级高于继承样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
---

# --description--

"pink-text" class 覆盖了`body`元素的 CSS 声明。

我们刚刚证明了我们的 class 会覆盖`body`的 CSS 样式。那么，下一个问题是，我们要怎么样才能覆盖我们的`pink-text`class？

# --instructions--

创建一个字体颜色为`blue`的`blue-text`CSS class，并确保它在`pink-text`下方声明。

在含有`pink-text`class 的`h1`元素里面，再添加一个`blue-text`class，这时候，我们将能看到到底是谁获胜。

HTML 同时应用多个 class 属性需以空格来间隔，例子如下:

`class="class1 class2"`

**注意：** HTML 元素里应用的 class 的先后顺序无关紧要。

但是，在`<style>`标签里面声明的`class`顺序十分重要。第二个声明始终优于第一个声明。因为`.blue-text`在`.pink-text`的后面声明，所以`.blue-text`会覆盖`.pink-text`的样式。

# --hints--

`h1`元素应该包含`pink-text` class。

```js
assert($('h1').hasClass('pink-text'));
```

`h1`元素应该包含`blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`blue-text`和`pink-text`需同时应用于`h1`元素上。

```js
assert($('.pink-text').hasClass('blue-text'));
```

`h1`元素的颜色应为蓝色。

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
```

# --solutions--

