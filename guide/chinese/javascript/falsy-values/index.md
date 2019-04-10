---
title: Falsy Values
localeTitle: 虚假的价值观
---
## 描述

虚假值是评估为FALSE的值，例如在检查变量时。 JavaScript中只有六个falsey值： `undefined` ， `null` ， `NaN` ， `0` ， `""` （空字符串），当然还有`false` 。

## 检查变量上的假值

可以使用简单的条件检查变量中的假值：

```javascript
if (!variable) { 
  // When the variable has a falsy value the condition is true. 
 } 
```

## 一般例子

```javascript
const string = ""; // <-- falsy

const filledString = "some string in here"; // <-- truthy

const zero = 0; // <-- falsy

let numberGreaterThanZero; // <-- falsy

const emptyArray = []; // <-- truthy, we'll explore more about this next

const emptyObject = {}; // <-- truthy
```

## 有阵列的乐趣

```javascript
if ([] == false) // <-- truthy, will run code in if-block 
 
 if ([]) // <-- truthy, will also run code in if-block 
 
 if ([] == true) // <-- falsy, will NOT run code in if-block 
 
 if (![]) // <-- falsy, will also NOT run code in if-block 
```

## 警告

在布尔上下文中评估值时，请注意数据类型。如果值的数据类型是一个_数字_ ，那么truthy / falsy评估可能会导致意外的结果：

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (match.teamA) 
  // The following won't run due to the falsy evaluation 
  console.log('Team A: ' + match.teamA); 
 } 
```

上面用例的替代方法是使用`typeof`评估值：

```javascript
const match = { teamA: 0, teamB: 1 } 
 if (typeof match.teamA === 'number') 
  console.log('Team A: ' + match.teamA); 
 } 
```

## 更多信息

*   **真实的** [博客文章 - Truthy＆Falsey](http://james.padolsey.com/javascript/truthy-falsey/)
    
*   [Falsy |词汇表| MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    
*   [Truthy和Falsy：当JavaScript中的所有不相等时](https://www.sitepoint.com/javascript-truthy-falsy/)
