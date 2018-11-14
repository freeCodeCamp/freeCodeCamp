---
title: Conditional Ternary Operators
localeTitle: 条件三元运算符
---
## 条件三元运算符

### 基本用法

三元运算符是在表达式中编写if-else的紧凑方法。

```js
const thing = (condition) ? <if true> : <if false>; 
```

例如

```js
const cappedInput = input > 50 ? 50 : input // this will cap the input at 50 
```

### 否则，如果

你也可以链接三元运算符，这样你就会有一个if-else if-else行为

```js
<first condition> ? <value if first true> 
 : <second condition> ? <value if second is true> 
 : <fallback value> 
```

> **专业提示** ：如您所见，您可以在多行上拆分三元运算符 例如
```
const wealth = housesOwned > 3 ? "rich" 
             : housesOwned > 1 ? "nothing to complain" 
             : "poor" 

```