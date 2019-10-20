---
id: 587d7b88367417b2b2512b47
title: Use the Rest Operator with Function Parameters
challengeType: 1
videoUrl: ''
localeTitle: Используйте оператор «Отдых» с параметрами функции
---

## Description
<section id='description'>
Чтобы помочь нам создать более гибкие функции, ES6 вводит <dfn>оператор</dfn> останова для параметров функции. С оператором rest вы можете создавать функции, которые принимают переменное количество аргументов. Эти аргументы хранятся в массиве, доступ к которому можно получить позже изнутри функции. Проверьте этот код: <blockquote> функция howMany (... args) { <br> return «Вы передали аргументы« + args.length + ».»; <br> } <br> console.log (howMany (0, 1, 2)); // Вы прошли 3 аргумента <br> console.log (howMany (&quot;string&quot;, null, [1, 2, 3], {})); // Вы передали 4 аргумента. </blockquote> Оператор rest исключает необходимость проверки массива <code>args</code> и позволяет применять <code>map()</code> , <code>filter()</code> и <code>reduce()</code> в массиве параметров.
</section>

## Instructions
<section id='instructions'>
Измените <code>sum</code> функции так, чтобы она использовала оператор rest, и она работает одинаково с любым количеством параметров.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Результат <code>sum(0,1,2)</code> должен быть равен 3'
    testString: 'assert(sum(0,1,2) === 3, "The result of <code>sum(0,1,2)</code> should be 3");'
  - text: 'Результат <code>sum(1,2,3,4)</code> должен быть равен 10'
    testString: 'assert(sum(1,2,3,4) === 10, "The result of <code>sum(1,2,3,4)</code> should be 10");'
  - text: Результатом <code>sum(5)</code> должно быть 5
    testString: 'assert(sum(5) === 5, "The result of <code>sum(5)</code> should be 5");'
  - text: Результат <code>sum()</code> должен быть равен 0
    testString: 'assert(sum() === 0, "The result of <code>sum()</code> should be 0");'
  - text: Функция <code>sum</code> использует оператор <code>...</code> spread в параметре <code>args</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/function\s+sum\s*\(\s*...args\s*\)\s*{/g), "The <code>sum</code> function uses the <code>...</code> spread operator on the <code>args</code> parameter.");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
