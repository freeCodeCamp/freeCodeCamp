---
id: af2170cad53daa0770fabdea
title: Mutations
isRequired: true
challengeType: 5
forumTopicId: 16025
localeTitle: Мутации
---

## Description
<section id='description'>
Возвращает true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива. Например, <code>[&quot;hello&quot;, &quot;Hello&quot;]</code> должен возвращать true, потому что все буквы во второй строке присутствуют в первом, игнорирующем случае. Аргументы <code>[&quot;hello&quot;, &quot;hey&quot;]</code> должны возвращать false, потому что строка &quot;hello&quot; не содержит &quot;y&quot;. Наконец, <code>[&quot;Alien&quot;, &quot;line&quot;]</code> должен возвращать true, потому что все буквы в «строке» присутствуют в «Alien». Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mutation(["hello", "hey"])</code> should return false.
    testString: assert(mutation(["hello", "hey"]) === false);
  - text: <code>mutation(["hello", "Hello"])</code> should return true.
    testString: assert(mutation(["hello", "Hello"]) === true);
  - text: <code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.
    testString: assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true);
  - text: <code>mutation(["Mary", "Army"])</code> should return true.
    testString: assert(mutation(["Mary", "Army"]) === true);
  - text: <code>mutation(["Mary", "Aarmy"])</code> should return true.
    testString: assert(mutation(["Mary", "Aarmy"]) === true);
  - text: <code>mutation(["Alien", "line"])</code> should return true.
    testString: assert(mutation(["Alien", "line"]) === true);
  - text: <code>mutation(["floor", "for"])</code> should return true.
    testString: assert(mutation(["floor", "for"]) === true);
  - text: <code>mutation(["hello", "neo"])</code> should return false.
    testString: assert(mutation(["hello", "neo"]) === false);
  - text: <code>mutation(["voodoo", "no"])</code> should return false.
    testString: assert(mutation(["voodoo", "no"]) === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);
```

</section>
