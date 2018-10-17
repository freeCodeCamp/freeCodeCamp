---
title: For..Of Loop
localeTitle: For..Of Loop
---
# For..Of Loop

`for..of`循环是TypeScript中的一个特殊循环，可用于迭代数组的值。

```typescript
let fruits = ['Apple', 'Banana', 'Orange']; 
 
 for (let fruit of fruits) { 
  console.log(fruit); 
 } 
```

您将从上面的代码中获得的输出将是“Apple”，“Banana”和“Orange”。由于此循环类型不会遍历索引，因此不会得到“0”，“1”和“2”。