---
title: Top rank per group
id: 595011cba5a81735713873bd
challengeType: 5
videoUrl: ''
localeTitle: Высший разряд на группу
---

## Description
<section id="description"> Задача: <p> Найдите верхние N ранжированных данных в каждой группе, где N предоставляется в качестве параметра. В качестве параметра также указывается имя ранга и группы. </p> Учитывая следующие данные: <pre> [
  {имя: &#39;Tyler Bennett&#39;, id: &#39;E10297&#39;, зарплата: 32000, отдел: &#39;D101&#39;},
  {name: &#39;John Rappl&#39;, id: &#39;E21437&#39;, зарплата: 47000, отдел: &#39;D050&#39;},
  {имя: &#39;George Woltman&#39;, id: &#39;E00127&#39;, зарплата: 53500, отдел: &#39;D101&#39;},
  {name: &#39;Adam Smith&#39;, id: &#39;E63535&#39;, зарплата: 18000, отдел: &#39;D202&#39;},
  {имя: &#39;Claire Buckman&#39;, id: &#39;E39876&#39;, зарплата: 27800, отдел: &#39;D202&#39;},
  {имя: &#39;David McClellan&#39;, id: &#39;E04242&#39;, зарплата: 41500, отдел: &#39;D101&#39;},
  {name: &#39;Rich Holcomb&#39;, id: &#39;E01234&#39;, зарплата: 49500, отдел: &#39;D202&#39;},
  {имя: &#39;Nathan Adams&#39;, id: &#39;E41298&#39;, зарплата: 21900, отдел: &#39;D050&#39;},
  {name: &#39;Richard Potter&#39;, id: &#39;E43128&#39;, зарплата: 15900, отдел: &#39;D101&#39;},
  {имя: &#39;David Motsinger&#39;, id: &#39;E27002&#39;, зарплата: 19250, отдел: &#39;D202&#39;},
  {имя: &#39;Tim Sampair&#39;, id: &#39;E03033&#39;, зарплата: 27000, отдел: &#39;D101&#39;},
  {name: &#39;Kim Arlich&#39;, id: &#39;E10001&#39;, зарплата: 57000, отдел: &#39;D190&#39;},
  {name: &#39;Timothy Grove&#39;, id: &#39;E16398&#39;, зарплата: 29900, отдел: &#39;D190&#39;}
];
</pre> в каждом отделе можно было бы <code>topRankPerGroup(10, data, &#39;dept&#39;, &#39;salary&#39;)</code> лучших сотрудников, позвонив <code>topRankPerGroup(10, data, &#39;dept&#39;, &#39;salary&#39;)</code> Учитывая следующие данные: <pre> [
  {name: &#39;Friday 13th&#39;, жанр: &#39;horror&#39;, рейтинг: 9.9},
  {name: «Кошмар на улице Вязов», жанр: «ужас», рейтинг: 5.7},
  {name: «Титаник», жанр: «драма», рейтинг: 7.3},
  {name: &#39;Maze Runner&#39;, жанр: &#39;scifi&#39;, рейтинг: 7.1},
  {name: &#39;Blade runner&#39;, жанр: &#39;scifi&#39;, рейтинг: 8.9}
];
</pre> можно <code>topRankPerGroup(1, data, &#39;genre&#39;, &#39;rating&#39;)</code> рейтинг фильма с самым высоким рейтингом в каждом жанре, назвав <code>topRankPerGroup(1, data, &#39;genre&#39;, &#39;rating&#39;)</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topRankPerGroup</code> - это функция.
    testString: 'assert(typeof topRankPerGroup === "function", "<code>topRankPerGroup</code> is a function.");'
  - text: <code>topRankPerGroup</code> возвращает undefined при отрицательных значениях n.
    testString: 'assert(typeof topRankPerGroup(-1, []) === "undefined", "<code>topRankPerGroup</code> returns undefined on negative n values.");'
  - text: Первый отдел должен быть D050
    testString: 'assert.equal(res1[0][0].dept, "D050", "First department must be D050");'
  - text: Первый отдел должен быть D050
    testString: 'assert.equal(res1[0][1].salary, 21900, "First department must be D050");'
  - text: Последний отдел должен быть D202
    testString: 'assert.equal(res1[3][3].dept, "D202", "The last department must be D202");'
  - text: '<code>topRankPerGroup(1, ...)</code> должен возвращать только результат высшего рейтинга для каждой группы.'
    testString: 'assert.equal(res2[2].length, 1, "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'
  - text: '<code>topRankPerGroup(1, ...)</code> должен возвращать только результат высшего рейтинга для каждой группы.'
    testString: 'assert.equal(res3[2][1].name, "Maze Runner", "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topRankPerGroup(n, data, groupName, rankName) {
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
