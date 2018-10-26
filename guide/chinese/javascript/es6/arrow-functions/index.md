---
title: Arrow Functions
localeTitle: 箭头函式
---
## 箭头函式

ES6引入了宣告函式的新句法。

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

新语法可能会令人困惑，主要可分为两部分。

1.  var newOne =（）
2.  \=> {}

第一部分为宣告变数，并将函式（即）（）赋值给它。可以说变数实际上是函式。使用关键字 `const` 指派的函式将不会被重新赋值。參照這裡了解有关`const`和`let`的更多信息。

而第二部分為宣告函式的主体。箭号及大括号定义主体。

另一个有参数的例子：

```javascript
let NewOneWithParameters = (a, b) => { 
 console.log(a+b); // 30 
 } 
 NewOneWithParameters(10, 20); 
```

当只有一个参数名称时，括号是非必须的：

```javascript
let newOneWithOneParam = a => { 
 console.log(a); 
 } 
```

箭头函式的一个令人难以置信的优点是不能重新绑定，仅能在被定义的情境下呼叫。使用上同一般函式。

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
