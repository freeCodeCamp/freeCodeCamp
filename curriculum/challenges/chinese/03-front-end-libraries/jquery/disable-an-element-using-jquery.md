---
id: bad87fee1348bd9aed808826
title: 使用 jQuery 禁用元素
challengeType: 6
forumTopicId: 17563
---

# --description--

你还能用 jQuery 改变 HTML 标签的非 CSS 属性,例如:能禁用按钮。

当你禁用按钮时，它将变成灰色并无法点击。

jQuery 有一个`.prop()`方法，你可以用其调整标签的属性。

下面的代码效果是禁用所有的按钮：

`$("button").prop("disabled", true);`

请仅禁用`target1`按钮。

# --hints--

禁用`target1`按钮。

```js
assert(
  $('#target1') &&
    $('#target1').prop('disabled') &&
    code.match(/["']disabled["'],( true|true)/g)
);
```

不禁用其他的按钮。

```js
assert($('#target2') && !$('#target2').prop('disabled'));
```

仅用 jQuery 给标签添加类。

```js
assert(!code.match(/disabled[^<]*>/g));
```

# --solutions--

