---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
forumTopicId: 301341
localeTitle: Найти персонажей с ленивым соответствием
---

## Description
<section id='description'>
В регулярных выражениях <code>greedy</code> соответствие находит самую длинную возможную часть строки, которая соответствует шаблону регулярного выражения и возвращает его как совпадение. Альтернативой называется <code>lazy</code> совпадение, которое находит наименьшую возможную часть строки, которая удовлетворяет шаблону регулярного выражения. Вы можете применить regex <code>/t[az]*i/</code> к строке <code>&quot;titanic&quot;</code> . Это регулярное выражение в основном является шаблоном, начинающимся с <code>t</code> , заканчивается <code>i</code> , и между ними есть несколько букв. Регулярные выражения по умолчанию <code>greedy</code> , поэтому матч вернет <code>[&quot;titani&quot;]</code> . Он находит самую большую подстроку, которая может соответствовать шаблону. Однако вы можете использовать <code>?</code> чтобы изменить его на <code>lazy</code> соответствие. <code>&quot;titanic&quot;</code> соответствует настроенному регулярному выражению <code>/t[az]*?i/</code> возвращает <code>[&quot;ti&quot;]</code> .
</section>

## Instructions
<section id='instructions'>
Исправьте regex <code>/&lt;.*&gt;/</code> чтобы вернуть HTML-тег <code>&lt;h1&gt;</code> а не текст <code>&quot;&lt;h1&gt;Winter is coming&lt;/h1&gt;&quot;</code> . Помните шаблон <code>.</code> в регулярном выражении соответствует любому символу.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>result</code> variable should be an array with <code>&lt;h1&gt;</code> in it
    testString: assert(result[0] == '<h1>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```

</section>
