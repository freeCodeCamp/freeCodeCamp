---
id: 587d7790367417b2b2512ab0
title: 使用 tabindex 将键盘焦点添加到元素中
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
---

# --description--

HTML 的`tabindex`属性有三个不同与标签焦点的功能。当它在标签上时，表示标签可以获得焦点。它的值可以是零、负整数及正整数，并决定了标签的行为。

当用户在页面中使用 tab 键时，有些标签，如：链接、表单控件，可以自动获得焦点。它们获得焦点的顺序与它们出现在文档流中的顺序一致。我们可以通过将`tabindex`属性值设为 0，来给其他标签赋予相同的功能，如：`div`、`span`、`p`等。举个例子：

`<div tabindex="0">I need keyboard focus!</div>`

**注意：**  
`tabindex`属性值为负整数（通常为 -1）的标签也是有焦点的，只是不可以通过 tab 键来获得焦点。这种方法通常用于以编程的方式使内容获得焦点（如：激活用于弹出框的`div`标签），但是它超出了当前挑战的范围。

# --instructions--

Camper Cat 新建了一个调查，用来收集他的用户的信息。他知道输入框可以自动获得键盘焦点，但他希望确保当键盘用户切换标签时，焦点可以停留在指示文字上。请给`p`标签添加`tabindex`属性，并将它的值设置为 0。注意：使用`tabindex`属性可以使 CSS 伪类`:focus`在`p`标签上生效。

# --hints--

你应该为表单中的`p`标签添加`tabindex`属性。

```js
assert($('p').attr('tabindex'));
```

你应该将`p`标签的`tabindex`属性值设置为 0。

```js
assert($('p').attr('tabindex') == '0');
```

# --solutions--

