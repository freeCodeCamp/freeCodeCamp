---
id: 587d7b8e367417b2b2512b5d
title: 了解使用命令式编程的危害
challengeType: 1
forumTopicId: 301241
---

# --description--

函数式编程是一种好习惯，它能让代码管理更简单，不受隐藏 bug 影响。在我们开始函数式编程之前，为了更好的突显可能遇到的问题，我们先看看命令式编程。

类似在英语（和许多其他语言）中，命令式时态用于给出命令，编程中的命令式是给计算机一组语句来执行任务。

这些语句通常会改变程序的状态，例如更新全局变量，典型的例子就是写一个 `for` 循环，它给出了迭代数组索引的精确方向。

相反，函数式编程是声明式编程的一种形式，通过调用方法或函数来告诉计算机要做什么。

JavaScript 提供了许多处理常见任务的方法，所以你无需写出计算机应如何执行它们。例如，你可以用 `map` 函数替代上面提到的 `for` 循环来处理数组迭代。这有助于避免语义错误，如调试章节介绍的"Off By One Errors"。

考虑这样的场景：你正在浏览器中浏览网页，并想操作你打开的标签。下面我们来试试用面向对象的思路来描述这种情景。

窗口对象由选项卡组成，通常会打开多个窗口。窗口对象中每个打开网站的标题都保存在一个数组中。在对浏览器进行了如打开新标签、合并窗口、关闭标签之类的操作后，你需要输出所有打开的标签。关掉的标签将从数组中删除，新打开的标签（为简单起见）则添加到数组的末尾。

代码编辑器中显示了此功能的实现，其中包含 `tabOpen()`，`tabClose()`，和 `join()` 函数。tabs数组是窗口对象的一部分用于储存打开页面的名称。

# --instructions--

在编辑器中运行代码。它使用了有副作用的方法，导致输出错误。打开标签的最终列表应该是 `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` 但输出会略有不同。

修改 `Window.prototype.tabClose` 使其删除正确的标签。

# --hints--

`finalTabs.tabs` 应该是 `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --solutions--

