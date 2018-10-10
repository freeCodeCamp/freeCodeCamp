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
  - text: 你的正则表达式应该使用数字的速记字符类。
    testString: 'assert(reRegex.source.match(/\\d/), "Your regex should use the shorthand character class for digits.");'
  - text: 您的正则表达式应该重复使用捕获组两次。
    testString: 'assert(reRegex.source.match(/\\\d/g).length === 2, "Your regex should reuse the capture group twice.");'
  - text: 你的正则表达式应该有两个空格来分隔这三个数字。
    testString: 'assert(reRegex.source.match(/\\s/g).length === 2, "Your regex should have two spaces separating the three numbers.");'
  - text: 你的正则表达式应该匹配<code>&quot;42 42 42&quot;</code> 。
    testString: 'assert(reRegex.test("42 42 42"), "Your regex should match <code>"42 42 42"</code>.");'
  - text: 你的正则表达式应该匹配<code>&quot;100 100 100&quot;</code> 。
    testString: 'assert(reRegex.test("100 100 100"), "Your regex should match <code>"100 100 100"</code>.");'
  - text: 你的正则表达式不应该匹配<code>&quot;42 42 42 42&quot;</code> 。
    testString: 'assert.equal(("42 42 42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42 42 42"</code>.");'
  - text: 你的正则表达式不应该匹配<code>&quot;42 42&quot;</code> 。
    testString: 'assert.equal(("42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42"</code>.");'
  - text: 你的正则表达式不应该匹配<code>&quot;101 102 103&quot;</code> 。
    testString: 'assert(!reRegex.test("101 102 103"), "Your regex should not match <code>"101 102 103"</code>.");'
  - text: 你的正则表达式不应该匹配<code>&quot;1 2 3&quot;</code> 。
    testString: 'assert(!reRegex.test("1 2 3"), "Your regex should not match <code>"1 2 3"</code>.");'
  - text: 你的正则表达式应匹配<code>&quot;10 10 10&quot;</code> 。
    testString: 'assert(reRegex.test("10 10 10"), "Your regex should match <code>"10 10 10"</code>.");'

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
