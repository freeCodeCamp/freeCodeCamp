---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
videoUrl: ''
localeTitle: 'Найдите больше, чем первый матч'
---

## Description
<section id="description"> До сих пор вы могли только извлекать или искать шаблон один раз. <blockquote> let testStr = &quot;Повторить, Повторить, Повторить&quot;; <br> let ourRegex = / Repeat /; <br> testStr.match (ourRegex); <br> // Возвращает [&quot;Повторить&quot;] </blockquote> Чтобы искать или извлекать шаблон более одного раза, вы можете использовать флаг <code>g</code> . <blockquote> пусть repeatRegex = / Repeat / g; <br> testStr.match (repeatRegex); <br> // Возвращает [&quot;Повторить&quot;, &quot;Повторить&quot;, &quot;Повторить&quot;] </blockquote></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Вашему регулярному выражению <code>starRegex</code> следует использовать глобальный флаг <code>g</code>
    testString: 'assert(starRegex.flags.match(/g/).length == 1, "Your regex <code>starRegex</code> should use the global flag <code>g</code>");'
  - text: '<code>starRegex</code> выражение regex <code>starRegex</code> должно использовать флаг, нечувствительный к регистру <code>i</code>'
    testString: 'assert(starRegex.flags.match(/i/).length == 1, "Your regex <code>starRegex</code> should use the case insensitive flag <code>i</code>");'
  - text: Ваш матч должен совпадать с вхождением слова <code>&quot;Twinkle&quot;</code>
    testString: 'assert(result.sort().join() == twinkleStar.match(/twinkle/gi).sort().join(), "Your match should match both occurrences of the word <code>"Twinkle"</code>");'
  - text: <code>result</code> матча должен состоять из двух элементов.
    testString: 'assert(result.length == 2, "Your match <code>result</code> should have two elements in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
