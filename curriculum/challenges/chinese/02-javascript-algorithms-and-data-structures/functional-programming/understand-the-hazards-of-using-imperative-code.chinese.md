---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1
videoUrl: ''
localeTitle: 了解使用命令代码的危害
---

## Description
<section id="description">功能编程是一个好习惯。它使您的代码易于管理，并使您免于偷偷摸摸的错误。但在我们到达那里之前，让我们看一下编程的必要方法，以突出您可能遇到的问题。在英语（和许多其他语言）中，命令式时态用于给出命令。类似地，编程中的命令式是为计算机提供一组语句来执行任务。通常，语句会更改程序的状态，例如更新全局变量。一个典型的例子是编写一个<code>for</code>循环，它给出了迭代数组索引的精确方向。相反，函数式编程是声明式编程的一种形式。通过调用方法或函数告诉计算机您想要做什么。 JavaScript提供了许多处理常见任务的预定义方法，因此您无需写出计算机应如何执行它们。例如，您可以调用<code>map</code>方法来处理迭代数组的细节，而不是使用上面提到的<code>for</code>循环。这有助于避免语义错误，例如调试部分中介绍的“Off By One Errors”。请考虑以下情况：您正在浏览器中浏览Web，并希望跟踪已打开的选项卡。让我们尝试使用一些简单的面向对象的代码对此进行建模。 Window对象由选项卡组成，您通常打开多个Window。每个Window对象中每个开放站点的标题都保存在一个数组中。在浏览器中工作（打开新选项卡，合并窗口和关闭选项卡）后，您需要打印仍处于打开状态的选项卡。从数组中删除已关闭的选项卡，并将新选项卡（为简单起见）添加到其末尾。代码编辑器显示了此功能的实现，其中包含<code>tabOpen()</code> ， <code>tabClose()</code>和<code>join()</code>函数。数组<code>tabs</code>是Window对象的一部分，用于存储打开页面的名称。 <h4>说明</h4><h4>在编辑器中运行代码。它使用的方法在程序中有副作用，导致输出错误。打开标签的最终列表应该是<code>[&#39;FB&#39;, &#39;Gitter&#39;, &#39;Reddit&#39;, &#39;Twitter&#39;, &#39;Medium&#39;, &#39;new tab&#39;, &#39;Netflix&#39;, &#39;YouTube&#39;, &#39;Vine&#39;, &#39;GMail&#39;, &#39;Work mail&#39;, &#39;Docs&#39;, &#39;freeCodeCamp&#39;, &#39;new tab&#39;]</code>但输出会略有不同。完成代码并查看是否可以找出问题，然后进入下一个挑战以了解更多信息。 </h4></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 继续前进以了解错误。
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
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

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

alert(finalTabs.tabs);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
