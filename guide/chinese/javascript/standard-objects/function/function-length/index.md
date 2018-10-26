---
title: Function Length
localeTitle: 功能长度
---
## 功能长度

函数对象的`length`属性保存调用时函数所期望的参数数。

```javascript
function noArgs() { } 
 
 function oneArg(a) { } 
 
 console.log(noArgs.length); // 0 
 
 console.log(oneArg.length); // 1 
```

### ES2015语法

ES2015，或通常称为ES6，引入了rest操作符和默认函数参数。这两个添加都改变了`length`属性的工作方式。

如果在函数声明中使用了rest运算符或默认参数，则`length`属性将仅包含rest运算符或默认参数之前的参数数。

```javascript
function withRest(...args) { } 
 
 function withArgsAndRest(a, b, ...args) { } 
 
 function withDefaults(a, b = 'I am the default') { } 
 
 console.log(withRest.length); // 0 
 
 console.log(withArgsAndRest.length); // 2 
 
 console.log(withDefaults.length); // 1 
```

有关`Function.length`更多信息可以在[Mozilla的MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)上找到。