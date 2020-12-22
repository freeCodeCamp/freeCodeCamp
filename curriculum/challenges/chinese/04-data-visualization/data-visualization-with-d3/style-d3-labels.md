---
id: 587d7faa367417b2b2512bd3
title: 给 D3 标签添加样式
challengeType: 6
forumTopicId: 301492
---

# --description--

D3 可以将样式添加到组标签中。`fill` 属性为 `text` 节点设置文本颜色，`style()` 方法设置其它样式的 CSS 规则，例如 "font-family"、"font-size"。

# --instructions--

将 `text` 元素的 `font-size` 设置为 25px，文本颜色设置为 red。

# --hints--

所有标签的 `fill` 颜色应该是 red。

```js
assert($('text').css('fill') == 'rgb(255, 0, 0)');
```

所有标签的 `font-size` 应该为 25 个像素。

```js
assert($('text').css('font-size') == '25px');
```

# --solutions--

