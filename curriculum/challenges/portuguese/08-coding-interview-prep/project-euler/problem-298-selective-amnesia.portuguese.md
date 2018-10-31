---
id: 5900f4971000cf542c50ffa9
challengeType: 5
title: 'Problem 298: Selective Amnesia'
videoUrl: ''
localeTitle: 'Problema 298: Amnésia Seletiva'
---

## Description
<section id="description"> Larry e Robin jogam um jogo de memória envolvendo uma sequência de números aleatórios entre 1 e 10, inclusive, que são chamados um de cada vez. Cada jogador pode lembrar até 5 números anteriores. Quando o número chamado está na memória de um jogador, esse jogador recebe um ponto. Se não for, o jogador adiciona o número chamado à sua memória, removendo outro número se a memória estiver cheia. <p> Ambos os jogadores começam com memórias vazias. Ambos os jogadores sempre adicionam novos números perdidos à sua memória, mas usam uma estratégia diferente para decidir qual número remover: a estratégia de Larry é remover o número que não foi chamado no maior tempo. A estratégia de Robin é remover o número que está na memória há mais tempo. </p><p> Exemplo de jogo: Turn Callednumber Larry&#39;smemory Larry&#39;sscore Robin&#39;smemory Robin&#39;sscore 1 1 1 0 1 0 2 2 1,2 0 1,2 0 3 4 1,2,4 0 1,2,4 0 4 6 1 , 2,4,6 0 1,2,4,6 0 5 1 1,2,4,6 1 1,2,4,6 1 6 8 1,2,4,6,8 1 1,2,4 6,8 1 7 10 1,4,6,8,10 1 2,4,6,8,10 1 8 2 1,2,6,8,10 1 2,4,6,8,10 2 9 4 1,2,4,8,10 1 2,4,6,8,10 3 10 1 1,2,4,8,10 2 1,4,6,8,10 3 </p><p> Denotando a pontuação de Larry pela pontuação de L e Robin por R, qual é o valor esperado de | LR | depois de 50 turnos? Dê sua resposta arredondada para oito casas decimais usando o formato x.xxxxxxxx. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler298()</code> deve retornar 1.76882294.
    testString: 'assert.strictEqual(euler298(), 1.76882294, "<code>euler298()</code> should return 1.76882294.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler298() {
  // Good luck!
  return true;
}

euler298();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
