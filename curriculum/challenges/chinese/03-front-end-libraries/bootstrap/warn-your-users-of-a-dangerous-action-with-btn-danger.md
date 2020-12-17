---
id: bad87fee1348ce8acef08814
title: 使用 btn-danger 提示危险操作
challengeType: 0
forumTopicId: 18375
---

# --description--

Bootstrap 有着丰富的预定义按钮颜色。 红色 `btn-danger` class 用来提醒用户此行为具有破坏性，比如删除一张猫的图片。

创建一个包含文本 "Delete" 的按钮并为它设置 class 为 `btn-danger`。

记住：你的这些按钮仍然需要 `btn` 和 `btn-block` class。

# --hints--

创建一个包含文本 'Delete' 的 `button` 元素。

```js
assert(new RegExp('Delete', 'gi').test($('button').text()));
```

所有 Bootstrap 按钮的 class 属性都应该有 `btn` 和 `btn-block`。

```js
assert($('button.btn-block.btn').length > 2);
```

新创建按钮的 class 属性应该有 `btn-danger`。

```js
assert($('button').hasClass('btn-danger'));
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

