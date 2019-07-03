---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
isRequired: true
videoUrl: ''
localeTitle: Convert Celsius to Fahrenheit
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
  - text: <code>convertToF(0)</code> 应该返回一个数字。
    testString: assert(typeof convertToF(0) === 'number', '<code>convertToF(0)</code> 应该返回一个数字。');
  - text: <code>convertToF(-30)</code> 应该返回 <code>-22</code>。
    testString: assert(convertToF(-30) === -22, '<code>convertToF(-30)</code> 应该返回 <code>-22</code>。');
  - text: <code>convertToF(-10)</code> 应该返回 <code>14</code>。
    testString: assert(convertToF(-10) === 14, '<code>convertToF(-10)</code> 应该返回 <code>14</code>。');
  - text: <code>convertToF(0)</code> 应该返回 <code>32</code>。
    testString: assert(convertToF(0) === 32, '<code>convertToF(0)</code> 应该返回 <code>32</code>。');
  - text: <code>convertToF(20)</code> 应该返回 <code>68</code>。
    testString: assert(convertToF(20) === 68, '<code>convertToF(20)</code> 应该返回 <code>68</code>。');
  - text: <code>convertToF(30)</code> 应该返回 <code>86</code>。
    testString: assert(convertToF(30) === 86, '<code>convertToF(30)</code> 应该返回 <code>86</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);

```

</section>
              