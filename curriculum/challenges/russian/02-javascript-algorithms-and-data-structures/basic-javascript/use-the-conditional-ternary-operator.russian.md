---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
videoUrl: https://scrimba.com/c/c3JRmSg
forumTopicId: 301181
localeTitle: Использовать условный (тройной) оператор
---

## Description
<section id='description'>
<dfn>Условный оператор</dfn> , также называемый <dfn>тернарным оператором</dfn> , может использоваться как однострочное выражение if-else. Синтаксис: <code>condition ? statement-if-true : statement-if-false;</code> Следующая функция использует инструкцию if-else для проверки условия: <blockquote> функция findGreater (a, b) { <br> если (a&gt; b) { <br> return «a больше»; <br> } <br> else { <br> return «b больше»; <br> } <br> } </blockquote> Это можно переписать с помощью <code>conditional operator</code> : <blockquote> функция findGreater (a, b) { <br> return a&gt; b? «a больше»: «b больше»; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте <code>conditional operator</code> в функции <code>checkEqual</code> чтобы проверить, равны ли два числа или нет. Функция должна возвращать либо true, либо false.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code> should use the <code>conditional operator</code>
    testString: assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
  - text: <code>checkEqual(1, 2)</code> should return "Not Equal"
    testString: assert(checkEqual(1, 2) === "Not Equal");
  - text: <code>checkEqual(1, 1)</code> should return "Equal"
    testString: assert(checkEqual(1, 1) === "Equal");
  - text: <code>checkEqual(1, -1)</code> should return "Not Equal"
    testString: assert(checkEqual(1, -1) === "Not Equal");

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
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

</section>
