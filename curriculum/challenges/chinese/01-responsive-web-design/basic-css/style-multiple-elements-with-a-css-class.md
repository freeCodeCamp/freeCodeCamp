---
id: bad87fee1348bd9aefe08806
title: 使用 class 选择器设置多个元素的样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVbsQ'
forumTopicId: 18311
---

# --description--

通过 CSS class 选择器，多个 HTML 元素可以使用相同的 CSS 样式规则。你可以将`red-text`class 选择器应用在第一个`p`元素上。

# --hints--

`h2`元素应该是红色的。

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

`h2`元素应该含有`red-text` class 选择器。

```js
assert($('h2').hasClass('red-text'));
```

第一个`p`元素应该为红色。

```js
assert($('p:eq(0)').css('color') === 'rgb(255, 0, 0)');
```

第二和第三个`p`元素不应该为红色。

```js
assert(
  !($('p:eq(1)').css('color') === 'rgb(255, 0, 0)') &&
    !($('p:eq(2)').css('color') === 'rgb(255, 0, 0)')
);
```

第一个`p`元素应该包含`red-text` class 选择器。

```js
assert($('p:eq(0)').hasClass('red-text'));
```

# --solutions--

