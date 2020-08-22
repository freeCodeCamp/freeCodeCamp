---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
localeTitle: 使用 parseInt 函数并传入一个基数
---

## Description
<section id='description'>
<code>parseInt()</code>函数解析一个字符串并返回一个整数。它同时可接受第二个参数，一个介于2和36之间的整数，表示字符串的基数。
函数调用如下所示：
<code>parseInt(string, radix);</code>
示例：
<code>var a = parseInt("11", 2);</code>
参数 2 表示 "11" 使用二进制数值系统。此示例将字符串 "11" 转换为整数 3。
</section>

## Instructions
<section id='instructions'>
在<code>convertToInteger</code中使用<code>parseInt()</code>函数把二进制数转换成十进制并返回。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code>中应该使用<code>parseInt()</code>函数。
    testString: assert(/parseInt/g.test(code));
  - text: <code>convertToInteger("10011")</code>应该返回一个数字。
    testString: assert(typeof(convertToInteger("10011")) === "number");
  - text: <code>convertToInteger("10011")</code>应该返回 19。
    testString: assert(convertToInteger("10011") === 19);
  - text: <code>convertToInteger("111001")</code>应该返回 57。
    testString: assert(convertToInteger("111001") === 57);
  - text: <code>convertToInteger("JamesBond")</code>应该返回 NaN。
    testString: assert.isNaN(convertToInteger("JamesBond"));

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
function convertToInteger(str) {
  return parseInt(str, 2);
}
```

</section>
