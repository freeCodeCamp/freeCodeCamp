---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
localeTitle: Usar múltiples operadores condicionales (ternarios)
challengeType: 1
---

## Description
<section id='description'> 
En el desafío anterior, usaste un solo <code>conditional operator</code> . También puede encadenarlos para verificar múltiples condiciones. 
La siguiente función usa las declaraciones if, else if, y else para verificar múltiples condiciones: 
<blockquote>function findGreaterOrEqual(a, b) {<br>&nbsp;&nbsp;if(a === b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a and b are equal";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else if(a > b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a is greater";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "b is greater";<br>&nbsp;&nbsp;}<br>}</blockquote> 
La función anterior puede reescribirse utilizando múltiples <code>conditional operators</code> : 
<blockquote>function findGreaterOrEqual(a, b) {<br>&nbsp;&nbsp;return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Use múltiples <code>conditional operators</code> en la función <code>checkSign</code> para verificar si un número es positivo, negativo o cero. 
</section>

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
