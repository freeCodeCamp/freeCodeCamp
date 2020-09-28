---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/cyWJJs3
forumTopicId: 18185
localeTitle: Генерировать случайные дроби с помощью JavaScript
---

## Description
<section id='description'>
Случайные числа полезны для создания случайного поведения. JavaScript имеет функцию <code>Math.random()</code> которая генерирует случайное десятичное число между <code>0</code> (включительно) и не совсем до <code>1</code> (исключая). Таким образом, <code>Math.random()</code> может возвращать <code>0</code> но никогда не возвращать <code>1</code> <strong>Примечание</strong> <br> Подобно <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">сохранению значений с помощью Equal Operator</a> , все вызовы функций будут разрешены до выполнения <code>return</code> , поэтому мы можем <code>return</code> значение функции <code>Math.random()</code> .
</section>

## Instructions
<section id='instructions'>
Измените <code>randomFraction</code> чтобы вернуть случайное число вместо возврата <code>0</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomFraction</code> should return a random number.
    testString: assert(typeof randomFraction() === "number");
  - text: The number returned by <code>randomFraction</code> should be a decimal.
    testString: assert((randomFraction()+''). match(/\./g));
  - text: You should be using <code>Math.random</code> to generate the random decimal number.
    testString: assert(code.match(/Math\.random/g).length >= 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function randomFraction() {

  // Only change code below this line.

  return 0;

  // Only change code above this line.
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){return randomFraction();})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
function randomFraction() {
  return Math.random();
}
```

</section>
