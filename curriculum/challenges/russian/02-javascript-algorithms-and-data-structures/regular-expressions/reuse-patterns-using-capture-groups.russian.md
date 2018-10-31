---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
videoUrl: ''
localeTitle: Повторное использование шаблонов с использованием групп захвата
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Вашему регулярному выражению следует использовать класс сокращенных символов для цифр.
    testString: 'assert(reRegex.source.match(/\\d/), "Your regex should use the shorthand character class for digits.");'
  - text: Ваше регулярное выражение должно повторно использовать группу захвата дважды.
    testString: 'assert(reRegex.source.match(/\\\d/g).length === 2, "Your regex should reuse the capture group twice.");'
  - text: 'У вашего регулярного выражения должно быть два пробела, разделяющих три числа.'
    testString: 'assert(reRegex.source.match(/\\s/g).length === 2, "Your regex should have two spaces separating the three numbers.");'
  - text: ''
    testString: 'assert(reRegex.test("42 42 42"), "Your regex should match <code>"42 42 42"</code>.");'
  - text: ''
    testString: 'assert(reRegex.test("100 100 100"), "Your regex should match <code>"100 100 100"</code>.");'
  - text: ''
    testString: 'assert.equal(("42 42 42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42 42 42"</code>.");'
  - text: ''
    testString: 'assert.equal(("42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42"</code>.");'
  - text: ''
    testString: 'assert(!reRegex.test("101 102 103"), "Your regex should not match <code>"101 102 103"</code>.");'
  - text: ''
    testString: 'assert(!reRegex.test("1 2 3"), "Your regex should not match <code>"1 2 3"</code>.");'
  - text: ''
    testString: 'assert(reRegex.test("10 10 10"), "Your regex should match <code>"10 10 10"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
