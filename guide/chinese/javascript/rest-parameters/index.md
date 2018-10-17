---
title: Rest Parameters
localeTitle: 休息参数
---
## 休息参数

在ES6中，其余的参数语法`...`允许您将无限数量的参数收集到数组中。

尽管它们看起来相同，但它与扩展运算符相反，后者从迭代中获取每个项目并将它们分散到各自的值中。

### 句法

```js
function myFunc(...args) { 
  console.log(args); 
 } 
 
 myFunc( 1, 2, 3, 4, 5);       // [1,2,3,4,5] 
```

你可以在它前面加上函数的最后一个参数与`...`当你想要做的初始paramters的东西，然后把所有剩下的参数不同。

```js
function convertCurrency(rate, fee, ...amounts) { 
  return amounts.map(amount => (amount * rate) + fee); 
 } 
 
 convertCurrency(0.89, 2.5, 100, 250, 75, 150, 300); // [ 91.5, 225, 69.25, 136, 269.5 ] 
```

`...`允许您将其余参数（如果有的话）收集到数组中。

### rest参数和arguments对象之间的区别

`arguments`是一个类似于数组的对象，在函数内部可用，包含传递给这些函数的参数。它被称为“类似数组”，因为它没有所有数组的内置方法，例如`.forEach()`和`.map()` 。

其余参数是一个数组，包含所有数组方法。