---
title: Array.prototype.concat
localeTitle: Array.prototype.concat
---
## Array.prototype.concat

O método 'concat' retorna um novo array que consiste nos elementos do array em que você o chama, seguidos pelos elementos dos argumentos na ordem em que são passados.

Você pode passar vários argumentos para o método 'concat'. Os argumentos podem ser matrizes ou tipos de dados, como booleanos, cadeias de caracteres e números.

### Sintaxe

```javascript
const newArray = array.concat(value1, value2, value3...); 
```

### Exemplos

#### Concatenando duas matrizes

```javascript
var cold = ['Blue', 'Green', 'Purple']; 
 var warm = ['Red', 'Orange', 'Yellow']; 
 
 var result = cold.concat(warm); 
 
 console.log(result); 
 // results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow']; 
```

#### Concatenando valor para uma matriz

```javascript
const odd = [1, 3, 5, 7, 9]; 
 const even = [0, 2, 4, 6, 8]; 
 
 const oddAndEvenAndTen = odd.concat(even, 10); 
 
 console.log(oddAndEvenAndTen); 
 // results in [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10]; 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)