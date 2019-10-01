---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
forumTopicId: 301343
localeTitle: Найти одного или нескольких преступников в охоте
---

## Description
<section id='description'>
Время для приостановки и тестирования ваших новых навыков написания регулярных выражений. Группа преступников убежала из тюрьмы и убежала, но вы не знаете, сколько. Однако вы знаете, что они остаются рядом друг с другом, когда они вокруг других людей. Вы несете ответственность за обнаружение всех преступников сразу. Вот пример, чтобы посмотреть, как это сделать: regex <code>/z+/</code> соответствует букве <code>z</code> когда она появляется один или несколько раз подряд. Он найдет совпадения во всех следующих строках: <blockquote> «Г» <br> &quot;Zzzzzz&quot; <br> &quot;ABCzzzz&quot; <br> &quot;ZzzzABC&quot; <br> &quot;Abczzzzzzzzzzzzzzzzzzzzzabc&quot; </blockquote> Но он не находит совпадений в следующих строках, поскольку буквы буквы <code>z</code> : <blockquote> «» <br> &quot;ABC&quot; <br> &quot;Abcabc&quot; </blockquote>
</section>

## Instructions
<section id='instructions'>
Напишите <code>greedy</code> регулярное выражение, которое находит одного или нескольких преступников внутри группы других людей. Преступник представлен заглавной буквой <code>C</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should match <code>one</code> criminal (<code>C</code>) in <code>"C"</code>
    testString: assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
  - text: Your regex should match <code>two</code> criminals (<code>CC</code>) in <code>"CC"</code>
    testString: assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
  - text: Your regex should match <code>three</code> criminals (<code>CCC</code>) in <code>"P1P5P4CCCP2P6P3"</code>
    testString: assert('P1P5P4CCCP2P6P3'.match(reCriminals) && 'P1P5P4CCCP2P6P3'.match(reCriminals)[0] == 'CCC');
  - text: Your regex should match <code>five</code> criminals (<code>CCCCC</code>) in <code>"P6P2P7P4P5CCCCCP3P1"</code>
    testString: assert('P6P2P7P4P5CCCCCP3P1'.match(reCriminals) && 'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC');
  - text: Your regex should not match any criminals in <code>""</code>
    testString: assert(!reCriminals.test(''));
  - text: Your regex should not match any criminals in <code>"P1P2P3"</code>
    testString: assert(!reCriminals.test('P1P2P3'));
  - text: Your regex should match <code>fifty</code> criminals (<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>) in <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.
    testString: assert('P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(reCriminals) && 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /./; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
```

</section>
