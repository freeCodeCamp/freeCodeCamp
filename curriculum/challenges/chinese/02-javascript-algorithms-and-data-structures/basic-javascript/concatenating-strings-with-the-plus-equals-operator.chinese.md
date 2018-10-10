---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: ''
localeTitle: 使用Plus Equals运算符连接字符串
---

## Description
<section id="description">我们还可以使用<code>+=</code>运算符将字符串<dfn>连接</dfn>到现有字符串变量的末尾。这对于在多行上打破长字符串非常有帮助。 <strong>注意</strong> <br>留意空间。连接不会在连接字符串之间添加空格，因此您需要自己添加它们。 </section>

## Instructions
<section id="instructions">通过连接这两个字符串来构建<code>myStr</code>几行： <code>&quot;This is the first sentence. &quot;</code>和<code>&quot;This is the second sentence.&quot;</code>使用<code>+=</code>运算符。使用<code>+=</code>运算符，类似于它在编辑器中的显示方式。首先将第一个字符串分配给<code>myStr</code> ，然后添加第二个字符串。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code>应该有一个值<code>This is the first sentence. This is the second sentence.</code>
    testString: 'assert(myStr === "This is the first sentence. This is the second sentence.", "<code>myStr</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>");'
  - text: 使用<code>+=</code>运算符构建<code>myStr</code>
    testString: 'assert(code.match(/\w\s*\+=\s*[""]/g).length > 1 && code.match(/\w\s*\=\s*[""]/g).length > 1, "Use the <code>+=</code> operator to build <code>myStr</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

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
