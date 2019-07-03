---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Repeat a String Repeat a String
---

## Description
<section id='description'>
将摄氏度转换为华氏度的算法为：摄氏度 × <code>9/5 + 32</code>
输入参数 <code>celsius</code> 代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 <code>fahrenheit</code> 变量赋值为对应的华氏温度的值。
你不需要顾虑 function 和 return 语句，它们会在之后的挑战中予以介绍。现在，你只需要使用你已学过的运算符。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>repeatStringNumTimes('*', 3)</code> 应该返回 <code>'***'</code>。"
    testString: assert(repeatStringNumTimes("*", 3) === "***", '<code>repeatStringNumTimes("*", 3)</code> 应该返回 <code>"***"</code>。');
  - text: "<code>repeatStringNumTimes('abc', 3)</code> 应该返回 <code>'abcabcabc'</code>。"
    testString: assert(repeatStringNumTimes("abc", 3) === "abcabcabc", '<code>repeatStringNumTimes("abc", 3)</code> 应该返回 <code>"abcabcabc"</code>。');
  - text: "<code>repeatStringNumTimes('abc', 4)</code> 应该返回 <code>'abcabcabcabc'</code>。"
    testString: assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", '<code>repeatStringNumTimes("abc", 4)</code> 应该返回 <code>"abcabcabcabc"</code>。');
  - text: "<code>repeatStringNumTimes('abc', 1)</code> 应该返回 <code>'abc'</code>。"
    testString: assert(repeatStringNumTimes("abc", 1) === "abc", '<code>repeatStringNumTimes("abc", 1)</code> 应该返回 <code>"abc"</code>。');
  - text: "<code>repeatStringNumTimes('*', 8)</code> 应该返回 <code>'********'</code>。"
    testString: assert(repeatStringNumTimes("*", 8) === "********", '<code>repeatStringNumTimes("*", 8)</code> 应该返回 <code>"********"</code>。');
  - text: "<code>repeatStringNumTimes('abc', -2)</code> 应该返回 <code>''</code>。"
    testString: assert(repeatStringNumTimes("abc", -2) === "", '<code>repeatStringNumTimes("abc", -2)</code> 应该返回 <code>""</code>。');
  - text: 请不要使用内置的 <code>repeat()</code> 方法。
    testString: assert(!/\.repeat/g.test(code), '请不要使用内置的 <code>repeat()</code> 方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function repeatStringNumTimes(str, num) {
  if (num < 0) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);

```

</section>
              