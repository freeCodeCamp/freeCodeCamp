---
id: bad87fee1348bd9aed308826
title: 使用 jQuery 选择元素的父元素
challengeType: 6
forumTopicId: 18321
---

# --description--

每个 HTML 标签都默认`继承（inherits）`其`父标签（parent element）`的 CSS 属性。

例如，`h3`标签`jQuery Playground`的父标签是`<div class="container-fluid">`，`<div class="container-fluid">`的父标签是`body`。

jQuery 有一个`parent()`方法，可以访问被选取标签的父标签。

下面的代码展示了使用`parent()`方法把`left-well`标签的父标签背景色设置成`蓝色（blue）`的方式：

`$("#left-well").parent().css("background-color", "blue")`

请把`#target1`标签的父标签背景色设置成`红色（red）`。

# --hints--

`left-well`标签应该有红色的背景。

```js
assert(
  $('#left-well').css('background-color') === 'red' ||
    $('#left-well').css('background-color') === 'rgb(255, 0, 0)' ||
    $('#left-well').css('background-color').toLowerCase() === '#ff0000' ||
    $('#left-well').css('background-color').toLowerCase() === '#f00'
);
```

应该用`.parent()`方法修改该标签。

```js
assert(code.match(/\.parent\s*\(\s*\)\s*\.css/g));
```

应该在`#target1`标签上调用`.parent()`方法。

```js
assert(
  code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")\s*?\)\s*?\.parent/gi)
);
```

仅用 jQuery 给标签添加类。

```js
assert(code.match(/<div class="well" id="left-well">/g));
```

# --solutions--

