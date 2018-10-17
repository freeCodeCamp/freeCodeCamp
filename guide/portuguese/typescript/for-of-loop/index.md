---
title: For..Of Loop
localeTitle: Para ... De Loop
---
# Para ... De Loop

`for..of` loop é um loop especial no TypeScript que você pode usar para iterar os valores de um array.

```typescript
let fruits = ['Apple', 'Banana', 'Orange']; 
 
 for (let fruit of fruits) { 
  console.log(fruit); 
 } 
```

A saída que você obterá do código acima será "Apple", "Banana" e "Orange". Como esse tipo de loop não percorre os índices, você não obterá "0", "1" e "2".