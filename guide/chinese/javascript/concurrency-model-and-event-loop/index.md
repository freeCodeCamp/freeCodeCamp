---
title: Concurrency Model and Event Loop
localeTitle: 并发模型和事件循环
---
## 并发模型和事件循环

Javascript运行时是单线程的，这意味着它可以一次执行一段代码。为了理解Javascript中的并发模型和事件循环，我们必须首先解决与之相关的一些常见术语。首先让我们了解什么是调用堆栈。

调用堆栈是一种简单的数据结构，它记录了我们当前代码中的位置。因此，如果我们进入一个函数调用函数，它将被推送到调用堆栈，当我们从函数返回时，它会从堆栈中弹出。

让我们用一个代码示例来理解调用栈 -

```javascript
function multiply(x,y) { 
   return x * y; 
 } 
 
 function squared(n) { 
     return multiply(n,n) 
  } 
 
 function printSquare(n) { 
   return squared(n) 
 } 
 
 let numberSquared = printSquare(5); 
 console.log(numberSquared); 
```

首先，当代码执行时，运行时将读取每个函数定义，但是当它到达调用第一个函数**printSquare（5）**的行时，它会将此函数推送到调用堆栈中。接下来，此函数将执行并在返回之前将遇到另一个函数**平方（n），**因此它将暂停其当前操作并将此函数推送到现有函数之上。它在这种情况下执行函数平方函数，最后遇到另一个函数**multiply（n，n），**因此它暂停当前执行并将此函数推入调用堆栈。函数 乘法执行，并以相乘的值返回。最后，平方函数返回并从堆栈弹出，然后与printSquare相同。最终的平方值被分配给numberSquared变量。我们再次遇到函数调用，在这种情况下它是一个console.log（）语句，因此运行时将其推送到执行它的堆栈，从而在控制台上打印平方数字。应该注意的是，在上述任何代码运行之前被推入堆栈的第一个函数是主函数，它在运行时被表示为“匿名函数”。

因此，无论何时调用函数，它都会被推送到执行它的调用堆栈中。最后，当函数完成它的执行并且隐式或显式返回时，它将从堆栈中弹出。调用堆栈只记录函数执行的时间点。它跟踪当前正在执行的功能。

现在我们知道Javascript可以一次执行一件事但是浏览器不是这样。浏览器拥有自己的一组API，如setTimeout，XMLHttpRequests，它们未在Javascript运行时中指定。事实上，如果你仔细查看V8的源代码，那么为谷歌Chrome浏览器提供支持的流行Javascript运行时，你将找不到任何定义。这是因为这些特殊的Web API存在于浏览器环境中而不是javascript环境中，你可以说这些apis引入了并发性。让我们看一个图来理解整个图片。

![并发和事件循环模型](https://cdn-media-1.freecodecamp.org/imgr/rnQEY7o.png)

引入了更多术语

**堆** - 它主要是分配对象的地方。

**回调队列** - 这是一个存储所有回调的数据结构。因为它是一个队列所以元素是基于先进先出的FIFO处理的。

**事件循环** - 这是所有这些事情汇集在一起​​的地方。事件循环简单地做的是检查调用堆栈，如果它是空的，这意味着堆栈中没有函数，它从最旧的回调来自 回调队列并将其推入调用堆栈，最终执行回调。

让我们用代码示例来理解这一点 -

```javascript
console.log('hi'); 
 
 setTimeout(function() { 
     console.log('freecodeCamp') 
 },5000); 
 
 console.log('JS') 
```

当第一行执行时，它是一个console.log（），这是一个函数调用，这意味着这个函数被推入调用堆栈，在那里它执行打印'hi'到控制台，最后它被返回并从堆栈中弹出。然后，当运行时执行setTimeout（）时，它知道这是一个Web API，因此它将它交给浏览器来处理它的执行。浏览器启动计时器，然后JS运行时将setTimeout（）弹出堆栈。它遇到另一个console.log（）调用，所以它将它推入调用堆栈，消息'JS'被记录到控制台，然后它最终返回，所以最后一个console.log（）从堆栈中弹出。现在调用堆栈是空的。与此同时，虽然所有这一切都在计时器结束，即5秒后，浏览器继续并将回调函数推送到回调队列。接下来，事件循环检查调用堆栈是否空闲。由于它是自由的，它接受回调函数并再次将其推回到执行其中的代码的调用堆栈。再次在代码内部有一个console.log（）调用，所以这个函数进入堆栈的顶部执行，它将'freecodecamp'记录到控制台中，最后返回，这意味着它从堆栈中弹出，最后回调被弹出堆栈，我们完成了。

为了更好地想象这一点，请使用Phillip Roberts- [Loupe Event Loop Visualizer来](http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)尝试这个工具

#### 更多信息：

[菲利普罗伯茨：无论如何，事件循环到底是什么？ | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[并发模型和事件循环MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)