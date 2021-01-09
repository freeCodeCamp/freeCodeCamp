---
id: 587d7790367417b2b2512ab0
title: 使用 tabindex 将键盘焦点添加到元素中
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
---

# --description--

HTML 的 `tabindex` 属性是与标签焦点相关的属性，给标签加上 tabindex 表示该标签可以获得焦点。`tabindex` 的值可以是零、负整数或正整数，这些数值分别定义了三种行为。

当用户在页面中使用 tab 键时，有些标签（如：链接、表单控件）可以自动获得焦点，它们获得焦点的顺序与它们出现在文档流中的顺序一致。我们可以通过将其他标签（如 `div`、`span`、`p` 等）的 `tabindex` 属性值设为 0 来让它们实现类似的效果。比如：

`<div tabindex="0">I need keyboard focus!</div>`

**注意：**  
`tabindex` 属性值为负整数（通常为 -1）的标签也是可以获得焦点的，只是不可以通过键盘操作（如 tab 键）来获得焦点。这种方法通常用于以编程的方式使内容获得焦点（如：将焦点设置到用 `div` 实现的弹出框上）的场景。只是这部分内容已经超出了当前挑战的范围。

# --instructions--

Camper Cat 新建了一个用来收集他的用户信息的调查。他知道输入框可以自动获得键盘焦点，但他希望用户使用键盘切换标签时，焦点可以停留在指示文字（Instructions）上。请给 `p` 标签添加 `tabindex` 属性，并将它的属性值设为 0。注意：使用 `tabindex` 属性还可以让 CSS 伪类 `:focus` 在 `p` 标签上生效。

# --hints--

表单中，作为指示文字（Instructions）的 `p` 标签应具有 `tabindex` 属性。

```js
assert($('p').attr('tabindex'));
```

`p` 标签的 `tabindex` 属性值应设置为 0。

```js
assert($('p').attr('tabindex') == '0');
```

# --solutions--

