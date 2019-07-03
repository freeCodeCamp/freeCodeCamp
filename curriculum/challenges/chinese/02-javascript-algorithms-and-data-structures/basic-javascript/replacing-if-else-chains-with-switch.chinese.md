---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
challengeType: 1

videoUrl: ''
localeTitle: Replacing If Else Chains with Switch
---

## Description
<section id='description'>
如果你有多个选项需要选择，<code>switch</code>语句写起来会比多个串联的<code>if</code>/<code>if else</code>语句容易些，譬如:
<blockquote>if (val === 1) {<br>&nbsp;&nbsp;answer = "a";<br>} else if (val === 2) {<br>&nbsp;&nbsp;answer = "b";<br>} else {<br>&nbsp;&nbsp;answer = "c";<br>}</blockquote>
可以被下面替代：
<blockquote>switch(val) {<br>&nbsp;&nbsp;case 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;answer = "a";<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;answer = "b";<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;default:<br>&nbsp;&nbsp;&nbsp;&nbsp;answer = "c";<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
把串联的<code>if</code>/<code>if else</code>语句改成<code>switch</code>语句。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要使用<code>else</code>表达式
    testString: assert(!/else/g.test(code), '不要使用<code>else</code>表达式');
  - text: 不要使用<code>if</code>表达式
    testString: assert(!/if/g.test(code), '不要使用<code>if</code>表达式');
  - text: 你应该有至少 4 个<code>break</code>表达式
    testString: assert(code.match(/break/g).length >= 4, '你应该有至少 4 个<code>break</code>表达式');
  - text: "<code>chainToSwitch('bob')</code>应该为 'Marley'"
    testString: assert(chainToSwitch("bob") === "Marley", '<code>chainToSwitch("bob")</code>应该为 "Marley"');
  - text: "<code>chainToSwitch(42)</code>应该为 'The Answer'"
    testString: assert(chainToSwitch(42) === "The Answer", '<code>chainToSwitch(42)</code>应该为 "The Answer"');
  - text: "<code>chainToSwitch(1)</code>应该为 'There is no #1'"
    testString: assert(chainToSwitch(1) === "There is no #1", '<code>chainToSwitch(1)</code>应该为 "There is no #1"');
  - text: "<code>chainToSwitch(99)</code>应该为 'Missed me by this much!'"
    testString: assert(chainToSwitch(99) === "Missed me by this much!", '<code>chainToSwitch(99)</code>应该为 "Missed me by this much!"');
  - text: "<code>chainToSwitch(7)</code>应该为 'Ate Nine'"
    testString: assert(chainToSwitch(7) === "Ate Nine", '<code>chainToSwitch(7)</code>应该为 "Ate Nine"');
  - text: "<code>chainToSwitch('John')</code>应该为 '' (empty string)"
    testString: assert(chainToSwitch("John") === "", '<code>chainToSwitch("John")</code>应该为 "" (empty string)');
  - text: "<code>chainToSwitch(156)</code>应该为 '' (empty string)"
    testString: assert(chainToSwitch(156) === "", '<code>chainToSwitch(156)</code>应该为 "" (empty string)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              