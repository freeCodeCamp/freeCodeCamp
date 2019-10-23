---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
videoUrl: ''
localeTitle: 匹配文字字符串
---

## Description
<section id="description">在上一次挑战中，您使用正则表达式<code>/Hello/</code>搜索了单词<code>&quot;Hello&quot;</code> 。该正则表达式搜索字符串<code>&quot;Hello&quot;</code>的文字匹配。这是另一个搜索字符串<code>&quot;Kevin&quot;</code>的文字匹配的示例： <blockquote>让testStr =“你好，我的名字是凯文。”; <br>让testRegex = / Kevin /; <br> testRegex.test（testStr）; <br> //返回true </blockquote>任何其他形式的<code>&quot;Kevin&quot;</code>都不匹配。例如，正则表达式<code>/Kevin/</code>将不匹配<code>&quot;kevin&quot;</code>或<code>&quot;KEVIN&quot;</code> 。 <blockquote> let wrongRegex = / kevin /; <br> wrongRegex.test（testStr）; <br> //返回false </blockquote>未来的挑战将展示如何匹配其他形式。 </section>

## Instructions
<section id="instructions">完成正则表达式<code>waldoRegex</code>在字符串<code>waldoIsHiding</code>使用文字匹配查找<code>&quot;Waldo&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>waldoRegex</code>应该找到<code>&quot;Waldo&quot;</code>
    testString: 'assert(waldoRegex.test(waldoIsHiding), "Your regex <code>waldoRegex</code> should find <code>"Waldo"</code>");'
  - text: 你的正则表达式<code>waldoRegex</code>不应该搜索任何其他内容。
    testString: 'assert(!waldoRegex.test("Somewhere is hiding in this text."), "Your regex <code>waldoRegex</code> should not search for anything else.");'
  - text: 您应该与正则表达式执行文字字符串匹配。
    testString: 'assert(!/\/.*\/i/.test(code), "You should perform a literal string match with your regex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
