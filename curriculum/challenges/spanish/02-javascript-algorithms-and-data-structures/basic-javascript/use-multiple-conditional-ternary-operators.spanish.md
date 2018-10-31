---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
videoUrl: ''
localeTitle: Usar múltiples operadores condicionales (ternarios)
---

## Description
<section id="description"> En el desafío anterior, usaste un solo <code>conditional operator</code> . También puede encadenarlos para verificar múltiples condiciones. La siguiente función usa las declaraciones if, else if, y else para verificar múltiples condiciones: <blockquote> función findGreaterOrEqual (a, b) { <br> si (a === b) { <br> devuelve &quot;a y b son iguales&quot;; <br> } <br> si no (a&gt; b) { <br> devuelve &quot;a es mayor&quot;; <br> } <br> else { <br> el retorno &quot;b es mayor&quot;; <br> } <br> } </blockquote> La función anterior se puede reescribir utilizando múltiples <code>conditional operators</code> : <blockquote> función findGreaterOrEqual (a, b) { <br> retorno (a === b)? &quot;a y b son iguales&quot;: (a&gt; b)? &quot;a es mayor&quot;: &quot;b es mayor&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Use múltiples <code>conditional operators</code> en la función <code>checkSign</code> para verificar si un número es positivo, negativo o cero. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSign</code> debe usar múltiples <code>conditional operators</code>
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkSign</code> should use multiple <code>conditional operators</code>");'
  - text: <code>checkSign(10)</code> debe devolver &quot;positivo&quot;. Tenga en cuenta que la capitalización importa
    testString: 'assert(checkSign(10) === "positive", "<code>checkSign(10)</code> should return "positive". Note that capitalization matters");'
  - text: <code>checkSign(-12)</code> debe devolver &quot;negativo&quot;. Tenga en cuenta que la capitalización importa
    testString: 'assert(checkSign(-12) === "negative", "<code>checkSign(-12)</code> should return "negative". Note that capitalization matters");'
  - text: <code>checkSign(0)</code> debe devolver &quot;cero&quot;. Tenga en cuenta que la capitalización importa
    testString: 'assert(checkSign(0) === "zero", "<code>checkSign(0)</code> should return "zero". Note that capitalization matters");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSign(num) {

}

checkSign(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
