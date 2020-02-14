---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: ''
localeTitle: 从带有开关语句的多个选项中进行选择
---

## Description
<section id="description">

如果您有很多选择，请使用<dfn> switch </dfn>语句。 <code> switch </code>语句测试一个值，并且可以包含许多定义各种可能值的<dfn> case </dfn>语句。 从第一个匹配的<code> case </code>值开始执行语句，直到遇到<code> break </code>。
这是<code> switch </code>语句的示例：

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

<code> case </code>值以严格相等性（<code> === </code>）进行测试。 <code> break </code>告诉JavaScript停止执行语句。 如果省略<code> break </code>，将执行下一条语句。

</section>

## Instructions
<section id="instructions">编写一个switch语句，测试<code>val</code>并设置以下条件的<code>answer</code> ： <br> <code>1</code> - “alpha” <br> <code>2</code> - “beta” <br> <code>3</code> - “伽玛” <br> <code>4</code> - “三角洲” </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>caseInSwitch(1)</code>的值应为“alpha”
    testString: assert(caseInSwitch(1) === "alpha");
  - text: <code>caseInSwitch(2)</code>的值应为“beta”
    testString: assert(caseInSwitch(2) === "beta");
  - text: <code>caseInSwitch(3)</code>的值应为“gamma”
    testString: assert(caseInSwitch(3) === "gamma");
  - text: <code>caseInSwitch(4)</code>的值应为“delta”
    testString: assert(caseInSwitch(4) === "delta");
  - text: 您不应该使用任何<code>if</code>或<code>else</code>语句
    testString: assert(!/else/g.test(code) || !/if/g.test(code));
  - text: 你应该至少有3个<code>break</code>语句
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
// solution required
```
</section>
