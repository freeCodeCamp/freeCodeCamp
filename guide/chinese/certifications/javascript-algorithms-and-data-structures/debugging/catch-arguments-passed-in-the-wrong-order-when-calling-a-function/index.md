---
title: Catch Arguments Passed in the Wrong Order When Calling a Function
localeTitle: 调用函数时捕获以错误顺序传递的参数
---
## 调用函数时捕获以错误顺序传递的参数

```javascript
function raiseToPower(b, e) { 
  return Math.pow(b, e); 
 } 
```

*   上述函数用于将基数`b`提高到指数`e`的幂。
*   必须使用正确顺序的变量专门调用该函数。否则，该函数将混合两个变量并返回不需要的答案。
*   确保可变`power`正确实现`raiseToPower`功能。

## 解：

```javascript
let power = raiseToPower(base, exp); 

```