---
title: Immediately Invoked Functions Expressions(IIFEs)
localeTitle: 立即调用函数表达式（IIFE）
---
## 功能说明

使用函数声明创建的函数是Function对象，具有Function对象的所有属性，方法和行为。 例：

```javascript
  function statement(item){ 
    console.log('Function statement example '+ item); 
  } 
```

## 功能表达

函数表达式与函数语句类似，只是可以省略函数名来创建匿名函数。 例：

```javascript
  var expression = function (item){ 
    console.log('Function expression example '+ item); 
  } 
```

## 立即调用函数表达式

一旦创建了函数，它就会调用自己不需要显式调用。 在下面的示例变量中，iife将存储由函数执行返回的字符串。

```javascript
  var iife = function (){ 
    return 'Immediately Invoked Function Expressions(IIFEs) example '; 
  }(); 
  console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example ' 
```

IIFE之前的声明应始终以a结尾;否则会引发错误。

**不好的例子** ：

```javascript
var x = 2 //no semicolon, will throw error 
 (function(y){ 
  return x; 
 })(x); //Uncaught TypeError: 2 is not a function 
```

## 为什么使用立即调用的函数表达式？

```javascript
  (function(value){ 
    var greet = 'Hello'; 
    console.log(greet+ ' ' + value); 
  })('IIFEs'); 
```

在上面的示例中，当javascript引擎执行上面的代码时，它会在看到代码时创建全局执行上下文，并在内存中为IIFE创建函数对象。 当它到达第`46`行时由于调用了哪个函数，动态创建了一个新的执行上下文，因此greet变量进入该函数执行上下文而不是全局，这使得它是唯一的。 `This ensures that code inside IIFE does not interfere with other code or be interfered by another code` ，因此代码是安全的。

#### 更多信息

[维基百科上立即调用的函数表达式](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) [JavaScript库中的前导分号有什么作用？](https://stackoverflow.com/questions/1873983/what-does-the-leading-semicolon-in-javascript-libraries-do)