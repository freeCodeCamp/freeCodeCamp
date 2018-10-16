---
title: Sum All Odd Fibonacci Numbers
localeTitle: Soma todos os números impares de Fibonacci
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você precisará reunir todos os números de **Fibonacci** e, em seguida, verificar os números ímpares. Depois de obter os mais estranhos, você adicionará todos eles. O último número deve ser o número dado como um parâmetro se realmente for um número fora de Fibonacci.

#### Links Relevantes

*   [Número de Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Para obter o próximo número da série, você precisa adicionar o atual ao anterior e isso lhe dará o próximo.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Para verificar se um número é igual, tudo que você precisa verificar é se o `number % 2 == 0` .

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Ao obter o próximo ímpar, não se esqueça de adicioná-lo a uma variável global que possa ser retornada no final. `result += currNumber;` vai fazer o truque.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function sumFibs(num) { 
    var prevNumber = 0; 
    var currNumber = 1; 
    var result = 0; 
    while (currNumber <= num) { 
        if (currNumber % 2 !== 0) { 
            result += currNumber; 
        } 
 
        currNumber += prevNumber; 
        prevNumber = currNumber - prevNumber; 
    } 
 
    return result; 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLnV/0)

### Explicação do código:

*   Crie uma variável para manter o registro dos números atual e anterior junto com o resultado que será retornado.
*   Use um loop while para garantir que não ultrapassamos o número dado como parâmetro.
*   Usamos o módulo operando para verificar se o número atual é ímpar ou par. Se for par, adicione-o ao resultado.
*   Complete o círculo Fibonacci girando obtendo o próximo número e trocando valores depois.
*   Devolva o resultado.

#### Links Relevantes

*   JS while Loop

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function sumFibs(num) { 
    // Perform checks for the validity of the input 
    if (num < 0) return -1; 
    if (num === 0 || num === 1) return 1; 
 
    // Create an array of fib numbers till num 
    const arrFib = [1, 1]; 
    let nextFib = 0; 
 
    // We put the new Fibonacci numbers to the front so we 
    // don't need to calculate the length of the array on each 
    // iteration 
    while((nextFib = arrFib[0] + arrFib[1]) <= num) { 
        arrFib.unshift(nextFib); 
    } 
 
    // Sum only the odd numbers and return the value 
    return arrFib.reduce((acc, curr) => { 
        return acc + curr * (curr % 2); 
    }); 
 } 
 
 // test here 
 sumFibs(4); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/@kr3at0/SumAllOddFibonacciNumbers)

### Explicação do código:

*   Crie uma matriz de números de fibonacci até **num** .
*   Use o método `reduce()` para encontrar a soma dos membros ímpares da matriz.
*   Devolva a soma.

#### Links Relevantes

*   [Push de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [Protótipo JS Array Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.