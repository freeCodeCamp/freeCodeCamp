---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
---

## Description

<section id='description'>

There are many <dfn>comparison operators</dfn> in JavaScript. All of these operators return a boolean `true` or `false` value.

The most basic operator is the equality operator `==`. The equality operator compares two values and returns `true` if they're equivalent or `false` if they are not. Note that equality is different from assignment (`=`), which assigns the value on the right of the operator to a variable on the left.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```

If `myVal` is equal to `10`, the equality operator returns `true`, so the code in the curly braces will execute, and the function will return `"Equal"`. Otherwise, the function will return `"Not Equal"`. In order for JavaScript to compare two different <dfn>data types</dfn> (for example, `numbers` and `strings`), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

```js
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
```

</section>

## Instructions

<section id='instructions'>

Add the equality operator to the indicated line so that the function will return "Equal" when `val` is equivalent to `12`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code> should return "Not Equal"
    testString: assert(testEqual(10) === "Not Equal");
  - text: <code>testEqual(12)</code> should return "Equal"
    testString: assert(testEqual(12) === "Equal");
  - text: <code>testEqual("12")</code> should return "Equal"
    testString: assert(testEqual("12") === "Equal");
  - text: You should use the <code>==</code> operator
    testString: assert(code.match(/==/g) && !code.match(/===/g));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

</div>

</section>

## Solution

<section id='solution'>

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
