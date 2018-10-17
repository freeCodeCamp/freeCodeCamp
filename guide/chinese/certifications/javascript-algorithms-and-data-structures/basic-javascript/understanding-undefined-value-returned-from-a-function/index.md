---
title: Understanding Undefined Value returned from a Function
localeTitle: 了解从函数返回的未定义值
---
## 了解从函数返回的未定义值

没有`return`语句的函数，输出为`undefined` 。因此，如果您尝试将函数的变量等于没有`return`语句的函数的输出，则该变量将等于`undefined` 。

来吧，像这样定义`addFive()` ......

```javascript
function addFive() { 
  sum += 5; 
 } 
```

如您所见， `sum`加5而没有问题，但由于没有return语句，因此存在`undefined`输出。

```javascript
var result = addFive(); // This is undefined 

```