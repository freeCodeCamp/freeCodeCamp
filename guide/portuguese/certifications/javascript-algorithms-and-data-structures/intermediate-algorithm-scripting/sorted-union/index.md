---
title: Sorted Union
localeTitle: União ordenada
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

O programa deve retornar uma nova matriz de valores exclusivos de dois arrays originais na ordem em que aparecem. Portanto, não é necessário classificar e não deve haver duplicatas.

#### Links Relevantes

*   [Argumentos JS](http://forum.freecodecamp.com/t/javascript-arguments/14283)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Desde que você não tem idéia de quantos parâmetros foram passados, seria melhor percorrer os **argumentos** antes de percorrer os arrays.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Não é necessário usar loops. Você pode usar funções como `map()` , `reduce()` ou outras, se desejar.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Você terá que verificar se o valor atual já está no array a ser retornado para cada valor.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function uniteUnique(arr1, arr2, arr3) { 
  // Creates an empty array to store our final result. 
  var finalArray = []; 
 
  // Loop through the arguments object to truly made the program work with two or more arrays 
  // instead of 3. 
  for (var i = 0; i < arguments.length; i++) { 
    var arrayArguments = arguments[i]; 
 
    // Loops through the array at hand 
    for (var j = 0; j < arrayArguments.length; j++) { 
      var indexValue = arrayArguments[j]; 
 
      // Checks if the value is already on the final array. 
      if (finalArray.indexOf(indexValue) < 0) { 
        finalArray.push(indexValue); 
      } 
    } 
  } 
 
  return finalArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnM/0)

### Explicação do código:

*   Crie array **final finalResult** para armazenar o resultado final.
*   Faça um loop pelo objeto de **argumentos** no loop externo e armazene-o em **arrayArguments** .
*   O loop interno é usado para percorrer os elementos individuais da matriz.
*   Se o elemento ainda não existir no **finalArray** , adicione-o.
*   Retornar **finalArray** .

#### Links Relevantes

*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [Índice de Protótipo de Cadeia JS](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [Push de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## Solução alternativa de código básico

```javascript
function uniteUnique(arr) { 
  var args = [...arguments]; 
  var result = []; 
  for(var i = 0; i < args.length; i++) { 
    for(var j = 0; j < args[i].length; j++) { 
       if(!result.includes(args[i][j])) { 
        result.push(args[i][j]); 
      } 
    } 
  } 
  return result; 
 } 
 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function uniteUnique(arr1, arr2, arr3) { 
 var newArr; 
 //Convert the arguments object into an array 
  var args = Array.prototype.slice.call(arguments); 
  //Use reduce function to flatten the array 
  newArr = args.reduce(function(arrA,arrB){ 
  //Apply filter to remove the duplicate elements in the array 
    return arrA.concat(arrB.filter(function(i){ 
      return arrA.indexOf(i) === -1; 
    })); 
  }); 
 
   return newArr; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnO/0)

### Explicação do código:

*   objeto **argumentos** é convertido em um array usando `slice()` .
*   `reduce()` função `reduce()` é usada para nivelar a matriz, ou seja, para cada elemento que está na matriz (ou matrizes aninhadas), extraia seus elementos em uma matriz unidimensional.
*   Depois de achatar a matriz, `filter()` é usado para remover elementos duplicados de **newArr** .

#### Links Relevantes

*   [Fatia de Protótipo de Matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [Protótipo JS Array Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Concat de Protótipo JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [Filtro Protótipo JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function uniteUnique() { 
  var concatArr = []; 
  var i = 0; 
  while (arguments[i]){ 
    concatArr = concatArr.concat(arguments[i]); i++; 
  } 
  uniqueArray = concatArr.filter(function(item, pos) { 
    return concatArr.indexOf(item) == pos; 
  }); 
  return uniqueArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnN/0)

### Explicação do código:

*   O número de argumentos pode mudar dinamicamente, portanto, não precisamos nos preocupar em fornecer nossa função `uniteUnique()` com argumentos.
*   Nós usamos um `while` loop para concatenar todos os argumentos em um array chamado **concatArr.**
*   Usamos `filter()` para remover os elementos duplicados, verificando o índice de cada elemento e removendo os mesmos elementos com diferentes posições.
*   A encomenda será preservada aqui.

#### Links Relevantes

*   JS While Loop

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução alternativa de código usando o ES2015
```
//jshint esversion:6 
 
 function uniteUnique(...arrays) { 
 
  //make an array out of the given arrays and flatten it (using the spread operator) 
  const flatArray = [].concat(...arrays); 
 
  // create a Set which clears any duplicates since it's a regulat set and not a multiset 
  return [...new Set(flatArray)]; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CcWk/0)

### Explicação do código:

*   Primeiro, usamos `concat()` com uma matriz vazia `<a href='http://exploringjs.com/es6/ch_maps-sets.html#_set' target='_blank' rel='nofollow'>]` como ponto de partida e o operador spread `...` para criar um array fora do objeto Arguments e achatá-lo ao mesmo tempo
*   então usamos o novo objeto **Set** ES2015 para armazenar apenas valores exclusivos
*   (para aprender mais sobre Sets, leia \[aqui\]

#### Links Relevantes

*   [Array.prototype.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [Argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
*   [Conjunto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.