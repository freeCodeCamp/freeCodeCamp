---
id: 587d78a8367417b2b2512ae3
title: 使用无限的动画计数制作永不停止的动画
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
---

# --description--

之前的关卡里介绍了一些动画属性以及 `@keyframes` 规则的用法。还有一个常用的动画属性是 `animation-iteration-count`，这个属性允许你控制动画循环的次数。下面是一个例子：

`animation-iteration-count: 3;`

在这里动画会在运行 3 次后停止，如果想让动画一直运行，可以把值设置成 infinite。

# --instructions--

把 `animation-iteration-count` 属性值改成 infinite，以使右边的球持续跳跃。

# --hints--

`animation-iteration-count` 属性值应该为 infinite。

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
```

# --solutions--

