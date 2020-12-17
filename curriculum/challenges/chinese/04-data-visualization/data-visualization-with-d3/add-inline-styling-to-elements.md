---
id: 587d7fa7367417b2b2512bc6
title: 给元素添加内联样式
challengeType: 6
forumTopicId: 301475
---

# --description--

D3 可以使用 `style()` 方法为动态元素添加内联 CSS 样式表。

`style()` 方法以用逗号分隔的键值对作为参数。这里是一个将选中文本的颜色设为蓝色的例子：

`selection.style("color","blue");`

# --instructions--

在编辑器中添加 `style()` 方法，使所有显示的文本的 `font-family` 为 `verdana`。

# --hints--

你的 `h2` 元素的 `font-family` 应该为 verdana。

```js
assert($('h2').css('font-family') == 'verdana');
```

你应该使用 `style()` 方法。

```js
assert(code.match(/\.style/g));
```

# --solutions--

