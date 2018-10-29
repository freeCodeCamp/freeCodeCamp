---
title: Catch Unclosed Parentheses, Brackets, Braces and Quotes
localeTitle: 抓住未封闭的圆括号，括号，括号和引号
---
## 抓住未封闭的圆括号，括号，括号和引号

reduce（）方法将数组减少为单个值。如果您不熟悉它，以下代码显示了使用该方法的示例：
```
const array1 = [1, 2, 3, 4]; 
 console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));  // expected output: 10 
```

您还可以将reduce方法的参数定义为变量或常量，并将其移交给函数，例如，
```
const array1 = [1, 2, 3, 4]; 
 const reducer = (accumulator, currentValue) => accumulator + currentValue; 
 
 // 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer));      // expected output: 10 
 
 // 5 + 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer, 5));   // expected output: 15 
```

您可以在[Array.prototype.reduce（）中](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)查看并运行此代码。

## 解：

```javascript
let myArray = [1, 2, 3]; 
 let arraySum = myArray.reduce((previous, current) =>  previous + current); 
 console.log(`Sum of array values is: ${arraySum}`); 

```