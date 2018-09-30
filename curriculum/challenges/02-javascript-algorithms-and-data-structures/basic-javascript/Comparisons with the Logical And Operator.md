---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
---

## Description
<section id='description'>
Sometimes you will need to test more than one thing at a time. The <dfn>logical and</dfn> operator (<code>&&</code>) returns <code>true</code> if and only if the <dfn>operands</dfn> to the left and right of it are true.
The same effect could be achieved by nesting an if statement inside another if:
<blockquote>if (num > 5) {<br>&nbsp;&nbsp;if (num < 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Yes";<br>&nbsp;&nbsp;}<br>}<br>return "No";</blockquote>
will only return "Yes" if <code>num</code> is greater than <code>5</code> and less than <code>10</code>. The same logic can be written as:
<blockquote>if (num > 5 && num < 10) {<br>&nbsp;&nbsp;return "Yes";<br>}<br>return "No";</blockquote>
</section>

## Instructions
<section id='instructions'>
Combine the two if statements into one statement which will return <code>"Yes"</code> if <code>val</code> is less than or equal to <code>50</code> and greater than or equal to <code>25</code>. Otherwise, will return <code>"No"</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: You should use the <code>&&</code> operator once
  testString: 'assert(code.match(/&&/g).length === 1, "You should use the <code>&&</code> operator once");'
- text: You should only have one <code>if</code> statement
  testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement");'
- text: <code>testLogicalAnd(0)</code> should return "No"
  testString: 'assert(testLogicalAnd(0) === "No", "<code>testLogicalAnd(0)</code> should return "No"");'
- text: <code>testLogicalAnd(24)</code> should return "No"
  testString: 'assert(testLogicalAnd(24) === "No", "<code>testLogicalAnd(24)</code> should return "No"");'
- text: <code>testLogicalAnd(25)</code> should return "Yes"
  testString: 'assert(testLogicalAnd(25) === "Yes", "<code>testLogicalAnd(25)</code> should return "Yes"");'
- text: <code>testLogicalAnd(30)</code> should return "Yes"
  testString: 'assert(testLogicalAnd(30) === "Yes", "<code>testLogicalAnd(30)</code> should return "Yes"");'
- text: <code>testLogicalAnd(50)</code> should return "Yes"
  testString: 'assert(testLogicalAnd(50) === "Yes", "<code>testLogicalAnd(50)</code> should return "Yes"");'
- text: <code>testLogicalAnd(51)</code> should return "No"
  testString: 'assert(testLogicalAnd(51) === "No", "<code>testLogicalAnd(51)</code> should return "No"");'
- text: <code>testLogicalAnd(75)</code> should return "No"
  testString: 'assert(testLogicalAnd(75) === "No", "<code>testLogicalAnd(75)</code> should return "No"");'
- text: <code>testLogicalAnd(80)</code> should return "No"
  testString: 'assert(testLogicalAnd(80) === "No", "<code>testLogicalAnd(80)</code> should return "No"");'

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

// Change this value to test
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
