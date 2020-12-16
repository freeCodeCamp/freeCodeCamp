---
id: 587d8250367417b2b2512c5e
title: 了解堆栈的工作原理
challengeType: 1
videoUrl: ''
---

# --description--

你可能熟悉桌子上的一摞书。您可能已使用文本编辑器的撤消功能。您也可能习惯按手机上的后退按钮返回应用中的上一个视图。你知道他们都有什么共同之处吗？它们都以某种方式存储数据，以便您可以向后遍历。堆栈中最顶层的书是最后放在那里的书。如果您从堆栈的顶部删除该书，则会显示在最后一本书之前放置的书籍，依此类推。如果你考虑一下，在上面的所有例子中，你都会获得<dfn>Last-In-First-Out</dfn>服务。我们将尝试使用我们的代码来模仿它。该数据存储方案称为<dfn>堆栈</dfn> 。特别是，我们必须实现将JavaScript对象推送到堆栈顶部的`push()`方法;和`pop()`方法，它删除当前位于堆栈顶部的JavaScript对象。

# --instructions--

这里我们有一堆作为数组表示的家庭作业： `"BIO12"`位于基础， `"PSY44"`位于堆栈的顶部。修改给定的数组，并使用上面提到的JavaScript方法将其视为`stack` 。从堆栈中删除顶部元素`"PSY44"` 。然后添加`"CS50"`作为堆栈的新顶部元素。

# --hints--

`homeworkStack`应该只包含4个元素。

```js
assert(homeworkStack.length === 4);
```

`homeworkStack`的最后一个元素应该是`"CS50"` 。

```js
assert(homeworkStack[3] === 'CS50');
```

`homeworkStack`不应包含`"PSY44"` 。

```js
assert(homeworkStack.indexOf('PSY44') === -1);
```

不应更改`homeworkStack`的初始声明。

```js
assert(
  code.match(/=/g).length === 1 &&
    /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(
      code
    )
);
```

# --solutions--

