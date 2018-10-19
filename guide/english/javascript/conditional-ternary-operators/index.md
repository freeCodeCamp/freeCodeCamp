---
title: Conditional Ternary Operators
---
## Conditional Ternary Operators
### Basic usage
The ternary operator is a compact way to write an if-else inside an expression.
```js
const thing = (condition) ? <if true> : <if false>;
```
E.g.
```js
const cappedInput = input > 50 ? 50 : input // this will cap the input at 50
```
### Else if
You can also chain ternary operators, this way you will have an if-else if-else behaviour
```js
<first condition> ? <value if first true>
: <second condition> ? <value if second is true>
: <fallback value>
```
> **Pro tip**: As you see you can split the ternary operator on multiple lines
E.g.
```
const wealth = housesOwned > 3 ? "rich" 
             : housesOwned > 1 ? "nothing to complain"
             : "poor"
```
