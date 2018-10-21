---
title: File System
localeTitle: 文件系统
---
## 文件系统

Node.js文件系统模块允许您使用计算机上的文件系统。

Node.js有一组内置模块，无需进一步安装即可使用。类似地， **文件系统模块**包含一组函数，这些函数是对文件执行不同操作（如读写操作）所必需的。

要包含模块，请使用`require()`函数和模块名称。

```javascript
const fs = require('fs');
```

文件系统模块的常用用法：

*   读取文件
*   创建文件
*   更新文件
*   删除文件
*   重命名文件

## 读一个文件

`fs.readFile()`方法用于读取计算机上的文件。它需要三个参数 - 文件名，编码和回调函数。

Node.js代码从您的计算机读取文件并将内容返回到控制台。

```javascript
const fs = require('fs');
 fs.readFile('input.txt', 'utf-8', (err, data) => {
  if(err){
  console.log(err);
  }
  else{
  console.log("Content present in input.txt file : " + data.toString());
  }
 });
```

上面的代码从您的计算机读取文件_input.txt_并将内容返回到控制台。

### 执行步骤：

*   您应该在计算机中安装Node.js.
*   创建一个_app.js_文件并粘贴上面的代码。
*   创建一个文件_input.txt_并将一些内容写入其中。
*   现在打开工作目录中的控制台并执行命令`node app.js`

_注意_ ：input.txt文件应该存在于Node.js代码文件所在的同一目录中，否则会引发错误。

## 写在一个文件中

`fs.writeFile()`方法有三个参数 - 文件名，内容和回调函数。

Node.js代码将内容写入文件。

```javascript
const fs = require('fs');
 fs.writeFile('output.txt', "New content added", (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("The file is saved");
    }
 });
```

上面的代码创建了一个文件_output.txt_并添加了_添加_到其中的_新内容_ 。

### 执行步骤：

*   您应该在计算机中安装Node.js.
*   创建一个_app.js_文件并粘贴上面的代码。
*   现在打开工作目录中的控制台并执行命令`node app.js`

_注意_ ：如果file不存在，则`fs.writeFile()`方法创建一个文件并将内容写入其中。相反，如果文件存在，那么它将覆盖文件中的内容。

## 资源

*   [Node.js API](https://nodejs.org/api/fs.html#fs_file_system)
*   [W3学校](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)