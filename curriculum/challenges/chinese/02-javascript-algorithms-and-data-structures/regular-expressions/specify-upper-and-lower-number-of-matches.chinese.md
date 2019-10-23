---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: 指定上下匹配数
---

## Description
<section id="description">回想一下，您使用加号<code>+</code>来查找一个或多个字符，使用星号<code>*</code>来查找零个或多个字符。这些很方便，但有时你想要匹配一定范围的模式。您可以使用<code>quantity specifiers</code>模式的下限和上限。数量说明符与大括号（ <code>{</code>和<code>}</code> ）一起使用。您在大括号之间放置了两个数字 - 用于较低和较高的模式数。例如，为了匹配字母<code>&quot;ah&quot;</code>出现<code>3</code>到<code>5</code>次的字母<code>a</code> ，你的正则表达式将是<code>/a{3,5}h/</code> 。 <blockquote>让A4 =“aaaah”; <br>让A2 =“aah”; <br>令multipleA = / a {3,5} h /; <br> multipleA.test（A4）; //返回true <br> multipleA.test（A2）; //返回false </blockquote></section>

## Instructions
<section id="instructions">更改正则表达式<code>ohRegex</code>以匹配单词<code>&quot;Oh no&quot;</code>中的<code>3</code>到<code>6</code>字母<code>h</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该使用大括号。
    testString: 'assert(ohRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: 你的正则表达式不应该匹配<code>&quot;Ohh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohh no"), "Your regex should not match <code>"Ohh no"</code>");'
  - text: 你的正则表达式应该匹配<code>&quot;Ohhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhh no"), "Your regex should match <code>"Ohhh no"</code>");'
  - text: 你的正则表达式应该匹配<code>&quot;Ohhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhh no"), "Your regex should match <code>"Ohhhh no"</code>");'
  - text: 你的正则表达式应该匹配<code>&quot;Ohhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhh no"), "Your regex should match <code>"Ohhhhh no"</code>");'
  - text: 你的正则表达式应该匹配<code>&quot;Ohhhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhhh no"), "Your regex should match <code>"Ohhhhhh no"</code>");'
  - text: 你的正则表达式不应该匹配<code>&quot;Ohhhhhhh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohhhhhhh no"), "Your regex should not match <code>"Ohhhhhhh no"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
