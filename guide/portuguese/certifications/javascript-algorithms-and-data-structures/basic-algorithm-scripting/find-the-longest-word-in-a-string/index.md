---
title: Find the Longest Word in a String
localeTitle: Encontre a palavra mais longa em uma string
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você tem que passar por cada palavra e descobrir qual é a mais longa e retornar não a palavra, mas quantos caracteres ela possui.

#### Links Relevantes

*   [Comprimento da Cadeia JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você deve dividir a string em uma matriz de palavras.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você precisará descobrir uma maneira de acompanhar globalmente o maior comprimento atual.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Lembre-se de como obter o comprimento dos elementos no array? `Array[index].length` .

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function findLongestWordLength(str) { 
  var words = str.split(' '); 
  var maxLength = 0; 
 
  for (var i = 0; i < words.length; i++) { 
    if (words[i].length > maxLength) { 
      maxLength = words[i].length; 
    } 
  } 
 
  return maxLength; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/5)

### Explicação do código:

Pegue a corda e converta-a em uma matriz de palavras. Declare uma variável para acompanhar o comprimento máximo e o loop de 0 até o comprimento da matriz de palavras.

Em seguida, verifique a palavra mais longa comparando a palavra atual com a anterior e armazenando a nova palavra mais longa. No final do loop, retorne o valor numérico da variável maxLength.

#### Links Relevantes

*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

**Usando `.reduce()`**
```
function findLongestWordLength(s) { 
  return s.split(' ') 
    .reduce(function(x, y) { 
      return Math.max(x, y.length) 
    }, 0); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/6)

### Explicação do código:

Para mais informações sobre `reduce` [clique aqui.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Caso você esteja se perguntando sobre o `0` após a função de retorno de chamada, ele é usado para fornecer um valor inicial ao `x` , para que o `Math.max` saiba por onde começar.

#### Links Relevantes

*   [JS Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Reduzir Made Easy](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682.md)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

**Usando recursividade**
```
function findLongestWordLength(str) { 
 
  //split the string into individual words 
  //(important!!, you'll see why later) 
  str = str.split(" "); 
 
  //str only has 1 element left that is the longest element, 
  //return the length of that element 
  if(str.length == 1){ 
    return str[0].length; 
  } 
 
  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function) 
  if(str[0].length >= str[1].length){ 
    str.splice(1,1); 
    return findLongestWordLength(str.join(" ")); 
  } 
 
  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){ 
    // from the first element to the last element inclusive. 
    return findLongestWordLength(str.slice(1,str.length).join(" ")); 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/7)

### Explicação do código:

A primeira linha divide a string em palavras individuais. Então nós verificamos se `str` tem apenas 1 elemento à esquerda, então esse é o elemento mais longo e nós o retornamos. Se o comprimento do primeiro elemento for maior que o segundo (ou igual) do segundo elemento, nós removemos o segundo elemento e chamamos recursivamente a função `findLongestWord` . No entanto, se o comprimento do segundo elemento for maior que o início do primeiro elemento, então chamamos a função após o primeiro elemento.

#### Links Relevantes

*   [Funções JS](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [Noções básicas de recursão](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.