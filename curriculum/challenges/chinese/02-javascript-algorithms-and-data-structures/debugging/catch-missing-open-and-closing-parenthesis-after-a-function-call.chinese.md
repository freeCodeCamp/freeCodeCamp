---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
challengeType: 1
videoUrl: ''
localeTitle: 在函数调用后捕获缺失的打开和关闭括号
---

## Description
<section id="description">当函数或方法不接受任何参数时，您可能忘记在调用它时包括（空）开括号和右括号。通常，函数调用的结果会保存在变量中，以供代码中的其他用途使用。可以通过将变量值（或其类型）记录到控制台并看到一个设置为函数引用而不是函数返回的期望值来检测此错误。以下示例中的变量不同： <blockquote> function myFunction（）{ <br>回归“你摇滚！”; <br> } <br> let varOne = myFunction; //设置为等于函数<br> let varTwo = myFunction（）; //设置为等于字符串“You rock！” </blockquote></section>

## Instructions
<section id="instructions">修复代码，使变量<code>result</code>设置为调用函数<code>getNine</code>返回的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应修复变量<code>result</code>以便将其设置为函数<code>getNine</code>返回的数字。
    testString: assert(result == 9);
  - text: 您的代码应该调用<code>getNine</code>函数。
    testString: assert(code.match(/getNine\(\)/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
