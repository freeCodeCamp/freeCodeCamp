---
id: ac6993d51946422351508a41
title: Truncate a String
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Truncate a String
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
  - text: "<code>truncateString('A-tisket a-tasket A green and yellow basket', 8)</code> 应该返回 'A-tisket...'。"
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", 8) === "A-tisket...", '<code>truncateString("A-tisket a-tasket A green and yellow basket", 8)</code> 应该返回 "A-tisket..."。');
  - text: "<code>truncateString('Peter Piper picked a peck of pickled peppers', 11)</code> 应该返回 'Peter Piper...'。"
    testString: assert(truncateString("Peter Piper picked a peck of pickled peppers", 11) === "Peter Piper...", '<code>truncateString("Peter Piper picked a peck of pickled peppers", 11)</code> 应该返回 "Peter Piper..."。');
  - text: "<code>truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)</code> 应该返回 'A-tisket a-tasket A green and yellow basket'。"
    testString: assert(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) === "A-tisket a-tasket A green and yellow basket", '<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)</code> 应该返回 "A-tisket a-tasket A green and yellow basket"。');
  - text: "<code>truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2)</code> 应该返回 'A-tisket a-tasket A green and yellow basket'。"
    testString: assert(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2) === 'A-tisket a-tasket A green and yellow basket', '<code>truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)</code> 应该返回 "A-tisket a-tasket A green and yellow basket"。');
  - text: "<code>truncateString('A-', 1)</code> 应该返回 'A...'。"
    testString: assert(truncateString("A-", 1) === "A...", '<code>truncateString("A-", 1)</code> 应该返回 "A..."。');
  - text: "<code>truncateString('Absolutely Longer', 2)</code> 应该返回 'Ab...'。"
    testString: assert(truncateString("Absolutely Longer", 2) === "Ab...", '<code>truncateString("Absolutely Longer", 2)</code> 应该返回 "Ab..."。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

```

</section>
              