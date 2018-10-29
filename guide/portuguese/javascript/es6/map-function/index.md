---
title: Map Function
localeTitle: Função Mapa
---## A função do mapa

A função `map()` é usada para criar uma nova matriz a partir de uma existente, aplicando uma função a cada um dos elementos da primeira matriz.

A sintaxe original da função do mapa é:

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

`map()` é um método do objeto `Array` , portanto, para passar essa função para um objeto iterável, é necessário tornar o objeto um Array.