---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
---

## Description
<section id='description'>
If you have multiple conditions that need to be addressed, you can chain <code>if</code> statements together with <code>else if</code> statements.
<blockquote>if (num > 15) {<br>&nbsp;&nbsp;return "Bigger than 15";<br>} else if (num < 5) {<br>&nbsp;&nbsp;return "Smaller than 5";<br>} else {<br>&nbsp;&nbsp;return "Between 5 and 15";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Convert the logic to use <code>else if</code> statements.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have at least two <code>else</code> statements
    testString: assert(code.match(/else/g).length > 1, 'You should have at least two <code>else</code> statements');
  - text: You should have at least two <code>if</code> statements
    testString: assert(code.match(/if/g).length > 1, 'You should have at least two <code>if</code> statements');
  - text: You should have closing and opening curly braces for each condition
    testString: assert(code.match(/if\s*\((.+)\)\s*\{[\s\S]+\}\s*else if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/), 'You should have closing and opening curly braces for each condition in your if else statement');
  - text: <code>testElseIf(0)</code> should return "Smaller than 5"
    testString: assert(testElseIf(0) === "Smaller than 5", '<code>testElseIf(0)</code> should return "Smaller than 5"');
  - text: <code>testElseIf(5)</code> should return "Between 5 and 10"
    testString: assert(testElseIf(5) === "Between 5 and 10", '<code>testElseIf(5)</code> should return "Between 5 and 10"');
  - text: <code>testElseIf(7)</code> should return "Between 5 and 10"
    testString: assert(testElseIf(7) === "Between 5 and 10", '<code>testElseIf(7)</code> should return "Between 5 and 10"');
  - text: <code>testElseIf(10)</code> should return "Between 5 and 10"
    testString: assert(testElseIf(10) === "Between 5 and 10", '<code>testElseIf(10)</code> should return "Between 5 and 10"');
  - text: <code>testElseIf(12)</code> should return "Greater than 10"
    testString: assert(testElseIf(12) === "Greater than 10", '<code>testElseIf(12)</code> should return "Greater than 10"');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if(val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
```

</section>
