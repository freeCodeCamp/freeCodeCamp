---
title: Spread syntax
localeTitle: 传播语法
---
## 传播语法

Spread语法允许在可能需要零个或多个参数（用于函数调用）或元素（用于数组文字）的位置扩展可迭代的数组表达式或字符串，或者在预期为零的位置展开对象表达式。

### 句法

对于函数调用：
```
myFunction(...iterableObj); 
```

对于数组文字或字符串：
```
[...iterableObj, '4', 'five', 6]; 
```

### 例子

#### 传播函数调用

#### 替换申请

在要使用数组元素作为函数参数的情况下，通常使用`Function.prototype.apply` 。
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction.apply(null, args); 
```

使用扩展语法，上面可以写成：
```
function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction(...args); 
```

参数列表中的任何参数都可以使用扩展语法，并且可以多次使用。
```
function myFunction(v, w, x, y, z) { } 
 var args = [0, 1]; 
 myFunction(-1, ...args, 2, ...[3]); 
```

### 申请新的

当使用`new`调用构造函数时，不可能**直接**使用数组并`apply` （ `apply`执行`[[Call]]`而不是`[[Construct]]` ）。但是，由于扩展语法，可以很容易地使用数组：
```
var dateFields = [1970, 0, 1];  // 1 Jan 1970 
 var d = new Date(...dateFields); 
```

要使用带有参数数组的new而不使用扩展语法，您必须通过部分应用程序**间接**执行此操作：
```
function applyAndNew(constructor, args) { 
   function partial () { 
      return constructor.apply(this, args); 
   }; 
   if (typeof constructor.prototype === "object") { 
      partial.prototype = Object.create(constructor.prototype); 
   } 
   return partial; 
 } 
 
 
 function myConstructor () { 
   console.log("arguments.length: " + arguments.length); 
   console.log(arguments); 
   this.prop1="val1"; 
   this.prop2="val2"; 
 }; 
 
 var myArguments = ["hi", "how", "are", "you", "mr", null]; 
 var myConstructorWithArguments = applyAndNew(myConstructor, myArguments); 
 
 console.log(new myConstructorWithArguments); 
 // (internal log of myConstructor):           arguments.length: 6 
 // (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null] 
 // (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"} 
```

### 传播数组文字

#### 一个更强大的数组文字

如果没有扩展语法，要使用现有数组作为其中一部分创建新数组，则数组文字语法不再足够，必须使用push，splice，concat等组合使用命令式代码。使用扩展语法变得更加简洁：
```
var parts = ['shoulders', 'knees']; 
 var lyrics = ['head', ...parts, 'and', 'toes']; 
 // ["head", "shoulders", "knees", "and", "toes"] 
```

就像扩展参数列表一样， `...`可以在数组文字中的任何地方使用，并且可以多次使用。

### 复制一个数组
```
var arr = [1, 2, 3]; 
 var arr2 = [...arr]; // like arr.slice() 
 arr2.push(4); 
 
 // arr2 becomes [1, 2, 3, 4] 
 // arr remains unaffected 
```

> **注意** ：在复制数组时，Spread语法有效地深入一级。因此，它可能不适合复制多维数组，如下例所示（与Object.assign（）和spread语法相同）。
```
var a = [[1], [2], [3]]; 
 var b = [...a]; 
 b.shift().shift(); // 1 
 // Now array a is affected as well: [[], [2], [3]] 
```

### 连接数组的更好方法

`Array.concat`通常用于将数组连接到现有数组的末尾。没有扩展语法，这可以完成：
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Append all items from arr2 onto arr1 
 arr1 = arr1.concat(arr2); 
```

使用扩展语法，这将成为：
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr1, ...arr2]; 
```

`Array.unshift`通常用于在现有数组的开头插入值数组。没有扩展语法，这可以完成：
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Prepend all items from arr2 onto arr1 
 Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2] 
```

使用扩展语法，这将成为：
```
var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2] 

```