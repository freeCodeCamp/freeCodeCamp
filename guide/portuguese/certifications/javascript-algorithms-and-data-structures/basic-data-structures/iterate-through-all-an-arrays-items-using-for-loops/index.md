---
title: Iterate Through All an Array's Items Using For Loops
localeTitle: Iterar Através de Todos os Itens de uma Matriz Usando For Loops
---
## Iterar Através de Todos os Itens de uma Matriz Usando For Loops

## Sugestão 1

*   A nested `for` loop deve ser usado para pesquisar através de cada elemento na matriz.

```javascript
 for (let i = 0; i < arr.length; i++) { 
```

\`

## Sugestão 2

*   Todos os elementos da matriz devem ser comparados ao parâmetro `elem` passado pela função `filteredArray()` .

```javascript
if (arr[i].indexOf(elem)==-1){ 
```

## Dica 3

*   Se uma correspondência não for encontrada, então `newArr` terá todo o subarray adicionado. A função `push()` é muito útil aqui.

```javascript
newArr.push(arr[i]); 
```

*   Uma vez que todo o subarray é adicionado ao `newArr` o loop continua com o próximo elemento.

## Solução:

```javascript
function filteredArray(arr, elem) { 
  let newArr = []; 
  // change code below this line 
 
 for (let i = 0; i < arr.length; i++) { 
    if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code 
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array 
            }; 
          }; 
 
  // change code above this line 
  return newArr; 
 }; 
 // change code here to test different cases: 
 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); 

```