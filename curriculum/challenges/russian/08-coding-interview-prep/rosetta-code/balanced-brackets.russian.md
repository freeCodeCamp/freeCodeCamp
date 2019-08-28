---
title: Balanced brackets
id: 594dc6c729e5700999302b45
challengeType: 5
forumTopicId: 302230
localeTitle: Сбалансированные кронштейны
---

## Description
<section id='description'>
<p> Определите, сбалансирована ли сгенерированная строка скобок; то есть, состоит ли он целиком из пар открывающих / закрывающих скобок (в этом порядке), ни одно из которых не выполняется. </p> Примеры: <p class="rosetta__paragraph"> (пусто) true </p><p class="rosetta__paragraph"> <code>[]</code> true </p><p class="rosetta__paragraph"> <code>][</code> false </p><p class="rosetta__paragraph"> <code>[][]</code> true </p><p class="rosetta__paragraph"> <code>][][</code> false </p><p class="rosetta__paragraph"> <code>[]][[]</code> false </p><p class="rosetta__paragraph"> <code>[[[[]]]]</code> true </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isBalanced</code> is a function.
    testString: assert(typeof isBalanced === 'function');
  - text: <code>isBalanced("[]")</code> should return true.
    testString: assert(isBalanced(testCases[0]));
  - text: <code>isBalanced("]][[[][][][]][")</code> should return false.
    testString: assert(!isBalanced(testCases[1]));
  - text: <code>isBalanced("[][[[[][][[[]]]]]]")</code> should return true.
    testString: assert(isBalanced(testCases[2]));
  - text: <code>isBalanced("][")</code> should return true.
    testString: assert(!isBalanced(testCases[3]));
  - text: <code>isBalanced("[[[]]]][[]")</code> should return true.
    testString: assert(!isBalanced(testCases[4]));
  - text: <code>isBalanced("][[]")</code> should return true.
    testString: assert(!isBalanced(testCases[5]));
  - text: <code>isBalanced("][[][]][[[]]")</code> should return true.
    testString: assert(!isBalanced(testCases[6]));
  - text: <code>isBalanced("[[][]]][")</code> should return true.
    testString: assert(!isBalanced(testCases[7]));
  - text: <code>isBalanced("[[[]]][[]]]][][[")</code> should return true.
    testString: assert(!isBalanced(testCases[8]));
  - text: <code>isBalanced("[]][[]]][[[[][]]")</code> should return true.
    testString: assert(!isBalanced(testCases[9]));
  - text: <code>isBalanced("][]][[][")</code> should return true.
    testString: assert(!isBalanced(testCases[10]));
  - text: <code>isBalanced("[[]][[][]]")</code> should return true.
    testString: assert(isBalanced(testCases[11]));
  - text: <code>isBalanced("[[]]")</code> should return true.
    testString: assert(isBalanced(testCases[12]));
  - text: <code>isBalanced("]][]][[]][[[")</code> should return true.
    testString: assert(!isBalanced(testCases[13]));
  - text: <code>isBalanced("][]][][[")</code> should return true.
    testString: assert(!isBalanced(testCases[14]));
  - text: <code>isBalanced("][][")</code> should return true.
    testString: assert(!isBalanced(testCases[15]));
  - text: <code>isBalanced("[[]]][][][[]][")</code> should return true.
    testString: assert(!isBalanced(testCases[16]));
  - text: <code>isBalanced("")</code> should return true.
    testString: assert(isBalanced(testCases[17]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isBalanced(str) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const testCases = [
  '[]',
  ']][[[][][][]][',
  '[][[[[][][[[]]]]]]',
  '][',
  '[[[]]]][[]',
  '][[]',
  '][[][]][[[]]',
  '[[][]]][',
  '[[[]]][[]]]][][[',
  '[]][[]]][[[[][]]',
  '][]][[][',
  '[[]][[][]]',
  '[[]]',
  ']][]][[]][[[',
  '][]][][[',
  '][][',
  '[[]]][][][[]][',
  ''
];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function isBalanced(str) {
  if (str === '') return true;
  let a = str;
  let b;
  do {
    b = a;
    a = a.replace(/\[\]/g, '');
  } while (a !== b);
  return !a;
}
```

</section>
