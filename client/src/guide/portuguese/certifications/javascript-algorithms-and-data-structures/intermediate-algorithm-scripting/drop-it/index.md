---
title: Drop it
localeTitle: Largue
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/236dcca68bf55be37bf7cbb9646f6e0156b4a3c3.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Basicamente, enquanto o segundo argumento não é verdade, você terá que remover o primeiro elemento da esquerda da matriz que foi passada como o primeiro argumento.

#### Links Relevantes

*   [Argumentos objeto](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.shift ()](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você pode usar o `Array.prototype.shift()` ou o filtro com o qual você deve estar mais familiarizado para resolver esse problema em algumas linhas de código.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Shift retorna o elemento que foi removido que realmente não precisamos, tudo que precisamos é o array modificado que resta.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Se você ainda não consegue descobrir como resolvê-lo com turno, tente resolvê-lo com filtro e verifique como o filtro funciona, se você se familiarizar com ele, então você pode fazer o código com turno.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function dropElements(arr, func) { 
  // drop them elements. 
  var times = arr.length; 
  for (var i = 0; i < times; i++) { 
    if (func(arr[0])) { 
      break; 
    } else { 
      arr.shift(); 
    } 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLna/0)

### Explicação do código:

*   Crie um loop for para verificar cada elemento.
*   Em seguida, verifique a função dada se true, em seguida, pare, caso contrário, remova esse elemento.
*   retornar a matriz.

#### Links Relevantes

*   [For Loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [Mais sobre for loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function dropElements(arr, func) { 
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length); 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnc/0)

### Explicação do código:

*   Use a função ES6 `findIndex()` para encontrar o índice do elemento que passa a condição
*   Fatie a matriz do índice encontrado até o final
*   Existe um caso de borda! se a condição não for atendida contra qualquer um dos elementos 'findIndex' retornará `-1` que atrapalha a entrada para `slice()` . Nesse caso, use um operador condicional simples para retornar `false` vez de `-1` . E o operador ternário (? ![:slight_smile:](https://forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=3 ": slight_smile:") retorna o índice encontrado dos elementos requeridos quando a condição é `true` , e o comprimento da matriz, caso contrário, para que o valor de retorno seja uma matriz vazia conforme instruído.

#### Links Relevantes

*   [findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [Operador Condicional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function dropElements(arr, func) { 
  while(arr.length > 0 && !func(arr[0])) { 
    arr.shift(); 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnf/0)

### Explicação do código

*   Use um loop while com `Array.prototype.shift()` para continuar verificando e `Array.prototype.shift()` o primeiro elemento da matriz até que a função retorne true. Ele também garante que o array não esteja vazio primeiro para evitar loops infinitos.
*   Retorne a matriz filtrada.

#### Links Relevantes

*   [Enquanto loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.