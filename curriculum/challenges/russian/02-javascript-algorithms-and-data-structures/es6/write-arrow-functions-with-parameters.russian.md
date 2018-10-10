---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1
videoUrl: ''
localeTitle: Функции записи стрелки с параметрами
---

## Description
<section id="description"> Подобно нормальной функции, вы можете передавать аргументы в функции стрелок. <blockquote> // удваивает входное значение и возвращает его <br> const doubler = (item) =&gt; item * 2; </blockquote> Вы можете передать более одного аргумента в функции стрелок. </section>

## Instructions
<section id="instructions"> Перепишите функцию <code>myConcat</code> которая добавляет содержимое <code>arr2</code> в <code>arr1</code> чтобы функция использовала синтаксис функции стрелки. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Пользователь выполнил замену ключевого слова <code>var</code> .
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: <code>myConcat</code> должен быть постоянной переменной (используя <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+myConcat/g), "<code>myConcat</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>myConcat</code> должен быть функцией
    testString: 'assert(typeof myConcat === "function", "<code>myConcat</code> should be a function");'
  - text: <code>myConcat()</code> возвращает правильный <code>array</code>
    testString: 'assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; }, "<code>myConcat()</code> returns the correct <code>array</code>");'
  - text: ключевое слово <code>function</code> не использовалось.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
