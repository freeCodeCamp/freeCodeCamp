---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
videoUrl: ''
localeTitle: Сопоставление начальных шаблонов строк
---

## Description
<section id="description"> Предыдущие проблемы показали, что регулярные выражения могут использоваться для поиска нескольких совпадений. Они также используются для поиска шаблонов в определенных положениях в строках. В более ранней задаче вы использовали символ <code>caret</code> ( <code>^</code> ) внутри <code>character set</code> чтобы создать <code>negated character set</code> в форме <code>[^thingsThatWillNotBeMatched]</code> . Вне <code>character set</code> <code>caret</code> используется для поиска шаблонов в начале строк. <blockquote> пусть firstString = &quot;Ricky является первым и может быть найден.&quot;; <br> пусть firstRegex = / ^ Ricky /; <br> firstRegex.test (firstString); <br> // Возвращает true <br> let notFirst = «Теперь вы не можете найти Рики»; <br> firstRegex.test (notFirst); <br> // Возвращает false </blockquote></section>

## Instructions
<section id="instructions"> Используйте символ <code>caret</code> в регулярном выражении, чтобы найти <code>&quot;Cal&quot;</code> только в начале строки <code>rickyAndCal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вашему регулярному выражению следует искать <code>&quot;Cal&quot;</code> с большой буквы.
    testString: 'assert(calRegex.source == "^Cal", "Your regex should search for <code>"Cal"</code> with a capital letter.");'
  - text: В вашем регулярном выражении не должно использоваться никаких флагов.
    testString: 'assert(calRegex.flags == "", "Your regex should not use any flags.");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;Cal&quot;</code> в начале строки.
    testString: 'assert(calRegex.test("Cal and Ricky both like racing."), "Your regex should match <code>"Cal"</code> at the beginning of the string.");'
  - text: Ваше регулярное выражение не должно совпадать с <code>&quot;Cal&quot;</code> в середине строки.
    testString: 'assert(!calRegex.test("Ricky and Cal both like racing."), "Your regex should not match <code>"Cal"</code> in the middle of a string.");'

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
// solution required
```
</section>
