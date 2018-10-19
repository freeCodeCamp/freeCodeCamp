---
title: Array.prototype.findIndex
localeTitle: Array.prototype.findIndex
---
## Em formação

O método `findIndex()` retorna o índice do primeiro elemento na matriz que satisfaz a função de teste fornecida. Caso contrário, -1 é retornado.

O método `findIndex()` não altera o array no qual ele é chamado.

Sintaxe:
```
arr.findIndex(callback[, thisArg]) 
```

##### Parâmetros

*   `callback`
*   Função para executar em cada valor no array, tomando três argumentos:
*   `element`
    *   O elemento atual sendo processado na matriz.
*   `index`
    *   O índice do elemento atual sendo processado na matriz.
*   `array`
    *   A matriz findIndex () foi chamada.
*   `thisArg` (opcional)
*   Objeto para usar como este ao executar o retorno de chamada.

##### Valor de retorno

Um índice na matriz se um elemento passar no teste; caso contrário, -1.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## Exemplos

Este exemplo encontrará o item correspondente na matriz e retornará o índice a partir dele.

```javascript
let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.findIndex(findMovies)); 
 
 // Index of 2nd element in the Array is returned, 
 // so this will result in '1' 
```

O exemplo a seguir mostra a saída de cada parâmetro opcional para a função de retorno de chamada. Isso retornará `-1` porque nenhum dos itens retornará true da função de retorno de chamada.

```javascript
function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].findIndex(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = -1 

```