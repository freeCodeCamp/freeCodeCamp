---
title: Arrow Functions
localeTitle: 箭头功能
---
## 箭头功能

ES6中的功能发生了一些变化。我的意思是语法。

```javascript
// Old Syntax 
 function oldOne() { 
 console.log("Hello World..!"); 
 } 
 
 // New Syntax 
 var newOne = () => { 
 console.log("Hello World..!"); 
 } 
```

新语法可能会让人感到困惑。但我会尝试解释语法。 语法分为两部分。

1.  var newOne =（）
2.  \=> {}

第一部分是声明一个变量并将函数（即）（）分配给它。它只是说变量实际上是一个函数。

然后第二部分声明函数的正文部分。带有花括号的箭头部分定义了身体部位。

参数的另一个例子：

```javascript
let NewOneWithParameters = (a, b) => { 
 console.log(a+b); // 30 
 } 
 NewOneWithParameters(10, 20); 
```

当只有一个参数名称时，括号是可选的：

```javascript
let newOneWithOneParam = a => { 
 console.log(a); 
 } 
```

箭头功能的一个令人难以置信的优点是你不能重新绑定箭头功能。它将始终使用定义它的上下文进行调用。只需使用正常功能。

```javascript
// Old Syntax 
 axios.get(url).then(function(response) { 
  this.data = response.data; 
 }).bind(this); 
 
 // New Syntax 
 axios.get(url).then(response => { 
  this.data = response.data; 
 }); 
```

我认为我不需要对此作出解释。这很简单。