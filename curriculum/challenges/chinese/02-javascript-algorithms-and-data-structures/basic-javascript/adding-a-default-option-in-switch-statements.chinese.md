---
id: 56533eb9ac21ba0edf2244de
title: Adding a Default Option in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: 在交换机语句中添加默认选项
---

## Description
<section id="description">在<code>switch</code>语句中，您可能无法将所有可能的值指定为<code>case</code>语句。相反，您可以添加<code>default</code>语句，如果找不到匹配的<code>case</code>语句，将执行该语句。可以把它想象成<code>if/else</code>链中的最后一个<code>else</code>语句。 <code>default</code>语句应该是最后一种情况。 <blockquote> switch（num）{ <br>案例值1： <br>语句1; <br>打破; <br>案例值2： <br>语句2; <br>打破; <br> ... <br>默认： <br> defaultStatement; <br>打破; <br> } </blockquote></section>

## Instructions
<section id="instructions">写一个switch语句来设置以下条件的<code>answer</code> ： <br> <code>&quot;a&quot;</code> - “苹果” <br> <code>&quot;b&quot;</code> - “鸟” <br> <code>&quot;c&quot;</code> - “猫” <br> <code>default</code> - “东西” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>switchOfStuff(&quot;a&quot;)</code>的值应为“apple”
    testString: assert(switchOfStuff("a") === "apple");
  - text: <code>switchOfStuff(&quot;b&quot;)</code>的值应为“bird”
    testString: assert(switchOfStuff("b") === "bird");
  - text: <code>switchOfStuff(&quot;c&quot;)</code>的值应为“cat”
    testString: assert(switchOfStuff("c") === "cat");
  - text: <code>switchOfStuff(&quot;d&quot;)</code>的值应为“stuff”
    testString: assert(switchOfStuff("d") === "stuff");
  - text: <code>switchOfStuff(4)</code>的值应为“stuff”
    testString: assert(switchOfStuff(4) === "stuff");
  - text: 您不应该使用任何<code>if</code>或<code>else</code>语句
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: 您应该使用<code>default</code>语句
    testString: assert(switchOfStuff("string-to-trigger-default-case") === "stuff");
  - text: 你应该至少有3个<code>break</code>语句
    testString: assert(code.match(/break/g).length > 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
