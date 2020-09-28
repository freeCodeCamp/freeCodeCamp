---
id: af4afb223120f7348cdfc9fd
title: Map the Debris
challengeType: 5
forumTopicId: 16021
localeTitle: Карта обломков
---

## Description
<section id='description'>
Верните новый массив, который преобразует среднюю высоту элементов в их орбитальные периоды (в секундах). Массив будет содержать объекты в формате <code>{name: &#39;name&#39;, avgAlt: avgAlt}</code> . Вы можете прочитать об орбитальных периодах <a href="http://en.wikipedia.org/wiki/Orbital_period" target="_blank">в Википедии</a> . Значения должны округляться до ближайшего целого числа. Тело, находящееся на орбите, - Земля. Радиус земли составляет 6367,4447 километров, а значение GM для Земли составляет 398600,4418 км <sup>3</sup> с <sup>-2</sup> . Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])</code> should return <code>[{name: "sputnik", orbitalPeriod: 86400}]</code>.'
    testString: 'assert.deepEqual(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]), [{name: "sputnik", orbitalPeriod: 86400}]);'
  - text: '<code>orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])</code> should return <code>[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]</code>.'
    testString: 'assert.deepEqual(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]), [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))
    };
  });
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
```

</section>
