---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1
videoUrl: ''
localeTitle: Contando Cartões
---

## Description
<section id="description"> No jogo de cassino Blackjack, um jogador pode ganhar uma vantagem sobre a casa, mantendo o controle do número relativo de cartas altas e baixas remanescentes no baralho. Isso é chamado <a href="https://en.wikipedia.org/wiki/Card_counting" target="_blank">de contagem de cartão</a> . Ter mais cartas altas restantes no baralho favorece o jogador. Cada cartão recebe um valor de acordo com a tabela abaixo. Quando a contagem é positiva, o jogador deve apostar alto. Quando a contagem é zero ou negativa, o jogador deve apostar baixo. <table class="table table-striped"><thead><tr><th> Mudança de contagem </th><th> Postais </th></tr></thead><tbody><tr><td> +1 </td><td> 2, 3, 4, 5, 6 </td></tr><tr><td> 0 </td><td> 7, 8, 9 </td></tr><tr><td> -1 </td><td> 10, &#39;J&#39;, &#39;Q&#39;, &#39;K&#39;, &#39;A&#39; </td></tr></tbody></table> Você vai escrever uma função de contagem de cartões. Ele receberá um parâmetro de <code>card</code> , que pode ser um número ou uma sequência, e incrementará ou decrementará a variável de <code>count</code> global de acordo com o valor da carta (consulte a tabela). A função retornará uma string com a contagem atual e a string <code>Bet</code> se a contagem for positiva ou <code>Hold</code> se a contagem for zero ou negativa. A contagem atual e a decisão do jogador ( <code>Bet</code> ou <code>Hold</code> ) devem ser separadas por um único espaço. <strong>Exemplo de saída</strong> <br> <code>-3 Hold</code> <br> <code>5 Bet</code> <strong>dica de</strong> <code>5 Bet</code> <br> NÃO redefina a <code>count</code> para 0 quando o valor for 7, 8 ou 9. <br> NÃO retorne um array. <br> NÃO inclua aspas (simples ou dupla) na saída. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seqüência de Cartões 2, 3, 4, 5, 6 deve retornar <code>5 Bet</code>'
    testString: 'assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })(), "Cards Sequence 2, 3, 4, 5, 6 should return <code>5 Bet</code>");'
  - text: 'Seqüência de Cartões 7, 8, 9 deve retornar <code>0 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })(), "Cards Sequence 7, 8, 9 should return <code>0 Hold</code>");'
  - text: 'Seqüência de cartas 10, J, Q, K, A deve retornar <code>-5 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(10);cc("J");cc("Q");cc("K");var out = cc("A"); if(out === "-5 Hold") {return true;} return false; })(), "Cards Sequence 10, J, Q, K, A should return <code>-5 Hold</code>");'
  - text: 'Seqüência de Cartões 3, 7, Q, 8, A deve retornar <code>-1 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(3);cc(7);cc("Q");cc(8);var out = cc("A"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 7, Q, 8, A should return <code>-1 Hold</code>");'
  - text: 'Cartas Sequência 2, J, 9, 2, 7 devem retornar <code>1 Bet</code>'
    testString: 'assert((function(){ count = 0; cc(2);cc("J");cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, J, 9, 2, 7 should return <code>1 Bet</code>");'
  - text: 'Seqüência de Cartões 2, 2, 10 deve retornar <code>1 Bet</code>'
    testString: 'assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, 2, 10 should return <code>1 Bet</code>");'
  - text: 'Seqüência de cartas 3, 2, A, 10, K deve retornar <code>-1 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(3);cc(2);cc("A");cc(10);var out = cc("K"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 2, A, 10, K should return <code>-1 Hold</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
