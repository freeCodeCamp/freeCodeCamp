---
id: bad87fee1348cd8acef08813
title: 使用 btn-info 调出可选操作
challengeType: 0
forumTopicId: 16770
---

# --description--

Bootstrap 有着丰富的预定义按钮颜色。浅蓝色 `btn-info` class 通常用在用户可能采取的操作上。

在你的 "Like" 按钮下方创建包含文本 "Info" 的块级 Bootstrap 按钮， 然后为该按钮添加 Bootstrap 的 `btn-info` 和 `btn-block` class。

记住：你的这些按钮仍然需要 `btn` 和 `btn-block` class。

# --hints--

创建包含文本 'Info' 的 `button` 元素。

```js
assert(new RegExp('info', 'gi').test($('button').text()));
```

两个按钮的 class 属性应该仍然具有 `btn` 和 `btn-block`。

```js
assert($('button.btn-block.btn').length > 1);
```

新按钮的 class 属性应该含有 `btn-info`。

```js
assert($('button').hasClass('btn-info'));
```

确保你所有的 `button` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --solutions--

