---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
---

## Description
<section id='description'>
If you have many options to choose from, use a <code>switch</code> statement. A <code>switch</code> statement tests a value and can have many <code>case</code> statements which define various possible values. Statements are executed from the first matched <code>case</code> value until a <code>break</code> is encountered.
Here is a <dfn>pseudocode</dfn> example:
<blockquote>switch(num) {<br>&nbsp;&nbsp;case value1:<br>&nbsp;&nbsp;&nbsp;&nbsp;statement1;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case value2:<br>&nbsp;&nbsp;&nbsp;&nbsp;statement2;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>...<br>&nbsp;&nbsp;case valueN:<br>&nbsp;&nbsp;&nbsp;&nbsp;statementN;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</blockquote>
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
    testString: 'assert(caseInSwitch(1) === "alpha", "<code>caseInSwitch(1)</code> should have a value of "alpha"");'
  - text: <code>caseInSwitch(2)</code> should have a value of "beta"
    testString: 'assert(caseInSwitch(2) === "beta", "<code>caseInSwitch(2)</code> should have a value of "beta"");'
  - text: <code>caseInSwitch(3)</code> should have a value of "gamma"
    testString: 'assert(caseInSwitch(3) === "gamma", "<code>caseInSwitch(3)</code> should have a value of "gamma"");'
  - text: <code>caseInSwitch(4)</code> should have a value of "delta"
    testString: 'assert(caseInSwitch(4) === "delta", "<code>caseInSwitch(4)</code> should have a value of "delta"");'
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: You should have at least 3 <code>break</code> statements
    testString: 'assert(code.match(/break/g).length > 2, "You should have at least 3 <code>break</code> statements");'

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

// Change this value to test
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
