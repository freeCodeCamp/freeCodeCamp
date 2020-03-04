---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
---

## Description
<section id='description'>
If you have many options to choose from, a <code>switch</code> statement can be easier to write than many chained <code>if</code>/<code>else if</code> statements. The following:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

can be replaced with:

```js
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

</section>

## Instructions
<section id='instructions'>
Change the chained <code>if</code>/<code>else if</code> statements into a <code>switch</code> statement.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not use any <code>else</code> statements anywhere in the editor
    testString: assert(!/else/g.test(code));
  - text: You should not use any <code>if</code> statements anywhere in the editor
    testString: assert(!/if/g.test(code));
  - text: You should have at least four <code>break</code> statements
    testString: assert(code.match(/break/g).length >= 4);
  - text: <code>chainToSwitch("bob")</code> should be "Marley"
    testString: assert(chainToSwitch("bob") === "Marley");
  - text: <code>chainToSwitch(42)</code> should be "The Answer"
    testString: assert(chainToSwitch(42) === "The Answer");
  - text: "<code>chainToSwitch(1)</code> should be \"There is no #1\""
    testString: "assert(chainToSwitch(1) === \"There is no #1\");"
  - text: <code>chainToSwitch(99)</code> should be "Missed me by this much!"
    testString: assert(chainToSwitch(99) === "Missed me by this much!");
  - text: <code>chainToSwitch(7)</code> should be "Ate Nine"
    testString: assert(chainToSwitch(7) === "Ate Nine");
  - text: <code>chainToSwitch("John")</code> should be "" (empty string)
    testString: assert(chainToSwitch("John") === "");
  - text: <code>chainToSwitch(156)</code> should be "" (empty string)
    testString: assert(chainToSwitch(156) === "");

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

chainToSwitch(7);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```

</section>
