---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Gerar frações aleatórias com JavaScript
---

## Description
<section id="description"> Números aleatórios são úteis para criar um comportamento aleatório. JavaScript tem uma função <code>Math.random()</code> que gera um número decimal aleatório entre <code>0</code> (inclusive) e não chega a <code>1</code> (exclusivo). Assim <code>Math.random()</code> pode retornar um <code>0</code> mas nunca retorna um <code>1</code> <strong>Nota</strong> <br> Assim como <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">Armazenando Valores com o Operador Igual</a> , todas as chamadas de função serão resolvidas antes que o <code>return</code> executado, para que possamos <code>return</code> o valor da função <code>Math.random()</code> . </section>

## Instructions
<section id="instructions"> Altere <code>randomFraction</code> para retornar um número aleatório em vez de retornar <code>0</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomFraction</code> deve retornar um número aleatório.
    testString: 'assert(typeof randomFraction() === "number", "<code>randomFraction</code> should return a random number.");'
  - text: O número retornado por <code>randomFraction</code> deve ser um decimal.
    testString: 'assert((randomFraction()+""). match(/\./g), "The number returned by <code>randomFraction</code> should be a decimal.");'
  - text: Você deve estar usando <code>Math.random</code> para gerar o número decimal aleatório.
    testString: 'assert(code.match(/Math\.random/g).length >= 0, "You should be using <code>Math.random</code> to generate the random decimal number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function randomFraction() {

  // Only change code below this line.

  return 0;

  // Only change code above this line.
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
