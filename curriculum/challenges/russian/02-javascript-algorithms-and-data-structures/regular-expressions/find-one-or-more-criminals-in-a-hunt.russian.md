---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
videoUrl: ''
localeTitle: Найти одного или нескольких преступников в охоте
---

## Description
<section id="description"> Время для приостановки и тестирования ваших новых навыков написания регулярных выражений. Группа преступников убежала из тюрьмы и убежала, но вы не знаете, сколько. Однако вы знаете, что они остаются рядом друг с другом, когда они вокруг других людей. Вы несете ответственность за обнаружение всех преступников сразу. Вот пример, чтобы посмотреть, как это сделать: regex <code>/z+/</code> соответствует букве <code>z</code> когда она появляется один или несколько раз подряд. Он найдет совпадения во всех следующих строках: <blockquote> «Г» <br> &quot;Zzzzzz&quot; <br> &quot;ABCzzzz&quot; <br> &quot;ZzzzABC&quot; <br> &quot;Abczzzzzzzzzzzzzzzzzzzzzabc&quot; </blockquote> Но он не находит совпадений в следующих строках, поскольку буквы буквы <code>z</code> : <blockquote> «» <br> &quot;ABC&quot; <br> &quot;Abcabc&quot; </blockquote></section>

## Instructions
<section id="instructions"> Напишите <code>greedy</code> регулярное выражение, которое находит одного или нескольких преступников внутри группы других людей. Преступник представлен заглавной буквой <code>C</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваше регулярное выражение должно соответствовать <code>one</code> преступнику (« <code>C</code> ») в <code>&quot;C&quot;</code>
    testString: 'assert("C".match(reCriminals) && "C".match(reCriminals)[0] == "C", "Your regex should match <code>one</code> criminal ("<code>C</code>") in <code>"C"</code>");'
  - text: Ваше регулярное выражение должно совпадать с <code>two</code> преступниками (« <code>CC</code> ») в <code>&quot;CC&quot;</code>
    testString: 'assert("CC".match(reCriminals) && "CC".match(reCriminals)[0] == "CC", "Your regex should match <code>two</code> criminals ("<code>CC</code>") in <code>"CC"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>three</code> преступникам (« <code>CCC</code> ») в <code>&quot;P1P5P4CCCP2P6P3&quot;</code>
    testString: 'assert("P1P5P4CCCP2P6P3".match(reCriminals) && "P1P5P4CCCP2P6P3".match(reCriminals)[0] == "CCC", "Your regex should match <code>three</code> criminals ("<code>CCC</code>") in <code>"P1P5P4CCCP2P6P3"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>five</code> преступникам (« <code>CCCCC</code> ») в <code>&quot;P6P2P7P4P5CCCCCP3P1&quot;</code>
    testString: 'assert("P6P2P7P4P5CCCCCP3P1".match(reCriminals) && "P6P2P7P4P5CCCCCP3P1".match(reCriminals)[0] == "CCCCC", "Your regex should match <code>five</code> criminals ("<code>CCCCC</code>") in <code>"P6P2P7P4P5CCCCCP3P1"</code>");'
  - text: Ваше регулярное выражение не должно соответствовать никаким преступникам в <code>&quot;&quot;</code>
    testString: 'assert(!reCriminals.test(""), "Your regex should not match any criminals in <code>""</code>");'
  - text: Ваше регулярное выражение не должно соответствовать никаким преступникам в <code>&quot;P1P2P3&quot;</code>
    testString: 'assert(!reCriminals.test("P1P2P3"), "Your regex should not match any criminals in <code>"P1P2P3"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>fifty</code> преступникам (« <code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code> ») в <code>&quot;P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3&quot;</code> .
    testString: 'assert("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals) && "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3".match(reCriminals)[0] == "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", "Your regex should match <code>fifty</code> criminals ("<code>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</code>") in <code>"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"</code>.");'

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
// solution required
```
</section>
