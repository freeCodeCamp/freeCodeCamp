---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
---

## Description

<section id='description'>

Strict equality (`===`) is the counterpart to the equality operator (`==`). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

**Examples**

```js
3 ===  3   // true
3 === '3'  // false
```

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

</section>

## Instructions

<section id='instructions'>

Use the strict equality operator in the `if` statement so the function will return "Equal" when `val` is strictly equal to `7`

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
