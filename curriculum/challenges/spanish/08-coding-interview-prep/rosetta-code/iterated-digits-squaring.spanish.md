---
title: Iterated digits squaring
id: 5a23c84252665b21eecc7ec1
challengeType: 5
videoUrl: ''
localeTitle: Dígitos iterados en cuadratura
---

## Description
<section id="description"> Si agrega el cuadrado de los dígitos de un número natural (un entero más grande que cero), siempre termina con 1 u 89: <pre> 15 -&gt; 26 -&gt; 40 -&gt; 16 -&gt; 37 -&gt; 58 -&gt; 89
7 -&gt; 49 -&gt; 97 -&gt; 130 -&gt; 10 -&gt; 1 </pre> Escriba una función que tome un número como parámetro y devuelva 1 u 89 después de realizar el proceso mencionado. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>iteratedSquare</code> debería ser una función.
    testString: 'assert(typeof iteratedSquare=="function","<code>iteratedSquare</code> should be a function.");'
  - text: <code>iteratedSquare(4)</code> debe devolver un número.
    testString: 'assert(typeof iteratedSquare(4)=="number","<code>iteratedSquare(4)</code> should return a number.");'
  - text: <code>iteratedSquare(4)</code> debe devolver <code>89</code> .
    testString: 'assert.equal(iteratedSquare(4),89,"<code>iteratedSquare(4)</code> should return <code>89</code>.");'
  - text: <code>iteratedSquare(7)</code> debe devolver <code>1</code> .
    testString: 'assert.equal(iteratedSquare(7),1,"<code>iteratedSquare(7)</code> should return <code>1</code>.");'
  - text: <code>iteratedSquare(15)</code> debe devolver <code>89</code> .
    testString: 'assert.equal(iteratedSquare(15),89,"<code>iteratedSquare(15)</code> should return <code>89</code>.");'
  - text: <code>iteratedSquare(20)</code> debe devolver <code>89</code> .
    testString: 'assert.equal(iteratedSquare(20),89,"<code>iteratedSquare(20)</code> should return <code>89</code>.");'
  - text: <code>iteratedSquare(70)</code> debe devolver <code>1</code> .
    testString: 'assert.equal(iteratedSquare(70),1,"<code>iteratedSquare(70)</code> should return <code>1</code>.");'
  - text: <code>iteratedSquare(100)</code> debe devolver <code>1</code> .
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
