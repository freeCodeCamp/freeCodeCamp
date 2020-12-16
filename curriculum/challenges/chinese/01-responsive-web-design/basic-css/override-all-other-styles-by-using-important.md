---
id: bad87fee1348bd9aedf07756
title: Important 的优先级最高
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
---

# --description--

耶！我们刚刚又证明了行内样式会覆盖`style`标签里面所有的 CSS 声明。

不过，还有一种方式可以覆盖重新 CSS 样式。这是所有方法里面最强大的一个。在此之前，我们要考虑清楚，为什么我们需要覆盖 CSS 样式。

在很多时候，你使用 CSS 库，有时候它们声明的样式会意外的覆盖 CSS 样式。当你需要保证 CSS 样式不受影响，你可以使用`!important`。

让我们回到`pink-text`class 声明之中，它已经被随其后的 class 声明，id 声明，以及行内样式所覆盖。

# --instructions--

在`pink-text`class 的`color`声明里面使用`!important`关键字，去确保`h1`元素的字体颜色一定为粉色。 操作的方法大概如下： `color: red !important;`

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

`h1`元素应该包含`color: white`的行内样式声明。

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

`pink-text` class 声明应该含有`!important`关键字。

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

`h1`元素的字体颜色应该为粉色。

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --solutions--

