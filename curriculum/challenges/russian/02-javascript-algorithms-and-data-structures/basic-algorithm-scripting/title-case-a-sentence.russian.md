---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
isRequired: true
challengeType: 5
forumTopicId: 16088
localeTitle: Название Случайное предложение
---

## Description
<section id='description'>
Верните предоставленную строку с первой буквой каждого слова, заглавными. Убедитесь, что остальная часть слова находится в нижнем регистре. Для целей этого упражнения вы также должны использовать прописные слова, такие как «the» и «of». Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>titleCase("I&#39;m a little tea pot")</code> should return a string.
    testString: assert(typeof titleCase("I'm a little tea pot") === "string");
  - text: <code>titleCase("I&#39;m a little tea pot")</code> should return <code>I&#39;m A Little Tea Pot</code>.
    testString: assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
  - text: <code>titleCase("sHoRt AnD sToUt")</code> should return <code>Short And Stout</code>.
    testString: assert(titleCase("sHoRt AnD sToUt") === "Short And Stout");
  - text: <code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> should return <code>Here Is My Handle Here Is My Spout</code>.
    testString: assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout");

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
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
```

</section>
