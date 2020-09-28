---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
---

## Description
<section id='description'>
If you have many options to choose from, use a <dfn>switch</dfn> statement. A <code>switch</code> statement tests a value and can have many <dfn>case</dfn> statements which define various possible values. Statements are executed from the first matched <code>case</code> value until a <code>break</code> is encountered.
Here is an example of a <code>switch</code> statement:

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

<code>case</code> values are tested with strict equality (<code>===</code>). The <code>break</code> tells JavaScript to stop executing statements. If the <code>break</code> is omitted, the next statement will be executed.
</section>

## Instructions
<section id='instructions'>
Write a switch statement which tests <code>val</code> and sets <code>answer</code> for the following conditions:<br><code>1</code> - "alpha"<br><code>2</code> - "beta"<br><code>3</code> - "gamma"<br><code>4</code> - "delta"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>caseInSwitch(1)</code> should have a value of "alpha"
    testString: assert(caseInSwitch(1) === "alpha");
  - text: <code>caseInSwitch(2)</code> should have a value of "beta"
    testString: assert(caseInSwitch(2) === "beta");
  - text: <code>caseInSwitch(3)</code> should have a value of "gamma"
    testString: assert(caseInSwitch(3) === "gamma");
  - text: <code>caseInSwitch(4)</code> should have a value of "delta"
    testString: assert(caseInSwitch(4) === "delta");
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: You should have at least 3 <code>break</code> statements
    testString: assert(code.match(/break/g).length > 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function caseInSwitch(val) {
  var answer = "";

  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```

</section>
