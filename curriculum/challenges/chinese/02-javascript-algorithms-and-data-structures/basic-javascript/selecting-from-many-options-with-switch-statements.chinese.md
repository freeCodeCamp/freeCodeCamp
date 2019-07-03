---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1

videoUrl: ''
localeTitle: Selecting from Many Options with Switch Statements
---

## Description
<section id='description'>
如果你有非常多的选项需要选择，可以使用 switch 语句。根据不同的参数值会匹配上不同的 case 分支，语句会从第一个匹配的 case 分支开始执行，直到碰到 break 就结束。
这是一个伪代码案例：
<blockquote>switch(num) {<br>&nbsp;&nbsp;case value1:<br>&nbsp;&nbsp;&nbsp;&nbsp;statement1;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case value2:<br>&nbsp;&nbsp;statement2;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>...<br>&nbsp;&nbsp;case valueN:<br>&nbsp;&nbsp;&nbsp;&nbsp;statementN;<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</blockquote>
测试<code>case</code>值使用严格相等运算符进行比较，break 关键字告诉 JavaScript 停止执行语句。如果没有 break 关键字，下一个语句会继续执行。
</section>

## Instructions
<section id='instructions'>
写一个测试<code>val</code>的 switch 语句，并且根据下面的条件来设置不同的<code>answer</code>：<br><code>1</code>- "alpha"<br><code>2</code> - "beta"<br><code>3</code>- "gamma"<br><code>4</code> - "delta"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>caseInSwitch(1)</code> 应该有一个值为 'alpha'"
    testString: assert(caseInSwitch(1) === "alpha", '<code>caseInSwitch(1)</code> 应该有一个值为 "alpha"');
  - text: "<code>caseInSwitch(2)</code> 应该有一个值为 'beta'"
    testString: assert(caseInSwitch(2) === "beta", '<code>caseInSwitch(2)</code> 应该有一个值为 "beta"');
  - text: "<code>caseInSwitch(3)</code> 应该有一个值为 'gamma'"
    testString: assert(caseInSwitch(3) === "gamma", '<code>caseInSwitch(3)</code> 应该有一个值为 "gamma"');
  - text: "<code>caseInSwitch(4)</code> 应该有一个值为 'delta'"
    testString: assert(caseInSwitch(4) === "delta", '<code>caseInSwitch(4)</code> 应该有一个值为 "delta"');
  - text: 不能使用任何<code>if</code>或<code>else</code>表达式
    testString: assert(!/else/g.test(code) || !/if/g.test(code), '不能使用任何<code>if</code>或<code>else</code>表达式');
  - text: 你应该有至少 3 个<code>break</code>表达式
    testString: assert(code.match(/break/g).length > 2, '你应该有至少 3 个<code>break</code>表达式');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function caseInSwitch(val) {
  var answer = "";

  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;  
}
```

</section>
              