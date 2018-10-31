---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
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
    testString: 'assert(code.match(/if/g).length === 1, "You should only have one <code>if</code> statement in the editor");'
  - text: ''
    testString: 'assert(/else/g.test(code), "You should use an <code>else</code> statement");'
  - text: ''
    testString: 'assert(testElse(4) === "5 or Smaller", "<code>testElse(4)</code> should return "5 or Smaller"");'
  - text: ''
    testString: 'assert(testElse(5) === "5 or Smaller", "<code>testElse(5)</code> should return "5 or Smaller"");'
  - text: ''
    testString: 'assert(testElse(6) === "Bigger than 5", "<code>testElse(6)</code> should return "Bigger than 5"");'
  - text: ''
    testString: 'assert(testElse(10) === "Bigger than 5", "<code>testElse(10)</code> should return "Bigger than 5"");'
  - text: ''
    testString: 'assert(/var result = "";/.test(code) && /return result;/.test(code), "Do not change the code above or below the lines.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
