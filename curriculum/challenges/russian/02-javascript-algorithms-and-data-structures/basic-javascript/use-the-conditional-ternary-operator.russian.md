---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
videoUrl: ''
localeTitle: Использовать условный (тройной) оператор
---

## Description
<section id="description"> <dfn>Условный оператор</dfn> , также называемый <dfn>тернарным оператором</dfn> , может использоваться как однострочное выражение if-else. Синтаксис: <code>condition ? statement-if-true : statement-if-false;</code> Следующая функция использует инструкцию if-else для проверки условия: <blockquote> функция findGreater (a, b) { <br> если (a&gt; b) { <br> return «a больше»; <br> } <br> else { <br> return «b больше»; <br> } <br> } </blockquote> Это можно переписать с помощью <code>conditional operator</code> : <blockquote> функция findGreater (a, b) { <br> return a&gt; b? «a больше»: «b больше»; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Используйте <code>conditional operator</code> в функции <code>checkEqual</code> чтобы проверить, равны ли два числа или нет. Функция должна возвращать либо true, либо false. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code> должен использовать <code>conditional operator</code>
    testString: 'assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code), "<code>checkEqual</code> should use the <code>conditional operator</code>");'
  - text: '<code>checkEqual(1, 2)</code> должен возвращать false'
    testString: 'assert(checkEqual(1, 2) === false, "<code>checkEqual(1, 2)</code> should return false");'
  - text: '<code>checkEqual(1, 1)</code> должен возвращать true'
    testString: 'assert(checkEqual(1, 1) === true, "<code>checkEqual(1, 1)</code> should return true");'
  - text: '<code>checkEqual(1, -1)</code> должен возвращать false'
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
