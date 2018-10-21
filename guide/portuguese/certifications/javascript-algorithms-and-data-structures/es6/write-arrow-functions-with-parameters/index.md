---
title: Write Arrow Functions with Parameters
localeTitle: Escrever funções de seta com parâmetros
---
## Escrever funções de seta com parâmetros

Aqui está um [recurso interessante sobre funções anônimas em JavaScript](http://helephant.com/2008/08/23/javascript-anonymous-functions/) , caso você ainda esteja se perguntando o que elas são e o papel delas.

Agora, você está encarregado de colocar parâmetros dentro das funções de seta.

## Sugestão 1:

Livre-se da palavra-chave da `function` . Coloque o operador de flecha.

## Dica 2:

Certifique-se de ter alterado o `var` para um `const` .

## Aviso de spoiler - Solução à frente!

## Solução:

```javascript
const myConcat = (arr1, arr2) => { 
  "use strict"; 
  return arr1.concat(arr2); 
 }; 
 // test your code 
 console.log(myConcat([1, 2], [3, 4, 5])); 

```