---
title: Discordian date
id: 59f4eafba0343628bb682785
challengeType: 5
videoUrl: ''
localeTitle: Дискордианская дата
---

## Description
<section id="description"> Задача: <p> Преобразуйте заданную дату из <a href="https://en.wikipedia.org/wiki/Gregorian calendar" title="wp: григорианский календарь">григорианского календаря</a> в <a href="https://en.wikipedia.org/wiki/Discordian calendar" title="wp: Дискордианский календарь">Дискордианский календарь</a> . </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>discordianDate</code> - это функция.
    testString: 'assert(typeof discordianDate === "function", "<code>discordianDate</code> is a function.");'
  - text: '<code>discordianDate(new Date(2010, 6, 22))</code> должен вернуть <code>&quot;Pungenday, the 57th day of Confusion in the YOLD 3176&quot;</code> .'
    testString: 'assert(discordianDate(new Date(2010, 6, 22)) === "Pungenday, the 57th day of Confusion in the YOLD 3176", "<code>discordianDate(new Date(2010, 6, 22))</code> should return <code>"Pungenday, the 57th day of Confusion in the YOLD 3176"</code>.");'
  - text: '<code>discordianDate(new Date(2012, 1, 28))</code> должен вернуть <code>&quot;Prickle-Prickle, the 59th day of Chaos in the YOLD 3178&quot;</code> .'
    testString: 'assert(discordianDate(new Date(2012, 1, 28)) === "Prickle-Prickle, the 59th day of Chaos in the YOLD 3178", "<code>discordianDate(new Date(2012, 1, 28))</code> should return <code>"Prickle-Prickle, the 59th day of Chaos in the YOLD 3178"</code>.");'
  - text: '<code>discordianDate(new Date(2012, 1, 29))</code> должен вернуть <code>&quot;Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\&quot;s Day!&quot;</code> .'
    testString: 'assert(discordianDate(new Date(2012, 1, 29)) === "Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\"s Day!", "<code>discordianDate(new Date(2012, 1, 29))</code> should return <code>"Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\"s Day!"</code>.");'
  - text: '<code>discordianDate(new Date(2012, 2, 1))</code> должен вернуть <code>&quot;Setting Orange, the 60th day of Chaos in the YOLD 3178&quot;</code> .'
    testString: 'assert(discordianDate(new Date(2012, 2, 1)) === "Setting Orange, the 60th day of Chaos in the YOLD 3178", "<code>discordianDate(new Date(2012, 2, 1))</code> should return <code>"Setting Orange, the 60th day of Chaos in the YOLD 3178"</code>.");'
  - text: '<code>discordianDate(new Date(2010, 0, 5))</code> должен вернуть <code>&quot;Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!&quot;</code> ,'
    testString: 'assert(discordianDate(new Date(2010, 0, 5)) === "Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!", "<code>discordianDate(new Date(2010, 0, 5))</code> should return <code>"Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"</code>.");'
  - text: '<code>discordianDate(new Date(2011, 4, 3))</code> должен вернуть <code>&quot;Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!&quot;</code> ,'
    testString: 'assert(discordianDate(new Date(2011, 4, 3)) === "Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!", "<code>discordianDate(new Date(2011, 4, 3))</code> should return <code>"Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!"</code>.");'
  - text: '<code>discordianDate(new Date(2015, 9, 19))</code> должен вернуть <code>&quot;Boomtime, the 73rd day of Bureaucracy in the YOLD 3181&quot;</code> .'
    testString: 'assert(discordianDate(new Date(2015, 9, 19)) === "Boomtime, the 73rd day of Bureaucracy in the YOLD 3181", "<code>discordianDate(new Date(2015, 9, 19))</code> should return <code>"Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function discordianDate (date) {
  // Good luck!
  return true;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
