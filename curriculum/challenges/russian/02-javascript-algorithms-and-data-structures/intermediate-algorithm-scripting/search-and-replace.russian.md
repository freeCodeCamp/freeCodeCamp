---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
isRequired: true
challengeType: 5
forumTopicId: 16045
localeTitle: Поиск и замена
---

## Description
<section id='description'>
Выполните поиск и замените предложение, используя предоставленные аргументы и верните новое предложение. Первый аргумент - это предложение для выполнения поиска и замены. Второй аргумент - это слово, которое вы замените (до). Третий аргумент - это то, что вы замените вторым аргументом (после). <strong>Заметка</strong> <br> Сохраните случай первого символа в исходном слове, когда вы его замените. Например, если вы хотите заменить слово «Книга» словом «собака», его следует заменить как «Собака». Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myReplace("Let us go to the store", "store", "mall")</code> should return "Let us go to the mall".
    testString: assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
  - text: <code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code> should return "He is Sitting on the couch".
    testString: assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
  - text: <code>myReplace("This has a spellngi error", "spellngi", "spelling")</code> should return "This has a spelling error".
    testString: assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error");
  - text: <code>myReplace("His name is Tom", "Tom", "john")</code> should return "His name is John".
    testString: assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John");
  - text: <code>myReplace("Let us get back to more Coding", "Coding", "algorithms")</code> should return "Let us get back to more Algorithms".
    testString: assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```

</section>
