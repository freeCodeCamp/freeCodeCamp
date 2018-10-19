---
title: Add Items to an Array with push() and unshift()
localeTitle: Adicionar itens a uma matriz com push () e unshift ()
---
## Adicionar itens a uma matriz com push () e unshift ()

*   Assim como o exemplo dado, use o método `.unshift()` na matriz para adicionar elementos ao início da matriz e use o método `.push()` para adicionar elementos ao final da matriz.

## Solução:

```javascript
function mixedNumbers(arr) { 
  // change code below this line 
 arr.unshift('I',2,'three'); 
 arr.push(7,'VIII', 9); 
  // change code above this line 
  return arr; 
 } 
 
 // do not change code below this line 
 console.log(mixedNumbers(['IV', 5, 'six'])); 

```