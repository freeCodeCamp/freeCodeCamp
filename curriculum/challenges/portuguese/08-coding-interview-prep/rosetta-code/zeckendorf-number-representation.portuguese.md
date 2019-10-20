---
title: Zeckendorf number representation
id: 594810f028c0303b75339ad6
challengeType: 5
videoUrl: ''
localeTitle: Assinale a representação do número da aldeia
---

## Description
<section id="description"><p> Assim como os números podem ser representados em uma notação posicional como somas de múltiplos dos poderes de dez (decimal) ou dois (binário); todos os inteiros positivos podem ser representados como a soma de um ou zero vezes os membros distintos da série de Fibonacci. </p><p> Lembre-se de que os primeiros seis números distintos de Fibonacci são: <code>1, 2, 3, 5, 8, 13</code> . O número decimal onze pode ser escrito como <code>0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1</code> ou <code>010100</code> na notação posicional, onde as colunas representam a multiplicação por um membro particular da sequência. Zeros à esquerda são descartados de modo que 11 decimal se torna <code>10100</code> . </p><p> 10100 não é a única maneira de fazer 11 dos números de Fibonacci, no entanto <code>0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1</code> ou 010011 também representaria decimal 11. Para um número Zeckendorf verdadeiro existe a restrição adicional de que &quot;não podem ser usados ​​dois números consecutivos de Fibonacci&quot;, o que leva à antiga solução única. </p><p> Tarefa: Escreva uma função que gere e retorne uma matriz dos primeiros números do N Zeckendorf em ordem. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: zeckendorf deve ser função
    testString: 'assert.equal(typeof zeckendorf, "function", "zeckendorf must be function");'
  - text: Sua função <code>zeckendorf</code> deve retornar a resposta correta
    testString: 'assert.deepEqual(answer, solution20, "Your <code>zeckendorf</code> function should return the correct answer");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeckendorf(n) {
  // good luck!
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
