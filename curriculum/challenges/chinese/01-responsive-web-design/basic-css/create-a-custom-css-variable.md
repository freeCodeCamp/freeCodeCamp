---
id: 5a9d726c424fe3d0e10cad11
title: 创建一个自定义的 CSS 变量
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQd27Hr'
forumTopicId: 301086
---

# --description--

创建一个 CSS 变量，你只需要在变量名前添加两个`破折号`，并为其赋值，例子如下：

```css
--penguin-skin: gray;
```

这样会创建一个`--penguin-skin`变量并赋值为`gray（灰色）`。 现在，其他元素可通过该变量来设置为`gray（灰色）`。

# --instructions--

在`penguin`class 里面，创建一个`--penguin-skin`变量，且赋值为`gray（灰色）`。

# --hints--

`penguin` class 里应声明`--penguin-skin`变量，且赋值为`gray`。

```js
assert(
  code.match(/.penguin\s*?{[\s\S]*--penguin-skin\s*?:\s*?gray\s*?;[\s\S]*}/gi)
);
```

# --solutions--

