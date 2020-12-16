---
id: bad87fee1348bd9aec908855
title: 给每个元素一个唯一的 id
challengeType: 0
forumTopicId: 18191
---

# --description--

我们也可以通过 jQuery 根据每个按钮唯一的 id 来标识出它们。

给你的每一个按钮设置唯一的 id，以 `target1` 开始，`target6` 结束。

确保 `target1` 到 `target3` 在 `#left-well` 之中，`target4` 到 `target6` 在 `#right-well` 之中。

# --hints--

其中一个 `button` 元素应该有 id `target1`。

```js
assert(
  $('#left-well').children('#target1') &&
    $('#left-well').children('#target1').length > 0
);
```

其中一个 `button` 元素应该有 id `target2`。

```js
assert(
  $('#left-well').children('#target2') &&
    $('#left-well').children('#target2').length > 0
);
```

其中一个 `button` 元素应该有 id `target3`。

```js
assert(
  $('#left-well').children('#target3') &&
    $('#left-well').children('#target3').length > 0
);
```

其中一个 `button` 元素应该有 id `target4`。

```js
assert(
  $('#right-well').children('#target4') &&
    $('#right-well').children('#target4').length > 0
);
```

其中一个 `button` 元素应该有 id `target5`。

```js
assert(
  $('#right-well').children('#target5') &&
    $('#right-well').children('#target5').length > 0
);
```

其中一个 `button` 元素应该有 id `target6`。

```js
assert(
  $('#right-well').children('#target6') &&
    $('#right-well').children('#target6').length > 0
);
```

# --solutions--

