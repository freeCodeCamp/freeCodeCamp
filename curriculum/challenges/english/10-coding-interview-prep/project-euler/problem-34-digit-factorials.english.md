---
id: 5900f38e1000cf542c50fea1
challengeType: 5
isHidden: false
title: 'Problem 34: Digit factorials'
forumTopicId: 301998
---

## Description
<section id='description'>

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

**Note:** as 1! = 1 and 2! = 2 are not sums they are not included.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>digitFactorial()</code> should return an object.
    testString: assert.typeOf(digitFactorial(), 'object');
  - text: |
      <code>digitFactorial()</code> should return { sum: 40730, numbers: [145, 40585] }.
    testString: |
      assert.deepEqual(digitFactorial(), { sum: 40730, numbers: [145, 40585] });

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function digitFactorial() {
  // Good luck!
  var sum = 0;
  var numbers = [];
  return { sum, numbers };
}

digitFactorial();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
