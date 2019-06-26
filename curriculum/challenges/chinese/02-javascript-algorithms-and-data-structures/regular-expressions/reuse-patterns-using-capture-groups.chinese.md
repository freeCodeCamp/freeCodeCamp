---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
videoUrl: ''
localeTitle: 使用捕获组重用模式
---

## Description
<section id="description">您搜索的某些模式将在字符串中多次出现。手动重复该正则表达式是浪费的。有一种更好的方法可以指定何时在字符串中有多个重复子字符串。您可以使用<code>capture groups</code>搜索重复子字符串。括号<code>(</code>和<code>)</code>用于查找重复子串。你把模式的正则表达式重复在括号之间。要指定重复字符串的显示位置，请使用反斜杠（ <code>\</code> ），然后使用数字。此数字从1开始，随着您使用的每个其他捕获组而增加。一个例子是<code>\1</code>来匹配第一组。下面的示例匹配以空格分隔的两次出现的任何单词： <blockquote>让repeatStr =“正则表达式正则表达式”; <br> let repeatRegex = /（\ w +）\ s \ 1 /; <br> repeatRegex.test（repeatStr）; //返回true <br> repeatStr.match（repeatRegex）; //返回[“regex regex”，“regex”] </blockquote>对字符串使用<code>.match()</code>方法将返回一个数组，其中包含与其匹配的字符串及其捕获组。 </section>

## Instructions
<section id="instructions">在<code>reRegex</code>使用<code>capture groups</code>来匹配在字符串中仅重复三次的数字，每个数字用空格分隔。 </section>

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
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
