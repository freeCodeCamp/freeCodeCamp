---
id: 56533eb9ac21ba0edf2244db
title: Introducing Else If Statements
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/else/g).length > 1, "You should have at least two <code>else</code> statements");'
  - text: ''
    testString: 'assert(code.match(/if/g).length > 1, "You should have at least two <code>if</code> statements");'
  - text: ''
    testString: 'assert(code.match(/if\s*\((.+)\)\s*\{[\s\S]+\}\s*else if\s*\((.+)\)\s*\{[\s\S]+\}\s*else\s*\{[\s\S]+\s*\}/), "You should have closing and opening curly braces for each condition in your if else statement");'
  - text: ''
    testString: 'assert(testElseIf(0) === "Smaller than 5", "<code>testElseIf(0)</code> should return "Smaller than 5"");'
  - text: ''
    testString: 'assert(testElseIf(5) === "Between 5 and 10", "<code>testElseIf(5)</code> should return "Between 5 and 10"");'
  - text: ''
    testString: 'assert(testElseIf(7) === "Between 5 and 10", "<code>testElseIf(7)</code> should return "Between 5 and 10"");'
  - text: ''
    testString: 'assert(testElseIf(10) === "Between 5 and 10", "<code>testElseIf(10)</code> should return "Between 5 and 10"");'
  - text: ''
    testString: 'assert(testElseIf(12) === "Greater than 10", "<code>testElseIf(12)</code> should return "Greater than 10"");'

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
// solution required
```
</section>
