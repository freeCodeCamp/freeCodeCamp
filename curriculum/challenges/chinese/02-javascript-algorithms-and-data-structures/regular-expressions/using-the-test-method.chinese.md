---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
videoUrl: ''
localeTitle: 使用测试方法
---

## Description
<section id="description">正则表达式用于编程语言以匹配字符串的一部分。您可以创建模式来帮助您进行匹配。如果你想在字符串<code>&quot;The dog chased the cat&quot;</code>找到单词<code>&quot;the&quot;</code> ，你可以使用以下正则表达式： <code>/the/</code> 。请注意，正则表达式中不需要引号。 JavaScript有多种方法可以使用正则表达式。测试正则表达式的一种方法是使用<code>.test()</code>方法。 <code>.test()</code>方法接受正则表达式，将其应用于字符串（放在括号内），如果模式发现或不存在，则返回<code>true</code>或<code>false</code> 。 <blockquote>让testStr =“freeCodeCamp”; <br>让testRegex = / Code /; <br> testRegex.test（testStr）; <br> //返回true </blockquote></section>

## Instructions
<section id="instructions">使用<code>.test()</code>方法在字符串<code>myString</code>上应用正则表达式<code>myRegex</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>.test()</code>来测试正则表达式。
    testString: assert(code.match(/myRegex.test\(\s*myString\s*\)/));
  - text: 您的结果应该返回<code>true</code> 。
    testString: assert(result === true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
