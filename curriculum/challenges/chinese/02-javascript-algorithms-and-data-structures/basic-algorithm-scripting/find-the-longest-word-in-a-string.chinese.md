---
id: a26cbbe9ad8655a977e1ceb5
title: Find the Longest Word in a String
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Find the Longest Word in a String
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
  - text: "<code>findLongestWordLength('The quick brown fox jumped over the lazy dog')</code> 应该返回一个数字。"
    testString: assert(typeof findLongestWordLength("The quick brown fox jumped over the lazy dog") === "number", '<code>findLongestWordLength("The quick brown fox jumped over the lazy dog")</code> 应该返回一个数字。');
  - text: "<code>findLongestWordLength('The quick brown fox jumped over the lazy dog')</code> 应该返回 6。"
    testString: assert(findLongestWordLength("The quick brown fox jumped over the lazy dog") === 6, '<code>findLongestWordLength("The quick brown fox jumped over the lazy dog")</code> 应该返回 6。');
  - text: "<code>findLongestWordLength('May the force be with you')</code> 应该返回 5。"
    testString: assert(findLongestWordLength("May the force be with you") === 5, '<code>findLongestWordLength("May the force be with you")</code> 应该返回 5。');
  - text: "<code>findLongestWordLength('Google do a barrel roll')</code> 应该返回 6。"
    testString: assert(findLongestWordLength("Google do a barrel roll") === 6, '<code>findLongestWordLength("Google do a barrel roll")</code> 应该返回 6。');
  - text: "<code>findLongestWordLength('What is the average airspeed velocity of an unladen swallow')</code> 应该返回 8。"
    testString: assert(findLongestWordLength("What is the average airspeed velocity of an unladen swallow") === 8, '<code>findLongestWordLength("What is the average airspeed velocity of an unladen swallow")</code> 应该返回 8。');
  - text: "<code>findLongestWordLength('What if we try a super-long word such as otorhinolaryngology')</code> 应该返回 19。"
    testString: assert(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") === 19, '<code>findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")</code> 应该返回 19。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function findLongestWordLength(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

```

</section>
              