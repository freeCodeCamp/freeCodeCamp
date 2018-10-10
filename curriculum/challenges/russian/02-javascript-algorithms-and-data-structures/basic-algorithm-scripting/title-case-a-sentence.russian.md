---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Название Случайное предложение
---

## Description
<section id="description"> Верните предоставленную строку с первой буквой каждого слова, заглавными. Убедитесь, что остальная часть слова находится в нижнем регистре. Для целей этого упражнения вы также должны использовать прописные слова, такие как «the» и «of». Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code> должен возвращать строку.'
    testString: 'assert(typeof titleCase("I"m a little tea pot") === "string", "<code>titleCase("I&#39;m a little tea pot")</code> should return a string.");'
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code> должен вернуться, <code>I&#39;m A Little Tea Pot</code> .'
    testString: 'assert(titleCase("I"m a little tea pot") === "I"m A Little Tea Pot", "<code>titleCase("I&#39;m a little tea pot")</code> should return <code>I&#39;m A Little Tea Pot</code>.");'
  - text: <code>titleCase(&quot;sHoRt AnD sToUt&quot;)</code> должен возвращать <code>Short And Stout</code> .
    testString: 'assert(titleCase("sHoRt AnD sToUt") === "Short And Stout", "<code>titleCase("sHoRt AnD sToUt")</code> should return <code>Short And Stout</code>.");'
  - text: ''
    testString: 'assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout", "<code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> should return <code>Here Is My Handle Here Is My Spout</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
