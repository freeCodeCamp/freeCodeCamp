---
id: bad87fee1348cd8acef08812
title: 创建一个 Bootstrap 块级元素
challengeType: 0
forumTopicId: 16810
---

# --description--

一般情况下，具有 `btn` 和 `btn-default` 两个 class 的 `button` 元素宽度与它包含的文本相同，举个例子：

`<button class="btn btn-default">Submit</button>`

这个按钮的宽度应该和文本 "Submit" 相同

<button class='btn btn-default'>Submit</button>

通过为按钮添加 class 属性 `btn-block` 使其成为块级元素，按钮会伸展并填满页面整个水平空间，后续的元素会流到这个块级元素的下方，即 "新开一行"。

`<button class="btn btn-default btn-block">Submit</button>`

这个按钮会 100% 占满所有的可用宽度。

<button class='btn btn-default btn-block'>Submit</button>

记住这些按钮仍然需要 `btn` 这个 class。

添加 Bootstrap 的 `btn-block` class 到你 Bootstrap 按钮上吧。

# --hints--

按钮的 class 属性应该仍然具有 `btn` 和 `btn-default`。

```js
assert($('button').hasClass('btn') && $('button').hasClass('btn-default'));
```

按钮的 class 属性应该包含 `btn-block`。

```js
assert($('button').hasClass('btn-block'));
```

确保所有的 `button` 元素都有一个闭合标签。

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --solutions--

