---
id: 56533eb9ac21ba0edf2244df
title: Multiple Identical Options in Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: 交换机语句中的多个相同选项
---

## Description
<section id="description">如果从<code>switch</code>语句的<code>case</code>省略了<code>break</code>语句，则会执行以下<code>case</code>语句，直到遇到<code>break</code> 。如果您有多个具有相同输出的输入，则可以在<code>switch</code>语句中表示它们，如下所示： <blockquote> switch（val）{ <br>情况1： <br>案例2： <br>案例3： <br> result =“1,2或3”; <br>打破; <br>案例4： <br> result =“4 alone”; <br> } </blockquote> 1,2和3的情况都会产生相同的结果。 </section>

## Instructions
<section id="instructions">写一个switch语句来设置以下范围的<code>answer</code> ： <br> <code>1-3</code> - “低” <br> <code>4-6</code> - “中” <br> <code>7-9</code> - “高” <strong>注</strong> <br>您需要为范围中的每个数字都有一个<code>case</code>语句。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sequentialSizes(1)</code>应返回“Low”
    testString: 'assert(sequentialSizes(1) === "Low", "<code>sequentialSizes(1)</code> should return "Low"");'
  - text: <code>sequentialSizes(2)</code>应该返回“Low”
    testString: 'assert(sequentialSizes(2) === "Low", "<code>sequentialSizes(2)</code> should return "Low"");'
  - text: <code>sequentialSizes(3)</code>应返回“Low”
    testString: 'assert(sequentialSizes(3) === "Low", "<code>sequentialSizes(3)</code> should return "Low"");'
  - text: <code>sequentialSizes(4)</code>应返回“Mid”
    testString: 'assert(sequentialSizes(4) === "Mid", "<code>sequentialSizes(4)</code> should return "Mid"");'
  - text: <code>sequentialSizes(5)</code>应返回“Mid”
    testString: 'assert(sequentialSizes(5) === "Mid", "<code>sequentialSizes(5)</code> should return "Mid"");'
  - text: <code>sequentialSizes(6)</code>应返回“Mid”
    testString: 'assert(sequentialSizes(6) === "Mid", "<code>sequentialSizes(6)</code> should return "Mid"");'
  - text: <code>sequentialSizes(7)</code>应该返回“High”
    testString: 'assert(sequentialSizes(7) === "High", "<code>sequentialSizes(7)</code> should return "High"");'
  - text: <code>sequentialSizes(8)</code>应该返回“High”
    testString: 'assert(sequentialSizes(8) === "High", "<code>sequentialSizes(8)</code> should return "High"");'
  - text: <code>sequentialSizes(9)</code>应该返回“High”
    testString: 'assert(sequentialSizes(9) === "High", "<code>sequentialSizes(9)</code> should return "High"");'
  - text: 您不应该使用任何<code>if</code>或<code>else</code>语句
    testString: 'assert(!/else/g.test(code) || !/if/g.test(code), "You should not use any <code>if</code> or <code>else</code> statements");'
  - text: 你应该有九个<code>case</code>陈述
    testString: 'assert(code.match(/case/g).length === 9, "You should have nine <code>case</code> statements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
