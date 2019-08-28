---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
forumTopicId: 301349
localeTitle: Сопоставление начальных шаблонов строк
---

## Description
<section id='description'>
Предыдущие проблемы показали, что регулярные выражения могут использоваться для поиска нескольких совпадений. Они также используются для поиска шаблонов в определенных положениях в строках. В более ранней задаче вы использовали символ <code>caret</code> ( <code>^</code> ) внутри <code>character set</code> чтобы создать <code>negated character set</code> в форме <code>[^thingsThatWillNotBeMatched]</code> . Вне <code>character set</code> <code>caret</code> используется для поиска шаблонов в начале строк. <blockquote> пусть firstString = &quot;Ricky является первым и может быть найден.&quot;; <br> пусть firstRegex = / ^ Ricky /; <br> firstRegex.test (firstString); <br> // Возвращает true <br> let notFirst = «Теперь вы не можете найти Рики»; <br> firstRegex.test (notFirst); <br> // Возвращает false </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте символ <code>caret</code> в регулярном выражении, чтобы найти <code>&quot;Cal&quot;</code> только в начале строки <code>rickyAndCal</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should search for <code>"Cal"</code> with a capital letter.
    testString: assert(calRegex.source == "^Cal");
  - text: Your regex should not use any flags.
    testString: assert(calRegex.flags == "");
  - text: Your regex should match <code>"Cal"</code> at the beginning of the string.
    testString: assert(calRegex.test("Cal and Ricky both like racing."));
  - text: Your regex should not match <code>"Cal"</code> in the middle of a string.
    testString: assert(!calRegex.test("Ricky and Cal both like racing."));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```

</section>
