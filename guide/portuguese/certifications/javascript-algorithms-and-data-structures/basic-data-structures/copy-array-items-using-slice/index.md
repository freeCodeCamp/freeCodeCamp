---
title: Copy Array Items Using slice()
localeTitle: Copiar itens de matriz usando slice ()
---
## Copiar itens de matriz usando slice ()

*   a função `slice()` deve ser usada para retornar um array que consiste em apenas `warm` e `sunny` .
*   Portanto, dois parâmetros devem ser passados ​​para a função `slice()` . O primeiro parâmetro deve ser o índice para o qual você deseja que a substring comece. O segundo parâmetro deve ser o índice no qual a substring termina.
*   Nota: O segundo parâmetro terminará a substring nesse índice exato.

## Exemplo:

```javascript
 return arr.slice(1,4); 
 /* This will return a substring consisting of indexs [1,2,3] 
    Note: arr[4] is NOT included. 
```

## Solução:

```javascript
function forecast(arr) { 
  // change code below this line 
  return arr.slice(2,4); 
 } 
 
 // do not change code below this line 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); 

```