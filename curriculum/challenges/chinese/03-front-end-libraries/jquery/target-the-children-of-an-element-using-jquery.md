---
id: bad87fee1348bd9aed208826
title: 使用 jQuery 选择元素的子元素
challengeType: 6
forumTopicId: 18320
---

# --description--

把 HTML 标签放到另一个级别的标签里，这些 HTML 标签被称为该标签的`子标签（children element）`。例如，本次挑战中文本为 "#target1"、"#target2" 和 "#target3" 的按钮都是`<div class="well" id="left-well">`标签的`子标签`。

jQuery 有一个`children()`方法，可以访问被选取标签的子标签。

下面的代码展示了用`children()`方法把`left-well`标签的子标签的颜色设置成`蓝色（blue）`：

`$("#left-well").children().css("color", "blue")`

# --instructions--

请把`right-well`标签的所有子标签颜色设置成`橙色（orange）`。

# --hints--

`#right-well`所有的子标签文本应该是橙色。

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

应该用`children()`方法修改标签。

```js
assert(code.match(/\.children\(\)\.css/g));
```

仅用 jQuery 给标签添加类。

```js
assert(code.match(/<div class="well" id="right-well">/g));
```

# --solutions--

