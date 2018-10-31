---
title: Harshad or Niven series
id: 595668ca4cfe1af2fb9818d4
challengeType: 5
videoUrl: ''
localeTitle: Série Harshad ou Niven
---

## Description
<section id="description"><p> Os números de <a href="http://mathworld.wolfram.com/HarshadNumber.html" title="link: http://mathworld.wolfram.com/HarshadNumber.html">Harshad</a> ou Niven são inteiros positivos ≥ 1 que são divisíveis pela soma de seus dígitos. </p><p> Por exemplo, 42 é um <a href="http://rosettacode.org/wiki/oeis:A005349" title="oeis: A005349">número de Harshad,</a> pois 42 é divisível por (4 + 2) sem resto. </p> Suponha que a série seja definida como os números em ordem crescente. Tarefa: <p> Implemente uma função para gerar membros sucessivos da sequência de Harshad. </p><p> Use-o para listar os primeiros vinte membros da sequência e listar o primeiro número de Harshad maior que 1000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isHarshadOrNiven</code> é uma função.
    testString: 'assert(typeof isHarshadOrNiven === "function", "<code>isHarshadOrNiven</code> is a function.");'
  - text: '<code>isHarshadOrNiven()</code> deve retornar <code>{&quot;firstTwenty&quot;: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],&quot;firstOver1000&quot;: 1002}</code>'
    testString: 'assert.deepEqual(isHarshadOrNiven(), res, "<code>isHarshadOrNiven()</code> should return <code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isHarshadOrNiven () {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line

  return res;
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
