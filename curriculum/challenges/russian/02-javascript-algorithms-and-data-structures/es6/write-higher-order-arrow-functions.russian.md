---
id: 587d7b88367417b2b2512b45
title: Write Higher Order Arrow Functions
challengeType: 1
videoUrl: ''
localeTitle: Написание функций стрелок с более высоким порядком
---

## Description
<section id='description'>
Пришло время увидеть, насколько эффективны функции стрелок при обработке данных. Функции стрелок отлично работают с функциями более высокого порядка, такими как <code>map()</code> , <code>filter()</code> и <code>reduce()</code> , которые принимают другие функции в качестве аргументов для обработки коллекций данных. Прочтите следующий код: <blockquote> FBPosts.filter (функция (post) { <br> return post.thumbnail! == null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500; <br> }) </blockquote> Мы написали это с <code>filter()</code> чтобы сделать его несколько читаемым. Теперь сравните его со следующим кодом, который вместо этого использует синтаксис функции: <blockquote> FBPosts.filter ((post) =&gt; post.thumbnail! == null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500) </blockquote> Этот код более краткий и выполняет ту же задачу с меньшим количеством строк кода.
</section>

## Instructions
<section id='instructions'>
Используйте синтаксис функции стрелки, чтобы вычислить квадрат только положительных целых чисел (десятичные числа не являются целыми) в массиве <code>realNumberArray</code> и сохранить новый массив в переменной <code>squaredIntegers</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squaredIntegers</code> должен быть постоянной переменной (используя <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+squaredIntegers/g), "<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>squaredIntegers</code> должен быть <code>array</code>
    testString: 'assert(Array.isArray(squaredIntegers), "<code>squaredIntegers</code> should be an <code>array</code>");'
  - text: '<code>squaredIntegers</code> должно быть <code>[16, 1764, 36]</code>'
    testString: 'assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], "<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>");'
  - text: ключевое слово <code>function</code> не использовалось.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'
  - text: петля не должна использоваться
    testString: 'getUserInput => assert(!getUserInput("index").match(/(for)|(while)/g), "loop should not be used");'
  - text: '<code>map</code> , <code>filter</code> или <code>reduce</code> должны использоваться'
    testString: 'getUserInput => assert(getUserInput("index").match(/map|filter|reduce/g), "<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
