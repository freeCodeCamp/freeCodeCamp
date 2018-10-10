---
id: af2170cad53daa0770fabdea
title: Mutations
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Мутации
---

## Description
<section id="description"> Возвращает true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива. Например, <code>[&quot;hello&quot;, &quot;Hello&quot;]</code> должен возвращать true, потому что все буквы во второй строке присутствуют в первом, игнорирующем случае. Аргументы <code>[&quot;hello&quot;, &quot;hey&quot;]</code> должны возвращать false, потому что строка &quot;hello&quot; не содержит &quot;y&quot;. Наконец, <code>[&quot;Alien&quot;, &quot;line&quot;]</code> должен возвращать true, потому что все буквы в «строке» присутствуют в «Alien». Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mutation([&quot;hello&quot;, &quot;hey&quot;])</code> должна возвращать false.'
    testString: 'assert(mutation(["hello", "hey"]) === false, "<code>mutation(["hello", "hey"])</code> should return false.");'
  - text: '<code>mutation([&quot;hello&quot;, &quot;Hello&quot;])</code> должна возвращать true.'
    testString: 'assert(mutation(["hello", "Hello"]) === true, "<code>mutation(["hello", "Hello"])</code> should return true.");'
  - text: ''
    testString: 'assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true, "<code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.");'
  - text: ''
    testString: 'assert(mutation(["Mary", "Army"]) === true, "<code>mutation(["Mary", "Army"])</code> should return true.");'
  - text: ''
    testString: 'assert(mutation(["Mary", "Aarmy"]) === true, "<code>mutation(["Mary", "Aarmy"])</code> should return true.");'
  - text: ''
    testString: 'assert(mutation(["Alien", "line"]) === true, "<code>mutation(["Alien", "line"])</code> should return true.");'
  - text: '<code>mutation([&quot;floor&quot;, &quot;for&quot;])</code> должна возвращать true.'
    testString: 'assert(mutation(["floor", "for"]) === true, "<code>mutation(["floor", "for"])</code> should return true.");'
  - text: ''
    testString: 'assert(mutation(["hello", "neo"]) === false, "<code>mutation(["hello", "neo"])</code> should return false.");'
  - text: '<code>mutation([&quot;voodoo&quot;, &quot;no&quot;])</code> возвращает false.'
    testString: 'assert(mutation(["voodoo", "no"]) === false, "<code>mutation(["voodoo", "no"])</code> should return false.");'

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
// solution required
```
</section>
