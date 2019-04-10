---
title: Mutations
localeTitle: Mutações
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

*   Retorna true se a string no primeiro elemento da matriz contiver todas as letras da string no segundo elemento da matriz.

#### Links Relevantes

*   [String.indexOf ()](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

*   Se tudo estiver em minúsculas, será mais fácil comparar.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

*   Nossas strings podem ser mais fáceis de trabalhar se forem matrizes de caracteres.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

*   Um loop pode ajudar. Use `indexOf()` para verificar se a letra da segunda palavra está no primeiro.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

**Procedural**
```
function mutation(arr) { 
  var test = arr[1].toLowerCase(); 
  var target = arr[0].toLowerCase(); 
  for (var i=0;i<test.length;i++) { 
    if (target.indexOf(test[i]) < 0) 
      return false; 
  } 
  return true; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/30)

### Explicação do código:

Primeiro fazemos as duas strings no array minúsculo. `test` irá realizar o que estamos procurando no `target` .  
Em seguida, passamos por nossos caracteres de teste e, se algum deles não for encontrado, `return false` .

Se _todos_ eles forem encontrados, o loop terminará sem retornar nada e nós `return true` .

#### Links Relevantes

*   [String.toLowerCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [Para loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

**Declarativo**
```
function mutation(arr) { 
  return arr[1].toLowerCase() 
    .split('') 
    .every(function(letter) { 
      return arr[0].toLowerCase() 
        .indexOf(letter) != -1; 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/31)

### Explicação do código:

Pegue a segunda corda, em minúsculas e transforme-a em uma matriz; em seguida, certifique-se de que _cada_ uma de suas _letras faça_ parte da primeira seqüência de caracteres em minúscula.

`Every` um basicamente lhe dará letra por letra para comparar, o que fazemos usando `indexOf` na primeira string. `indexOf` lhe dará -1 se a `letter` atual estiver faltando. Verificamos que não é esse o caso, pois se isso acontecer uma vez, `every` será falso.

#### Links Relevantes

*   [Array.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.