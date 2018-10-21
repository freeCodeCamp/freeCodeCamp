---
title: Stand in Line
localeTitle: Ficar na fila
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Na Ciência da Computação, uma _fila_ é uma **estrutura de dados** abstrata em que os itens são mantidos em ordem. Novos itens podem ser adicionados na parte de trás da **fila** e itens antigos são retirados da frente da **fila** .

Escreva uma função `nextInLine` que recebe um array ( **arr** ) e um número ( **item** ) como argumentos. Adicione o número ao final da matriz e remova o primeiro elemento da matriz. A função `nextInLine` deve então retornar o elemento que foi removido.

*   Altere o código abaixo `//Your Code here` e até `//Change this line` .
*   Verifique se você está editando o interior da função `nextInLine` .
*   Use uma função de matriz que você aprendeu a adicionar o **item** ao final da matriz **arr** .
*   Use uma função de matriz que você aprendeu a remover o primeiro elemento da matriz **arr** .
*   Retorna o elemento removido.

#### Links Relevantes

*   [Desafio: manipular matrizes com push ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-push)
*   [Desafio: Manipular Arrays Com Shift ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift)
*   [Desafio: passando valores para funções com argumentos](http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

O método `push()` adiciona um item ao final de um array.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

O método `shift()` remove o primeiro elemento de uma matriz. Também retorna o elemento removido.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

A função `nextInLine` usa **arr** e **item** . Esses são os testes que serão usados ​​para transmitir os elementos da matriz com os quais eles testarão. Permite que a função seja reutilizável. Não codifique qualquer um dos testes dentro da função.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function nextInLine(arr, item) { 
  // Your code here 
  arr.push(item); 
  var removed = arr.shift(); 
  return removed;  // Change this line 
 } 
```

### Explicação do código:

*   Empurrar **item** no final do **arr** .
*   Chame o método `shift()` na **arr** para obter o primeiro item e armazene-o em **removido** .
*   Retornar **removido** .

**Exemplo de Execução**

*   Teste `nextInLine([2,1]);` corre.
*   A função `nextInLine` é chamada. **arr** se torna \[2\]. **item** se torna 1.
*   `arr.push(item);` Empurra de 1 a \[2\]. Então **arr** é agora \[2,1\].
*   `var removed = arr.shift();` remove o primeiro elemento. Então **arr** é agora \[1\]. 2 foi removido e é armazenado em **removido** .
*   `return removed;` 2 é retornado.

**_Nota_** : Você não precisa realmente da variável **removida** . O elemento removido pode ser retornado diretamente usando o `return arr.shift();` .