---
id: 5900f4c51000cf542c50ffd7
challengeType: 5
title: 'Problem 344: Silver dollar game'
videoUrl: ''
localeTitle: 'Problema 344: Jogo do dólar de prata'
---

## Description
<section id="description"> Uma variante do jogo de dólar de prata de NG de Bruijn pode ser descrita da seguinte forma: <p> Numa faixa de quadrados, um número de moedas é colocado, no máximo, uma moeda por quadrado. Apenas uma moeda, chamada de dólar de prata, tem algum valor. Dois jogadores se revezam fazendo movimentos. Em cada turno, um jogador deve fazer um movimento regular ou especial. </p><p> Um movimento regular consiste em selecionar uma moeda e mover um ou mais quadrados para a esquerda. A moeda não pode sair da faixa ou saltar sobre ou sobre outra moeda. </p><p> Alternativamente, o jogador pode optar por fazer o movimento especial de embolsar a moeda mais à esquerda, em vez de fazer um movimento regular. Se nenhum movimento regular for possível, o jogador é forçado a embolsar a moeda mais à esquerda. </p><p> O vencedor é o jogador que embolsa o dólar de prata. </p><p> Uma configuração vencedora é um arranjo de moedas na tira onde o primeiro jogador pode forçar uma vitória, não importando o que o segundo jogador faça. </p><p> Seja W (n, c) o número de configurações vencedoras para uma faixa de n quadrados, c moedas sem valor e um dólar de prata. </p><p> Você é dado que W (10,2) = 324 e W (100,10) = 1514704946113500. </p><p> Encontre W (1 000 000, 100) módulo o semiprimo 1000 036 000 099 (= 1 000 003 1 000 033). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler344()</code> deve retornar 65579304332.
    testString: 'assert.strictEqual(euler344(), 65579304332, "<code>euler344()</code> should return 65579304332.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler344() {
  // Good luck!
  return true;
}

euler344();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
