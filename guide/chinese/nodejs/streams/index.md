---
title: Streams
localeTitle: 流
---
## 流

Streams在Node.js核心API中可用作允许数据以连续方式读取或写入的对象。基本上，与缓冲区相比，流以块的形式执行该操作，逐位执行，从而使其成为一个缓慢的过程。

有四种类型的流可用：

*   可读（从中读取数据的流）
*   可写（写入数据的流）
*   双工（可读和可写的流）
*   转换（可在读取和写入时修改数据的双工流）

每种可用类型都有几种相关的方法。一些常见的是：

*   数据（这在数据可用时运行）
*   结束（当没有数据可供读取时触发）
*   错误（当接收或写入数据时出错）

### 管

在编程中， `pipe`的概念并不新鲜。自20世纪70年代以来，基于Unix的系统一直在实用。管道做什么？ `pipe`通常连接源和目的地。它将一个函数的输出作为另一个函数的输入传递。

在Node.js中， `pipe`以相同的方式使用，以配对不同操作的输入和输出。 `pipe()`作为一个函数可用，它接受可读的源流并将输出附加到目标流。一般语法可以表示为：

```javascript
src.pipe(dest); 
```

多个`pipe()`函数也可以链接在一起。

```javascript
a.pipe(b).pipe(c); 
 
 // which is equivalent to 
 
 a.pipe(b); 
 b.pipe(c); 
```

### 可读流

生成可作为输入附加到可写流的数据的流称为可读流。要创建可读流：

```javascript
const { Readable } = require('stream'); 
 
 const readable = new Readable(); 
 
 readable.on('data', chunk => { 
  console.log(`Received ${chunk.length} bytes of data.`); 
 }); 
 readable.on('end', () => { 
  console.log('There will be no more data.'); 
 }); 
```

### 可写流

这是一种流的类型，您可以将数据从可读源`pipe()`传输`pipe()` 。要创建可写流，我们有一个构造函数方法。我们从中创建一个对象并传递许多选项。该方法有三个参数：

*   块：一个缓冲区
*   编码：将数据转换为人类可读的形式
*   callback：从块中完成数据处理时调用的函数

```javascript
const { Writable } = require('stream'); 
 const writable = new Writable({ 
  write(chunk, encoding, callback) { 
    console.log(chunk.toString()); 
    callback(); 
  } 
 }); 
 
 process.stdin.pipe(writable); 
```

### 双工流

双工流帮助我们同时实现可读和可写流。

```javascript
const { Duplex } = require('stream'); 
 
 const inoutStream = new Duplex({ 
  write(chunk, encoding, callback) { 
    console.log(chunk.toString()); 
    callback(); 
  }, 
 
  read(size) { 
    this.push(String.fromCharCode(this.currentCharCode++)); 
    if (this.currentCharCode > 90) { 
      this.push(null); 
    } 
  } 
 }); 
 
 inoutStream.currentCharCode = 65; 
 process.stdin.pipe(inoutStream).pipe(process.stdout); 
```

`stdin`流将可读数据管道传输到双工流中。 `stdout`帮助我们查看数据。双工流的可读和可写部分完全独立地操作。

### 变换流

这种类型的流更多是双工流的高级版本。

```javascript
const { Transform } = require('stream'); 
 
 const upperCaseTr = new Transform({ 
  transform(chunk, encoding, callback) { 
    this.push(chunk.toString().toUpperCase()); 
    callback(); 
  } 
 }); 
 
 process.stdin.pipe(upperCaseTr).pipe(process.stdout); 
```

我们消耗的数据与前面的双工流示例相同。这里需要注意的是`transform()`不需要实现`read`或`write`方法。它结合了两种方法本身。

### 为什么要使用Streams？

由于Node.js是异步的，因此通过将回调传递给具有磁盘和网络的函数来进行交互。下面给出的示例从磁盘上的文件读取数据，并通过来自客户端的网络请求对其进行响应。

```javascript
const http = require('http'); 
 const fs = require('fs'); 
 
 const server = http.createServer((req, res) => { 
  fs.readFile('data.txt', (err, data) => { 
    res.end(data); 
  }); 
 }); 
 server.listen(8000); 
```

上面的代码片段将起作用，但在将结果写回客户端请求之前，文件中的所有数据将首先进入每个请求的内存。如果我们正在读取的文件太大，这可能会成为一个非常繁重且昂贵的服务器调用，因为它将消耗大量内存以使进程前进。客户端的用户体验也会受到延迟的影响。

在这种情况下，如果我们使用流，则数据一旦从磁盘接收就会一次作为一个块发送到客户端请求。

```javascript
const http = require('http'); 
 const fs = require('fs'); 
 
 const server = http.createServer((req, res) => { 
  const stream = fs.createReadStream('data.txt'); 
  stream.pipe(res); 
 }); 
 server.listen(8000); 
```

`pipe()`在这里负责写入或在我们的情况下，使用响应对象发送数据，并且一旦从文件读取所有数据，就关闭连接。

注意： `process.stdin`和`process.stdout`是在Node.js API提供的全局`process`对象的流中构建的。