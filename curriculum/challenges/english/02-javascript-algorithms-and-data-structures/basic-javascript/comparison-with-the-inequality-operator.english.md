---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
---

## Description
<section id='description'>
The inequality operator (<code>!=</code>) is the opposite of the equality operator. It means "Not Equal" and returns <code>false</code> where equality would return <code>true</code> and <em>vice versa</em>. Like the equality operator, the inequality operator will convert data types of values while comparing.
<strong>Examples</strong>
<blockquote>1 != 2      // true<br>1 != "1"    // false<br>1 != '1'    // false<br>1 != true   // false<br>0 != false  // false</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the inequality operator <code>!=</code> in the <code>if</code> statement so that the function will return "Not Equal" when <code>val</code> is not equivalent to <code>99</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testNotEqual(99)</code> should return "Equal"
    testString: assert(testNotEqual(99) === "Equal", '<code>testNotEqual(99)</code> should return "Equal"');
  - text: <code>testNotEqual("99")</code> should return "Equal"
    testString: assert(testNotEqual("99") === "Equal", '<code>testNotEqual("99")</code> should return "Equal"');
  - text: <code>testNotEqual(12)</code> should return "Not Equal"
    testString: assert(testNotEqual(12) === "Not Equal", '<code>testNotEqual(12)</code> should return "Not Equal"');
  - text: <code>testNotEqual("12")</code> should return "Not Equal"
    testString: assert(testNotEqual("12") === "Not Equal", '<code>testNotEqual("12")</code> should return "Not Equal"');
  - text: <code>testNotEqual("bob")</code> should return "Not Equal"
    testString: assert(testNotEqual("bob") === "Not Equal", '<code>testNotEqual("bob")</code> should return "Not Equal"');
  - text: You should use the <code>!=</code> operator
    testString: assert(code.match(/(?!!==)!=/), 'You should use the <code>!=</code> operator');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```

</section>
