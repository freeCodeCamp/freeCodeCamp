---
title: Node.js
localeTitle: Node.js的
---
## Node.js的

Node.js是一个基于Chrome的V8 JavaScript引擎构建的JavaScript运行时。 Node.js使用事件驱动的非阻塞I / O模型，使其轻量且高效。 Node.js的包生态系统，npm，是世界上最大的开源库生态系统。

#### 让我们分解吧。

*   基于Chrome的V8 JavaScript引擎构建的Javascript运行时。  
    每个浏览器都内置了一个JavaSript引擎来处理网站中包含的JavaScript文件。 Google Chrome使用的是使用C ++构建的V8引擎。 Node.js也使用这个超快引擎来解释JavaScript文件。
*   Node.js使用事件驱动的模型。  
    这意味着Node.js等待某些事件发生。然后它会对这些事件采取行动。事件可以是从单击到HTTP请求的任何事件。我们还可以声明自己的自定义事件，并使node.js监听这些事件。
*   Node.js使用非阻塞I / O模型。  
    我们知道I / O任务比处理任务花费的时间更长。 Node.js使用回调函数来处理此类请求。

让我们假设一个特定的I / O任务需要5秒才能执行。 我们希望在代码中执行两次此I / O.

**蟒蛇**

```python
import time 
 
 def my_io_task(): 
  time.sleep(5) 
  print("done") 
 
 my_io_task() 
 my_io_task() 
```

**Node.js的**

```js
function my_io_task() { 
    setTimeout(function() { 
      console.log('done'); 
    }, 5000); 
 } 
 
 my_io_task(); 
 my_io_task(); 
```

两者看起来相似，但执行时间不同。 python代码需要10秒才能执行，而Node.js代码只需5秒即可执行。

Node.js由于其非阻塞I / O模型而花费的时间更少。第一次调用`my_io_task()`启动计时器并将其`my_io_task()`在那里。它不等待函数的响应，而是继续调用第二个`my_io_task()` ，启动计时器并将其`my_io_task()`在那里。

当计时器完成它的执行需要5秒时，它会调用该功能并在控制台上`done`打印。因为，两个定时器一起启动，它们一起完成，因此需要相同的时间。

#### 更多信息：

*   [官方NodeJS网站](https://nodejs.org)
*   [节点版本管理器](https://github.com/creationix/nvm/blob/master/README.md)
*   [n：交互式NodeJS版本管理器](https://github.com/tj/n)