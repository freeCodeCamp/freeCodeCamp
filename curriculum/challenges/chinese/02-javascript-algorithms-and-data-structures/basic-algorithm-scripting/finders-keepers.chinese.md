---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Finders Keepers
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
  - text: <code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> 应该返回 8。
    testString: assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, '<code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> 应该返回 8。');
  - text: <code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> 应该返回 undefined。
    testString: assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined, '<code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> 应该返回 undefined。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function findElement(arr, func) {
  let num;

  arr.some(e => {
    if (func(e)) {
      num = e;
      return true;
    }
  });

  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

```

</section>
              