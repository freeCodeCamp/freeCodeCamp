---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
---

## Description
<section id='description'>
The strict inequality operator (<code>!==</code>) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns <code>false</code> where strict equality would return <code>true</code> and <em>vice versa</em>. Strict inequality will not convert data types.
<strong>Examples</strong>

```js
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
```

</section>

## Instructions
<section id='instructions'>
Add the strict inequality operator to the <code>if</code> statement so the function will return "Not Equal" when <code>val</code> is not strictly equal to <code>17</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testStrictNotEqual(17)</code> should return "Equal"
    testString: assert(testStrictNotEqual(17) === "Equal");
  - text: <code>testStrictNotEqual("17")</code> should return "Not Equal"
    testString: assert(testStrictNotEqual("17") === "Not Equal");
  - text: <code>testStrictNotEqual(12)</code> should return "Not Equal"
    testString: assert(testStrictNotEqual(12) === "Not Equal");
  - text: <code>testStrictNotEqual("bob")</code> should return "Not Equal"
    testString: assert(testStrictNotEqual("bob") === "Not Equal");
  - text: You should use the <code>!==</code> operator
    testString: assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

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
