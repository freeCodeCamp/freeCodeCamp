---
title: Typeof
localeTitle: 类型
---
## 类型

`typeof`是一个JavaScript关键字，在您调用它时将返回变量的类型。您可以使用它来验证函数参数或检查是否定义了变量。还有其他用途。

`typeof`运算符很有用，因为它是检查代码中变量类型的简单方法。这很重要，因为JavaScript是一种[动态类型语言](https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed) 。这意味着在创建变量时不需要为变量分配类型。由于变量不受此限制，因此其类型可在程序运行期间更改。

例如：

```javascript
var x = 12345; // number 
 x = 'string'; // string 
 x = { key: 'value' }; // object 
```

从上面的示例中可以看出，JavaScript中的变量可以在整个程序执行过程中更改类型。这可能很难作为程序员跟踪，这就是`typeof`运算符很有用的地方。

`typeof`运算符返回表示变量当前类型的字符串。您可以通过键入`typeof(variable)`或`typeof variable`来使用它。回到上一个示例，您可以使用它来检查每个阶段的变量`x`的类型：

```javascript
var x = 12345; 
 console.log(typeof x) // number 
 x = 'string'; 
 console.log(typeof x) // string 
 x = { key: 'value' }; 
 console.log(typeof x) // object 
```

这对于检查函数中变量的类型并在适当时继续有用。

这是一个函数的例子，它可以采用一个字符串或数字的变量：

```javascript
function doSomething(x) { 
  if(typeof(x) === 'string') { 
    alert('x is a string') 
  } else if(typeof(x) === 'number') { 
    alert('x is a number') 
  } 
 } 
```

`typeof`运算符有用的另一种方法是确保在尝试在代码中访问变量之前定义变量。这有助于防止在尝试访问未定义的变量时可能发生的程序错误。

```javascript
function(x){ 
  if (typeof(x) === 'undefined') { 
    console.log('variable x is not defined'); 
    return; 
  } 
  // continue with function here... 
 } 
```

在检查数字时， `typeof`运算符的输出可能并不总是您所期望的。  
由于多种原因，数字可以转入值[NaN（非数字）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) 。

```javascript
console.log(typeof NaN); //"number" 
```

也许您试图将数字与对象相乘，因为您忘记访问对象内的数字。

```javascript
var x = 1; 
 var y = { number: 2 }; 
 console.log(x * y); // NaN 
 console.log(typeof (x * y)); // number 
```

检查数字时，仅检查数字的`typeof`输出是不够的，因为`NaN`也是  
通过这个测试。  
此函数检查数字，也不允许`NaN`值通过。

```javascript
function isNumber(data) { 
  return (typeof data === 'number' && !isNan(data)); 
 } 
```

即使认为这是一种有用的验证方法，我们也要小心，因为javascript有一些奇怪的部分，其中一个是特定指令的`typeof`结果。例如，在javascript中，很多东西都只是`objects`所以你会发现。

```javascript
var x = [1,2,3,4]; 
 console.log(typeof x)  // object 
 
 console.log(typeof null)  // object 
```

### 更多信息：

[类型的MDN文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)