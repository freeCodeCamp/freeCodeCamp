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
  - text: 測試文本
    testString: assert(true);

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
