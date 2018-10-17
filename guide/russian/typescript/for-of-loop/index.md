---
title: For..Of Loop
localeTitle: Для ... Loop
---
# Для ... Loop

`for..of` loop - это специальный цикл в TypeScript, который вы можете использовать для повторения значений массива.

```typescript
let fruits = ['Apple', 'Banana', 'Orange']; 
 
 for (let fruit of fruits) { 
  console.log(fruit); 
 } 
```

Результатом вывода из вышеприведенного кода будет «Apple», «Banana» и «Orange». Поскольку этот тип цикла не перебирает индексы, вы не получите «0», «1» и «2».