---
id: bad87fee1348cd8acdf08812
title: 创建一个 Bootstrap 按钮
challengeType: 0
forumTopicId: 16811
---

# --description--

Bootstrap 的 `button` 元素有着独有的、比默认 HTML 按钮更好的样式风格。

在较大的小猫图片下方创建新的 `button` 元素。 为它添加 `btn` 与 `btn-default` 两个 class 和 "Like" 文本。

# --hints--

创建新的 `button` 元素，设置文本为 'Like'。

```js
assert(
  new RegExp('like', 'gi').test($('button').text()) &&
    $('img.img-responsive + button.btn').length > 0
);
```

新的按钮元素应该有两个 class : `btn` 和 `btn-default`。

```js
assert($('button').hasClass('btn') && $('button').hasClass('btn-default'));
```

保证所有 `button` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --solutions--

