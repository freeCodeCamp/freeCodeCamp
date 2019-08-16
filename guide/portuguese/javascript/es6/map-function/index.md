---
title: Map Function
localeTitle: Função Map
---

## A função do map

A função `map()` é usada para criar uma novo _array_ a partir de um existente, aplicando uma função a cada um dos elementos do primeiro _array_.

A sintaxe original da função do `map` é:

```javascript
let new_arr = arr.map(function callback(currentValue, index, array) { 
  // Do some stuff with currentValue (index and array are optionals) 
}) 
```

### Exemplo (ES6):

```javascript
const myArray_1 = [1, 2, 3, 4]; 
const myArray_2 = myArray_1.map(el => el * 2); 
```

`myArray_2` conterá os elementos: `[2, 4, 6, 8]`

`map()` é um método do objeto `Array`, portanto, para passar essa função para um objeto iterável é necessário tornar o objeto em um _array_.
