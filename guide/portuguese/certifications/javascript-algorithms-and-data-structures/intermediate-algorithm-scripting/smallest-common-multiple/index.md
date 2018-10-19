---
title: Smallest Common Multiple
localeTitle: Menor Múltiplo Comum
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

O menor múltiplo comum entre dois números é o menor número que ambos os números podem dividir. Este conceito pode ser estendido para mais de dois números também.

Podemos começar com apenas encontrar o menor múltiplo comum entre dois números. Ingenuamente, você pode começar a escrever múltiplos de cada número até escrever um múltiplo que exista de ambos os números.

Um exemplo seria os números `3` e `4` . Os múltiplos de `3` são `3, 6, 9, 12, 15, 18, ...` e os múltiplos de `4` são `4, 8, 12, 16, 20, ...` O primeiro número menor que encontramos em ambas as listas é `12` então este é o menor múltiplo comum entre `3` e `4` .

Esse problema pode ser confuso porque a maioria das pessoas procura o menor múltiplo comum de apenas os dois números, mas esquece o **intervalo de** palavras-chave. No entanto, isso significa que se você receber `[1,5]` , você deve verificar o menor múltiplo comum para todos os números `[1,2,3,4,5]` que é divisível por todos eles.

#### Links Relevantes

*   [Mínimo Comum (Menor) (Menor)](https://en.wikipedia.org/wiki/Least_common_multiple)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Crie uma matriz com todos os números que estão faltando na matriz original para facilitar a verificação ao verificar a divisão uniforme.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você pode usar o operador de descanso ( `%` ) para verificar se o lembrete de uma divisão é 0, o que significa que é divisível de maneira uniforme.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Se você classificar a matriz de maior para menor, poderá usar os dois primeiros números como uma primeira verificação para o menor múltiplo comum. Isto é porque eles são mais propensos a ser o menor múltiplo comum do que os números mais baixos.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function smallestCommons(arr) { 
  // Sort array from greater to lowest 
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014) 
  arr.sort(function(a, b) { 
    return b - a; 
  }); 
 
  // Create new array and add all values from greater to smaller from the 
  // original array. 
  var newArr = []; 
  for (var i = arr[0]; i >= arr[1]; i--) { 
    newArr.push(i); 
  } 
 
  // Variables needed declared outside the loops. 
  var quot = 0; 
  var loop = 1; 
  var n; 
 
  // Run code while n is not the same as the array length. 
  do { 
    quot = newArr[0] * loop * newArr[1]; 
    for (n = 2; n < newArr.length; n++) { 
      if (quot % newArr[n] !== 0) { 
        break; 
      } 
    } 
 
    loop++; 
  } while (n !== newArr.length); 
 
  return quot; 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLn2/0)

### Explicação do código:

*   Por causa da possibilidade do menor denominador comum estar entre os dois maiores números, faz sentido checar os primeiros, então ordene o array.
*   Crie uma nova matriz para classificar todos os números, `newArr` .
*   Use um loop descendente `for` ( `var i = arr[0]; i >= arr[1]; i--` ) para adicionar os números do maior ao menor no novo array.
*   Declare as variáveis ​​para o quociente para que possamos acessá-las fora do loop:
    *   o quociente que será nosso menor múltiplo comum ( `quot` )
    *   o número do loop que estamos verificando ( `loop` )
    *   o índice da matriz de números ( `n` )
*   Use um `do` `while` loop para verificar o que precisamos, enquanto `n` não é o mesmo comprimento que a nova matriz.
*   No `do` parte, que vai multiplicar o primeiro número, vezes o número de lacetes, vezes o segundo número ( `quot = newArr[0] * loop * newArr[1];` ).
*   A parte do `loop` nos permitirá aumentar o número que estamos verificando além do maior número que temos sem ter que alterar o algoritmo.
*   Nós inserimos um loop `for` que vai de `n` sendo 2 e subindo por um ( `loop++` ), enquanto é menor que o array com todos os números ( `n < newArr.length` ).
*   Se o quociente não for dividido uniformemente ( `quot % newArr[n] !== 0` ), pare o loop ( `break;` ). Se for par, verifique os próximos elementos ( `n++` ) na matriz até que não fique nem encontramos nossa resposta.
*   Fora do loop, aumente o valor do loop ( `loop++` ).
*   No final do loop, retorne o quociente ( `return quot;` ).

Nota: Se a matriz tem apenas dois elementos, em seguida, o `for` laço nunca se acostuma e o valor de retorno é o produto de referidos números.

#### Links Relevantes

*   [Tipo de Protótipo de Array JS](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [Push de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Do While Loop](http://forum.freecodecamp.com/t/javascript-do-while-loop/14662)
*   String.length

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function smallestCommons(arr) { 
    var range = []; 
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) { 
    range.push(i); 
    } 
 
    // can use reduce() in place of this block 
    var lcm = range[0]; 
    for (i = 1; i < range.length; i++) { 
    var GCD = gcd(lcm, range[i]); 
    lcm = (lcm * range[i]) / GCD; 
    } 
    return lcm; 
 
    function gcd(x, y) {    // Implements the Euclidean Algorithm 
    if (y === 0) 
        return x; 
    else 
        return gcd(y, x%y); 
    } 
 } 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLn4/0)

### Explicação do código:

*   A primeira solução básica requer mais de 2.000 loops para calcular o caso de teste dos `smallestCommons([1,13])` e mais de 4 milhões de loops para calcular os `smallestCommons([1,25])` . Esta solução avalia os `smallestCommons([1,13])` em cerca de 20 loops e os `smallestCommons([1,25])` em 40, usando um algoritmo mais eficiente.
*   Faça um **intervalo de** array vazio.
*   Todos os números entre o intervalo fornecido são enviados para o **intervalo** usando um loop `for` .
*   O próximo bloco de código implementa o algoritmo euclidiano, que é usado para encontrar os menores múltiplos comuns.

#### Links Relevantes

*   [Algoritmo Euclidiano](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function smallestCommons(arr) { 
 
  // range 
  let min = Math.min.apply(null, arr); 
  let max = Math.max.apply(null, arr); 
 
  let smallestCommon = lcm(min, min + 1); 
 
  while(min < max) { 
    min++; 
    smallestCommon = lcm(smallestCommon, min); 
  } 
 
  return smallestCommon; 
 } 
 
 /** 
 * Calculates Greatest Common Divisor 
 * of two nubers using Euclidean algorithm 
 * https://en.wikipedia.org/wiki/Euclidean_algorithm 
 */ 
 function gcd(a, b) { 
  while (b > 0) { 
    let tmp = a; 
    a = b; 
    b = tmp % b; 
  } 
  return a; 
 } 
 
 /** 
 * Calculates Least Common Multiple 
 * for two numbers utilising GCD 
 */ 
 function lcm(a, b) { 
  return (a * b / gcd(a, b)); 
 } 
 
 
 // test here 
 smallestCommons([1,5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/MR9P/latest)

### Explicação do código:

*   Extraia o mínimo e o máximo de **arr** .
*   Initialize **smallestCommon** com o LCM dos dois primeiros números.
*   Faça um loop pela computação de intervalo LCM do LCM atual e o próximo número no intervalo **lcm (a, b, c) = lcm (lcm (a, b), c)** .

#### Links Relevantes

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.