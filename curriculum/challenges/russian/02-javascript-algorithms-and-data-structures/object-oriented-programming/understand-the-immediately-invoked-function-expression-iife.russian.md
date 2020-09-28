---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
forumTopicId: 301328
localeTitle: Понимать выражение с выведенной функцией (IIFE)
---

## Description
<section id='description'>
Общим шаблоном в JavaScript является выполнение функции сразу после ее объявления: <blockquote> (функция () { <br> console.log («Chirp, chirp!»); <br> }) (); // это анонимное выражение функции, которое выполняется сразу <br> // Вывод «Чирп, чириканье!» немедленно </blockquote> Обратите внимание, что функция не имеет имени и не сохраняется в переменной. Две скобки () в конце выражения функции приводят к немедленному ее выполнению или вызову. Этот шаблон известен как выражение, <code>immediately invoked function expression</code> или <code>IIFE</code> .
</section>

## Instructions
<section id='instructions'>
Перепишите функцию <code>makeNest</code> и удалите ее вызов, поэтому вместо анонимного <code>immediately invoked function expression</code> ( <code>IIFE</code> ).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The function should be anonymous.
    testString: assert(/\((function|\(\))(=>|\(\)){/.test(code.replace(/\s/g, "")));
  - text: Your function should have parentheses at the end of the expression to call it immediately.
    testString: assert(/}\)\(\)/.test(code.replace(/\s/g, "")));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

```

</div>

</section>

## Solution
<section id='solution'>

```js
(function () {
  console.log("A cozy nest is ready");
})();
```

</section>
