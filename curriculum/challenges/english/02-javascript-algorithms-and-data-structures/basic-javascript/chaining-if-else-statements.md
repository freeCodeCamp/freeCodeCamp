---
id: 56533eb9ac21ba0edf2244dc
title: Chaining If Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
---

## Description
<section id='description'>
<code>if/else</code> statements can be chained together for complex logic. Here is <dfn>pseudocode</dfn> of multiple chained <code>if</code> / <code>else if</code> statements:

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

</section>

## Instructions
<section id='instructions'>
Write chained <code>if</code>/<code>else if</code> statements to fulfill the following conditions:
<code>num &lt; 5</code> - return "Tiny"<br><code>num &lt; 10</code> - return "Small"<br><code>num &lt; 15</code> - return "Medium"<br><code>num &lt; 20</code> - return "Large"<br><code>num >= 20</code>  - return "Huge"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have at least four <code>else</code> statements
    testString: assert(code.match(/else/g).length > 3);
  - text: You should have at least four <code>if</code> statements
    testString: assert(code.match(/if/g).length > 3);
  - text: You should have at least one <code>return</code> statement
    testString: assert(code.match(/return/g).length >= 1);
  - text: <code>testSize(0)</code> should return "Tiny"
    testString: assert(testSize(0) === "Tiny");
  - text: <code>testSize(4)</code> should return "Tiny"
    testString: assert(testSize(4) === "Tiny");
  - text: <code>testSize(5)</code> should return "Small"
    testString: assert(testSize(5) === "Small");
  - text: <code>testSize(8)</code> should return "Small"
    testString: assert(testSize(8) === "Small");
  - text: <code>testSize(10)</code> should return "Medium"
    testString: assert(testSize(10) === "Medium");
  - text: <code>testSize(14)</code> should return "Medium"
    testString: assert(testSize(14) === "Medium");
  - text: <code>testSize(15)</code> should return "Large"
    testString: assert(testSize(15) === "Large");
  - text: <code>testSize(17)</code> should return "Large"
    testString: assert(testSize(17) === "Large");
  - text: <code>testSize(20)</code> should return "Huge"
    testString: assert(testSize(20) === "Huge");
  - text: <code>testSize(25)</code> should return "Huge"
    testString: assert(testSize(25) === "Huge");

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
