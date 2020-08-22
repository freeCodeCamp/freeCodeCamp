---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
localeTitle: 使用 Switch 语句从许多选项中进行选择
---

## Description
<section id='description'>
如果你有非常多的选项需要选择，可以使用 switch 语句。根据不同的参数值会匹配上不同的 case 分支，语句会从第一个匹配的 case 分支开始执行，直到碰到 break 就结束。
这是一个伪代码案例：

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

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
  - text: <code>caseInSwitch(1)</code> 应该有一个值为 "alpha"。
    testString: assert(caseInSwitch(1) === "alpha");
  - text: <code>caseInSwitch(2)</code> 应该有一个值为 "beta"。
    testString: assert(caseInSwitch(2) === "beta");
  - text: <code>caseInSwitch(3)</code> 应该有一个值为 "gamma"。
    testString: assert(caseInSwitch(3) === "gamma");
  - text: <code>caseInSwitch(4)</code> 应该有一个值为 "delta"。
    testString: assert(caseInSwitch(4) === "delta");
  - text: 不能使用任何<code>if</code>或<code>else</code>表达式。
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: 你应该有至少 3 个<code>break</code>表达式。
    testString: assert(code.match(/break/g).length > 2);

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
