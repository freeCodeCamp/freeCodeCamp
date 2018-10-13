---
title: Diff Two Arrays
localeTitle: Diff Two Arrays
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de.gif)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Marque duas matrizes e retorne uma nova matriz que contenha apenas os itens que não estão em nenhuma das matrizes originais.

#### Links Relevantes

*   [for Loop (Devdocs)](https://devdocs.io/javascript/statements/for)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Mesclar a lista para facilitar a comparação de funções.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Use o filtro para obter o novo array, você precisará criar uma função de retorno de chamada.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

A melhor maneira de executar a função de retorno de chamada é verificar se o número da nova matriz mesclada não está nos **dois** arrays originais e retorná-lo.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução Básica de Código (Solução Imperativa):

```javascript
    function diffArray(arr1, arr2) { 
      var newArr = []; 
 
      function onlyInFirst(first, second) { 
      // Looping through an array to find elements that don't exist in another array 
        for (var i=0;i<first.length;i++) { 
          if (second.indexOf(first[i]) === -1) { 
            // Pushing the elements unique to first to newArr 
            newArr.push(first[i]); 
          } 
        } 
      } 
 
      onlyInFirst(arr1, arr2); 
      onlyInFirst(arr2, arr1); 
 
      return newArr; 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLme/0)

### Explicação do código:

Leia os comentários no código.

#### Links Relevantes

*   [for Loop (Devdocs)](https://devdocs.io/javascript/statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário (Solução Declarativa):

```javascript
    function diffArray(arr1, arr2) { 
      return arr1 
        .concat(arr2) 
        .filter( 
            item => !arr1.includes(item) || !arr2.includes(item) 
        ) 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CNYb/0)

### Explicação do código:

Explique a solução aqui e adicione links relevantes

#### Links Relevantes

*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código (solução declarativa):
```
function diffArray(arr1, arr2) { 
    return arr1 
      .filter(el => !arr2.includes(el)) 
      .concat( 
        arr2.filter(el => !arr1.includes(el)) 
      ) 
 } 
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CNYU/0)

### Explicação do código:

Explique a solução aqui e adicione links relevantes

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Alternativa de Solução de Código Avançado (Solução Declarativa):
```
function diffArray(arr1, arr2) { 
  return [ 
    ...diff(arr1, arr2), 
    ...diff(arr2, arr1) 
  ] 
 
  function diff(a, b) { 
    return a.filter(item => b.indexOf(item) === -1); 
  } 
 } 
```

#### Links Relevantes

*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.