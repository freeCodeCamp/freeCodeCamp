---
id: bad87fee1348bd9aed508826
title: 使用 jQuery 克隆元素
challengeType: 6
forumTopicId: 16780
---

# --description--

除了移动标签，也可以把元素从一个地方复制到另一地方。

jQuery 有一个`clone()`方法，可以复制标签。

例如，如果想把`target2`从`left-well`复制到`right-well`，可以设置如下：

`$("#target2").clone().appendTo("#right-well");`

你是否注意到这两个 jQuery 方法连在一起了吗？这被称为`链式调用（function chaining）`，是一种用 jQuery 实现效果的简便方法。

克隆`target5`标签并附加到`left-well`。

# --hints--

`target5`标签应该在`right-well`内。

```js
assert($('#right-well').children('#target5').length > 0);
```

克隆`target5`标签并放在`left-well`内。

```js
assert($('#left-well').children('#target5').length > 0);
```

仅用 jQuery 移动这些标签。

```js
assert(!code.match(/class.*animated/g));
```

# --solutions--

