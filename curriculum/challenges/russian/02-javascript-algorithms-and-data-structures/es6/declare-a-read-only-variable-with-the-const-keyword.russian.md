---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
forumTopicId: 301201
localeTitle: Объявлять переменную только для чтения с помощью ключевого слова const
---

## Description
<section id='description'>
<code>let</code> не является единственным новым способом объявления переменных. В ES6 вы также можете объявлять переменные, используя ключевое слово <code>const</code> . <code>const</code> имеет все потрясающие возможности, которые имеет <code>let</code>, с дополнительным бонусом, что переменные, объявленные с использованием <code>const</code> , доступны только для чтения. Они являются постоянной величиной, это означает, что когда переменная присваивается <code>const</code> , она не может быть переопределена. <blockquote> &quot;use strict&quot; <br> const FAV_PET = &quot;Кошки&quot;; <br> FAV_PET = &quot;Собаки&quot;; // возвращает ошибку </blockquote> Как вы можете видеть, попытка переопределить переменную, объявленную с помощью <code>const</code> вызовет ошибку. Вы всегда должны указывать переменные, которые вы не хотите переопределять, используя ключевое слово <code>const</code> . Это помогает, когда вы случайно пытаетесь переопределить переменную, которая должна оставаться постоянной. Обычной практикой является писать все буквы в названии переменной заглавными, а слова разделять нижним подчеркиванием.
</section>

## Instructions
<section id='instructions'>
Измените код так, чтобы все переменные были объявлены с помощью <code>let</code> или <code>const</code> . Используйте <code>let</code> когда вы хотите, чтобы переменная изменилась, и <code>const</code> когда вы хотите, чтобы переменная оставалась постоянной. Кроме того , переименовывать переменные , объявленные с помощью <code>const</code> , чтобы соответствовать общей практике, то есть константы должны быть заглавными буквами.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> does not exist in your code.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>SENTENCE</code> should be a constant variable declared with <code>const</code>.
    testString: getUserInput => assert(getUserInput('index').match(/(const SENTENCE)/g));
  - text: <code>i</code> should be declared with <code>let</code>.
    testString: getUserInput => assert(getUserInput('index').match(/(let i)/g));
  - text: <code>console.log</code> should be changed to print the <code>SENTENCE</code> variable.
    testString: getUserInput => assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
```

</section>
