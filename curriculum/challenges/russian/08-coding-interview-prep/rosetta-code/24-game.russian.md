---
title: 24 game
id: 5951e88f64ebf159166a1176
challengeType: 5
videoUrl: ''
localeTitle: 24 игра
---

## Description
<section id="description"><p> Реализуйте функцию, которая принимает в качестве аргумента строку из четырех цифр: каждая цифра от 1 ──► 9 (включительно) с разрешенными повторениями и возвращает арифметическое выражение, которое оценивается с номером 24. Если такого решения не существует, не существует никакого решения ». </p><p> Правила: </p> Допускаются только следующие операторы / функции: умножение, деление, сложение, вычитание. Отдел должен использовать с плавающей точкой или рациональную арифметику и т. Д. Для сохранения остатков. Формирование нескольких цифр из предоставленных цифр не разрешено. (Таким образом, ответ 12 + 12 при наличии 1, 2, 2 и 1 неверен). Порядок цифр, когда они указаны, не обязательно сохраняется. <p> Пример ввода: </p> <code>solve24(&quot;4878&quot;);</code> <code>solve24(&quot;1234&quot;);</code> <code>solve24(&quot;6789&quot;);</code> <code>solve24(&quot;1127&quot;);</code> <p> Пример выходов (строк): </p> <code>(7-8/8)*4</code> <code>3*1*4*2</code> <code>(6*8)/(9-7)</code> <code>(1+7)*(2+1)</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>solve24</code> - функция.
    testString: 'assert(typeof solve24 === "function", "<code>solve24</code> is a function.");'
  - text: <code>solve24(&quot;4878&quot;)</code> должен вернуться <code>(7-8/8)*4</code> или <code>4*(7-8/8)</code>
    testString: 'assert(include(answers[0], solve24(testCases[0])), "<code>solve24("4878")</code> should return <code>(7-8/8)*4</code> or <code>4*(7-8/8)</code>");'
  - text: <code>solve24(&quot;1234&quot;)</code> должен возвращать любое расположение <code>1*2*3*4</code>
    testString: 'assert(include(answers[1], solve24(testCases[1])), "<code>solve24("1234")</code> should return any arrangement of <code>1*2*3*4</code>");'
  - text: <code>solve24(&quot;6789&quot;)</code> должен возвращать <code>(6*8)/(9-7)</code> или <code>(8*6)/(9-7)</code>
    testString: 'assert(include(answers[2], solve24(testCases[2])), "<code>solve24("6789")</code> should return <code>(6*8)/(9-7)</code> or <code>(8*6)/(9-7)</code>");'
  - text: <code>solve24(&quot;1127&quot;)</code> должен возвращать перестановку <code>(1+7)*(1*2)</code>
    testString: 'assert(include(answers[3], solve24(testCases[3])), "<code>solve24("1127")</code> should return a permutation of <code>(1+7)*(1*2)</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function solve24 (numStr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
