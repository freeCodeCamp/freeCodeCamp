---
id: bad87fee1348bd9aedf08803
title: 更改文本的颜色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 1
---

# --description--

现在让我们来修改文本的颜色。

我们通过修改 `h2` 元素的 `style` 属性的 `color` 属性值来改变文本颜色。

以下是将 `h2` 元素设置为蓝色的方法：

`<h2 style="color: blue;">CatPhotoApp</h2>`

请注意行内 `style` 最好以 `;` 来结束。

# --instructions--

请把 `h2` 元素的文本颜色设置为红色。

# --hints--

`h2` 元素应该有一个 `style` 声明。

```js
assert($('h2').attr('style'));
```

`h2` 元素的颜色应为 `red`。

```js
assert($('h2')[0].style.color === 'red');
```

`style` 声明应该以 `;` 结尾。

```js
assert($('h2').attr('style') && $('h2').attr('style').endsWith(';'));
```

# --solutions--

