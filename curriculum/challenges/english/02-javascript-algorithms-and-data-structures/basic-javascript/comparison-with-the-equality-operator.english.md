---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
---

## Description
<section id='description'>
There are many <dfn>Comparison Operators</dfn> in JavaScript. All of these operators return a boolean <code>true</code> or <code>false</code> value.
The most basic operator is the equality operator <code>==</code>. The equality operator compares two values and returns <code>true</code> if they're equivalent or <code>false</code> if they are not. Note that equality is different from assignment (<code>=</code>), which assigns the value at the right of the operator to a variable in the left.
<blockquote>function equalityTest(myVal) {<br>&nbsp;&nbsp;if (myVal == 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp; return "Equal";<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return "Not Equal";<br>}</blockquote>
If <code>myVal</code> is equal to <code>10</code>, the equality operator returns <code>true</code>, so the code in the curly braces will execute, and the function will return <code>"Equal"</code>. Otherwise, the function will return <code>"Not Equal"</code>.
In order for JavaScript to compare two different <code>data types</code> (for example, <code>numbers</code> and <code>strings</code>), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:
<blockquote>1   ==  1    // true<br>1   ==  2    // false<br>1   == '1'   // true<br>"3"  ==  3    // true</blockquote>
</section>

## Instructions
<section id='instructions'>
Add the <code>equality operator</code> to the indicated line so that the function will return "Equal" when <code>val</code> is equivalent to <code>12</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code> should return "Not Equal"
    testString: assert(testEqual(10) === "Not Equal", '<code>testEqual(10)</code> should return "Not Equal"');
  - text: <code>testEqual(12)</code> should return "Equal"
    testString: assert(testEqual(12) === "Equal", '<code>testEqual(12)</code> should return "Equal"');
  - text: <code>testEqual("12")</code> should return "Equal"
    testString: assert(testEqual("12") === "Equal", '<code>testEqual("12")</code> should return "Equal"');
  - text: You should use the <code>==</code> operator
    testString: assert(code.match(/==/g) && !code.match(/===/g), 'You should use the <code>==</code> operator');

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

// Change this value to test
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
