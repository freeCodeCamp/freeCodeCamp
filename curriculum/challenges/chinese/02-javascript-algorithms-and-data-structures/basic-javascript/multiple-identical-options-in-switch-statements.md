---
id: 56533eb9ac21ba0edf2244df
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
title: 在 Switch 语句添加多个相同选项
---

## Description
<section id='description'>
如果你忘了给<code>switch</code>的每一条<code>case</code>添加<code>break</code>，那么直到遇见<code>break</code>为止，后续的<code>case</code>会一直执行。如果你想为多个不同的输入设置相同的结果，可以这样写：

```js
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

这样，1、2、3 都会有相同的结果。
</section>

## Instructions
<section id='instructions'>
请写一个<code>switch</code>语句，根据输入的<code>val</code>的范围得出对应的<code>answer</code>：<br><code>1-3</code> - "Low"<br><code>4-6</code> - "Mid"<br><code>7-9</code> - "High"
<strong>提示：</strong><br>你的<code>case</code>应基于范围中的每一个数字编写。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sequentialSizes(1)</code>应该返回 "Low"。
    testString: assert(sequentialSizes(1) === "Low");
  - text: <code>sequentialSizes(2)</code>应该返回 "Low"。
    testString: assert(sequentialSizes(2) === "Low");
  - text: <code>sequentialSizes(3)</code>应该返回 "Low"。
    testString: assert(sequentialSizes(3) === "Low");
  - text: <code>sequentialSizes(4)</code>应该返回 "Mid"。
    testString: assert(sequentialSizes(4) === "Mid");
  - text: <code>sequentialSizes(5)</code>应该返回 "Mid"。
    testString: assert(sequentialSizes(5) === "Mid");
  - text: <code>sequentialSizes(6)</code>应该返回 "Mid"。
    testString: assert(sequentialSizes(6) === "Mid");
  - text: <code>sequentialSizes(7)</code>应该返回 "High"。
    testString: assert(sequentialSizes(7) === "High");
  - text: <code>sequentialSizes(8)</code>应该返回 "High"。
    testString: assert(sequentialSizes(8) === "High");
  - text: <code>sequentialSizes(9)</code>应该返回 "High"。
    testString: assert(sequentialSizes(9) === "High");
  - text: 你不应使用<code>if</code>或<code>else</code>语句。
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: 你应该编写 9 个<code>case</code>语句。
    testString: assert(code.match(/case/g).length === 9);

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
function sequentialSizes(val) {
  var answer = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```

</section>
