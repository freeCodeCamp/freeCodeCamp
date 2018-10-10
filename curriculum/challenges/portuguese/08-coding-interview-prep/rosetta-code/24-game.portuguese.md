---
title: 24 game
id: 5951e88f64ebf159166a1176
challengeType: 5
videoUrl: ''
localeTitle: 24 jogo
---

## Description
<section id="description"><p> Implemente uma função que tenha uma sequência de quatro dígitos como argumento, com cada dígito de 1 ──► 9 (inclusive) com repetições permitidas e retorne uma expressão aritmética que avalie o número 24. Se essa solução não existir, retorne &quot; nenhuma solução existe. &quot; </p><p> Regras: </p> Somente os seguintes operadores / funções são permitidos: multiplicação, divisão, adição, subtração A divisão deve usar ponto flutuante ou aritmética racional, etc, para preservar os remanescentes. Formar vários números de dígitos a partir dos dígitos fornecidos não é permitido. (Então, uma resposta de 12 + 12 quando dado 1, 2, 2 e 1 está errado). A ordem dos dígitos quando fornecidos não precisa ser preservada. <p> Exemplo de entradas: </p> <code>solve24(&quot;4878&quot;);</code> <code>solve24(&quot;1234&quot;);</code> <code>solve24(&quot;6789&quot;);</code> <code>solve24(&quot;1127&quot;);</code> <p> Exemplo de saídas (strings): </p> <code>(7-8/8)*4</code> <code>3*1*4*2</code> <code>(6*8)/(9-7)</code> <code>(1+7)*(2+1)</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>solve24</code> é uma função.
    testString: 'assert(typeof solve24 === "function", "<code>solve24</code> is a function.");'
  - text: <code>solve24(&quot;4878&quot;)</code> deve retornar <code>(7-8/8)*4</code> ou <code>4*(7-8/8)</code>
    testString: 'assert(include(answers[0], solve24(testCases[0])), "<code>solve24("4878")</code> should return <code>(7-8/8)*4</code> or <code>4*(7-8/8)</code>");'
  - text: <code>solve24(&quot;1234&quot;)</code> deve retornar qualquer arranjo de <code>1*2*3*4</code>
    testString: 'assert(include(answers[1], solve24(testCases[1])), "<code>solve24("1234")</code> should return any arrangement of <code>1*2*3*4</code>");'
  - text: <code>solve24(&quot;6789&quot;)</code> deve retornar <code>(6*8)/(9-7)</code> ou <code>(8*6)/(9-7)</code>
    testString: 'assert(include(answers[2], solve24(testCases[2])), "<code>solve24("6789")</code> should return <code>(6*8)/(9-7)</code> or <code>(8*6)/(9-7)</code>");'
  - text: <code>solve24(&quot;1127&quot;)</code> deve retornar uma permutação de <code>(1+7)*(1*2)</code>
    testString: 'assert(include(answers[3], solve24(testCases[3])), "<code>solve24("1127")</code> should return a permutation of <code>(1+7)*(1*2)</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function solve24 (numStr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
