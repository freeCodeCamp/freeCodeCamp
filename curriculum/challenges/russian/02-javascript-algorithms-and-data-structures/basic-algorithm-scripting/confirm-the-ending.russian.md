---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
isRequired: true
challengeType: 5
forumTopicId: 16006
localeTitle: Подтвердить завершение
---

## Description
<section id='description'>
Проверьте, заканчивается ли строка (первый аргумент, <code>str</code> ) заданной целевой строкой (второй аргумент, <code>target</code> ). Эта проблема <em>может</em> быть решена с помощью <code>.endsWith()</code> , который был введен в ES2015. Но для этой задачи мы хотели бы, чтобы вы использовали один из методов подстроки JavaScript. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>confirmEnding("Bastian", "n")</code> should return true.
    testString: assert(confirmEnding("Bastian", "n") === true);
  - text: <code>confirmEnding("Congratulation", "on")</code> should return true.
    testString: assert(confirmEnding("Congratulation", "on") === true);
  - text: <code>confirmEnding("Connor", "n")</code> should return false.
    testString: assert(confirmEnding("Connor", "n") === false);
  - text: <code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> should return false.
    testString: assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false);
  - text: <code>confirmEnding("He has to give me a new name", "name")</code> should return true.
    testString: assert(confirmEnding("He has to give me a new name", "name") === true);
  - text: <code>confirmEnding("Open sesame", "same")</code> should return true.
    testString: assert(confirmEnding("Open sesame", "same") === true);
  - text: <code>confirmEnding("Open sesame", "pen")</code> should return false.
    testString: assert(confirmEnding("Open sesame", "pen") === false);
  - text: <code>confirmEnding("Open sesame", "game")</code> should return false.
    testString: assert(confirmEnding("Open sesame", "game") === false);
  - text: <code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> should return false.
    testString: assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false);
  - text: <code>confirmEnding("Abstraction", "action")</code> should return true.
    testString: assert(confirmEnding("Abstraction", "action") === true);
  - text: Do not use the built-in method <code>.endsWith()</code> to solve the challenge.
    testString: assert(!(/\.endsWith\(.*?\)\s*?;?/.test(code)) && !(/\['endsWith'\]/.test(code)));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```

</section>
