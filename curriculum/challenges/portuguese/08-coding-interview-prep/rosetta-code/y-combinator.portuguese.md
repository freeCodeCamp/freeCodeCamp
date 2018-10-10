---
title: Y combinator
id: 594810f028c0303b75339ad5
challengeType: 5
videoUrl: ''
localeTitle: E combinador
---

## Description
<section id="description"><p> Na <a href="https://en.wikipedia.org/wiki/Functional programming" title="wp: programação funcional">programação funcional</a> estrita e no <a href="https://en.wikipedia.org/wiki/lambda calculus" title="wp: lambda calculus">cálculo lambda</a> , as funções (expressões lambda) não têm estado e só podem referir-se a argumentos de funções delimitadoras. Isso exclui a definição usual de uma função recursiva em que uma função é associada ao estado de uma variável e o estado dessa variável é usado no corpo da função. </p><p> O <a href="http://mvanier.livejournal.com/2897.html">combinador Y</a> é ele próprio uma função sem estado que, quando aplicada a outra função sem estado, retorna uma versão recursiva da função. O combinador Y é o mais simples da classe de tais funções, chamadas <a href="https://en.wikipedia.org/wiki/Fixed-point combinator" title="wp: combinador de ponto fixo">combinadores de ponto fixo</a> . </p> Tarefa: <pre> <code>Define the stateless Y combinator function and use it to compute &lt;a href=&quot;https://en.wikipedia.org/wiki/Factorial&quot; title=&quot;wp: factorial&quot;&gt;factorial&lt;/a&gt;.</code> </pre><p> <code>factorial(N)</code> já é dada a você. Veja também <a href="http://vimeo.com/45140590">Jim Weirich: Adventures in Functional Programming</a> . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Y deve retornar uma função
    testString: 'assert.equal(typeof Y(f => n => n), "function", "Y must return a function");'
  - text: fatorial (1) deve retornar 1.
    testString: 'assert.equal(factorial(1), 1, "factorial(1) must return 1.");'
  - text: fatorial (2) deve retornar 2.
    testString: 'assert.equal(factorial(2), 2, "factorial(2) must return 2.");'
  - text: fatorial (3) deve retornar 6.
    testString: 'assert.equal(factorial(3), 6, "factorial(3) must return 6.");'
  - text: fatorial (4) deve retornar 24.
    testString: 'assert.equal(factorial(4), 24, "factorial(4) must return 24.");'
  - text: fatorial (10) deve retornar 3628800.
    testString: 'assert.equal(factorial(10), 3628800, "factorial(10) must return 3628800.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Y(f) {
  return function() {
  // Good luck!
  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});

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
