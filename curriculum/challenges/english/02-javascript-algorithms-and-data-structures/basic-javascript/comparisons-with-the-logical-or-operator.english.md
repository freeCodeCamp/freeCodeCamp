---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
---

## Description
<section id='description'>
The <dfn>logical or</dfn> operator (<code>||</code>) returns <code>true</code> if either of the <dfn>operands</dfn> is <code>true</code>. Otherwise, it returns <code>false</code>.
The <dfn>logical or</dfn> operator is composed of two pipe symbols (<code>|</code>). This can typically be found between your Backspace and Enter keys.
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

will return "Yes" only if <code>num</code> is between <code>5</code> and <code>10</code> (5 and 10 included). The same logic can be written as:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

</section>

## Instructions
<section id='instructions'>
Combine the two <code>if</code> statements into one statement which returns <code>"Outside"</code> if <code>val</code> is not between <code>10</code> and <code>20</code>, inclusive. Otherwise, return <code>"Inside"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use the <code>||</code> operator once
    testString: assert(code.match(/\|\|/g).length === 1, 'You should use the <code>||</code> operator once');
  - text: You should only have one <code>if</code> statement
    testString: assert(code.match(/if/g).length === 1, 'You should only have one <code>if</code> statement');
  - text: <code>testLogicalOr(0)</code> should return "Outside"
    testString: assert(testLogicalOr(0) === "Outside", '<code>testLogicalOr(0)</code> should return "Outside"');
  - text: <code>testLogicalOr(9)</code> should return "Outside"
    testString: assert(testLogicalOr(9) === "Outside", '<code>testLogicalOr(9)</code> should return "Outside"');
  - text: <code>testLogicalOr(10)</code> should return "Inside"
    testString: assert(testLogicalOr(10) === "Inside", '<code>testLogicalOr(10)</code> should return "Inside"');
  - text: <code>testLogicalOr(15)</code> should return "Inside"
    testString: assert(testLogicalOr(15) === "Inside", '<code>testLogicalOr(15)</code> should return "Inside"');
  - text: <code>testLogicalOr(19)</code> should return "Inside"
    testString: assert(testLogicalOr(19) === "Inside", '<code>testLogicalOr(19)</code> should return "Inside"');
  - text: <code>testLogicalOr(20)</code> should return "Inside"
    testString: assert(testLogicalOr(20) === "Inside", '<code>testLogicalOr(20)</code> should return "Inside"');
  - text: <code>testLogicalOr(21)</code> should return "Outside"
    testString: assert(testLogicalOr(21) === "Outside", '<code>testLogicalOr(21)</code> should return "Outside"');
  - text: <code>testLogicalOr(25)</code> should return "Outside"
    testString: assert(testLogicalOr(25) === "Outside", '<code>testLogicalOr(25)</code> should return "Outside"');

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

// Change this value to test
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
