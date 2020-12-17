---
id: 587d78a8367417b2b2512ae5
title: 以可变速率来给元素添加动画
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ89WA4'
forumTopicId: 301040
---

# --description--

改变相似元素的动画频率的方法有很多。目前接触到的就有 `animation-iteration-count` 和 `@keyframes`。

举例说明，右边的动画包含了两个小星星，每个小星星都在 20% `@keyframes` 处变小并且 opacity 变为 20%，也就是一闪一闪的动画效果。你可以通过改变其中一个星星的 `@keyframes` 规则以使两个小星星以不同的频率闪烁。

# --instructions--

通过改变 class 为 `star-1` 的元素的 `@keyframes` 为 50% 以改变其动画频率。

# --hints--

`star-1` class 的 `@keyframes` 规则应该为50%。

```js
assert(code.match(/twinkle-1\s*?{\s*?50%/g));
```

# --solutions--

