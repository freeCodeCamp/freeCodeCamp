---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
---

## Description
<section id='description'>
Sometimes you will need to test more than one thing at a time. The <dfn>logical and</dfn> operator (<code>&&</code>) returns <code>true</code> if and only if the <dfn>operands</dfn> to the left and right of it are true.
The same effect could be achieved by nesting an if statement inside another if:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

will only return "Yes" if <code>num</code> is greater than <code>5</code> and less than <code>10</code>. The same logic can be written as:

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

</section>

## Instructions
<section id='instructions'>
Replace the two if statements with one statement, using the && operator, which will return <code>"Yes"</code> if <code>val</code> is less than or equal to <code>50</code> and greater than or equal to <code>25</code>. Otherwise, will return <code>"No"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use the <code>&&</code> operator once
    testString: assert(code.match(/&&/g).length === 1);
  - text: You should only have one <code>if</code> statement
    testString: assert(code.match(/if/g).length === 1);
  - text: <code>testLogicalAnd(0)</code> should return "No"
    testString: assert(testLogicalAnd(0) === "No");
  - text: <code>testLogicalAnd(24)</code> should return "No"
    testString: assert(testLogicalAnd(24) === "No");
  - text: <code>testLogicalAnd(25)</code> should return "Yes"
    testString: assert(testLogicalAnd(25) === "Yes");
  - text: <code>testLogicalAnd(30)</code> should return "Yes"
    testString: assert(testLogicalAnd(30) === "Yes");
  - text: <code>testLogicalAnd(50)</code> should return "Yes"
    testString: assert(testLogicalAnd(50) === "Yes");
  - text: <code>testLogicalAnd(51)</code> should return "No"
    testString: assert(testLogicalAnd(51) === "No");
  - text: <code>testLogicalAnd(75)</code> should return "No"
    testString: assert(testLogicalAnd(75) === "No");
  - text: <code>testLogicalAnd(80)</code> should return "No"
    testString: assert(testLogicalAnd(80) === "No");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```

</section>
