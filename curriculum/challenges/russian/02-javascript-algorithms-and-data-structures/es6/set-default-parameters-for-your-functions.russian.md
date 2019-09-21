---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
forumTopicId: 301209
localeTitle: Установка параметров по умолчанию для ваших функций
---

## Description
<section id='description'>
Чтобы помочь нам создать более гибкие функции, ES6 вводит <dfn>параметры</dfn> по <dfn>умолчанию</dfn> для функций. Проверьте этот код: <blockquote> приветствие функции (name = &quot;Anonymous&quot;) { <br> return &quot;Hello&quot; + name; <br> } <br> console.log (приветствие ( &quot;Джон&quot;)); // Привет Джон <br> console.log (приветствие ()); // Привет Аноним </blockquote> Параметр по умолчанию запускается, когда аргумент не указан (он не определен). Как вы можете видеть в приведенном выше примере, <code>name</code> параметра получит значение по умолчанию <code>&quot;Anonymous&quot;</code> если вы не указали значение параметра. Вы можете добавить значения по умолчанию для столько параметров, сколько хотите.
</section>

## Instructions
<section id='instructions'>
Измените <code>increment</code> функции, добавив параметры по умолчанию, чтобы добавить 1 к <code>number</code> если <code>value</code> не указано.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The result of <code>increment(5, 2)</code> should be <code>7</code>.
    testString: assert(increment(5, 2) === 7);
  - text: The result of <code>increment(5)</code> should be <code>6</code>.
    testString: assert(increment(5) === 6);
  - text: Default parameter <code>1</code> was used for <code>value</code>.
    testString: assert(code.match(/value\s*=\s*1/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const increment = (number, value) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

```

</div>

</section>

## Solution
<section id='solution'>

```js
const increment = (number, value = 1) => number + value;
```

</section>
