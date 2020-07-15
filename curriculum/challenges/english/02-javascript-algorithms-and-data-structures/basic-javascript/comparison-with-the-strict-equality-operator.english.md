---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
---

## Description
<section id='description'>
Strict equality (<code>===</code>) is the counterpart to the equality operator (<code>==</code>). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
<strong>Examples</strong>

```js
3 ===  3   // true
3 === '3'  // false
```

In the second example, <code>3</code> is a <code>Number</code> type and <code>'3'</code> is a <code>String</code> type.
</section>

## Instructions
<section id='instructions'>
Use the strict equality operator in the <code>if</code> statement so the function will return "Equal" when <code>val</code> is strictly equal to <code>7</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrict(10)</code> should return "Not Equal"
    testString: assert(testStrict(10) === "Not Equal");
  - text: <code>testStrict(7)</code> should return "Equal"
    testString: assert(testStrict(7) === "Equal");
  - text: <code>testStrict("7")</code> should return "Not Equal"
    testString: assert(testStrict("7") === "Not Equal");
  - text: You should use the <code>===</code> operator
    testString: assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
