---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: 指定完全匹配数
---

## Description
<section id="description">您可以使用大括号<code>quantity specifiers</code>的较低和较高数量的模式。有时您只需要特定数量的匹配。要指定一定数量的模式，只需在大括号之间放置一个数字。例如，要仅将单词<code>&quot;hah&quot;</code>与字母<code>a</code>匹配<code>3</code>次，您的正则表达式将为<code>/ha{3}h/</code> 。 <blockquote>让A4 =“haaaah”; <br>让A3 =“haaah”; <br>设A100 =“h”+“a”.repeat（100）+“h”; <br> let multipleHA = / ha {3} h /; <br> multipleHA.test（A4）; //返回false <br> multipleHA.test（A3）; //返回true <br> multipleHA.test（A100）; //返回false </blockquote></section>

## Instructions
<section id="instructions">只有当它有四个字母<code>m</code>时才更改正则表达式<code>timRegex</code>以匹配单词<code>&quot;Timber&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用大括号。
    testString: 'assert(timRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: 你的正则表达式不应该与<code>&quot;Timber&quot;</code>匹配
    testString: 'assert(!timRegex.test("Timber"), "Your regex should not match <code>"Timber"</code>");'
  - text: 你的正则表达式不应该匹配<code>&quot;Timmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmber"), "Your regex should not match <code>"Timmber"</code>");'
  - text: 你的正则表达式不应该匹配<code>&quot;Timmmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmmber"), "Your regex should not match <code>"Timmmber"</code>");'
  - text: 你的正则表达式应该匹配<code>&quot;Timmmmber&quot;</code>
    testString: 'assert(timRegex.test("Timmmmber"), "Your regex should match <code>"Timmmmber"</code>");'
  - text: 你的正则表达式不应该与30 <code>m</code>的<code>&quot;Timber&quot;</code>相匹配。
    testString: 'assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"), "Your regex should not match <code>"Timber"</code> with 30 <code>m</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
