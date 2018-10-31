---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: 从带有开关语句的多个选项中进行选择
---

## Description
undefined

## Instructions
<section id="instructions">编写一个switch语句，测试<code>val</code>并设置以下条件的<code>answer</code> ： <br> <code>1</code> - “alpha” <br> <code>2</code> - “beta” <br> <code>3</code> - “伽玛” <br> <code>4</code> - “三角洲” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>caseInSwitch(1)</code>的值应为“alpha”
    testString: 'assert(caseInSwitch(1) === "alpha", "<code>caseInSwitch(1)</code> should have a value of "alpha"");'
  - text: <code>caseInSwitch(2)</code>的值应为“beta”
    testString: 'assert(caseInSwitch(2) === "beta", "<code>caseInSwitch(2)</code> should have a value of "beta"");'
  - text: <code>caseInSwitch(3)</code>的值应为“gamma”
    testString: 'assert(caseInSwitch(3) === "gamma", "<code>caseInSwitch(3)</code> should have a value of "gamma"");'
  - text: <code>caseInSwitch(4)</code>的值应为“delta”
    testString: 'assert(caseInSwitch(4) === "delta", "<code>caseInSwitch(4)</code> should have a value of "delta"");'
  - text: 您不应该使用任何<code>if</code>或<code>else</code>语句
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: 你应该至少有3个<code>break</code>语句
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
// solution required
```
</section>
