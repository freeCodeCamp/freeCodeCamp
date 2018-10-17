---
title: Counting Cards
localeTitle: Contando Cartões
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

No jogo de cassino **Blackjack** , um jogador pode ganhar uma vantagem sobre a casa, mantendo o controle do número relativo de cartas altas e baixas remanescentes no baralho. Isso é chamado de contagem de cartas.

Ter mais cartas altas restantes no baralho favorece o jogador. Cada cartão recebe um valor de acordo com a tabela abaixo. Quando a contagem é positiva, o jogador deve apostar alto. Quando a contagem é zero ou negativa, o jogador deve apostar baixo.

Valor | Postais  
\----- | : -------------------:  
+1 | 2, 3, 4, 5, 6  
0 | 7, 8, 9  
\-1 | 10, 'J', 'Q', 'K', 'A'

Você vai escrever uma função de contagem de cartões. Ele receberá um parâmetro de **cartão** e incrementará ou decrementará a variável de **contagem** global de acordo com o valor do cartão (consulte a tabela). A função retornará uma string com a contagem atual e a string `Bet` se a contagem for positiva ou `Hold` se a contagem for zero ou negativa. A contagem atual e a decisão do jogador ( `Bet` ou `Hold` ) devem ser separadas por um único espaço.

*   Altere o código abaixo `// Only change code below this line` e até `// Only change code above this line`
*   Certifique-se de que você está editando o interior da função `cc` .
*   Use o que você aprendeu para verificar o valor de cada parâmetro de **cartão** passado para a função.
*   Mantenha uma contagem desse número.
*   Se a contagem final for 1 ou maior, retorne **\# Hold** .
*   Se a contagem final for 0 ou menos, retorne **\# Aposta** .

**Exemplo de Saída:**

*   \-3 espera
*   5 Aposta

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Use uma instrução `switch` (ou `else if` ) para contar o valor de cada cartão.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Adicionar / subtrair o valor de cada cartão para **contagem de** variáveis. Se a carta valer 0, não faça nada.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Depois de contar os cards, use uma instrução `if` para verificar o valor da **contagem** . Além disso, certifique-se de que seu `return` tenha um espaço entre o número e a string.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function cc(card) { 
      // Only change code below this line 
      switch(card){ 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: 
          count++; 
          break; 
        case 10: 
        case "J": 
        case "Q": 
        case "K": 
        case "A": 
          count--; 
          break; 
      } 
      if (count > 0){ 
        return count + " Bet"; 
      } else { 
        return count + " Hold"; 
      } 
      // Only change code above this line 
    } 
```

### Explicação do código:

*   Verifique o valor de cada cartão por meio de uma instrução `switch` .
*   A **contagem** variável:
    *   Aumenta em 1 se o cartão for 2, 3, 4, 5 ou 6.
    *   Já que 7, 8 e 9 não valem nada, nós os ignoramos em nossa instrução `switch` .
    *   Diminui em 1 se o cartão for um 10, 'J', 'Q', 'K' ou 'A'.
*   Verifique o valor da **contagem** e retorne a resposta apropriada.

**Exemplo de Execução**

*   `cc(2);` corre.
*   A instrução `switch` atinge o `case 2` , desce e adiciona 1 à `count` variáveis.
*   A instrução `switch` , em seguida, atinge a `break` e `cc(3);` corre.
*   Este ciclo continua até que a chamada final seja feita, `cc('A');` .
*   Após o `switch` declaração, o `if` instrução verifica `count` , que é agora a 0.
*   Isso então cai para a instrução `else` , que retornará **0 Hold** .

**_Nota_** : Como mencionado anteriormente, a instrução `switch` também poderia ter sido uma instrução `else if` .

## Solução de código adicional:

```javascript
function cc(card) { 
  // Only change code below this line 
  var regex = /[JQKA]/; 
  if (card > 1 && card < 7){count++;} 
  else if (card === 10 || String(card).match(regex)){count--;} 
 
  if (count > 0) return count + " Bet"; 
  return count + " Hold"; 
 
  // Only change code above this line 
 } 
```

· Executar código no [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Counting-cards)

### Explicação de código

· A função primeiro avalia `if` a `card` condição é um valor maior que `1` e menor que `7` , em cujo caso a `count` é incrementada em um. · Então, se a carta é `10` ou superior, diminui a `count` por um. · A variável `regex` é uma [expressão regular que](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) representa valores (letras) para as cartas mais altas. · A instrução `else` verifica esses valores com o `|| (logical OR)` operador `|| (logical OR)` ; primeiro para `10` e depois para qualquer string que corresponda à expressão regular usando [String.match ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) .

#### Recursos

*   [Contagem de cartas na Wikipedia](https://en.wikipedia.org/wiki/Card_counting)
*   [Desafio: Selecionando entre muitas opções com instruções de troca](http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements)
*   [Desafio: Encadeamento Se Mais Declarações](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [Desafio: Incrementar um número com Javascript](http://www.freecodecamp.com/challenges/increment-a-number-with-javascript)