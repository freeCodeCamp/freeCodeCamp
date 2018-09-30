---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
---

## Description
<section id='description'>
The strict inequality operator (<code>!==</code>) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns <code>false</code> where strict equality would return <code>true</code> and <em>vice versa</em>. Strict inequality will not convert data types.
<strong>Examples</strong>
<blockquote>3 !== 3   // false<br>3 !== '3' // true<br>4 !== 3   // true</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the <code>strict inequality operator</code> to the <code>if</code> statement so the function will return "Not Equal" when <code>val</code> is not strictly equal to <code>17</code>
</section>

## Tests
<section id='tests'>

```yml
- text: <code>testStrictNotEqual(17)</code> should return "Equal"
  testString: 'assert(testStrictNotEqual(17) === "Equal", "<code>testStrictNotEqual(17)</code> should return "Equal"");'
- text: <code>testStrictNotEqual("17")</code> should return "Not Equal"
  testString: 'assert(testStrictNotEqual("17") === "Not Equal", "<code>testStrictNotEqual("17")</code> should return "Not Equal"");'
- text: <code>testStrictNotEqual(12)</code> should return "Not Equal"
  testString: 'assert(testStrictNotEqual(12) === "Not Equal", "<code>testStrictNotEqual(12)</code> should return "Not Equal"");'
- text: <code>testStrictNotEqual("bob")</code> should return "Not Equal"
  testString: 'assert(testStrictNotEqual("bob") === "Not Equal", "<code>testStrictNotEqual("bob")</code> should return "Not Equal"");'
- text: You should use the <code>!==</code> operator
  testString: 'assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0, "You should use the <code>!==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```

</section>
