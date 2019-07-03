---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Title Case a Sentence
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
  - text: "<code>titleCase('I&#39;m a little tea pot')</code> 应该返回一个字符串。"
    testString: assert(typeof titleCase("I'm a little tea pot") === "string", '<code>titleCase("I&#39;m a little tea pot")</code> 应该返回一个字符串。');
  - text: "<code>titleCase('I&#39;m a little tea pot')</code> 应该返回 <code>I&#39;m A Little Tea Pot</code>。"
    testString: assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot", '<code>titleCase("I&#39;m a little tea pot")</code> 应该返回 <code>I&#39;m A Little Tea Pot</code>。');
  - text: "<code>titleCase('sHoRt AnD sToUt')</code> 应该返回 <code>Short And Stout</code>。"
    testString: assert(titleCase("sHoRt AnD sToUt") === "Short And Stout", '<code>titleCase("sHoRt AnD sToUt")</code> 应该返回 <code>Short And Stout</code>。');
  - text: "<code>titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')</code> 应该返回 <code>Here Is My Handle Here Is My Spout</code>。"
    testString: assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout", '<code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> 应该返回 <code>Here Is My Handle Here Is My Spout</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");

```

</section>
              