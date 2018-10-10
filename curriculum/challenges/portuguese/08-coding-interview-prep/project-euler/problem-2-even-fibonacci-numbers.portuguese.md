---
id: 5900f36e1000cf542c50fe81
challengeType: 5
title: 'Problem 2: Even Fibonacci Numbers'
videoUrl: ''
localeTitle: 'Problema 2: Mesmo os números de Fibonacci'
---

## Description
<section id="description"> Cada novo termo na seqüência de Fibonacci é gerado adicionando os dois termos anteriores. Começando com 1 e 2, os primeiros 10 termos serão: <div style="text-align: center;"> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... </div> Ao considerar os termos na seqüência de Fibonacci cujos valores não excedem o termo <code>n</code> , encontre a soma dos termos de valor par. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fiboEvenSum(10)</code> deve retornar 188.
    testString: 'assert.strictEqual(fiboEvenSum(10), 188, "<code>fiboEvenSum(10)</code> should return 188.");'
  - text: <code>fiboEvenSum(23)</code> deve retornar 60696.
    testString: 'assert.strictEqual(fiboEvenSum(23), 60696, "<code>fiboEvenSum(23)</code> should return 60696.");'
  - text: <code>fiboEvenSum(43)</code> deve retornar 1485607536.
    testString: 'assert.strictEqual(fiboEvenSum(43), 1485607536, "<code>fiboEvenSum(43)</code> should return 1485607536.");'
  - text: Sua função não está retornando o resultado correto usando nossos valores de teste.
    testString: 'assert.strictEqual(fiboEvenSum(18), 3382, "Your function is not returning the correct result using our tests values.");'
  - text: Sua função deve retornar um valor <code>even</code> .
    testString: 'assert.equal(fiboEvenSum(31) % 2 === 0, true, "Your function should return an <code>even</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fiboEvenSum(n) {
  // You can do it!
  return true;
}

fiboEvenSum(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
