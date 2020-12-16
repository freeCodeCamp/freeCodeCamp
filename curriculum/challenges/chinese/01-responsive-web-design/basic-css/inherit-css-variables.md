---
id: 5a9d7295424fe3d0e10cad14
title: 继承 CSS 变量
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLZZhZ'
forumTopicId: 301088
---

# --description--

当创建一个变量时，变量会在创建的选择器里可用。同时，在这个选择器的后代里面也是可用的。这是因为 CSS 变量是可继承的，和普通的属性一样。

CSS 变量经常会定义在 <dfn>:root</dfn> 元素内，这样就可被所有选择器继承。`:root` 是一个 <dfn>pseudo-class</dfn> 选择器匹配文档的根选择器，通常指 `html` 元素。通过在 `:root` 里创建变量，变量在全局可用，以及在 style 样式的选择器里也生效。

# --instructions--

在 `:root` 选择器里定义变量 `--penguin-belly` 并赋值 `pink`。会发现变量被继承，所有使用该变量的子元素都会有 pink 背景。

# --hints--

应该在 `:root` 里声明 `--penguin-belly` 变量并赋值 `pink`。

```js
assert(
  code.match(/:root\s*?{[\s\S]*--penguin-belly\s*?:\s*?pink\s*?;[\s\S]*}/gi)
);
```

# --solutions--

