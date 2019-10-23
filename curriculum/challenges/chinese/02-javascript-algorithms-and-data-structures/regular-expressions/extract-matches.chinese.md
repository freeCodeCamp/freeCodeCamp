---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
videoUrl: ''
localeTitle: 提取匹配
---

## Description
<section id="description">到目前为止，您只是检查字符串中是否存在模式。您还可以使用<code>.match()</code>方法提取您找到的实际匹配项。要使用<code>.match()</code>方法，请将该方法应用于字符串并传入括号内的正则表达式。这是一个例子： <blockquote> “你好，世界！”。匹配（/ Hello /）; <br> //返回[“Hello”] <br>让ourStr =“正则表达式”; <br>让ourRegex = / expressions /; <br> ourStr.match（ourRegex）; <br> //返回[“表达式”] </blockquote></section>

## Instructions
<section id="instructions">应用<code>.match()</code>方法来提取单词<code>coding</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>result</code>应该有单词<code>coding</code>
    testString: 'assert(result.join() === "coding", "The <code>result</code> should have the word <code>coding</code>");'
  - text: 你的regex <code>codingRegex</code>应该搜索<code>coding</code>
    testString: 'assert(codingRegex.source === "coding", "Your regex <code>codingRegex</code> should search for <code>coding</code>");'
  - text: 您应该使用<code>.match()</code>方法。
    testString: 'assert(code.match(/\.match\(.*\)/), "You should use the <code>.match()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
