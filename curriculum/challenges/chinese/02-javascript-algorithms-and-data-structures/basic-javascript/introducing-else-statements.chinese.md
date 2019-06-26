---
id: 56533eb9ac21ba0edf2244da
title: Introducing Else Statements
challengeType: 1
videoUrl: ''
localeTitle: 介绍其他声明
---

## Description
<section id="description">当<code>if</code>语句的条件为真时，将执行其后面的代码块。当那个条件是假的时候怎么办？通常什么都不会发生。使用<code>else</code>语句，可以执行备用代码块。 <blockquote> if（num&gt; 10）{ <br>返回“大于10”; <br> } else { <br>返回“10或更少”; <br> } </blockquote></section>

## Instructions
<section id="instructions">将<code>if</code>语句组合到单个<code>if/else</code>语句中。 </section>

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

// Change this value to test
testElse(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
