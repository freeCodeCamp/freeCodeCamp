---
title: Never Type
localeTitle: 从不打字
---
# 从不打字

`never`类型表示从未发生的值的类型。例如， `never`函数表达式或箭头函数表达式的返回类型，它总是抛出异常或永不返回的异常;变量也会获得`never`被`any`类型的守卫缩小的类型。

`never`类型是每种类型的子类型，并且可分配给每种类型;但是，没有类型是`never`的子类型或可分配的（从不自己除外）。甚至任何都不可分配给永远。

```typescript
// Function returning never must have unreachable end point 
 function error(message: string): never { 
    throw new Error(message); 
 } 
 
 // Inferred return type is never 
 function fail() { 
    return error("Something failed"); 
 } 
 
 // Function returning never must have unreachable end point 
 function infiniteLoop(): never { 
    while (true) { 
    } 
 } 

```