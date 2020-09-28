---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
forumTopicId: 301355
localeTitle: Литературные строки
---

## Description
<section id='description'>
В последнем вызове вы искали слово <code>&quot;Hello&quot;</code> используя регулярное выражение <code>/Hello/</code> . Это регулярное выражение искало буквальное совпадение строки <code>&quot;Hello&quot;</code> . Вот еще один пример поиска литерального соответствия строки <code>&quot;Kevin&quot;</code> : <blockquote> пусть testStr = «Привет, меня зовут Кевин»; <br> пусть testRegex = / Kevin /; <br> testRegex.test (testStr); <br> // Возвращает true </blockquote> Любые другие формы <code>&quot;Kevin&quot;</code> не совпадают. Например, regex <code>/Kevin/</code> не будет соответствовать <code>&quot;kevin&quot;</code> или <code>&quot;KEVIN&quot;</code> . <blockquote> let wrongRegex = / kevin /; <br> wrongRegex.test (testStr); <br> // Возвращает false </blockquote> Будущая задача покажет, как соотнести эти другие формы.
</section>

## Instructions
<section id='instructions'>
Заполните regex <code>waldoRegex</code> чтобы найти <code>&quot;Waldo&quot;</code> в строке <code>waldoIsHiding</code> с буквальным совпадением.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>waldoRegex</code> should find <code>"Waldo"</code>
    testString: assert(waldoRegex.test(waldoIsHiding));
  - text: Your regex <code>waldoRegex</code> should not search for anything else.
    testString: assert(!waldoRegex.test('Somewhere is hiding in this text.'));
  - text: You should perform a literal string match with your regex.
    testString: assert(!/\/.*\/i/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

</section>
