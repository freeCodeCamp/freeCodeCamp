---
title: Factorialize a Number
localeTitle: Factorialize um número
---
![Recursão](//discourse-user-assets.s3.amazonaws.com/original/2X/d/dcf927a2e8c3beb7a9c28770153821982398bd99.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Retorna o fatorial do inteiro fornecido. Se o inteiro é representado com a letra n, um fatorial é o produto de todos os inteiros positivos menores ou iguais a n.

Os fatoriais são frequentemente representados com a notação abreviada n!

Por exemplo: `5! = 1 * 2 * 3 * 4 * 5 = 120`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Este começa facilmente desde `0! = 1` , então você pode ir em frente e simplesmente `return 1` lá.

Podemos usar isso como um `if` para quebrar o loop que vamos criar usando uma **função recursiva** . Ele irá verificar se o número que você deu a função é 0 (que seria o fim da sua cadeia de fatorial). Funções "terminam" quando retornam qualquer coisa. Na verdade, **todas as** funções sem uma instrução de `return` explícita retornarão `undefined` .

É também por isso que, em **vez** de ter _"terminado"_ , sempre se diz que uma função _"retornou"_ . E agora isso ...

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

**Noções básicas sobre recursão**

Recursão refere-se a uma função que se repete (chamando). Neste caso, estamos a voltar basicamente o número determinado (ou seja, 5), multiplicado pela função em si, mas desta vez o valor transmitido ao parâmetro _num_ é `num-1` (que se traduz, inicialmente a 4). A própria função vai **correr dentro de si mesmo** interessante, hein?

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

**Entendendo o fluxo**

O primeiro valor **retornado** pode ser melhor visualizado se você pensar nas operações de parênteses que fez na escola secundária, onde faz as contas dentro de todos os parênteses, de dentro para fora, colchetes e colchetes, até obter um resultado final (um total). Desta vez é a mesma coisa, olhe para o fluxo do programa:

### Durante a primeira execução da função:

\[ **num** = 5\]

5 é _igual_ a 1 ou 0? **Não** ---> Oki doki, vamos continuar ...

**Retorna:**

( **5** _(_ segunda execução\_: **4** \_ ( _terceira execução_ : **3** _(_ quarta execução\_: **2** \_ _quinta execução_ : **1** ))))

O que ele retorna pode ser visto como `(5*(4*(3*(2*1))))` ou apenas `5 * 4 * 3 * 2 * 1` , e a função retornará o resultado dessa operação: `120` . Agora, vamos verificar o que o resto das execuções fazem:

### Durante o resto das execuções:

**Segunda Execução** : _num_ = 5-1 = **4** -> é _num_ 0 ou 1? Não

\-> retorna a multiplicação entre 4 e o próximo resultado quando _num_ for agora 4-1.

**Terceira Execução** : _num_ = 4 - 1 = **3** -> é _num_ 0 ou 1? Não

\-> retorna a multiplicação entre 3 e o próximo resultado quando _num_ é agora 3-1.

**Quarta Execução** : _num_ = 3-1 = **2** -> é _num_ 0 ou 1? Não

\-> retorna a multiplicação entre 2 e o próximo resultado quando _num_ é agora 2-1.

**Quinta execução** : _num_ = 2-1 = **1** -> é _num_ 0 ou 1? Sim

\-> retorno **1** . E é aí que a recursão pára porque não há mais execuções.

Consegui? ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 ":piscadela:")

> _tente resolver o problema agora_

#### Links Relevantes

*   [Funções JS](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [Recursão em JS](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução de Código:
```
function factorialize(num) { 
  if (num === 0) { return 1; } 
  return num * factorialize(num-1); 
 } 
 
 factorialize(5); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLjU/1)

## Explicação do código:

Observe na primeira linha que temos a condição terminal, isto é, uma condição para verificar o final da recursão. Se `num == 0` , então retornamos 1, ou seja, finalizando efetivamente a recursão e informando a pilha para propagar esse valor para os níveis superiores. Se não tivermos essa condição, a recursão continuará até que o espaço da pilha seja consumido, resultando em um [estouro de pilha](https://en.wikipedia.org/wiki/Stack_overflow) .

### Links Relevantes

*   [Recursão](https://www.codecademy.com/en/courses/javascript-lesson-205/0/1)
*   [Factorialization](https://en.wikipedia.org/wiki/Factorial)
*   [Operadores aritméticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.