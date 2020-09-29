---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
---

## Description
<section id='description'>
When a condition for an <code>if</code> statement is true, the block of code following it is executed. What about when that condition is false?  Normally nothing would happen. With an <code>else</code> statement, an alternate block of code can be executed.

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

</section>

## Instructions
<section id='instructions'>
Combine the <code>if</code> statements into a single <code>if/else</code> statement.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should only have one <code>if</code> statement in the editor
    testString: assert(code.match(/if/g).length === 1);
  - text: You should use an <code>else</code> statement
    testString: assert(/else/g.test(code));
  - text: <code>testElse(4)</code> should return "5 or Smaller"
    testString: assert(testElse(4) === "5 or Smaller");
  - text: <code>testElse(5)</code> should return "5 or Smaller"
    testString: assert(testElse(5) === "5 or Smaller");
  - text: <code>testElse(6)</code> should return "Bigger than 5"
    testString: assert(testElse(6) === "Bigger than 5");
  - text: <code>testElse(10)</code> should return "Bigger than 5".
    testString: assert(testElse(10) === "Bigger than 5");
  - text: You should not change the code above or below the specified comments.
    testString: assert(/var result = "";/.test(code) && /return result;/.test(code));

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

testElse(4);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function testElse(val) {
  var result = "";
  if(val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
```

</section>
