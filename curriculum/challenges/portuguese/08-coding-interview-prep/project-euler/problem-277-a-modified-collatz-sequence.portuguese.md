---
id: 5900f4811000cf542c50ff94
challengeType: 5
title: 'Problem 277: A Modified Collatz sequence'
videoUrl: ''
localeTitle: 'Problema 277: Uma sequência de Collatz modificada'
---

## Description
<section id="description"> Uma sequência Collatz modificada de inteiros é obtida a partir de um valor inicial a1 da seguinte maneira: <p> an + 1 = an / 3 se an é divisível por 3. Vamos denotar isto como um grande passo descendente, &quot;D&quot;. </p><p> an + 1 = (4an + 2) / 3 se um dividido por 3 der um resto de 1. Denotaremos isso como um passo para cima, &quot;U&quot;. </p><p> an + 1 = (2an - 1) / 3 se um dividido por 3 der um resto de 2. Denotaremos isso como um pequeno passo descendente, &quot;d&quot;. </p><p> A sequência termina quando alguns an = 1. </p><p> Dado qualquer inteiro, podemos listar a seqüência de etapas. Por exemplo, se a1 = 231, então a sequência {an} = {231,77,51,17,11,7,10,14,9,3,1} corresponde às etapas &quot;DdDddUUdDD&quot;. </p><p> Claro, existem outras sequências que começam com a mesma sequência &quot;DdDddUUdDD ....&quot;. Por exemplo, se a1 = 1004064, a sequência é DdDddUUdDDDdUDUUUdDdUUDDDUdDD. De fato, 1004064 é o menor possível a1&gt; 106 que começa com a seqüência DdDddUUdDD. </p><p> Qual é o menor a1&gt; 1015 que começa com a sequência &quot;UDDDUdddDDUDDddDdDddDDUDDdUUDd&quot;? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler277()</code> deve retornar 1125977393124310.
    testString: 'assert.strictEqual(euler277(), 1125977393124310, "<code>euler277()</code> should return 1125977393124310.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler277() {
  // Good luck!
  return true;
}

euler277();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
