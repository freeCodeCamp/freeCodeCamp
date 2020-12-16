---
id: 587d7790367417b2b2512aaf
title: 通过给元素添加 accesskey 属性来让用户可以在链接之间快速导航
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 1
---

# --description--

HTML 提供`accesskey`属性，用于指定激活标签或者使标签获得焦点的快捷键，这可以使键盘用户的导航更加便捷。

HTML5 允许在任何标签上使用这个属性。该属性 （如链接、按钮、表单控件等）十分有用。

举个例子：

`<button accesskey="b">Important Button</button>`

# --instructions--

Camper Cat 希望为他的两篇博客的标题的链接设置快捷键，以使用户可以快速导航到文章的全文。请为这两个链接添加`accesskey`属性，并将第一个设置为 "g"（表示 Garfield），第二个设置为 "c"（表示 Chuck Norris）。

# --hints--

你应该为`id`是 "first" 的`a`标签添加`accesskey`属性。

```js
assert($('#first').attr('accesskey'));
```

你应该为`id`是 "second" 的`a`标签添加`accesskey`属性。

```js
assert($('#second').attr('accesskey'));
```

你应该将`id`是 "first" 的`a`标签的`accesskey`属性值设置为小写 "g"。

```js
assert($('#first').attr('accesskey') == 'g');
```

你应该将`id`是 "second" 的`a`标签的`accesskey`属性值设置为小写 "c"。

```js
assert($('#second').attr('accesskey') == 'c');
```

# --solutions--

