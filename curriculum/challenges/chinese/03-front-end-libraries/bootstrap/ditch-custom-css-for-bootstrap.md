---
id: bad87fee1347bd9aedf08845
title: 用 Bootstrap 来取代我们之前的自定义样式
challengeType: 0
forumTopicId: 17565
---

# --description--

现在我们可以清理一下之前代码，用 Bootstrap 的内置样式来替换我们之前定义的样式，这样会让我们的 Cat Photo App 看起来更简洁些。

别担心————以后我们会有大把时间来自定义我们的 CSS 样式的。

删除 `style` 元素里的 `.red-text`, `p`, 和 `.smaller-image` CSS 声明，使 `style` 元素留下的声明只有 `h2` 和 `thick-green-border`.

删除包含死链接的 `p` 元素。 然后将 `h2` 的 `red-text` class 替换为 Bootstrap 的 `text-primary` class.

最后, 将你第一个 `img` 元素的 "smaller-image" class 替换为 `img-responsive` class.

# --hints--

h2 元素的 class 不应为 `red-text`。

```js
assert(!$('h2').hasClass('red-text'));
```

h2 元素的 class 应为 `text-primary`。

```js
assert($('h2').hasClass('text-primary'));
```

你的段落元素（p）应该不再使用 `Monospace` 字体。

```js
assert(
  !$('p')
    .css('font-family')
    .match(/monospace/i)
);
```

移除你第一张图片的 class 属性 `smaller-image`。

```js
assert(!$('img').hasClass('smaller-image'));
```

给你的第一张图片添加 class 属性 `img-responsive`。

```js
assert($('.img-responsive').length > 1);
```

# --solutions--

