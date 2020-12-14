---
id: af7588ade1100bde429baf20
challengeType: 5
title: 丢失的字母
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，找到传入的字符串里缺失的字母并返回它。
判断缺失的依据是字母顺序，比如 abcdfg 中缺失了 e。而 abcdef 中就没有字母缺失，此时我们需要返回<code>undefined</code>。
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
    testString: assert.deepEqual(fearNotLetter('abce'), 'd');
  - text: "<code>fearNotLetter('abcdefghjklmno')</code>应该返回 'i'。"
    testString: assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
  - text: "<code>fearNotLetter('stvwx')</code>应该返回 'u'。"
    testString: assert.deepEqual(fearNotLetter('stvwx'), 'u');
  - text: "<code>fearNotLetter('bcdf')</code>应该返回 'e'。"
    testString: assert.deepEqual(fearNotLetter('bcdf'), 'e');
  - text: "<code>fearNotLetter('abcdefghijklmnopqrstuvwxyz')</code>应该返回<code>undefined</code>。"
    testString: assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

</div>



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
