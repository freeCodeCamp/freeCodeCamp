---
title: Define a primitive data type
id: 597089c87eec450c68aa1643
challengeType: 5
videoUrl: ''
localeTitle: Definir um tipo de dados primitivo
---

## Description
<section id="description"> Tarefa: <p> Defina um tipo que se comporta como um inteiro, mas tem um valor válido mais baixo de 1 e um valor válido mais alto de 10. </p> Erros: Se você tentar instanciar um <code>Num</code> com um valor fora de 1 a 10, deverá lançar um erro <code>TypeError</code> com uma mensagem de erro <code>&#39;Out of range&#39;</code> . Se você tentar instanciar um <code>Num</code> com um valor que não seja um número, ele deve lançar um <code>TypeError</code> com uma mensagem de erro <code>&#39;Not a Number&#39;</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Num</code> deve ser uma função.
    testString: 'assert(typeof Num === "function", "<code>Num</code> should be a function.");'
  - text: <code>new Num(4)</code> deve retornar um objeto.
    testString: 'assert(typeof (new Num(4)) === "object", "<code>new Num(4)</code> should return an object.");'
  - text: '<code>new Num(\&#39;test\&#39;)</code> deve lançar um TypeError com a mensagem \ &#39;Not a Number \&#39;.'
    testString: 'assert(throws(() => new Num("test"), TypeError, "Not a Number"), "<code>new Num(\"test\")</code> should throw a TypeError with message \"Not a Number\".");'
  - text: '<code>new Num(0)</code> deve lançar um TypeError com mensagem \ &#39;Fora do alcance \&#39;.'
    testString: 'assert(throws(() => new Num(0), TypeError, "Out of range"), "<code>new Num(0)</code> should throw a TypeError with message \"Out of range\".");'
  - text: '<code>new Num(-5)</code> deve lançar um TypeError com a mensagem \ &#39;Fora do alcance \&#39;.'
    testString: 'assert(throws(() => new Num(-5), TypeError, "Out of range"), "<code>new Num(-5)</code> should throw a TypeError with message \"Out of range\".");'
  - text: '<code>new Num(10)</code> deve lançar um TypeError com mensagem \ &#39;Fora do alcance \&#39;.'
    testString: 'assert(throws(() => new Num(11), TypeError, "Out of range"), "<code>new Num(10)</code> should throw a TypeError with message \"Out of range\".");'
  - text: '<code>new Num(20)</code> deve lançar um TypeError com mensagem \ &#39;fora do alcance \&#39;.'
    testString: 'assert(throws(() => new Num(20), TypeError, "Out of range"), "<code>new Num(20)</code> should throw a TypeError with message \"Out of range\".");'
  - text: <code>new Num(3) + new Num(4)</code> deve ser igual a 7.
    testString: 'assert.equal(new Num(3) + new Num(4), 7, "<code>new Num(3) + new Num(4)</code> should equal 7.");'
  - text: <code>new Num(3) - new Num(4)</code> deve ser igual a -1.
    testString: 'assert.equal(new Num(3) - new Num(4), -1, "<code>new Num(3) - new Num(4)</code> should equal -1.");'
  - text: <code>new Num(3) * new Num(4)</code> deve ser igual a 12.
    testString: 'assert.equal(new Num(3) * new Num(4), 12, "<code>new Num(3) * new Num(4)</code> should equal 12.");'
  - text: <code>new Num(3) / new Num(4)</code> deve ser igual a 0.75.
    testString: 'assert.equal(new Num(3) / new Num(4), 0.75, "<code>new Num(3) / new Num(4)</code> should equal 0.75.");'
  - text: <code>new Num(3) &lt; new Num(4)</code> deve ser verdade.
    testString: 'assert(new Num(3) < new Num(4), "<code>new Num(3) < new Num(4)</code> should be true.");'
  - text: <code>new Num(3) &gt; new Num(4)</code> deve ser falso.
    testString: 'assert(!(new Num(3) > new Num(4)), "<code>new Num(3) > new Num(4)</code> should be false.");'
  - text: '<code>(new Num(5)).toString()</code> deve retornar \ &#39;5 \&#39;'
    testString: 'assert.equal((new Num(5)).toString(), "5", "<code>(new Num(5)).toString()</code> should return \"5\"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Num (n) {
  // Good luck!
  return n;
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
