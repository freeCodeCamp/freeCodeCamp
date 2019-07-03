---
id: a8d97bd4c764e91f9d2bda01
title: Binary Agents
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Binary Agents
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111')</code>应该返回 'Aren&#39;t bonfires fun!?'。"
    testString: assert.deepEqual(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'), "Aren't bonfires fun!?", '<code>binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")</code>应该返回 "Aren&#39;t bonfires fun!?"。');
  - text: "<code>binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001')</code>应该返回 'I love FreeCodeCamp!'。"
    testString: assert.deepEqual(binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'), "I love FreeCodeCamp!", '<code>binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")</code>应该返回 "I love FreeCodeCamp!"。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function binaryAgent(str) {
  return str.split(' ').map(function(s) { return parseInt(s, 2); }).map(function(b) { return String.fromCharCode(b);}).join('');
}
```

</section>
              