---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Factorialize a Number
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
  - text: <code>factorialize(5)</code> 应该返回一个数字。
    testString: assert(typeof factorialize(5) === 'number', '<code>factorialize(5)</code> 应该返回一个数字。');
  - text: <code>factorialize(5)</code> 应该返回 120。
    testString: assert(factorialize(5) === 120, '<code>factorialize(5)</code> 应该返回 120。');
  - text: <code>factorialize(10)</code> 应该返回 3628800。
    testString: assert(factorialize(10) === 3628800, '<code>factorialize(10)</code> 应该返回 3628800。');
  - text: <code>factorialize(20)</code> 应该返回 2432902008176640000。
    testString: assert(factorialize(20) === 2432902008176640000, '<code>factorialize(20)</code> 应该返回 2432902008176640000。');
  - text: <code>factorialize(0)</code> 应该返回 1。
    testString: assert(factorialize(0) === 1, '<code>factorialize(0)</code> 应该返回 1。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);

```

</section>
              