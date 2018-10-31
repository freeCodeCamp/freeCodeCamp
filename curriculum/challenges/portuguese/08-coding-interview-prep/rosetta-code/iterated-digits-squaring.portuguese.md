---
title: Iterated digits squaring
id: 5a23c84252665b21eecc7ec1
challengeType: 5
videoUrl: ''
localeTitle: Dígitos iterados em quadratura
---

## Description
<section id="description"> Se você adicionar o quadrado dos dígitos de um número Natural (um número inteiro maior que zero), você sempre terminará com 1 ou 89: <pre> 15 -&gt; 26 -&gt; 40 -&gt; 16 -&gt; 37 -&gt; 58 -&gt; 89
7 -&gt; 49 -&gt; 97 -&gt; 130 -&gt; 10 -&gt; 1 </pre> Escreva uma função que use um número como parâmetro e retorne 1 ou 89 depois de executar o processo mencionado. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>iteratedSquare</code> deve ser uma função.
    testString: 'assert(typeof iteratedSquare=="function","<code>iteratedSquare</code> should be a function.");'
  - text: <code>iteratedSquare(4)</code> deve retornar um número.
    testString: 'assert(typeof iteratedSquare(4)=="number","<code>iteratedSquare(4)</code> should return a number.");'
  - text: <code>iteratedSquare(4)</code> deve retornar <code>89</code> .
    testString: 'assert.equal(iteratedSquare(4),89,"<code>iteratedSquare(4)</code> should return <code>89</code>.");'
  - text: <code>iteratedSquare(7)</code> deve retornar <code>1</code> .
    testString: 'assert.equal(iteratedSquare(7),1,"<code>iteratedSquare(7)</code> should return <code>1</code>.");'
  - text: <code>iteratedSquare(15)</code> deve retornar <code>89</code> .
    testString: 'assert.equal(iteratedSquare(15),89,"<code>iteratedSquare(15)</code> should return <code>89</code>.");'
  - text: <code>iteratedSquare(20)</code> deve retornar <code>89</code> .
    testString: 'assert.equal(iteratedSquare(20),89,"<code>iteratedSquare(20)</code> should return <code>89</code>.");'
  - text: <code>iteratedSquare(70)</code> deve retornar <code>1</code> .
    testString: 'assert.equal(iteratedSquare(70),1,"<code>iteratedSquare(70)</code> should return <code>1</code>.");'
  - text: <code>iteratedSquare(100)</code> deve retornar <code>1</code> .
    testString: 'assert.equal(iteratedSquare(100),1,"<code>iteratedSquare(100)</code> should return <code>1</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function iteratedSquare (n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
