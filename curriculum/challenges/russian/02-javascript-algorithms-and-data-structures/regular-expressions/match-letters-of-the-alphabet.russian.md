---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
forumTopicId: 301354
localeTitle: Матч-буквы алфавита
---

## Description
<section id='description'>
Вы видели, как вы можете использовать <code>character sets</code> чтобы указать группу символов для соответствия, но это очень много, когда вам нужно сопоставить большой диапазон символов (например, каждую букву в алфавите). К счастью, есть встроенная функция, которая делает это коротким и простым. Внутри <code>character set</code> вы можете определить диапазон символов в соответствии с символом <code>hyphen</code> : <code>-</code> . Например, чтобы соответствовать строчным буквам от <code>a</code> до <code>e</code> вы должны использовать <code>[ae]</code> . <blockquote> let catStr = &quot;cat&quot;; <br> let batStr = &quot;bat&quot;; <br> пусть matStr = &quot;мат&quot;; <br> пусть bgRegex = / [ae] at /; <br> catStr.match (bgRegex); // Возвращает [&quot;cat&quot;] <br> batStr.match (bgRegex); // Возвращает [&quot;bat&quot;] <br> matStr.match (bgRegex); // Возвращает значение null </blockquote>
</section>

## Instructions
<section id='instructions'>
Сопоставьте все буквы в строке <code>quoteSample</code> . <strong>Заметка</strong> <br> Обязательно сопоставляйте <strong>буквы</strong> верхнего и нижнего регистра <strong><strong>.</strong></strong>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>alphabetRegex</code> should match 35 items.
    testString: assert(result.length == 35);
  - text: Your regex <code>alphabetRegex</code> should use the global flag.
    testString: assert(alphabetRegex.flags.match(/g/).length == 1);
  - text: Your regex <code>alphabetRegex</code> should use the case insensitive flag.
    testString: assert(alphabetRegex.flags.match(/i/).length == 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```

</section>
