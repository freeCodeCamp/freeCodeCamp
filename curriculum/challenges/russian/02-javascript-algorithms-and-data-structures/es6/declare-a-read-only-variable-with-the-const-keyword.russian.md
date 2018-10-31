---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
videoUrl: ''
localeTitle: Объявлять переменную только для чтения с помощью ключевого слова const
---

## Description
<section id="description"> <code>let</code> не является единственным новым способом объявления переменных. В ES6 вы также можете объявлять переменные, используя ключевое слово <code>const</code> . <code>const</code> имеет все потрясающие функции, которые <code>let</code> иметь, с добавленным бонусом, что переменные, объявленные с использованием <code>const</code> , доступны только для чтения. Они являются постоянной величиной, что означает , что когда переменная присваивается <code>const</code> , он не может быть переназначен. <blockquote> &quot;использовать строгие&quot; <br> const FAV_PET = &quot;Кошки&quot;; <br> FAV_PET = &quot;Собаки&quot;; // возвращает ошибку </blockquote> Как вы можете видеть, попытка переназначить переменную, объявленную с помощью <code>const</code> вызовет ошибку. Вы всегда должны указывать переменные, которые вы не хотите переназначать, используя ключевое слово <code>const</code> . Это помогает, когда вы случайно пытаетесь переназначить переменную, которая должна оставаться постоянной. Обычная практика, когда константы именования - использовать все заглавные буквы со словами, разделенными символом подчеркивания. </section>

## Instructions
<section id="instructions"> Измените код так, чтобы все переменные были объявлены с помощью <code>let</code> или <code>const</code> . Используйте <code>let</code> когда вы хотите, чтобы переменная изменилась, и <code>const</code> когда вы хотите, чтобы переменная оставалась постоянной. Кроме того , переименовывать переменные , объявленные с <code>const</code> , чтобы соответствовать общей практике, то есть константы должны быть заглавными буквами. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> не существует в вашем коде.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in your code.");'
  - text: '<code>SENTENCE</code> должна быть постоянной переменной , объявленной с <code>const</code> .'
    testString: 'getUserInput => assert(getUserInput("index").match(/(const SENTENCE)/g), "<code>SENTENCE</code> should be a constant variable declared with <code>const</code>.");'
  - text: <code>i</code> должен быть объявлен с <code>let</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/(let i)/g), "<code>i</code> should be declared with <code>let</code>.");'
  - text: '<code>console.log</code> следует изменить, чтобы напечатать переменную <code>SENTENCE</code> .'
    testString: 'getUserInput => assert(getUserInput("index").match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g), "<code>console.log</code> should be adjusted to print the variable <code>SENTENCE</code>.");'

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
  for(var i = 0; i < str.length; i+=2) {
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
// solution required
```
</section>
