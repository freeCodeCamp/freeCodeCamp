---
id: 587d7b8e367417b2b2512b5d
challengeType: 1
forumTopicId: 301241
title: 了解使用命令式编程的危害
---

## Description
<section id='description'>
函数式编程是一种好习惯，它能让代码管理更简单，不受隐藏 bug 影响。在我们开始函数式编程之前，为了更好的突显可能遇到的问题，我们先看看命令式编程。
类似在英语（和许多其他语言）中，命令式时态用于给出命令，编程中的命令式是给计算机一组语句来执行任务。
这些语句通常会改变程序的状态，例如更新全局变量，典型的例子就是写一个 <code>for</code> 循环，它给出了迭代数组索引的精确方向。
相反，函数式编程是声明式编程的一种形式，通过调用方法或函数来告诉计算机要做什么。
JavaScript 提供了许多处理常见任务的方法，所以你无需写出计算机应如何执行它们。例如，你可以用 <code>map</code> 函数替代上面提到的 <code>for</code> 循环来处理数组迭代。这有助于避免语义错误，如调试章节介绍的"Off By One Errors"。
考虑这样的场景：你正在浏览器中浏览网页，并想操作你打开的标签。下面我们来试试用面向对象的思路来描述这种情景。
窗口对象由选项卡组成，通常会打开多个窗口。窗口对象中每个打开网站的标题都保存在一个数组中。在对浏览器进行了如打开新标签、合并窗口、关闭标签之类的操作后，你需要输出所有打开的标签。关掉的标签将从数组中删除，新打开的标签（为简单起见）则添加到数组的末尾。
代码编辑器中显示了此功能的实现，其中包含 <code>tabOpen()</code>，<code>tabClose()</code>，和 <code>join()</code> 函数。tabs数组是窗口对象的一部分用于储存打开页面的名称。


</section>


## Instructions
<section id='instructions'>
在编辑器中运行代码。它使用了有副作用的方法，导致输出错误。打开标签的最终列表应该是 <code>['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']</code> 但输出会略有不同。

修改 <code>Window.prototype.tabClose</code> 使其删除正确的标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>finalTabs.tabs</code> 应该是 <code>['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']</code>
    testString: assert.deepEqual(finalTabs.tabs, ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'])

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index + 1); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());
```

</section>
