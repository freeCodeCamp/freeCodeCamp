---
id: 5900f3bb1000cf542c50fece
challengeType: 5
isHidden: false
title: 'Problem 79: Passcode derivation'
forumTopicId: 302192
---

## Description
<section id='description'>

A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

The array, `keylog`, contains fifty successful login attempts.

Given that the three characters are always asked for in order, analyze the array so as to determine the shortest possible secret passcode of unknown length.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>passcodeDerivation(keylog)</code> should return a number.
    testString: assert(typeof passcodeDerivation(keylog) === 'number');
  - text: <code>passcodeDerivation(keylog)</code> should return 73162890.
    testString: assert.strictEqual(passcodeDerivation(keylog), 73162890);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function passcodeDerivation(arr) {
  // Good luck!
  return true;
}

// Only change code above this line

const keylog = [
  319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716,
];

passcodeDerivation(keylog);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
