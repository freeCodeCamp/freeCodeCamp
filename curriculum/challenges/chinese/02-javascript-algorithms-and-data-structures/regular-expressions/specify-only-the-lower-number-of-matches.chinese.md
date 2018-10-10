---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: 仅指定较低的匹配数
---

## Description
<section id="description">您可以使用大括号<code>quantity specifiers</code>的较低和较高数量的模式。有时您只想指定较低数量的模式而没有上限。要仅指定较少的模式数，请保留第一个数字后跟逗号。例如，要仅匹配字符串<code>&quot;hah&quot;</code>与出现至少<code>3</code>次的字母<code>a</code> ，您的正则表达式将是<code>/ha{3,}h/</code> 。 <blockquote>让A4 =“haaaah”; <br>让A2 =“哈哈”; <br>设A100 =“h”+“a”.repeat（100）+“h”; <br> let multipleA = / ha {3，} h /; <br> multipleA.test（A4）; //返回true <br> multipleA.test（A2）; //返回false <br> multipleA.test（A100）; //返回true </blockquote></section>

## Instructions
<section id="instructions">只有当它有四个或更多字母<code>z</code>时才更改正则表达式<code>haRegex</code>以匹配单词<code>&quot;Hazzah&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用大括号。
    testString: 'assert(haRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: 你的正则表达式不应该与<code>&quot;Hazzah&quot;</code>匹配
    testString: 'assert(!haRegex.test("Hazzah"), "Your regex should not match <code>"Hazzah"</code>");'
  - text: 你的正则表达式不应该与<code>&quot;Hazzzah&quot;</code>匹配
    testString: 'assert(!haRegex.test("Hazzzah"), "Your regex should not match <code>"Hazzzah"</code>");'
  - text: 你的正则表达应该匹配<code>&quot;Hazzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzah"), "Your regex should match <code>"Hazzzzah"</code>");'
  - text: 你的正则表达应该匹配<code>&quot;Hazzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzah"), "Your regex should match <code>"Hazzzzzah"</code>");'
  - text: 你的正则表达应该匹配<code>&quot;Hazzzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzzah"), "Your regex should match <code>"Hazzzzzzah"</code>");'
  - text: 你的正则表达式应该匹配<code>&quot;Hazzah&quot;</code>和30个<code>z</code> 。
    testString: 'assert(haRegex.test("Ha" + "z".repeat(30) + "ah"), "Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
