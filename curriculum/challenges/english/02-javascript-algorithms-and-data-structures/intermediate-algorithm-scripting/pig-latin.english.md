---
id: aa7697ea2477d1316795783b
title: Pig Latin
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16039
---

## Description
<section id='description'>
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
</section>

## Instructions
<section id='instructions'>
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>translatePigLatin("california")</code> should return "aliforniacay".
    testString: assert.deepEqual(translatePigLatin("california"), "aliforniacay");
  - text: <code>translatePigLatin("paragraphs")</code> should return "aragraphspay".
    testString: assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay");
  - text: <code>translatePigLatin("glove")</code> should return "oveglay".
    testString: assert.deepEqual(translatePigLatin("glove"), "oveglay");
  - text: <code>translatePigLatin("algorithm")</code> should return "algorithmway".
    testString: assert.deepEqual(translatePigLatin("algorithm"), "algorithmway");
  - text: <code>translatePigLatin("eight")</code> should return "eightway".
    testString: assert.deepEqual(translatePigLatin("eight"), "eightway");
  - text: Should handle words where the first vowel comes in the middle of the word.  <code>translatePigLatin("schwartz")</code> should return "artzschway". 
    testString: assert.deepEqual(translatePigLatin("schwartz"), "artzschway");
  - text: Should handle words without vowels. <code>translatePigLatin("rhythm")</code> should return "rhythmay".
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
