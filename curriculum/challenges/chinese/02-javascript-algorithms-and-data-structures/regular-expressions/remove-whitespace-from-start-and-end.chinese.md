---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
videoUrl: ''
localeTitle: 从开始和结束中删除空格
---

## Description
<section id="description">有时字符串周围的空白字符不是必需的，而是存在的。字符串的典型处理是删除字符串开头和结尾处的空格。 </section>

## Instructions
<section id="instructions">编写一个正则表达式并使用适当的字符串方法删除字符串开头和结尾的空格。 <strong>注意</strong> <br> <code>.trim()</code>方法可以在这里工作，但您需要使用正则表达式完成此挑战。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>result</code>应该等于<code>&quot;Hello, World!&quot;</code>'
    testString: 'assert(result == "Hello, World!", "<code>result</code> should equal to <code>"Hello, World!"</code>");'
  - text: 您不应该使用<code>.trim()</code>方法。
    testString: 'assert(!code.match(/\.trim\(.*?\)/), "You should not use the <code>.trim()</code> method.");'
  - text: <code>result</code>变量不应设置为等于字符串。
    testString: 'assert(!code.match(/result\s*=\s*".*?"/), "The <code>result</code> variable should not be set equal to a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
