---
id: 5900f37f1000cf542c50fe92
challengeType: 5
title: 'Problem 19: Counting Sundays'
forumTopicId: 301827
localeTitle: 'Задача 19: подсчет воскресений'
---

## Description
<section id='description'>
Вам предоставляется следующая информация, но вы можете предпочесть сделать некоторые исследования для себя. <ul><li> 1 января 1900 года был понедельник. </li><li> Тридцать дней - сентябрь, <br> Апреле, июне и ноябре. <br> Все остальные тридцать один, <br> Сохраняя только февраль, <br> Который имеет двадцать восемь, дождь или блеск. <br> И на високосные годы, двадцать девять. </li><li> Високосный год происходит в любой год, равномерно делимый на 4, но не на столетие, если он не делится на 400. </li> Сколько воскресений упало в первый месяц месяца в двадцатом веке (1 января 1901 года по 31 декабря 2000 года)? </ul>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countingSundays(1943, 1946)</code> should return 6.
    testString: assert.strictEqual(countingSundays(1943, 1946), 6);
  - text: <code>countingSundays(1995, 2000)</code> should return 10.
    testString: assert.strictEqual(countingSundays(1995, 2000), 10);
  - text: <code>countingSundays(1901, 2000)</code> should return 171.
    testString: assert.strictEqual(countingSundays(1901, 2000), 171);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countingSundays(firstYear, lastYear) {
  // Good luck!
  return true;
}

countingSundays(1943, 1946);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```

</section>
