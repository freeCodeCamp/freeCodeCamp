---
id: 587d78ae367417b2b2512afc
title: 使用 flex-grow 属性扩展项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 1301111
---

# --description--

与`flex-shrink`相对的是`flex-grow`。你应该还记得，`flex-shrink`会在容器太小时对元素作出调整。相应地，`flex-grow`会在容器太大时对元素作出调整。

例子与上一个挑战相似，如果一个项目的`flex-grow`属性值为 `1`，另一个项目的`flex-grow`属性值为 `3`，那么后者会较前者扩大 3 倍。

# --instructions--

为`#box-1`和`#box-2`添加 CSS 属性`flex-grow`，`#box-1`的值设为 `1`，`#box-2`的值设为 `2`。

# --hints--

`#box-1`元素应有`flex-grow`属性，其值应为 `1`。

```js
assert($('#box-1').css('flex-grow') == '1');
```

`#box-2`元素应有`flex-grow`属性，其值应为 `2`。

```js
assert($('#box-2').css('flex-grow') == '2');
```

# --solutions--

