---
title: Sum All Numbers in a Range
localeTitle: Soma todos os números em um intervalo
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Você precisa criar um programa que terá uma matriz de dois números que não estão necessariamente em ordem e, em seguida, adicione não apenas esses números, mas quaisquer números entre eles. Por exemplo, \[3,1\] será o mesmo que `1+2+3` e não apenas `3+1`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Use `Math.max()` para encontrar o valor máximo de dois números.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Use `Math.min()` para encontrar o valor mínimo de dois números.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Lembre-se de que você deve adicionar todos os números entre eles, o que exigiria uma maneira de obter esses números.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function sumAll(arr) { 
    var max = Math.max(arr[0], arr[1]); 
    var min = Math.min(arr[0], arr[1]); 
    var temp = 0; 
    for (var i=min; i <= max; i++){ 
        temp += i; 
    } 
  return(temp); 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLm6/0)

### Explicação do código:

*   Primeiro crie uma variável para armazenar o número máximo entre dois.
*   O mesmo que antes para o menor número.
*   Criamos uma variável temporária para adicionar os números.

Como os números podem não estar sempre em ordem, usar `max()` e `min()` ajudará a organizar.

#### Links Relevantes

*   [Math.max ()](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [Math.min ()](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   [For Loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function sumAll(arr) { 
  // Buckle up everything to one! 
 
  // Using ES6 arrow function (one-liner) 
  var sortedArr = arr.sort((a,b) => ab); 
  var firstNum = arr[0]; 
  var lastNum = arr[1]; 
  // Using Arithmetic Progression summing formula 
 
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2; 
  return sum; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLm7/0)

### Explicação do código:

*   Primeiramente, criamos uma variável chamada `sortedArr` que a classifica do menor para o maior valor.
*   `firstNum` é igual ao primeiro número e `lastNum` é igual ao segundo número.
*   Em seguida, usando a fórmula de soma de Progressão Aritmética, deixamos a `sum` igual `(lastNum - firstNum + 1) * (firstNum + lastNum) / 2` .
*   Finalmente, retornamos a `sum` .

A linha `var sortedArr = arr.sort((a,b) => ab);` é provavelmente o que te deixará mais confuso. Isso seria o mesmo que criar uma função que retorna `ab` para o `sort()` que é a maneira padrão de classificar os números do menor para o maior. Em vez disso, usando a função de seta ou seta de gordura, somos capazes de fazer tudo isso em uma única linha, permitindo-nos escrever menos.

#### Links Relevantes

*   [Array.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [Fórmula de soma de progressão aritmética](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
*   [Função de seta ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function sumAll(arr) { 
    var sum = 0; 
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){ 
        sum += i; 
    } 
  return sum; 
 } 
 
 sumAll([1, 4]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLm8/0)

### Explicação do código:

*   Criando uma soma variável para armazenar a soma dos elementos.
*   Iniciando a iteração do loop a partir do elemento min do array dado e parando quando ele atinge o elemento max.
*   Usar um operador de dispersão (… arr) permite passar a matriz real à função em vez de elementos um por um.

#### Links Relevantes

*   [Operador de spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [Usando o Operador de Spread em Math.max ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.