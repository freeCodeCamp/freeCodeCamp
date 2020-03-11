---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
videoUrl: ''
localeTitle: 将单个角色与多种可能性相匹配
---

## Description
<section id="description">您学习了如何匹配文字模式（ <code>/literal/</code> ）和通配符（ <code>/./</code> ）。这些是正则表达式的极端，其中一个找到完全匹配，另一个匹配一切。有两个极端之间可以平衡的选项。您可以使用<code>character classes</code>搜索具有一定灵活性的文字模式。字符类允许您通过将它们放在方括号（ <code>[</code>和<code>]</code> ）括号内来定义要匹配的一组字符。例如，您想匹配<code>&quot;bag&quot;</code> ， <code>&quot;big&quot;</code>和<code>&quot;bug&quot;</code>但不匹配<code>&quot;bog&quot;</code> 。您可以创建regex <code>/b[aiu]g/</code>来执行此操作。 <code>[aiu]</code>是仅匹配字符<code>&quot;a&quot;</code> ， <code>&quot;i&quot;</code>或<code>&quot;u&quot;</code>的字符类。 <blockquote>让bigStr =“大”; <br>让bagStr =“bag”; <br>让bugStr =“bug”; <br>让bogStr =“bog”; <br>让bgRegex = / b [aiu] g /; <br> bigStr.match（bgRegex）; //返回[“大”] <br> bagStr.match（bgRegex）; //返回[“bag”] <br> bugStr.match（bgRegex）; //返回[“bug”] <br> bogStr.match（bgRegex）; //返回null </blockquote></section>

## Instructions
<section id="instructions">在正则表达式<code>vowelRegex</code>使用带元音（ <code>a</code> ， <code>e</code> ， <code>i</code> ， <code>o</code> ， <code>u</code> ）的字符类来查找字符串<code>quoteSample</code>中的所有元音。 <strong>注意</strong> <br>确保匹配大写和小写元音。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该找到所有25个元音。
    testString: assert(result.length == 25);
  - text: 你的正则表达式<code>vowelRegex</code>应该使用一个字符类。
    testString: assert(/\[.*\]/.test(vowelRegex.source));
  - text: 你的正则表达式<code>vowelRegex</code>应该使用全局标志。
    testString: assert(vowelRegex.flags.match(/g/).length == 1);
  - text: 你的正则表达式<code>vowelRegex</code>应该使用不区分大小写的标志。
    testString: assert(vowelRegex.flags.match(/i/).length == 1);
  - text: 你的正则表达式不应该与任何辅音匹配。
    testString: assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
