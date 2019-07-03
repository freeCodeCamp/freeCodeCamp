---
id: af7588ade1100bde429baf20
title: Missing letters
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Missing letters
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
  - text: "<code>fearNotLetter('abce')</code>应该返回 'd'。"
    testString: assert.deepEqual(fearNotLetter('abce'), 'd', '<code>fearNotLetter("abce")</code>应该返回 "d"。');
  - text: "<code>fearNotLetter('abcdefghjklmno')</code>应该返回 'i'。"
    testString: assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i', '<code>fearNotLetter("abcdefghjklmno")</code>应该返回 "i"。');
  - text: "<code>fearNotLetter('stvwx')</code>应该返回 'u'。"
    testString: assert.deepEqual(fearNotLetter('stvwx'), 'u', '<code>fearNotLetter("stvwx")</code>应该返回 "u"。');
  - text: "<code>fearNotLetter('bcdf')</code>应该返回 'e'。"
    testString: assert.deepEqual(fearNotLetter('bcdf'), 'e', '<code>fearNotLetter("bcdf")</code>应该返回 "e"。');
  - text: "<code>fearNotLetter('abcdefghijklmnopqrstuvwxyz')</code>应该返回<code>undefined</code>。"
    testString: assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'), '<code>fearNotLetter("abcdefghijklmnopqrstuvwxyz")</code>应该返回<code>undefined</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function fearNotLetter (str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }
  
  return undefined;
}
```

</section>
              