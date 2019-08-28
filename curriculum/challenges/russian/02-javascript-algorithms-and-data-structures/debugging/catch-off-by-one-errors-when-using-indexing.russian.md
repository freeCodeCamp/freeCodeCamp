---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
challengeType: 1
forumTopicId: 301189
localeTitle: Устранение ошибок при использовании индексирования
---

## Description
<section id='description'>
<code>Off by one errors</code> (иногда называемой OBOE) возникает, когда вы пытаетесь настроить таргетинг на определенный индекс строки или массива (для среза или доступа к сегменту) или при циклировании по их индексам. Индексация JavaScript начинается с нуля, а не с одного, что означает, что последний индекс всегда на один меньше длины элемента. Если вы попытаетесь получить доступ к индексу, равному длине, программа может сбросить опорную ошибку индекса «вне диапазона» или напечатать <code>undefined</code> . Когда вы используете методы строк или массивов, которые принимают диапазоны индексов в качестве аргументов, это помогает прочитать документацию и понять, включены ли они (элемент в указанном индексе является частью возвращаемого) или нет. Вот несколько примеров ошибок: <blockquote> let alphabet = &quot;abcdefghijklmnopqrstuvwxyz&quot;; <br> пусть len = alphabet.length; <br> для (пусть i = 0; i &lt;= len; i ++) { <br> // петли слишком много раз в конце <br> console.log (алфавит [I]); <br> } <br> для (пусть j = 1; j &lt;len; j ++) { <br> // петли один или несколько раз и пропускает первый символ с индексом 0 <br> console.log (алфавит [J]); <br> } <br> для (пусть k = 0; k &lt;len; k ++) { <br> // Златовласки одобряет - это справедливо <br> console.log (алфавит [K]); <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Исправьте две ошибки индексации в следующей функции, чтобы все номера с 1 по 5 были напечатаны на консоли.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the initial condition of the loop so it starts at the first index.
    testString: assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
  - text: Your code should fix the initial condition of the loop so that the index starts at 0.
    testString: assert(!code.match(/i\s?=\s*?1\s*?;/g));
  - text: Your code should set the terminal condition of the loop so it stops at the last index.
    testString: assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1);
  - text: Your code should fix the terminal condition of the loop so that it stops at 1 before the length.
    testString: assert(!code.match(/i\s*?<=\s*?len;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 1; i <= len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}

countToFive();

```

</div>

</section>

## Solution
<section id='solution'>

```js
function countToFive() {
 let firstFive = "12345";
 let len = firstFive.length;
 // Fix the line below
 for (let i = 0; i < len; i++) {
 // Do not alter code below this line
   console.log(firstFive[i]);
 }
}

countToFive();
```

</section>
