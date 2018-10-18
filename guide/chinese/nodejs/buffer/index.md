---
title: Nodejs- Buffer
localeTitle: Nodejs-缓冲区
---
## 缓冲

二进制只是一个集合或`1`和`0`的集合。二进制中的每个数字，一组中的每个1和0称为_一位_ 。计算机将数据转换为此二进制格式以存储和执行操作。例如，以下是五个不同的二进制文件：

`10, 01, 001, 1110, 00101011`

JavaScript在其核心API中没有字节类型数据。为了处理二进制数据，Node.js包括一个带有名为`Buffer`的全局模块的二进制缓冲区实现。

### 创建缓冲区

您可以通过不同的方式在Node.js中创建缓冲区。您可以使用10个字节的大小创建一个空缓冲区。

```javascript
const buf1 = Buffer.alloc(10); 
```

从UTF-8编码的字符串，创建如下：

```javascript
const buf2 = Buffer.from('Hello World!'); 
```

创建缓冲区时有不同的可接受编码：

*   ASCII
*   UTF-8
*   BASE64：
*   LATIN1
*   二进制
*   十六进制

Buffer API中分配了三个单独的函数来使用和创建新的缓冲区。在上面的例子中，我们看到了`alloc()`和`from()` 。第三个是`allocUnsafe()` 。

```javascript
const buf3 = Buffer.allocUnsafe(10); 
```

返回时，此函数可能包含需要覆盖的旧数据。

### 与缓冲区的交互

可以使用Buffer API进行不同的交互。我们将在这里介绍他们中的大多数。让我们从将缓冲区转换为JSON开始。

```javascript
let bufferOne = Buffer.from('This is a buffer example.'); 
 console.log(bufferOne); 
 
 // Output: <Buffer 54 68 69 73 20 69 73 20 61 20 62 75 66 66 65 72 20 65 78 61 6d 70 6c 65 2e> 
 
 let json = JSON.stringify(bufferOne); 
 console.log(json); 
 
 // Output: {"type": "Buffer", "data": [84,104,105,115,32,105,115,32,97,32,98,117,102,102,101,114,32,101,120,97,109,112,108,101,46]} 
```

JSON指定要转换的对象类型是Buffer及其数据。将空缓冲区转换为JSON将向我们显示它只包含零。

```javascript
const emptyBuf = Buffer.alloc(10); 
 
 emptyBuf.toJSON(); 
 
 // Output: { "type": "Buffer", "data": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] } 
```

请注意，Buffer API还提供了一个直接函数`toJSON()`来将缓冲区转换为JSON对象。要检查缓冲区的大小，我们可以使用`length`方法。

```javascript
emptyBuf.length; 
 // Output: 10 
```

现在让我们将缓冲区转换为可读字符串，在我们的例子中，是utf-8编码的。

```javascript
console.log(bufferOne.toString('utf8')); 
 
 // Output: This is a buffer example. 
```

`.toString()`默认情况下将缓冲区转换为utf-8格式字符串。这是解码缓冲区的方法。如果指定编码，则可以将缓冲区转换为其他编码

```javascript
console.log(bufferOne.toString('base64')); 

```