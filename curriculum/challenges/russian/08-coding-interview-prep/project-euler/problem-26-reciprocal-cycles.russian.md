---
id: 5900f3861000cf542c50fe99
challengeType: 5
title: 'Problem 26: Reciprocal cycles'
forumTopicId: 301908
localeTitle: 'Проблема 26: Взаимные циклы'
---

## Description
<section id='description'>
Единичная доля содержит 1 в числителе. Дано десятичное представление единичных дробей с знаменателями от 2 до 10: <div style="padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;"><div> <sup><sub>1/2</sub></sup> = 0,5 </div><div> <sup><sub>1/3</sub></sup> = 0. (3) </div><div> На <sup><sub>1/4</sub></sup> = 0,25 </div><div> <sup><sub>1/5</sub></sup> = 0,2 </div><div> <sup><sub>1/6</sub></sup> = 0,1 (6) </div><div> <sup><sub>1/7</sub></sup> = 0. (142857) </div><div> На <sup><sub>1/8</sub></sup> = 0,125 </div><div> <sup><sub>1/9</sub></sup> = 0. (1) </div><div> <sup><sub>1/10</sub></sup> = 0,1 </div></div> Где 0,1 (6) означает 0.166666 ... и имеет повторяющийся цикл из 1 цифры. Можно видеть , что <sup><sub>1/7</sub></sup> имеет 6-значный повторяющийся цикл. Найдите значение <var>d</var> &lt; <var>n,</var> для которого <sup>1</sup> / <sub>d</sub> содержит самый длинный повторяющийся цикл в его десятичной дробной части.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reciprocalCycles(700)</code> should return 659.
    testString: assert(reciprocalCycles(700) == 659);
  - text: <code>reciprocalCycles(800)</code> should return 743.
    testString: assert(reciprocalCycles(800) == 743);
  - text: <code>reciprocalCycles(900)</code> should return 887.
    testString: assert(reciprocalCycles(900) == 887);
  - text: <code>reciprocalCycles(1000)</code> should return 983.
    testString: assert(reciprocalCycles(1000) == 983);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function reciprocalCycles(n) {
  // Good luck!
  return n;
}

reciprocalCycles(1000);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
