---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1
forumTopicId: 301344
localeTitle: Игнорировать случай при сопоставлении
---

## Description
<section id='description'>
До сих пор вы смотрели на регулярные выражения для выполнения буквальных совпадений строк. Но иногда, возможно, вы также захотите сопоставить разницу между случаями. Случай (или иногда буквенный регистр) - это разница между прописными и строчными буквами. Примеры прописных букв: <code>&quot;A&quot;</code> , <code>&quot;B&quot;</code> и <code>&quot;C&quot;</code> . Примеры строчных букв: <code>&quot;a&quot;</code> , <code>&quot;b&quot;</code> и <code>&quot;c&quot;</code> . Вы можете сопоставить оба случая с использованием так называемого флага. Существуют и другие флаги, но здесь вы сосредоточитесь на флагове, который игнорирует регистр - флаг <code>i</code> . Вы можете использовать его, добавив его в регулярное выражение. Примером использования этого флага является <code>/ignorecase/i</code> . Это регулярное выражение может соответствовать строкам <code>&quot;ignorecase&quot;</code> , <code>&quot;igNoreCase&quot;</code> и <code>&quot;IgnoreCase&quot;</code> .
</section>

## Instructions
<section id='instructions'>
Напишите регулярное выражение <code>fccRegex</code> для соответствия <code>&quot;freeCodeCamp&quot;</code> , независимо от его случая. Ваше регулярное выражение не должно соответствовать аббревиатурам или вариациям с пробелами.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should match <code>freeCodeCamp</code>
    testString: assert(fccRegex.test('freeCodeCamp'));
  - text: Your regex should match <code>FreeCodeCamp</code>
    testString: assert(fccRegex.test('FreeCodeCamp'));
  - text: Your regex should match <code>FreecodeCamp</code>
    testString: assert(fccRegex.test('FreecodeCamp'));
  - text: Your regex should match <code>FreeCodecamp</code>
    testString: assert(fccRegex.test('FreeCodecamp'));
  - text: Your regex should not match <code>Free Code Camp</code>
    testString: assert(!fccRegex.test('Free Code Camp'));
  - text: Your regex should match <code>FreeCOdeCamp</code>
    testString: assert(fccRegex.test('FreeCOdeCamp'));
  - text: Your regex should not match <code>FCC</code>
    testString: assert(!fccRegex.test('FCC'));
  - text: Your regex should match <code>FrEeCoDeCamp</code>
    testString: assert(fccRegex.test('FrEeCoDeCamp'));
  - text: Your regex should match <code>FrEeCodECamp</code>
    testString: assert(fccRegex.test('FrEeCodECamp'));
  - text: Your regex should match <code>FReeCodeCAmp</code>
    testString: assert(fccRegex.test('FReeCodeCAmp'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```

</section>
