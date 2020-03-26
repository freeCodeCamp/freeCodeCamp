---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
videoUrl: ''
localeTitle: 使用parseInt函数
---

## Description
<section id="description"> <code>parseInt()</code>函数解析字符串并返回一个整数。这是一个例子： <code>var a = parseInt(&quot;007&quot;);</code>上面的函数将字符串“007”转换为整数7.如果字符串中的第一个字符无法转换为数字，则返回<code>NaN</code> 。 </section>

## Instructions
<section id="instructions">在<code>convertToInteger</code>函数中使用<code>parseInt()</code> ，以便将输入字符串<code>str</code>转换为整数，然后返回它。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code>应该使用<code>parseInt()</code>函数
    testString: assert(/parseInt/g.test(code));
  - text: <code>convertToInteger(&quot;56&quot;)</code>应该返回一个数字
    testString: assert(typeof(convertToInteger("56")) === "number");
  - text: <code>convertToInteger(&quot;56&quot;)</code>应该返回56
    testString: assert(convertToInteger("56") === 56);
  - text: <code>convertToInteger(&quot;77&quot;)</code>应该返回77
    testString: assert(convertToInteger("77") === 77);
  - text: <code>convertToInteger(&quot;JamesBond&quot;)</code>应该返回NaN
    testString: assert.isNaN(convertToInteger("JamesBond"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToInteger(str) {

}

convertToInteger("56");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
