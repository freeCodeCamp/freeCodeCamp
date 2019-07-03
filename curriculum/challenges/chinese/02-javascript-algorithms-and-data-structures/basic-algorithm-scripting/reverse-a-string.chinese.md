---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Reverse a String
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
  - text: "<code>reverseString('hello')</code> 应该返回一个字符串。"
    testString: assert(typeof reverseString("hello") === "string", '<code>reverseString("hello")</code> 应该返回一个字符串。');
  - text: "<code>reverseString('hello')</code> 应该返回 <code>'olleh'</code>"
    testString: assert(reverseString("hello") === "olleh", '<code>reverseString("hello")</code> 应该返回 <code>"olleh"</code>。');
  - text: "<code>reverseString('Howdy')</code> 应该返回 <code>'ydwoH'</code>"
    testString: assert(reverseString("Howdy") === "ydwoH", '<code>reverseString("Howdy")</code> 应该返回 <code>"ydwoH"</code>。');
  - text: "<code>reverseString('Greetings from Earth')</code> 应该返回 <code>'htraE morf sgniteerG'</code>。"
    testString: assert(reverseString("Greetings from Earth") === "htraE morf sgniteerG", '<code>reverseString("Greetings from Earth")</code> 应该返回 <code>"htraE morf sgniteerG"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

```

</section>
              