---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
---

## Description
<section id='description'>
<code>if/else</code> statements can be chained together for complex logic. Here is <dfn>pseudocode</dfn> of multiple chained <code>if</code> / <code>else if</code> statements:
<blockquote>if (<em>condition1</em>) {<br>&nbsp;&nbsp;<em>statement1</em><br>} else if (<em>condition2</em>) {<br>&nbsp;&nbsp;<em>statement2</em><br>} else if (<em>condition3</em>) {<br>&nbsp;&nbsp;<em>statement3</em><br>. . .<br>} else {<br>&nbsp;&nbsp;<em>statementN</em><br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Write chained <code>if</code>/<code>else if</code> statements to fulfill the following conditions:
<code>num &lt;   5</code> - return "Tiny"<br><code>num &lt;  10</code> - return "Small"<br><code>num &lt; 15</code> - return "Medium"<br><code>num &lt; 20</code> - return "Large"<br><code>num >= 20</code>  - return "Huge"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have at least four <code>else</code> statements
    testString: 'assert(code.match(/else/g).length > 3, "You should have at least four <code>else</code> statements");'
  - text: You should have at least four <code>if</code> statements
    testString: 'assert(code.match(/if/g).length > 3, "You should have at least four <code>if</code> statements");'
  - text: You should have at least one <code>return</code> statement
    testString: 'assert(code.match(/return/g).length >= 1, "You should have at least one <code>return</code> statement");'
  - text: <code>testSize(0)</code> should return "Tiny"
    testString: 'assert(testSize(0) === "Tiny", "<code>testSize(0)</code> should return "Tiny"");'
  - text: <code>testSize(4)</code> should return "Tiny"
    testString: 'assert(testSize(4) === "Tiny", "<code>testSize(4)</code> should return "Tiny"");'
  - text: <code>testSize(5)</code> should return "Small"
    testString: 'assert(testSize(5) === "Small", "<code>testSize(5)</code> should return "Small"");'
  - text: <code>testSize(8)</code> should return "Small"
    testString: 'assert(testSize(8) === "Small", "<code>testSize(8)</code> should return "Small"");'
  - text: <code>testSize(10)</code> should return "Medium"
    testString: 'assert(testSize(10) === "Medium", "<code>testSize(10)</code> should return "Medium"");'
  - text: <code>testSize(14)</code> should return "Medium"
    testString: 'assert(testSize(14) === "Medium", "<code>testSize(14)</code> should return "Medium"");'
  - text: <code>testSize(15)</code> should return "Large"
    testString: 'assert(testSize(15) === "Large", "<code>testSize(15)</code> should return "Large"");'
  - text: <code>testSize(17)</code> should return "Large"
    testString: 'assert(testSize(17) === "Large", "<code>testSize(17)</code> should return "Large"");'
  - text: <code>testSize(20)</code> should return "Huge"
    testString: 'assert(testSize(20) === "Huge", "<code>testSize(20)</code> should return "Huge"");'
  - text: <code>testSize(25)</code> should return "Huge"
    testString: 'assert(testSize(25) === "Huge", "<code>testSize(25)</code> should return "Huge"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```

</section>
