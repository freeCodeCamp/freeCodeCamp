---
id: aa7697ea2477d1316795783b
title: Pig Latin
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Pig Latin
---

## Description
<section id="description"> Переведите предоставленную строку в латинский свиньи. <a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a> берет первый согласный (или согласный кластер) английского слова, переводит его в конец слова и суффиксы «ay». Если слово начинается с гласного, вы просто добавляете «путь» до конца. Строки ввода гарантированно являются английскими словами во всех строчных строках. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>translatePigLatin(&quot;california&quot;)</code> должен возвращать &quot;aliforniacay&quot;.
    testString: 'assert.deepEqual(translatePigLatin("california"), "aliforniacay", "<code>translatePigLatin("california")</code> should return "aliforniacay".");'
  - text: <code>translatePigLatin(&quot;paragraphs&quot;)</code> должен возвращать «aragraphspay».
    testString: 'assert.deepEqual(translatePigLatin("paragraphs"), "aragraphspay", "<code>translatePigLatin("paragraphs")</code> should return "aragraphspay".");'
  - text: <code>translatePigLatin(&quot;glove&quot;)</code> должен возвращать «oveglay».
    testString: 'assert.deepEqual(translatePigLatin("glove"), "oveglay", "<code>translatePigLatin("glove")</code> should return "oveglay".");'
  - text: <code>translatePigLatin(&quot;algorithm&quot;)</code> должен возвращать «algorithmway».
    testString: 'assert.deepEqual(translatePigLatin("algorithm"), "algorithmway", "<code>translatePigLatin("algorithm")</code> should return "algorithmway".");'
  - text: <code>translatePigLatin(&quot;eight&quot;)</code> должен возвращать «восьмерку».
    testString: 'assert.deepEqual(translatePigLatin("eight"), "eightway", "<code>translatePigLatin("eight")</code> should return "eightway".");'
  - text: 'Должен обрабатывать слова, где первая гласная приходит в конце слова.'
    testString: 'assert.deepEqual(translatePigLatin("schwartz"), "artzschway", "Should handle words where the first vowel comes in the end of the word.");'
  - text: Должно обрабатывать слова без гласных.
    testString: 'assert.deepEqual(translatePigLatin("rhythm"), "rhythmay", "Should handle words without vowels.");'

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
// solution required
```
</section>
