---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
localeTitle: 用一个 Switch 语句来替代多个 if else 语句
---

## Description
<section id='description'>
如果你有多个选项需要选择，<code>switch</code>语句写起来会比多个串联的<code>if</code>/<code>if else</code>语句容易些，譬如:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

可以被下面替代：

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
把串联的<code>if</code>/<code>if else</code>语句改成<code>switch</code>语句。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要使用<code>else</code>表达式。
    testString: assert(!/else/g.test(code));
  - text: 不要使用<code>if</code>表达式。
    testString: assert(!/if/g.test(code));
  - text: 你应该有至少 4 个<code>break</code>表达式。
    testString: assert(code.match(/break/g).length >= 4);
  - text: <code>chainToSwitch("bob")</code>应该为 "Marley"。
    testString: assert(chainToSwitch("bob") === "Marley");
  - text: <code>chainToSwitch(42)</code>应该为 "The Answer"。
    testString: assert(chainToSwitch(42) === "The Answer");
  - text: <code>chainToSwitch(1)</code>应该为 "There is no #1"。
    testString: "assert(chainToSwitch(1) === \"There is no #1\");"
  - text: <code>chainToSwitch(99)</code>应该为 "Missed me by this much!"。
    testString: assert(chainToSwitch(99) === "Missed me by this much!");
  - text: <code>chainToSwitch(7)</code>应该为 "Ate Nine"。
    testString: assert(chainToSwitch(7) === "Ate Nine");
  - text: <code>chainToSwitch("John")</code>应该为 "" (empty string)。
    testString: assert(chainToSwitch("John") === "");
  - text: <code>chainToSwitch(156)</code>应该为 "" (empty string)。
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

// Change this value to test
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
