---
id: af7588ade1100bde429baf20
title: Missing letters
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fearNotLetter("abce")</code> should return "d".
    testString: assert.deepEqual(fearNotLetter('abce'), 'd', '<code>fearNotLetter("abce")</code> should return "d".');
  - text: <code>fearNotLetter("abcdefghjklmno")</code> should return "i".
    testString: assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i', '<code>fearNotLetter("abcdefghjklmno")</code> should return "i".');
  - text: <code>fearNotLetter("stvwx")</code> should return "u".
    testString: assert.deepEqual(fearNotLetter('stvwx'), 'u', '<code>fearNotLetter("stvwx")</code> should return "u".');
  - text: <code>fearNotLetter("bcdf")</code> should return "e".
    testString: assert.deepEqual(fearNotLetter('bcdf'), 'e', '<code>fearNotLetter("bcdf")</code> should return "e".');
  - text: <code>fearNotLetter("abcdefghijklmnopqrstuvwxyz")</code> should return undefined.
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
