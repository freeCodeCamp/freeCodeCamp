---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
---

## Description
<section id='description'>
If the <code>break</code> statement is omitted from a <code>switch</code> statement's <code>case</code>, the following <code>case</code> statement(s) are executed until a <code>break</code> is encountered. If you have multiple inputs with the same output, you can represent them in a <code>switch</code> statement like this:

```js
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Cases for 1, 2, and 3 will all produce the same result.
</section>

## Instructions
<section id='instructions'>
Write a switch statement to set <code>answer</code> for the following ranges:<br><code>1-3</code> - "Low"<br><code>4-6</code> - "Mid"<br><code>7-9</code> - "High"
<strong>Note</strong><br>You will need to have a <code>case</code> statement for each number in the range.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sequentialSizes(1)</code> should return "Low"
    testString: assert(sequentialSizes(1) === "Low");
  - text: <code>sequentialSizes(2)</code> should return "Low"
    testString: assert(sequentialSizes(2) === "Low");
  - text: <code>sequentialSizes(3)</code> should return "Low"
    testString: assert(sequentialSizes(3) === "Low");
  - text: <code>sequentialSizes(4)</code> should return "Mid"
    testString: assert(sequentialSizes(4) === "Mid");
  - text: <code>sequentialSizes(5)</code> should return "Mid"
    testString: assert(sequentialSizes(5) === "Mid");
  - text: <code>sequentialSizes(6)</code> should return "Mid"
    testString: assert(sequentialSizes(6) === "Mid");
  - text: <code>sequentialSizes(7)</code> should return "High"
    testString: assert(sequentialSizes(7) === "High");
  - text: <code>sequentialSizes(8)</code> should return "High"
    testString: assert(sequentialSizes(8) === "High");
  - text: <code>sequentialSizes(9)</code> should return "High"
    testString: assert(sequentialSizes(9) === "High");
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: You should have nine <code>case</code> statements
    testString: assert(code.match(/case/g).length === 9);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function sequentialSizes(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```

</section>
