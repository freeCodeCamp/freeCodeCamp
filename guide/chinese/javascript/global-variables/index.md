---
title: Global Variables
localeTitle: 全局变量
---
全局变量在整个程序的可访问性函数之外声明，而局部变量使用`var`存储在函数中，仅在该函数的[范围内使用](https://developer.mozilla.org/en-US/docs/Glossary/Scope) 。如果在不使用`var`情况下声明变量，即使它在函数内部，它仍将被视为全局变量：

```javascript
var x = 5; //global 
 function someThing(y) { 
 var z = x + y; 
 console.log(z); 
 } 
 
 function someThing(y) { 
 x = 5; //still global! 
 var z = x + y; 
 console.log(z); 
 } 
 
 
 function someThing(y) { 
 var x = 5; //local 
 var z = x + y; 
 console.log(z); 
 } 
```

全局变量也是当前范围的对象，例如浏览器窗口：

```javascript
var dog = “Fluffy”; 
 console.log(dog); //Fluffy; 
 
 var dog = “Fluffy”; 
 console.log(window.dog); //Fluffy 
```

最小化全局变量是最佳实践。由于变量可以在程序中的任何位置访问，因此它们可能导致奇怪的行为。

参考文献：

*   [var -Javascript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
*   [您不了解JavaScript：范围和闭包](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

附加信息：

*   [JavaScript最佳实践：避免使用全局](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)

## \* [javascript中的全局var和window.variable有什么区别？](https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript)

JavaScript变量的范围是全局变量或本地变量。 全局变量在函数外部声明，其值可在整个程序中访问/更改。

你应该总是使用**var**来声明你的变量（在本地生成），否则它会安装GLOBALLY

注意全局变量，因为它们存在风险。大多数情况下，您应该使用闭包来声明变量。 例：

```javascript
    (function(){ 
      var myVar = true; 
    })(); 
```

#### 更多信息：

*   [JavaScript最佳实践：避免使用全局](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)
*   [全局变量很糟糕](http://c2.com/cgi/wiki?GlobalVariablesAreBad)
*   [MDN - 全局变量](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)