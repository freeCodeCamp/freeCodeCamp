---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: ''
localeTitle: 用Plus运算符连接字符串
---

## Description
<section id="description">在JavaScript中，当<code>+</code>运算符与<code>String</code>值一起使用时，它被称为<dfn>连接</dfn>运算符。您可以通过<dfn>将</dfn>它们<dfn>连接</dfn>在一起来构建其他字符串中的新字符串。 <strong>例</strong> <blockquote> “我叫艾伦，&#39;+&#39;我连接起来。” </blockquote> <strong>注意</strong> <br>留意空间。连接不会在连接字符串之间添加空格，因此您需要自己添加它们。 </section>

## Instructions
<section id="instructions">从字符串构建<code>myStr</code> <code>&quot;This is the start. &quot;</code>和<code>&quot;This is the end.&quot;</code>使用<code>+</code>运算符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code>应该有一个值<code>This is the start. This is the end.</code>
    testString: 'assert(myStr === "This is the start. This is the end.", "<code>myStr</code> should have a value of <code>This is the start. This is the end.</code>");'
  - text: 使用<code>+</code>运算符构建<code>myStr</code>
    testString: 'assert(code.match(/([""]).*([""])\s*\+\s*([""]).*([""])/g).length > 1, "Use the <code>+</code> operator to build <code>myStr</code>");'
  - text: 应使用<code>var</code>关键字创建<code>myStr</code> 。
    testString: 'assert(/var\s+myStr/.test(code), "<code>myStr</code> should be created using the <code>var</code> keyword.");'
  - text: 确保将结果分配给<code>myStr</code>变量。
    testString: 'assert(/myStr\s*=/.test(code), "Make sure to assign the result to the <code>myStr</code> variable.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
