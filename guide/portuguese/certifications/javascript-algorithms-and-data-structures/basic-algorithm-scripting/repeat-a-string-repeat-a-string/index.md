---
title: Repeat a String Repeat a String
localeTitle: Repetir uma String Repetir uma String
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

O programa é muito simples, temos que pegar uma variável e retornar essa variável sendo repetida certa quantidade de vezes. Não há necessidade de adicionar espaço ou nada, apenas continue repetindo em uma única string.

#### Links Relevantes

*   [Objeto String Global](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você não pode editar strings, você precisará criar uma variável para armazenar a nova string.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Crie um loop para repetir o código quantas vezes forem necessárias.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Faça a variável criada armazenar o valor atual e anexe a palavra a ela.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function repeatStringNumTimes(str, num) { 
  var accumulatedStr = ''; 
 
  while (num > 0) { 
    accumulatedStr += str; 
    num--; 
  } 
 
  return accumulatedStr; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/19)

### Explicação do código:

*   Crie uma variável de string vazia para armazenar a palavra repetida.
*   Use um loop while ou loop para repetir o código quantas vezes `num` necessárias de acordo com
*   Então, basta adicionar a string à variável criada na etapa um e aumentar ou diminuir `num` dependendo de como você define o loop.
*   No final do loop, retorne a variável para a palavra repetida.

#### Links Relevantes

*   JS while Loop
*   [JS For Loops Explained](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function repeatStringNumTimes(str, num) { 
  if(num < 0) 
    return ""; 
  if(num === 1) 
    return str; 
  else 
    return str + repeatStringNumTimes(str, num - 1); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/21)

### Explicação do código:

*   Esta solução usa recursão.
*   Verificamos se `num` é negativo e retornamos uma string vazia se for verdade.
*   Em seguida, verificamos se é igual a 1 e, nesse caso, retornamos a string em si.
*   Se não, adicionamos a string a uma chamada de nossa função com `num` sendo diminuída em 1, o que adicionará outra `str` e outra .. até que, eventualmente, `num` seja 1. E retorne todo esse processo.

#### Links Relevantes

*   [Funções - Recursão](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function repeatStringNumTimes(str, num) { 
  return num > 0 ? str.repeat(num) : ''; 
 } 
 
 repeatStringNumTimes("abc", 3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/85)

### Explicação do código:

*   Essa solução usa uma abordagem declarativa.
*   É semelhante à terceira solução, exceto que usa a forma do operador ternário da instrução `if` .

#### Links Relevantes

*   [JS Ternary](https://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.