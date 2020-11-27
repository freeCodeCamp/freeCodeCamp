---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
---

## Description

<section id='description'>

The <dfn>logical or</dfn> operator (`||`) returns `true` if either of the <dfn>operands</dfn> is `true`. Otherwise, it returns `false`.

The <dfn>logical or</dfn> operator is composed of two pipe symbols: (`||`). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

will return "Yes" only if `num` is between `5` and `10` (5 and 10 included). The same logic can be written as:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

</section>

## Instructions

<section id='instructions'>

Combine the two `if` statements into one statement which returns `"Outside"` if `val` is not between `10` and `20`, inclusive. Otherwise, return `"Inside"`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should use the <code>||</code> operator once
    testString: assert(code.match(/\|\|/g).length === 1);
  - text: You should only have one <code>if</code> statement
    testString: assert(code.match(/if/g).length === 1);
  - text: <code>testLogicalOr(0)</code> should return "Outside"
    testString: assert(testLogicalOr(0) === "Outside");
  - text: <code>testLogicalOr(9)</code> should return "Outside"
    testString: assert(testLogicalOr(9) === "Outside");
  - text: <code>testLogicalOr(10)</code> should return "Inside"
    testString: assert(testLogicalOr(10) === "Inside");
  - text: <code>testLogicalOr(15)</code> should return "Inside"
    testString: assert(testLogicalOr(15) === "Inside");
  - text: <code>testLogicalOr(19)</code> should return "Inside"
    testString: assert(testLogicalOr(19) === "Inside");
  - text: <code>testLogicalOr(20)</code> should return "Inside"
    testString: assert(testLogicalOr(20) === "Inside");
  - text: <code>testLogicalOr(21)</code> should return "Outside"
    testString: assert(testLogicalOr(21) === "Outside");
  - text: <code>testLogicalOr(25)</code> should return "Outside"
    testString: assert(testLogicalOr(25) === "Outside");

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

</div>

</section>

## Solution

<section id='solution'>

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```

</section>
