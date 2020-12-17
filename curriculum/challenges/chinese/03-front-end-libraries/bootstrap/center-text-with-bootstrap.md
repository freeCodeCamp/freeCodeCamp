---
id: bad87fee1348bd8acde08812
title: 用 Bootstrap 居中文本
challengeType: 0
forumTopicId: 16771
---

# --description--

我们可以使用 Bootstrap 将顶部的元素居中来美化页面。只需要将 `h2` 元素的 class 属性设置为 `text-center` 就可以实现。

记住：我们通过空格分隔不同的 class 可以为一个元素添加多个 class ，就像这样：

`<h2 class="red-text text-center">your text</h2>`

# --hints--

你的 `h2` 元素应该居中且有一个 class 为 `text-center`

```js
assert($('h2').hasClass('text-center'));
```

你的 `h2` 元素应该还有另一个 class 为 `red-text`

```js
assert($('h2').hasClass('red-text'));
```

# --solutions--

