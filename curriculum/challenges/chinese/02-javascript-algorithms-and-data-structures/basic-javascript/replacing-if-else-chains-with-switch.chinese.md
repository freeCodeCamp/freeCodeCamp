---
id: 56533eb9ac21ba0edf2244e0
title: Replacing If Else Chains with Switch
challengeType: 1
videoUrl: ''
localeTitle: 如果用交换机替换其他链条
---

## Description
<section id="description">如果您有许多选项可供选择，那么<code>switch</code>语句比许多链接的<code>if</code> / <code>else if</code>语句更容易编写。下列： <blockquote> if（val === 1）{ <br> answer =“a”; <br> } else if（val === 2）{ <br> answer =“b”; <br> } else { <br> answer =“c”; <br> } </blockquote>可以替换为： <blockquote> switch（val）{ <br>情况1： <br> answer =“a”; <br>打破; <br>案例2： <br> answer =“b”; <br>打破; <br>默认： <br> answer =“c”; <br> } </blockquote></section>

## Instructions
<section id="instructions">将链接的<code>if</code> / <code>else if</code>语句更改为<code>switch</code>语句。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您不应该在编辑器中的任何位置使用任何<code>else</code>语句
    testString: 'assert(!/else/g.test(code), "You should not use any <code>else</code> statements anywhere in the editor");'
  - text: 您不应在编辑器中的任何位置使用任何<code>if</code>语句
    testString: 'assert(!/if/g.test(code), "You should not use any <code>if</code> statements anywhere in the editor");'
  - text: 你应该至少有四个<code>break</code>语句
    testString: 'assert(code.match(/break/g).length >= 4, "You should have at least four <code>break</code> statements");'
  - text: <code>chainToSwitch(&quot;bob&quot;)</code>应该是“Marley”
    testString: 'assert(chainToSwitch("bob") === "Marley", "<code>chainToSwitch("bob")</code> should be "Marley"");'
  - text: <code>chainToSwitch(42)</code>应该是“答案”
    testString: 'assert(chainToSwitch(42) === "The Answer", "<code>chainToSwitch(42)</code> should be "The Answer"");'
  - text: <code>chainToSwitch(1)</code>应该是“没有＃1”
    testString: 'assert(chainToSwitch(1) === "There is no #1", "<code>chainToSwitch(1)</code> should be "There is no #1"");'
  - text: <code>chainToSwitch(99)</code>应该是“错过了我这么多！”
    testString: 'assert(chainToSwitch(99) === "Missed me by this much!", "<code>chainToSwitch(99)</code> should be "Missed me by this much!"");'
  - text: <code>chainToSwitch(7)</code>应该是“Ate Nine”
    testString: 'assert(chainToSwitch(7) === "Ate Nine", "<code>chainToSwitch(7)</code> should be "Ate Nine"");'
  - text: <code>chainToSwitch(&quot;John&quot;)</code>应为“”（空字符串）
    testString: 'assert(chainToSwitch("John") === "", "<code>chainToSwitch("John")</code> should be "" (empty string)");'
  - text: <code>chainToSwitch(156)</code>应为“”（空字符串）
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
