---
title: Where Do I Belong
localeTitle: Onde eu pertenço
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Isso pode ser um problema difícil de entender. Você precisa encontrar onde no array um número deve ser inserido por ordem e retornar o índice para onde ele deve ir.

#### Links Relevantes

*   [Tipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

A primeira coisa a fazer é classificar o array de menor para maior, apenas para facilitar o código. É aqui que o sort vem, ele precisa de uma função de callback, então você precisa criá-lo.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Depois que a matriz é classificada, basta verificar o primeiro número que é maior e retornar o índice.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Se não houver um índice para esse número, você também terá que lidar com esse caso.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function getIndexToIns(arr, num) { 
  arr.sort(function(a, b) { 
    return a - b; 
  }); 
 
  for (var a = 0; a < arr.length; a++) { 
    if (arr[a] >= num) 
      return a; 
  } 
 
  return arr.length; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/36)

## Explicação do código:

*   Primeiro, classifico a matriz usando `.sort(callbackFuntion)` para classificá-la da mais baixa para a mais alta, da esquerda para a direita.
*   Então eu uso um loop for para comparar os itens na matriz, começando pelo menor. Quando um item na matriz é maior que o número que estamos comparando, então retornamos o índice como um inteiro.

#### Links Relevantes

*   [parseInt ()](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function getIndexToIns(arr, num) { 
  // Find my place in this sorted array. 
  var times = arr.length; // runs the for loop once for each thing in the array 
  var count = 0; 
  for (var i=0;i<times;i++){ 
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num 
    return count; // the above equals num's position in a sorted array 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/2547)

## Explicação do código:

*   Eu não classifico a matriz de entrada arr
*   Eu executo uma contagem de loop for sempre que a entrada num for maior que um número de entrada de arr.
*   Esse número é equivalente a qual posição do num seria em uma matriz classificada.

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

por [@HarinaPana](/u/harinapana)
```
function getIndexToIns(arr, num) { 
 
  arr.sort(function(a, b) { 
  return a - b; 
  }); 
 
  var i = 0; 
  while (num > arr[i]) { 
  i++; 
  } 
 
  return i; 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/4135)

## Explicação do código:

*   Classifique o array existente.
*   Iterar através da matriz, verificando se _num_ é maior.
*   O loop irá parar quando _num_ não for maior que _i_ e retornar o último elemento selecionado.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

por [@faustodc](/u/faustodc)
```
function getIndexToIns(arr, num) { 
  arr.push(num); 
  arr.sort(function(a, b){return ab}); 
  return arr.indexOf(num); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/EB10/1)

## Explicação do código:

*   Primeiro, adicionamos o número `num` ao array usando `push()` que o adiciona como o último elemento do array.
*   Em seguida, usamos `sort()` com a função de callback function `function(a, b){return ab}` para ordenar os números em ordem crescente.
*   Por fim, retornamos a posição ou índice de `num` na matriz com a função `indexOf()` .

#### Links Relevantes

*   [empurrar()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [ordenar()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   [índice de()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

**Usando `.findIndex()`**
```
function getIndexToIns(arr, num) { 
  // sort and find right index 
  var index = arr.sort((curr, next) => curr > next) 
    .findIndex((currNum)=> num <= currNum); 
  // Returns proper answer 
  return index === -1 ? arr.length : index; 
 } 
 
 getIndexToIns([40, 60], 500); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/63)

## Explicação do código:

*   Primeiro, classifique a matriz em ordem crescente, isso é feito atualmente usando funções de matriz para pegada mínima.
*   Uma vez que a matriz é ordenada, nós aplicamos diretamente o `.findIndex()` onde vamos comparar todos os elementos na matriz até encontrarmos onde `num <= currNum` significando onde o número que queremos inserir é menor ou igual ao número atual número na iteração.
*   Em seguida, usamos operações ternárias para verificar se recebemos um índice retornado ou `-1` . Nós só obtemos `-1` quando o índice não foi encontrado significando quando recebemos um falso para todos os elementos na matriz, e para tal caso, isso significaria que `num` deve ser inserido no final da lista, portanto, por que usamos `arr.length` .

#### Links Relevantes

*   [Array.findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [Funções de seta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [Operador Ternário](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

por [@nivrith](/u/nivrith)
```
function getIndexToIns(arr, num) { 
 
 return arr.concat(num).sort((a,b) => ab).indexOf(num); 
 
 } 
 
 getIndexToIns([1,3,4],2); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/IUJE/0)

## Explicação do código:

*   Usamos o método de encadeamento para invocar um método após o outro para resolver o problema em uma única linha. Primeiro nós mesclamos `arr` e `num` invocando o método arr.concat (num)
*   Em seguida, usamos `sort()` com a **função de seta de** retorno de chamada `(a, b) => return ab` para classificar os números em ordem crescente
*   Por fim, retornamos a posição ou índice de `num` na matriz com o método `indexOf()`

#### Links Relevantes

*   [Método de encadeamento em JavaScript](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
*   [concat ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example)
*   [Funções de seta](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.