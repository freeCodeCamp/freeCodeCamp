---
title: Arrow Functions
localeTitle: 箭头函数
---
## 箭头函数

ES6中的函数新增了一种语法（箭头函数）。

```javascript
// 老语法
 function oldOne() { 
 console.log("Hello World..!"); 
 } 
 
 // 新语法
 var newOne = () => { 
 console.log("Hello World..!"); 
 } 
```

新语法可能会让人感到困惑。但我会尝试解释它。 语法分为两部分。

1.  var newOne =（）
2.  \=> {}

第一部分是声明一个变量并将函数（）分配给它。它只是说变量实际上是一个函数。

然后第二部分声明函数的正文部分。带有花括号的箭头部分定义了函数主体。

参数传递：

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

箭头函数最大的特点在于不能重复绑定，函数的上下文（`this`）指向的是定义函数时函数所在的上下文，类似于继承`this`

```javascript
// 老语法
 axios.get(url).then(function(response) { 
  this.data = response.data; 
 }).bind(this); 
 
 // 新语法
 axios.get(url).then(response => { 
  this.data = response.data; 
 }); 
```

该特性可以很好的解决开发过程中this指向导致的问题。
