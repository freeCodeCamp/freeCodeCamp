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
  - text: 測試文本
    testString: assert(true);

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
