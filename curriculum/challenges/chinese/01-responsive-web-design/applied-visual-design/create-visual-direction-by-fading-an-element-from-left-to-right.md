---
id: 587d78a7367417b2b2512ae2
title: 通过从左到右淡化元素来创建视觉方向
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
---

# --description--

在本关里，你将要改变动画元素的 `opacity`，使其在到达屏幕右侧时渐隐。

在展示的动画里，具有渐变背景的圆形元素在 50% 标记的 `@keyframes` 规则处向右移动。

# --instructions--

使用 id 选择器选择 id 为 `ball` 的元素，在 `50%` 里添加 `opacity` 属性并赋值 0.1，使其在向右移动时渐隐。

# --hints--

50% 处 `keyframes` 规则应该设置 `opacity` 属性值为 0.1 以使其渐隐。

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --solutions--

