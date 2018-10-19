---
title: Some Function
localeTitle: Alguma função
---## A função alguns

A função `some()` é usada para verificar se pelo menos um elemento de uma matriz atende a uma determinada condição. A função retorna `true` se a condição for satisfeita por um elemento e false se algum dos elementos atender a condição

A sintaxe original da função some é:

```javascript
arr.some(function callback(currentValue, index, array) { 
  // Do some stuff with currentValue (index and array are optionals) 
 }, [thisArg]); 
```

### Exemplo (ES6):

```javascript
const arr = [1, 4, 5, 11]; 
 if (arr.some(el => el % 2 == 0)) { 
  console.log("There's at least one even number"); 
 } 
```

`some()` é um método do objeto `Array` , portanto, para passar essa função para um objeto iterável, é necessário ter certeza de que o objeto é um Array.