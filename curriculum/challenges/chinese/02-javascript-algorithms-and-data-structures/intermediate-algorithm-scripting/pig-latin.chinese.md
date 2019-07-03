---
id: aa7697ea2477d1316795783b
title: Pig Latin
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Pig Latin
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
  - text: "<code>translatePigLatin('california')</code>应该返回 'aliforniacay'。"
    testString: assert.deepEqual(translatePigLatin("california"), "aliforniacay", '<code>translatePigLatin("california")</code>应该返回 "aliforniacay"。');
  - text: "<code>translatePigLatin('paragraphs')</code>应该返回 'aragraphspay'。"
    testString: assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay", '<code>translatePigLatin("paragraphs")</code>应该返回 "aragraphspay"。');
  - text: "<code>translatePigLatin('glove')</code>应该返回 'oveglay'。"
    testString: assert.deepEqual(translatePigLatin("glove"), "oveglay", '<code>translatePigLatin("glove")</code>应该返回 "oveglay"。');
  - text: "<code>translatePigLatin('algorithm')</code>应该返回 'algorithmway'。"
    testString: assert.deepEqual(translatePigLatin("algorithm"), "algorithmway", '<code>translatePigLatin("algorithm")</code>应该返回 "algorithmway"。');
  - text: "<code>translatePigLatin('eight')</code>应该返回 'eightway'。"
    testString: assert.deepEqual(translatePigLatin("eight"), "eightway", '<code>translatePigLatin("eight")</code>应该返回 "eightway"。');
  - text: "你的代码应当能够处理第一个元音字母在单词结尾的情况。比如<code>translatePigLatin('she')</code>应该返回 'eshay'。"
    testString: assert.deepEqual(translatePigLatin("she"), "eshay", '你的代码应当能够处理第一个元音字母在单词结尾的情况。比如<code>translatePigLatin("she")</code>应该返回 "eshay"。');
  - text: "你的代码应当能够处理单词中不含元音字母的情况。比如<code>translatePigLatin('rhythm')</code>应该返回 'rhythmay'。"
    testString: assert.deepEqual(translatePigLatin("rhythm"), "rhythmay", '你的代码应当能够处理单词中不含元音字母的情况。比如<code>translatePigLatin("rhythm")</code>应该返回 "rhythmay"。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  var front = [];
  str = str.split('');
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join('') + 'ay';
}

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
```

</section>
              