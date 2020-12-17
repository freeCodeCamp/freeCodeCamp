---
id: bad87fee1348cd8acef08811
title: 体验 Bootstrap 彩虹色的按钮
challengeType: 0
forumTopicId: 18323
---

# --description--

`btn-primary` class 的颜色是你在应用中的主题色。这样 “突出显示” 是引导用户按步就班进行操作的有效办法。

将按钮的 class 从 Bootstrap 的 `btn-default` 替换为 `btn-primary`。

记住：你的按钮仍然需要 `btn` 和 `btn-block` class。

# --hints--

按钮的 class 属性应该有 `btn-primary`。

```js
assert($('button').hasClass('btn-primary'));
```

按钮的 class 属性应该仍有 `btn` 和 `btn-block`。

```js
assert($('button').hasClass('btn-block') && $('button').hasClass('btn'));
```

确保所有 `button` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --solutions--

