---
title: Array.prototype.reduce
localeTitle: Array.prototype.reduce
---
## Array.prototype.reduce

`reduce()`方法将值数组减少到只有一个值。

返回的单个值可以是任何类型。

### 例1

将整数数组转换为数组中所有整数的总和。

```js
    var numbers = [1,2,3]; 
    var sum = numbers.reduce(function(total, current){ 
        return total + current; 
    }); 
    console.log(sum); 
```

这将输出`6`到控制台。

### 描述

`reduce()`方法被称为阵列转换方法的瑞士军刀或多工具。其他的，如`map()`和`filter()` ，提供更具体的转换，而`reduce()`可用于将数组转换为您想要的任何输出。

### 句法

```js
    arr.reduce(callback[, initialValue]) 
```

*   `callback`参数是一个函数，将为数组中的每个项调用一次。此函数有四个参数，但通常只使用前两个参数。
    *   _accumulator_ - 上一次迭代的返回值
    *   _currentValue_ - 数组中的当前项
    *   _index_ - 当前项的索引
    *   _array_ - 调用reduce的原始数组
*   `initialValue`参数是可选的。如果提供，它将在第一次调用回调函数时用作初始累加器值（参见下面的示例2）。

### 例2

将字符串数组转换为单个对象，该对象显示每个字符串在数组中出现的次数。注意这个reduce调用将一个空对象`{}`作为`initialValue`参数传递。这将用作传递给回调函数的累加器（第一个参数）的初始值。

```js
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']; 
 
 var petCounts = pets.reduce(function(obj, pet){ 
    if (!obj[pet]) { 
        obj[pet] = 1; 
    } else { 
        obj[pet]++; 
    } 
    return obj; 
 }, {}); 
 
 console.log(petCounts); 
```

输出： `js { dog: 2, chicken: 3, cat: 1, rabbit: 1 }`

## 更多信息：

*   [JavaScript的Reduce方法如何工作，何时使用它，以及它可以做的一些很酷的事情](https://medium.freecodecamp.org/reduce-f47a7da511a9)
*   [高级减少](https://www.youtube.com/watch?v=1DMolJ2FrNY)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)