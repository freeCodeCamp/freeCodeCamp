---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
videoUrl: ''
localeTitle: 使用split方法将字符串拆分为数组
---

## Description
<section id="description"> <code>split</code>方法将字符串拆分为字符串数组。它接受分隔符的参数，分隔符可以是用于分解字符串或正则表达式的字符。例如，如果分隔符是空格，则会得到一个单词数组，如果分隔符是空字符串，则会得到字符串中每个字符的数组。下面是两个用空格分隔一个字符串的例子，然后用正则表达式用数字分割另一个字符串： <blockquote> var str =“Hello World”; <br> var bySpace = str.split（“”）; <br> //将bySpace设置为[“Hello”，“World”] <br><br> var otherString =“How9are7you2today”; <br> var byDigits = otherString.split（/ \ d /）; <br> //将byDigits设置为[“How”，“are”，“you”，“today”] </blockquote>由于字符串是不可变的，因此<code>split</code>方法可以更轻松地使用它们。 </section>

## Instructions
<section id="instructions">使用<code>splitify</code>函数内的<code>split</code>方法将<code>str</code>拆分为单词数组。该函数应该返回数组。请注意，单词并不总是用空格分隔，并且数组不应包含标点符号。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>split</code>方法。
    testString: 'assert(code.match(/\.split/g), "Your code should use the <code>split</code> method.");'
  - text: '<code>splitify(&quot;Hello World,I-am code&quot;)</code>应返回<code>[&quot;Hello&quot;, &quot;World&quot;, &quot;I&quot;, &quot;am&quot;, &quot;code&quot;]</code> 。'
    testString: 'assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]), "<code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.");'
  - text: '<code>splitify(&quot;Earth-is-our home&quot;)</code>应该返回<code>[&quot;Earth&quot;, &quot;is&quot;, &quot;our&quot;, &quot;home&quot;]</code> 。'
    testString: 'assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]), "<code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.");'
  - text: '<code>splitify(&quot;This.is.a-sentence&quot;)</code>应该返回<code>[&quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;sentence&quot;]</code> 。'
    testString: 'assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]), "<code>splitify("This.is.a-sentence")</code> should return <code>["This", "is", "a", "sentence"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function splitify(str) {
  // Add your code below this line


  // Add your code above this line
}
splitify("Hello World,I-am code");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
