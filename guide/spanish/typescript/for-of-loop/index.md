---
title: For..Of Loop
localeTitle: Para ... de loop
---
# Para ... de loop

`for..of` loop es un bucle especial en TypeScript que puede usar para iterar a través de los valores de una matriz.

```typescript
let fruits = ['Apple', 'Banana', 'Orange']; 
 
 for (let fruit of fruits) { 
  console.log(fruit); 
 } 
```

La salida que obtendrá del código anterior será "Apple", "Banana" y "Orange". Como este tipo de bucle no se repite en los índices, no obtendrá "0", "1" y "2".