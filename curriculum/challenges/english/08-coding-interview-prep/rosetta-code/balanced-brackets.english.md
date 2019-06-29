---
title: Balanced brackets
id: 594dc6c729e5700999302b45
challengeType: 5
---

## Description
<section id='description'>
Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.
<h4><strong>Examples:</strong></h4>

| Input | Output |
| --- | --- |
| <code>[]</code> | true |
| <code>][</code> | false |
| <code>[][]</code> | true |
| <code>][][</code> | false |
| <code>[]][[]</code> | false |
| <code>[[[[]]]]</code> | true |
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isBalanced</code> is a function.
    testString: assert(typeof isBalanced === 'function', '<code>isBalanced</code> is a function.');
  - text: <code>isBalanced("[]")</code> should return true.
    testString: assert(isBalanced(testCases[0]), '<code>isBalanced("[]")</code> should return true.');
  - text: <code>isBalanced("]][[[][][][]][")</code> should return false.
    testString: assert(!isBalanced(testCases[1]), '<code>isBalanced("]][[[][][][]][")</code> should return false.');
  - text: <code>isBalanced("[][[[[][][[[]]]]]]")</code> should return true.
    testString: assert(isBalanced(testCases[2]), '<code>isBalanced("[][[[[][][[[]]]]]]")</code> should return true.');
  - text: <code>isBalanced("][")</code> should return true.
    testString: assert(!isBalanced(testCases[3]), '<code>isBalanced("][")</code> should return true.');
  - text: <code>isBalanced("[[[]]]][[]")</code> should return true.
    testString: assert(!isBalanced(testCases[4]), '<code>isBalanced("[[[]]]][[]")</code> should return true.');
  - text: <code>isBalanced("][[]")</code> should return true.
    testString: assert(!isBalanced(testCases[5]), '<code>isBalanced("][[]")</code> should return true.');
  - text: <code>isBalanced("][[][]][[[]]")</code> should return true.
    testString: assert(!isBalanced(testCases[6]), '<code>isBalanced("][[][]][[[]]")</code> should return true.');
  - text: <code>isBalanced("[[][]]][")</code> should return true.
    testString: assert(!isBalanced(testCases[7]), '<code>isBalanced("[[][]]][")</code> should return true.');
  - text: <code>isBalanced("[[[]]][[]]]][][[")</code> should return true.
    testString: assert(!isBalanced(testCases[8]), '<code>isBalanced("[[[]]][[]]]][][[")</code> should return true.');
  - text: <code>isBalanced("[]][[]]][[[[][]]")</code> should return true.
    testString: assert(!isBalanced(testCases[9]), '<code>isBalanced("[]][[]]][[[[][]]")</code> should return true.');
  - text: <code>isBalanced("][]][[][")</code> should return true.
    testString: assert(!isBalanced(testCases[10]), '<code>isBalanced("][]][[][")</code> should return true.');
  - text: <code>isBalanced("[[]][[][]]")</code> should return true.
    testString: assert(isBalanced(testCases[11]), '<code>isBalanced("[[]][[][]]")</code> should return true.');
  - text: <code>isBalanced("[[]]")</code> should return true.
    testString: assert(isBalanced(testCases[12]), '<code>isBalanced("[[]]")</code> should return true.');
  - text: <code>isBalanced("]][]][[]][[[")</code> should return true.
    testString: assert(!isBalanced(testCases[13]), '<code>isBalanced("]][]][[]][[[")</code> should return true.');
  - text: <code>isBalanced("][]][][[")</code> should return true.
    testString: assert(!isBalanced(testCases[14]), '<code>isBalanced("][]][][[")</code> should return true.');
  - text: <code>isBalanced("][][")</code> should return true.
    testString: assert(!isBalanced(testCases[15]), '<code>isBalanced("][][")</code> should return true.');
  - text: <code>isBalanced("[[]]][][][[]][")</code> should return true.
    testString: assert(!isBalanced(testCases[16]), '<code>isBalanced("[[]]][][][[]][")</code> should return true.');
  - text: <code>isBalanced("")</code> should return true.
    testString: assert(isBalanced(testCases[17]), '<code>isBalanced("")</code> should return true.');

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


### After Test
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
