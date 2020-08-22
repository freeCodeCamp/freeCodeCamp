---
id: af7588ade1100bde429baf20
title: Missing letters
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16023
---

## Description
<section id='description'>
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fearNotLetter("abce")</code> should return "d".
    testString: assert.deepEqual(fearNotLetter('abce'), 'd');
  - text: <code>fearNotLetter("abcdefghjklmno")</code> should return "i".
    testString: assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
  - text: <code>fearNotLetter("stvwx")</code> should return "u".
    testString: assert.deepEqual(fearNotLetter('stvwx'), 'u');
  - text: <code>fearNotLetter("bcdf")</code> should return "e".
    testString: assert.deepEqual(fearNotLetter('bcdf'), 'e');
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
