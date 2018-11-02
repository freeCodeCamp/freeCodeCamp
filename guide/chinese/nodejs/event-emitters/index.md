---
title: Event Emitters
localeTitle: 事件发射器
---
## 事件和流

传统上，在Web服务器中，通过读取和写入来处理文件形式的数据会消耗更多的内存，因为这些处理方法需要在每次必须读取或写入该文件时加载文件。这被认为是浪费资源。想想看，就可扩展性和大数据而言，如果我们浪费资源，我们将会妥协很多。 Node.js异步特性为我们提供了两个合适的选项，并提供了一个消耗较少资源的数据流，因为Node.js基于非阻塞异步模型。他们正在发射事件和流。在本节中，我们将介绍它们。

## EventEmitter类

EventEmitters是Node.js中事件驱动编程或异步编程体系结构背后的核心思想之一。 EventEmitter是一个对象，在Node.js中，发出事件的任何对象都是EventEmitter类的实例。什么是活动？ Node.js程序采取的每个操作（例如启动Web服务器以及在没有剩余请求执行时关闭终止程序）都被视为两个单独的事件。

要访问Node.js程序中的EventEmitter类，您必须要求Node.js API中的`events`模块。为了创建对象，我们通过调用其构造函数来创建EventEmitter类的实例。

```js
const events = require('events'); 
 
 const eventEmitter = new events.EventEmitter(); 
```

或者您可以直接要求访问EventEmitter子类，如下所示：

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
```

EventEmitter类提供各种预定义的方法来处理事件。这些方法是`.on` ， `.emit`和`.error` 。从函数发出事件可以触发一个可以被任何其他JavaScript函数访问的回调函数。这就像广播。

触发事件的能力可以通过以下语法完成：

```js
eventEmitter.emit(eventName, optionalData); 
```

附加侦听器功能和定义特定事件名称的能力由`.on`完成。

```js
eventEmitter.emit(eventName, callback); 
```

我们将通过一个例子模仿我们刚刚学到的新功能。创建一个名为`eventemitter.js`的新文件并粘贴以下代码：

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
 
 const callback = () => { 
    console.log('callback runs'); 
 }; 
 
 eventEmitter.on('invoke', callback); 
 
 eventEmitter.emit('invoke'); 
 eventEmitter.emit('invoke'); 
```

现在使用`node`命令运行上面的示例，您必须获得以下输出。

```shell
callback runs 
 callback runs 
```

我们通过创建一个eventEmitter实例，通过它我们可以访问开始`.on`了方法。 `.on`方法通过定义名称`invoke`来添加事件，我们稍后在`.emit`中使用它来调用触发与之关联的回调函数。

EventEmitter类提供了另一个名为`.once` 。此方法仅在发出事件时首次调用与事件关联的回调函数。考虑下面的例子。

```js
const EventEmitter = require('events'); 
 
 const eventEmitter = new EventEmitter(); 
 
 const callback = () => { 
    console.log('callback runs'); 
 }; 
 
 eventEmitter.once('invoke', callback); 
 
 eventEmitter.emit('invoke'); 
 eventEmitter.emit('invoke'); 
```

产量

```shell
callback runs 
```

`.once`跟踪事件的触发时间以及它们被触发的次数，与`.on`方法不同，它不会像这样跟踪。这是两者之间的主要区别。

## 了解流

Node.js提供了另一种处理数据的方法，而不是消耗大量的内存资源并使其具有成本效益。这就是溪流。基本上，流可以让您从一个源读取数据并放入目标。 Streams以块的形式处理数据而不是一次性处理数据，因此它们适合处理大型数据集。许多内置的Node.js模块使用流引擎。例如，HTTP请求和响应，TCP套接字，zlib，加密，fs读写流等。

### 流的类型

在Node.js中有四种类型的流：

*   可读
*   可写
*   复式
*   转变

其中最常见的是可读和可写流。可读流用于从源读取数据，可写流用于执行该数据到目的地的写操作。双工流可用于执行读取和写入操作。 Transform是Duplex流的超集，唯一的区别在于，在读取或写入时可以修改数据。

### 流事件的类型

所有这些流类型都是EventEmitter类的实例，这意味着它们发出读写事件。每种类型的流都可以发出以下事件。

*   data：当可读流可读取数据时触发此事件
*   错误：读取或写入数据时出错，将触发此事件
*   结束：当没有数据要读取时，会触发此事件

## 可读流

可读流可让您从源读取数据。此源可以是缓冲区，文件等。首先，创建一个文件简单文本文件，我们将使用该流从中读取数据。

```text
I am Text file that contains data. 
```

现在，创建一个名为read.js的新文件，该文件将实现使用可读流从此文本文件中读取数据的功能。

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('abc.txt'); 
 let data = ''; 
 
 readableStream.on('data', function(chunk) { 
    data += chunk; 
 }); 
 
 readableStream.on('end', function() { 
    console.log(data); 
 }); 
```

如果运行上述程序，您将获得以下输出：

```shell
 $ node test.js 
 I am Text file that contains data. 
```

这是我们在文本文件中写的内容。要使用流读取数据，我们使用一个名为`createReadStream()`的函数来处理文件系统模块`fs` 。

当可读流没有剩余数据要读取时，它会自动结束回调功能。 `.on`方法是我们在EventEmitter类的前一节中学到的。这表示流在后台使用EventEmitter类。

## 可写流

可写流用于将数据写入或插入或附加到目标。与可读流一样，它们也由`fs`模块提供。创建一个名为`wrtte.js`的新文件，其中将使用可读流从源读取数据并通过创建新的`.txt`文件将其写入目标。

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('./abc.txt'); 
 const writeableStream = fs.createWriteStream('./dest.txt'); 
 let data = ''; 
 
 readableStream.on('data', function(chunk) { 
    writeableStream.write(chunk); 
 }); 
```

运行此程序时，可写流将创建一个新文件，因为它可以访问文件系统模块。可写流使用`.write()`方法输出目标上的数据。在上面的示例中，我们创建了一个名为`dest.txt`的新文件，该文件将包含与`abc.txt`相同的数据。

## 管道

管道是一种机制，通过它您可以从源读取数据并将其写入目标，而无需像上面那样编写如此多的代码，也不会使用`.on`或`.write`方法。

如果我们要使用管道编写上面的示例，我们将写如下：

```js
const fs = require('fs'); 
 const readableStream = fs.createReadStream('./abc.txt'); 
 const writeableStream = fs.createWriteStream('./dest.txt'); 
 
 readableStream.pipe(writeableStream); 
```

请注意我们删除了多少行代码。此外，我们现在只需要源文件路径和目标文件路径，以及读取和写入我们正在使用的数据`.pipe()`方法。