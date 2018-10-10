---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
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
    testString: 'assert(!/else/g.test(code), "You should not use any <code>else</code> statements anywhere in the editor");'
  - text: ''
    testString: 'assert(!/if/g.test(code), "You should not use any <code>if</code> statements anywhere in the editor");'
  - text: ''
    testString: 'assert(code.match(/break/g).length >= 4, "You should have at least four <code>break</code> statements");'
  - text: ''
    testString: 'assert(chainToSwitch("bob") === "Marley", "<code>chainToSwitch("bob")</code> should be "Marley"");'
  - text: ''
    testString: 'assert(chainToSwitch(42) === "The Answer", "<code>chainToSwitch(42)</code> should be "The Answer"");'
  - text: ''
    testString: 'assert(chainToSwitch(1) === "There is no #1", "<code>chainToSwitch(1)</code> should be "There is no #1"");'
  - text: ''
    testString: 'assert(chainToSwitch(99) === "Missed me by this much!", "<code>chainToSwitch(99)</code> should be "Missed me by this much!"");'
  - text: ''
    testString: 'assert(chainToSwitch(7) === "Ate Nine", "<code>chainToSwitch(7)</code> should be "Ate Nine"");'
  - text: ''
    testString: 'assert(chainToSwitch("John") === "", "<code>chainToSwitch("John")</code> should be "" (empty string)");'
  - text: ''
    testString: 'assert(chainToSwitch(156) === "", "<code>chainToSwitch(156)</code> should be "" (empty string)");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
