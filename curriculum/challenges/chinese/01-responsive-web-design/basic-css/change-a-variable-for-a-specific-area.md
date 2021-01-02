---
id: 5a9d72a1424fe3d0e10cad15
title: 更改特定区域的变量
challengeType: 0
videoUrl: 'https://scrimba.com/c/cdRwbuW'
forumTopicId: 301085
---

# --description--

当你在 `:root` 里创建变量时，这些变量的作用域是整个页面。

如果在元素里创建相同的变量，会重写 `:root` 变量设置的值。

# --instructions--

在 `penguin` class 里，请设置 `--penguin-belly` 的值为 `white`。

# --hints--

应在 `penguin` class 里重定义 `--penguin-belly` 的变量值，新的值应为 `white`。

```js
assert(
  code.match(/.penguin\s*?{[\s\S]*--penguin-belly\s*?:\s*?white\s*?;[\s\S]*}/gi)
);
```

# --solutions--

