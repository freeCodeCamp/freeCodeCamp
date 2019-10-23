---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: ''
localeTitle: 将parseInt函数与Radix一起使用
---

## Description
<section id="description"> <code>parseInt()</code>函数解析字符串并返回一个整数。它需要一个基数的第二个参数，它指定字符串中数字的基数。基数可以是2到36之间的整数。函数调用如下： <code>parseInt(string, radix);</code>这是一个例子： <code>var a = parseInt(&quot;11&quot;, 2);</code>基数变量表示“11”在二进制系统或基数2中。此示例将字符串“11”转换为整数3。 </section>

## Instructions
<section id="instructions">在<code>convertToInteger</code>函数中使用<code>parseInt()</code> ，以便将二进制数转换为整数并返回它。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code>应该使用<code>parseInt()</code>函数
    testString: 'assert(/parseInt/g.test(code), "<code>convertToInteger</code> should use the <code>parseInt()</code> function");'
  - text: <code>convertToInteger(&quot;10011&quot;)</code>应该返回一个数字
    testString: 'assert(typeof(convertToInteger("10011")) === "number", "<code>convertToInteger("10011")</code> should return a number");'
  - text: <code>convertToInteger(&quot;10011&quot;)</code>应该返回19
    testString: 'assert(convertToInteger("10011") === 19, "<code>convertToInteger("10011")</code> should return 19");'
  - text: <code>convertToInteger(&quot;111001&quot;)</code>应该返回57
    testString: 'assert(convertToInteger("111001") === 57, "<code>convertToInteger("111001")</code> should return 57");'
  - text: <code>convertToInteger(&quot;JamesBond&quot;)</code>应该返回NaN
    testString: 'assert.isNaN(convertToInteger("JamesBond"), "<code>convertToInteger("JamesBond")</code> should return NaN");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToInteger(str) {

}

convertToInteger("10011");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
