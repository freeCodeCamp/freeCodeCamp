---
id: bad87fee1348bd9aeda08826
title: 使用 jQuery 配合 id 选择器选择元素
challengeType: 6
forumTopicId: 18317
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

你也能通过 id 属性选取标签。

首先，用`$("#target3")`选择器选取 id 为`target3`的`button`标签。

注意，和 CSS 属性一样，在 id 名前需要添加`#`。

然后，用 jQuery 的`.addClass()`方法添加`animated`和`fadeOut`类。

下面的代码的效果是使 id 为`target6`的`button`标签淡出：

`$("#target6").addClass("animated fadeOut")`.

# --hints--

用 jQuery 的`addClass()`方法给`id`为`target3`的`button`标签添加`animated`类。

```js
assert($('#target3').hasClass('animated'));
```

用 jQuery 的`addClass()`方法给`id`为`target3`的标签的类添加`fadeOut`类。

```js
assert(
  ($('#target3').hasClass('fadeOut') || $('#target3').hasClass('fadeout')) &&
    code.match(/\$\(\s*.#target3.\s*\)/g)
);
```

仅用 jQuery 给标签设置类。

```js
assert(!code.match(/class.*animated/g));
```

# --solutions--

