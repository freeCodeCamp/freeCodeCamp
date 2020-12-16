---
id: bad87fee1348bd9aed908826
title: 使用 jQuery 更改元素的 CSS
challengeType: 6
forumTopicId: 16776
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

我们也能用 jQuery 直接改变 HTML 标签的 CSS。

jQuery 有一个`.css()`方法，其能改变标签的 CSS。

下面的代码效果是把颜色变蓝：

`$("#target1").css("color", "blue");`

这与通常的 CSS 声明略有不同，因为这个 CSS 属性和它的值在英文引号里，并且它们用逗号而不是冒号间隔开。

删除你的jQuery选择器，并留下空的`document ready function`。

请选择`target1`并将其颜色变为红色（red）。

# --hints--

`target1`标签应该有红色文本。

```js
assert($('#target1').css('color') === 'rgb(255, 0, 0)');
```

仅用 jQuery 给标签添加类。

```js
assert(!code.match(/class.*animated/g));
```

# --solutions--

