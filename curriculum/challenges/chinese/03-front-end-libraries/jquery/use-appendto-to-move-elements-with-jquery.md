---
id: bad87fee1348bd9aed608826
title: 使用 jQuery 的 appendTo 方法移动元素
challengeType: 6
forumTopicId: 18340
---

# --description--

现在我们学习把标签从一个`div`移动到另一个`div`。

jQuery 有一个`appendTo()`方法，可以选取 HTML 标签并将其添加到另一个标签里面。

例如，如果要把`target4`从右框移到左框，可以设置如下：

`$("#target4").appendTo("#left-well");`

请把`target2`标签从`left-well`移动到`right-well`。

# --hints--

`target2`标签应该不在`left-well`内。

```js
assert($('#left-well').children('#target2').length === 0);
```

`target2`标签应该在`right-well`内。

```js
assert($('#right-well').children('#target2').length > 0);
```

仅用 jQuery 移动这些标签。

```js
assert(!code.match(/class.*animated/g));
```

# --solutions--

