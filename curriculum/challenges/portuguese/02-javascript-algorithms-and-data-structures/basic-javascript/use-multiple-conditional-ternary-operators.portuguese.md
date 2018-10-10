---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
videoUrl: ''
localeTitle: Use vários operadores condicionais (ternários)
---

## Description
<section id="description"> No desafio anterior, você usou um único <code>conditional operator</code> . Você também pode encadeá-los para verificar várias condições. A função a seguir usa if, else if e else para verificar várias condições: <blockquote> function findGreaterOrEqual (a, b) { <br> if (a === b) { <br> return &quot;aeb são iguais&quot;; <br> } <br> mais se (a&gt; b) { <br> return &quot;a é maior&quot;; <br> } <br> outro { <br> return &quot;b é maior&quot;; <br> } <br> } </blockquote> A função acima pode ser reescrita usando múltiplos <code>conditional operators</code> : <blockquote> function findGreaterOrEqual (a, b) { <br> retorno (a == b)? &quot;aeb são iguais&quot;: (a&gt; b)? &quot;a é maior&quot;: &quot;b é maior&quot;; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Use vários <code>conditional operators</code> na função <code>checkSign</code> para verificar se um número é positivo, negativo ou zero. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSign</code> deve usar vários <code>conditional operators</code>
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkSign</code> should use multiple <code>conditional operators</code>");'
  - text: <code>checkSign(10)</code> deve retornar &quot;positivo&quot;. Observe que a capitalização é importante
    testString: 'assert(checkSign(10) === "positive", "<code>checkSign(10)</code> should return "positive". Note that capitalization matters");'
  - text: <code>checkSign(-12)</code> deve retornar &quot;negativo&quot;. Observe que a capitalização é importante
    testString: 'assert(checkSign(-12) === "negative", "<code>checkSign(-12)</code> should return "negative". Note that capitalization matters");'
  - text: <code>checkSign(0)</code> deve retornar &quot;zero&quot;. Observe que a capitalização é importante
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
