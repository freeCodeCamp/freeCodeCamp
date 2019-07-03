---
id: af2170cad53daa0770fabdea
title: Mutations
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Mutations
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
  - text: "<code>mutation(['hello', 'hey'])</code> 应该返回 false。"
    testString: assert(mutation(["hello", "hey"]) === false, '<code>mutation(["hello", "hey"])</code> 应该返回 false。');
  - text: "<code>mutation(['hello', 'Hello'])</code> 应该返回 true。"
    testString: assert(mutation(["hello", "Hello"]) === true, '<code>mutation(["hello", "Hello"])</code> 应该返回 true。');
  - text: "<code>mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])</code> 应该返回 true。"
    testString: assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true, '<code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> 应该返回 true。');
  - text: "<code>mutation(['Mary', 'Army'])</code> 应该返回 true。"
    testString: assert(mutation(["Mary", "Army"]) === true, '<code>mutation(["Mary", "Army"])</code> 应该返回 true。');
  - text: "<code>mutation(['Mary', 'Aarmy'])</code> 应该返回 true。"
    testString: assert(mutation(["Mary", "Aarmy"]) === true, '<code>mutation(["Mary", "Aarmy"])</code> 应该返回 true。');
  - text: "<code>mutation(['Alien', 'line'])</code> 应该返回 true。"
    testString: assert(mutation(["Alien", "line"]) === true, '<code>mutation(["Alien", "line"])</code> 应该返回 true。');
  - text: "<code>mutation(['floor', 'for'])</code> 应该返回 true。"
    testString: assert(mutation(["floor", "for"]) === true, '<code>mutation(["floor", "for"])</code> 应该返回 true。');
  - text: "<code>mutation(['hello', 'neo'])</code> 应该返回 false。"
    testString: assert(mutation(["hello", "neo"]) === false, '<code>mutation(["hello", "neo"])</code> 应该返回 false。');
  - text: "<code>mutation(['voodoo', 'no'])</code> 应该返回 false。"
    testString: assert(mutation(["voodoo", "no"]) === false, '<code>mutation(["voodoo", "no"])</code> 应该返回 false。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);

```

</section>
              