---
id: aa7697ea2477d1316795783b
challengeType: 5
forumTopicId: 16039
title: 儿童黑话
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，把传入的字符串翻译成“儿童黑话”。
<a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">儿童黑话</a>的基本转换规则很简单，只需要把一个英文单词的第一个辅音字母或第一组辅音簇移到单词的结尾，并在后面加上<code>ay</code>即可。在英语中，字母 a、e、i、o、u 为元音，其余的字母均为辅音。辅音簇的意思是连续的多个辅音字母。
额外地，如果单词本身是以元音开头的，那只需要在结尾加上<code>way</code>。
额外地，如果单词不包含元音，那只需要在结尾加上<code>ay</code>。
在本题中，传入的单词一定会是英文单词，且所有字母均为小写。
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
    testString: assert.deepEqual(translatePigLatin("california"), "aliforniacay");
  - text: "<code>translatePigLatin('paragraphs')</code>应该返回 'aragraphspay'。"
    testString: assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay");
  - text: "<code>translatePigLatin('glove')</code>应该返回 'oveglay'。"
    testString: assert.deepEqual(translatePigLatin("glove"), "oveglay");
  - text: "<code>translatePigLatin('algorithm')</code>应该返回 'algorithmway'。"
    testString: assert.deepEqual(translatePigLatin("algorithm"), "algorithmway");
  - text: "<code>translatePigLatin('eight')</code>应该返回 'eightway'。"
    testString: assert.deepEqual(translatePigLatin("eight"), "eightway");
  - text: "你的代码应该能处理第一个 vowel 在单词中间的情况。比如<code>translatePigLatin('schwartz')</code> 应该返回 'artzschway'"
    testString: assert.deepEqual(translatePigLatin("schwartz"), "artzschway");
  - text: "你的代码应当能够处理单词中不含元音字母的情况。比如<code>translatePigLatin('rhythm')</code>应该返回 'rhythmay'。"
    testString: assert.deepEqual(translatePigLatin("rhythm"), "rhythmay");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

</div>



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
