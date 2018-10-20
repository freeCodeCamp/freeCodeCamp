---
title: Everything Be True
localeTitle: Tudo ser verdadeiro
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d69c7f2d86b8902a9bc83653d95932115de47e6a.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

O programa precisa verificar se o segundo argumento é um [truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) elemento, e deve verificar isso para cada objeto no primeiro argumento.

#### Links Relevantes

*   [JavaScript Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [Argumentos JavaScript](http://forum.freecodecamp.com/t/javascript-arguments/14283.md)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Lembre-se de percorrer o primeiro argumento para verificar cada objeto.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Somente se todos eles forem verdade, retornaremos como verdadeiros, portanto, certifique-se de verificar todos eles.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

> _tente resolver o problema agora_

Você poderia usar loops ou funções de callbacks, existem várias maneiras de resolver este problema.

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Soluções à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

**Usando loop for-in e hasOwnProperty**
```
function truthCheck(collection, pre) { 
  // Create a counter to check how many are true. 
  var counter = 0; 
  // Check for each object 
  for (var c in collection) { 
    // If it is has property and value is truthy 
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) { 
      counter++; 
    } 
  } 
  // Outside the loop, check to see if we got true for all of them and return true or false 
  return counter == collection.length; 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnw/0)

### Explicação do código:

*   Primeiro, crio um contador para verificar quantos casos são realmente verdadeiros.
*   Em seguida, verifique cada objeto se o valor for verdadeiro
*   Fora do loop, eu verifico se a variável do contador tem o mesmo valor que o tamanho da **coleção** , se true retorna **true** , caso contrário, retorna **false**

#### Links Relevantes

*   [Loops JS](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [Object.prototype.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

**Usando Array.every ()**
```
function truthCheck(collection, pre) { 
  return collection.every(function (element) { 
    return element.hasOwnProperty(pre) && Boolean(element[pre]); 
  }); 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLny/0)

### Explicação do código:

*   Usa o método nativo "every" para testar se todos os elementos da matriz passam no teste.
*   Este link ajudará o [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### Links Relevantes

*   [JS Array.prototype.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)
*   [MDN Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function truthCheck(collection, pre) { 
  // Is everyone being true? 
  return collection.every(obj => obj[pre]); 
 } 
 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/E2u6/0)

### Explicação do código:

*   Para _cada_ objeto na matriz de `collection` , verifique a exatidão da propriedade do objeto passada no parâmetro `pre`
*   `Array#every` método verifica internamente se o valor retornado do retorno de chamada é verdadeiro.
*   Retorna `true` se passar por _todos os_ objetos. Caso contrário, retorne `false` .

#### Links Relevantes

*   [`Array#every`](http://devdocs.io/javascript/global_objects/array/every)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.