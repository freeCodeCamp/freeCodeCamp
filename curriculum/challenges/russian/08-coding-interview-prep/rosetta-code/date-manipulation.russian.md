---
title: Date manipulation
id: 5966c21cf732a95f1b67dd28
challengeType: 5
videoUrl: ''
localeTitle: Обработка даты
---

## Description
<section id="description"> Задача: <p> Учитывая строку даты в EST, выведите указанную дату в виде строки с добавлением 12 часов к времени. </p><p> Часовой пояс должен быть сохранен. </p><p> Пример ввода: </p><p> <code>&quot;March 7 2009 7:30pm EST&quot;</code> </p> <p> Пример вывода: </p><p> <code>&quot;March 8 2009 7:30am EST&quot;</code> </p> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add12Hours</code> - это функция.
    testString: 'assert(typeof add12Hours === "function", "<code>add12Hours</code> is a function.");'
  - text: <code>add12Hours(dateString)</code> должен возвращать строку.
    testString: 'assert(typeof add12Hours(tests[0]) === "string", "<code>add12Hours(dateString)</code> should return a string.");'
  - text: '<code>add12Hours(&quot;&quot; + tests[0] + &quot;&quot;)</code> должны возвращать <code>&quot;&quot; + answers[0] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[0]) === answers[0], "<code>add12Hours("" + tests[0] + "")</code> should return <code>"" + answers[0] + ""</code>");'
  - text: 'Должен ли день обмена менять. <code>add12Hours(&quot;&quot; + tests[1] + &quot;&quot;)</code> должны возвращать <code>&quot;&quot; + answers[1] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[1]) === answers[1], "Should handel day change. <code>add12Hours("" + tests[1] + "")</code> should return <code>"" + answers[1] + ""</code>");'
  - text: 'Должен ли перенос месяца в високосный год. <code>add12Hours(&quot;&quot; + tests[2] + &quot;&quot;)</code> должны возвращать <code>&quot;&quot; + answers[2] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[2]) === answers[2], "Should handel month change in a leap years. <code>add12Hours("" + tests[2] + "")</code> should return <code>"" + answers[2] + ""</code>");'
  - text: 'Должен ли перенос месяца в течение общих лет. <code>add12Hours(&quot;&quot; + tests[3] + &quot;&quot;)</code> должны возвращать <code>&quot;&quot; + answers[3] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[3]) === answers[3], "Should handel month change in a common years. <code>add12Hours("" + tests[3] + "")</code> should return <code>"" + answers[3] + ""</code>");'
  - text: 'Должен измениться год выпуска. <code>add12Hours(&quot;&quot; + tests[4] + &quot;&quot;)</code> должны возвращать <code>&quot;&quot; + answers[4] + &quot;&quot;</code>'
    testString: 'assert(add12Hours(tests[4]) === answers[4], "Should handel year change. <code>add12Hours("" + tests[4] + "")</code> should return <code>"" + answers[4] + ""</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add12Hours (dateString) {
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
