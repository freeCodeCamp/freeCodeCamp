---
title: Array Destructuring
localeTitle: 数组解构
---
# 数组解构

解构是从存储在数组中的数据中提取多个值的便捷方式。它可以在接收数据的位置使用（例如，分配的左侧）。 `ECMAScript 6`引入了此功能。

如何提取值通过模式指定（请参阅示例）。

### 基本变量赋值
```
var names = ['neel', 'meet', 'darshan']; 
 var [nameOne, nameTwo, nameThree] = names; 
 console.log(nameOne); // "neel" 
 console.log(nameTwo); // "meet" 
 console.log(nameThree); // "darshan" 
```

### 与声明分开的作业

变量可以通过与变量声明分开的解构来赋值。
```
var a, b; 
 
 [a, b] = [1, 2]; 
 console.log(a); // 1 
 console.log(b); // 2 
```

### 默认值

如果`undefined`从数组中解压缩的值，则可以为变量分配默认值。
```
var a, b; 
 
 [a=5, b=7] = [1]; 
 console.log(a); // 1 
 console.log(b); // 7 
```

### 解析从函数返回的数组

始终可以从函数返回数组。解构可以使数组返回值更简洁。

在此示例中， `getNames()`返回值`['neel', 'meet']`作为其输出，可以使用解构在单行中进行解析。
```
function getNames() { 
  return ['neel', 'meet']; 
 } 
 
 var neel, meet; 
 [nameOne, nameTwo] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameTwo); // meet 
```

### 忽略一些返回的值

您可以忽略您不感兴趣的返回值：
```
function getNames() { 
  return ['neel', 'meet', 'darshan']; 
 } 
 
 var [nameOne, , nameThree] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameThree); // darshan 
```

您还可以忽略所有返回的值：
```
[,,] = getNames(); 
```

### 将数组的其余部分分配给变量

解构数组时，可以使用rest模式解压缩并将其余部分分配给变量：
```
var [a, ...b] = [1, 2, 3]; 
 console.log(a); // 1 
 console.log(b); // [2, 3] 
```

请注意，如果在左侧使用带有rest元素的尾随逗号，则将抛出`SyntaxError` ：
```
var [a, ...b,] = [1, 2, 3]; 
 // SyntaxError: rest element may not have a trailing comma 
```

另请参见： **数组解构** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)