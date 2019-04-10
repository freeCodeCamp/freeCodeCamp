---
title: Higher Order Functions
localeTitle: 高阶函数
---
## 高阶函数

高阶函数是在执行时返回函数，将函数作为其一个或多个参数或两者的函数。如果您已经使用了任何`Array`方法（如`map`或`filter` ，或者将回调函数传递给jQuery的`$.get` ，那么您已经使用了高阶函数。

使用`Array.map` ，您提供了一个函数作为其唯一参数，它适用于数组中包含的每个元素。

```javascript
var arr = [ 1, 2, 3 ]; 
 
 var arrDoubled = arr.map(function(num) { 
  return num * 2; 
 }); 
 
 console.log(arrDoubled); // [ 2, 4, 6 ] 
```

高阶函数也可以返回一个函数。例如，您可以创建一个名为`multiplyBy`的函数，它接受一个数字并返回一个函数，该函数将您提供的另一个数字乘以提供的第一个数字。您可以使用此方法创建`multiplyByTwo`函数以传递给`Array.map` 。这将为您提供上面看到的相同结果。

```javascript
function multiplyBy(num1) { 
  return function(num2) { 
    return num1 * num2; 
  } 
 } 
 
 var multiplyByTwo = multiplyBy(2); 
 
 var arr = [ 1, 2, 3 ]; 
 
 var arrDoubled = arr.map(multiplyByTwo); 
 
 console.log(arrDoubled); // [ 2, 4, 6 ] 
```

有关在上面的示例中`multiplyByTwo`如何保持对`num1`的引用的更多信息，请参阅[Closures](https://guide.freecodecamp.org/javascript/closures)指南。

[有关更多信息Closures](https://eloquentjavascript.net/05_higher_order.html)