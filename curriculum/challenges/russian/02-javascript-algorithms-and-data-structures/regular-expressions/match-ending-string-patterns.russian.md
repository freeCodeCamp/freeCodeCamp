---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
videoUrl: ''
localeTitle: Шаблоны контуров соответствия
---

## Description
<section id="description"> В последней задаче вы научились использовать символ <code>caret</code> для поиска шаблонов в начале строк. Существует также способ поиска шаблонов в конце строк. Вы можете искать конец строк, используя <code>dollar sign</code> <code>$</code> в конце регулярного выражения. <blockquote> пусть TheEnding = «Это бесконечная история»; <br> let storyRegex = / story $ /; <br> storyRegex.test (theEnding); <br> // Возвращает true <br> let noEnding = &quot;Иногда история должна закончиться&quot;; <br> storyRegex.test (noEnding); <br> // Возвращает false <br></blockquote></section>

## Instructions
<section id="instructions"> Используйте символ привязки ( <code>$</code> ), чтобы соответствовать строке <code>&quot;caboose&quot;</code> в конце строки <code>caboose</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(lastRegex.source == "caboose$", "You should search for <code>"caboose"</code> with the dollar sign <code>$</code> anchor in your regex.");'
  - text: ''
    testString: 'assert(lastRegex.flags == "", "Your regex should not use any flags.");'
  - text: Вы должны соответствовать <code>&quot;caboose&quot;</code> в конце строки <code>&quot;The last car on a train is the caboose&quot;</code>
    testString: 'assert(lastRegex.test("The last car on a train is the caboose"), "You should match <code>"caboose"</code> at the end of the string <code>"The last car on a train is the caboose"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
