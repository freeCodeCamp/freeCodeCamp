---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: https://scrimba.com/c/cP3vVsm
forumTopicId: 18377
localeTitle: Word Blanks
---

## Description
<section id='description'>
Теперь мы будем использовать наши знания объектов String для создания словесной игры « <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> », которую мы называем «Word Blanks». Вы создадите (возможно, юмористическое) предложение стиля «Заполнить пропуски». В игре «Mad Libs» вам предоставляются предложения с некоторыми пропущенными словами, такими как существительные, глаголы, прилагательные и наречия. Затем вы заполняете недостающие части словами по вашему выбору так, чтобы законченное предложение имело смысл. Рассмотрите это предложение - «Он был действительно <strong>____</strong> , а мы <strong>____</strong> не <strong>____</strong> ». В этом предложении есть три недостающих фрагмента: прилагательное, наречие и глагол, и мы можем добавить слова по нашему выбору, чтобы завершить его. Затем мы можем назначить заполненное предложение переменной следующим образом: <blockquote> var sentence = «Он был действительно« + »страшный« + », а мы« + »совершенно« + »не» + «боялись»; </blockquote>
</section>

## Instructions
<section id='instructions'>
В этой задаче мы предоставляем вам существительное, глагол, прилагательное и наречие. Вам нужно составить полное предложение, используя слова по вашему выбору, а также слова, которые мы предоставляем. Вам понадобится использовать оператор конкатенации строк <code>+</code> для создания новой строки с использованием предоставленных переменных: <code>myNoun</code> , <code>myAdjective</code> , <code>myVerb</code> и <code>myAdverb</code> . Затем вы присвойте сформированную строку переменной <code>result</code> . Вам также нужно будет учитывать пробелы в вашей строке, так что последнее предложение имеет пробелы между всеми словами. Результат должен быть полным предложением.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>wordBlanks</code> should be a string.
    testString: assert(typeof wordBlanks === 'string');
  - text: You should not change the values assigned to <code>myNoun</code>, <code>myVerb</code>, <code>myAdjective</code> or <code>myAdverb</code>.
    testString: assert(myNoun === "dog" && myVerb === "ran" && myAdjective === "big" && myAdverb === "quickly");
  - text: You should not directly use the values "dog", "ran", "big", or "quickly" to create <code>wordBlanks</code>.
    testString: const newCode = removeAssignments(code); assert(!/dog/.test(newCode) && !/ran/.test(newCode) && !/big/.test(newCode) && !/quickly/.test(newCode));
  - text: <code>wordBlanks</code> should contain all of the words assigned to the variables <code>myNoun</code>, <code>myVerb</code>, <code>myAdjective</code> and <code>myAdverb</code> separated by non-word characters (and any additional words in your madlib).
    testString: assert(/\bdog\b/.test(wordBlanks) && /\bbig\b/.test(wordBlanks) && /\bran\b/.test(wordBlanks) && /\bquickly\b/.test(wordBlanks));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = ""; // Only change this line;

```

</div>

### After Tests
<div id='js-teardown'>

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```

</section>
