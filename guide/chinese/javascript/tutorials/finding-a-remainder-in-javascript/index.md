---
title: Finding a Remainder in JavaScript
localeTitle: 在JavaScript中查找剩余内容
---
_余数运算符_ `%`给出了两个数的除法的余数。

## 例
```
5 % 2 = 1
原因：
 Math.floor(5 / 2) = 2 (商数) 
 2 * 2 = 4 
 5 - 4 = 1 (余数) 
```

## 用法

在数学中，通过检查数字除法的余数为2，可以检查偶数或奇数。
```
17 % 2 = 1 (17 is Odd) 
 48 % 2 = 0 (48 is Even) 
```

**注意**不要将它与_模数_ `%`混淆，否则与负数不兼容。
