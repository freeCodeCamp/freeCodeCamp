---
id: 587d7b8e367417b2b2512b5d
title: 了解使用命令式编程的危害
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

使用函数式编程是一个好的习惯。 它使你的代码易于管理，避免潜在的 bug。 但在开始之前，先看看命令式编程方法，以强调你可能有什么问题。

在英语 (以及许多其他语言) 中，命令式时态用来发出指令。 同样，命令式编程是向计算机提供一套执行任务的声明。

命令式编程常常改变程序状态，例如更新全局变量。 一个典型的例子是编写 `for` 循环，它为一个数组的索引提供了准确的迭代方向。

相反，函数式编程是声明式编程的一种形式。 通过调用方法或函数来告诉计算机要做什么。

JavaScript 提供了许多处理常见任务的方法，所以你无需写出计算机应如何执行它们。 例如，你可以用 `map` 函数替代上面提到的 `for` 循环来处理数组迭代。 这有助于避免语义错误，如调试章节介绍的 "Off By One Errors"。

考虑这样的场景：你正在浏览器中浏览网页，并想操作你打开的标签。 下面我们来试试用面向对象的思路来描述这种情景。

窗口对象由选项卡组成，通常会打开多个窗口。 窗口对象中每个打开网站的标题都保存在一个数组中。 在对浏览器进行了如打开新标签、合并窗口、关闭标签之类的操作后，你需要输出所有打开的标签。 关掉的标签将从数组中删除，新打开的标签（为简单起见）则添加到数组的末尾。

代码编辑器中显示了此功能的实现，其中包含 `tabOpen()`，`tabClose()`，和 `join()` 函数。 `tabs` 数组是窗口对象的一部分用于储存打开页面的名称。

# --instructions--

在编辑器中运行代码。 它使用了有副作用的方法，导致输出错误。 存储在 `finalTabs.tabs` 中的打开标签的最终列表应该是 `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`，但输出会略有不同。

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

# --seed--

## --seed-contents--

```js
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
```
