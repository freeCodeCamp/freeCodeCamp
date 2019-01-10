---
title: Comments
localeTitle: 注释
---
## 注释

程序员使用注释向其源代码添加提示，注释，建议或警告;它们对代码的实际输出没有影响。注释代码是为了解释代码，并帮助你和其他人在以后看你的代码时能够更好地理解代码。


在开始经常评论时，这总是最佳做法，因为它可以帮助那些阅读代码的人了解您的代码究竟打算做什么。

JavaScript有两种在代码中分配注释的方法。

第一种方式是`//`评论; `//`在同一行上的所有文字后面的注释。例如：

```javascript
function hello() { 
  // This is a one line JavaScript comment 
  console.log("Hello world!"); 
 } 
 hello(); 
```

第二种方式是`/* */` comment，它可以用于单行和多行注释。例如：

```javascript
function hello() { 
  /* This is a one line JavaScript comment */ 
  console.log("Hello world!"); 
 } 
 hello(); 
```

```javascript
function hello() { 
  /* This comment spans multiple lines. Notice 
     that we don't need to end the comment until we're done. */ 
  console.log("Hello world!"); 
 } 
 hello(); 
```

您还可以阻止执行Javascript代码，只需遵守这样的代码行：

```javascript
function hello() { 
  /*console.log("Hello world!");*/ 
 } 
 hello(); 
```

#### 更多信息：

[如何用JavaScript编写注释](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)

### 许多IDE都带有键盘快捷键来注释掉行。

1.  突出显示要评论的文本
2.  Mac：推送命令（Apple Key）＆“/”
3.  Windows：推送控制和“/”
4.  您也可以通过执行相同的步骤来取消注释代码

在许多代码编辑器中注释掉javascript部分的快捷方式是突出显示要注释掉的代码行，然后按`Cmd/Ctrl + /` 。

注释对代码测试也非常有用，因为您可以阻止某个代码行/块运行

```javascript
function hello() { 
  // The statement below is not going to get executed 
  // console.log('hi') 
  } 
 hello(); 
```

```
function hello() { 
  // The statements below are not going to get executed 
  /* 
  console.log('hi'); 
  console.log('code-test'); 
  */ 
 } 
 hello(); 
```

#### 更多信息：

*   [如何用JavaScript编写注释](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)
