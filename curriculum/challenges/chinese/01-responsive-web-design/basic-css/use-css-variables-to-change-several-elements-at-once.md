---
id: 5a9d725e424fe3d0e10cad10
title: 使用 CSS 变量一次更改多个元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bDECm'
forumTopicId: 301093
---

# --description--

<dfn>CSS 变量</dfn>是一种仅更改一个值，来一次性更改多个 CSS 样式属性的强大方法。

按照下面指示的来做，我们只需要改变三个值，多个样式将会同时被修改。

# --instructions--

在`penguin`class 里，将`black`改为`gray`，`gray`改为`white`，`yellow`改为`orange`。

# --hints--

`penguin` class 声明的`--penguin-skin`变量的值应为`gray`。

```js
assert(
  code.match(/.penguin\s*?{[\s\S]*--penguin-skin\s*?:\s*?gray\s*?;[\s\S]*}/gi)
);
```

`penguin` class 声明的`--penguin-belly`变量的值应为`white`。

```js
assert(
  code.match(/.penguin\s*?{[\s\S]*--penguin-belly\s*?:\s*?white\s*?;[\s\S]*}/gi)
);
```

`penguin` class 声明的`--penguin-beak`变量的值应为`orange`。

```js
assert(
  code.match(/.penguin\s*?{[\s\S]*--penguin-beak\s*?:\s*?orange\s*?;[\s\S]*}/gi)
);
```

# --solutions--

