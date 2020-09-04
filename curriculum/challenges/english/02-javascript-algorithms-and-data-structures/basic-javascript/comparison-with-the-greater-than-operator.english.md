---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
---

## Description
<section id='description'>
The greater than operator (<code>&gt;</code>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns <code>true</code>. Otherwise, it returns <code>false</code>.
Like the equality operator, greater than operator will convert data types of values while comparing.
<strong>Examples</strong>

```js
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
```

</section>

## Instructions
<section id='instructions'>
Add the greater than operator to the indicated lines so that the return statements make sense.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterThan(0)</code> should return "10 or Under"
    testString: assert(testGreaterThan(0) === "10 or Under");
  - text: <code>testGreaterThan(10)</code> should return "10 or Under"
    testString: assert(testGreaterThan(10) === "10 or Under");
  - text: <code>testGreaterThan(11)</code> should return "Over 10"
    testString: assert(testGreaterThan(11) === "Over 10");
  - text: <code>testGreaterThan(99)</code> should return "Over 10"
    testString: assert(testGreaterThan(99) === "Over 10");
  - text: <code>testGreaterThan(100)</code> should return "Over 10"
    testString: assert(testGreaterThan(100) === "Over 10");
  - text: <code>testGreaterThan(101)</code> should return "Over 100"
    testString: assert(testGreaterThan(101) === "Over 100");
  - text: <code>testGreaterThan(150)</code> should return "Over 100"
    testString: assert(testGreaterThan(150) === "Over 100");
  - text: You should use the <code>&gt;</code> operator at least twice
    testString: assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```

</section>
