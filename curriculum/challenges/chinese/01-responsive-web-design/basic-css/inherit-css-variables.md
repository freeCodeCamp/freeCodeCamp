---
id: 5a9d7295424fe3d0e10cad14
title: 继承 CSS 变量
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLZZhZ'
forumTopicId: 301088
---

# --description--

当创建一个变量时，变量会在创建变量的选择器里可用。同时，在这个选择器的后代选择器里也是可用的。这是因为 CSS 变量是可继承的，和普通的属性一样。

CSS 变量经常会定义在 <dfn>:root</dfn> 元素内，这样就可被所有选择器继承。

`:root` 是一个<dfn>伪类</dfn>选择器，它是一个能够匹配文档根元素的选择器，通常指的是 `html` 元素。我们在 `:root` 里创建变量在全局都可用，即在任何选择器里都生效。

# --instructions--

在 `:root` 选择器里定义变量 `--penguin-belly` 并设置它的属性值为 `pink`。此时，你会发现变量被继承，所有使用该变量的子元素都会有粉色背景。

# --hints--

应在 `:root` 里声明 `--penguin-belly` 变量并赋值 `pink`。

```js
assert(
  code.match(/:root\s*?{[\s\S]*--penguin-belly\s*?:\s*?pink\s*?;[\s\S]*}/gi)
);
```

# --solutions--

