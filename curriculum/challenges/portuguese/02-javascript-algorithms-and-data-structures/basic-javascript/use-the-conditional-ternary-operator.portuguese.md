---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
videoUrl: ''
localeTitle: Use o operador condicional (ternário)
---

## Description
<section id="description"> O <dfn>operador condicional</dfn> , também chamado de <dfn>operador ternário</dfn> , pode ser usado como uma expressão if-else de uma linha. A sintaxe é: <code>condition ? statement-if-true : statement-if-false;</code> A função a seguir usa uma instrução if-else para verificar uma condição: <blockquote> function findGreater (a, b) { <br> if (a&gt; b) { <br> return &quot;a é maior&quot;; <br> } <br> outro { <br> return &quot;b é maior&quot;; <br> } <br> } </blockquote> Isso pode ser reescrito usando o <code>conditional operator</code> : <blockquote> function findGreater (a, b) { <br> devolve a&gt; b? &quot;a é maior&quot;: &quot;b é maior&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Use o <code>conditional operator</code> na função <code>checkEqual</code> para verificar se dois números são iguais ou não. A função deve retornar true ou false. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code> deve usar o <code>conditional operator</code>
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkEqual</code> should use the <code>conditional operator</code>");'
  - text: '<code>checkEqual(1, 2)</code> deve retornar false'
    testString: 'assert(checkEqual(1, 2) === false, "<code>checkEqual(1, 2)</code> should return false");'
  - text: '<code>checkEqual(1, 1)</code> deve retornar true'
    testString: 'assert(checkEqual(1, 1) === true, "<code>checkEqual(1, 1)</code> should return true");'
  - text: '<code>checkEqual(1, -1)</code> deve retornar false'
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
