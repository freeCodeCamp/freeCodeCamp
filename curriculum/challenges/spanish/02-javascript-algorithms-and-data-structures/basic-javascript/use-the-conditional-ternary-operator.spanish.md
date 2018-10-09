---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
localeTitle: Usar el Operador Condicional (Ternario)
challengeType: 1
---

## Description
<section id='description'>
El <dfn>operador condicional</dfn> , también llamado <dfn>operador ternario</dfn> , se puede usar como una expresión de una línea si-else.
La sintaxis es:
<code>condition ? statement-if-true : statement-if-false;</code>
La siguiente función utiliza una instrucción if-else para verificar una condición:
<blockquote>function findGreater(a, b) {<br>&nbsp;&nbsp;if(a > b) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "a is greater";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "b is greater";<br>&nbsp;&nbsp;}<br>}</blockquote>
Esto se puede reescribir usando el <code>conditional operator</code> :
<blockquote>function findGreater(a, b) {<br>&nbsp;&nbsp;return a > b ? "a is greater" : "b is greater";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Use el <code>conditional operator</code> en la función <code>checkEqual</code> para verificar si dos números son iguales o no. La función debe devolver verdadero o falso.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code> debe usar el <code>conditional operator</code>
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkEqual</code> should use the <code>conditional operator</code>");'
  - text: ' <code>checkEqual(1, 2)</code> debe devolver falso'
    testString: 'assert(checkEqual(1, 2) === false, "<code>checkEqual(1, 2)</code> should return false");'
  - text: ' <code>checkEqual(1, 1)</code> debe devolver verdadero'
    testString: 'assert(checkEqual(1, 1) === true, "<code>checkEqual(1, 1)</code> should return true");'
  - text: ' <code>checkEqual(1, -1)</code> debe devolver falso'
    testString: 'assert(checkEqual(1, -1) === false, "<code>checkEqual(1, -1)</code> should return false");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
