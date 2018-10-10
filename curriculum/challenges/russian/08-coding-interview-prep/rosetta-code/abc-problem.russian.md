---
title: ABC Problem
id: 594810f028c0303b75339acc
challengeType: 5
videoUrl: ''
localeTitle: Проблема с ABC
---

## Description
<section id="description"><p> Вам предоставляется коллекция блоков ABC (например, блоков алфавита детства). На каждом блоке есть 20 блоков с двумя буквами. На всех сторонах блоков гарантируется полный алфавит. Сбор образцов блоков: </p><p> (БО) </p><p> (КСК) </p><p> (DQ) </p><p> (CP) </p><p> (НС) </p><p> (GT) </p><p> (RE) </p><p> (ТГ) </p><p> (КТ) </p><p> (ФС) </p><p> (ДВ) </p><p> (HU) </p><p> (VI) </p><p> (AN) </p><p> (ОВ) </p><p> (ЭР) </p><p> (ФС) </p><p> (LY) </p><p> (ПК) </p><p> (ЗМ) </p><p> Некоторые правила, которые следует учитывать: </p> Когда используется буква на блоке, этот блок нельзя использовать снова. Функция должна быть нечувствительна к регистру. <p> Реализуйте функцию, которая принимает строку (слово) и определяет, может ли слово быть записано с данным набором блоков. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>canMakeWord</code> - это функция.
    testString: 'assert(typeof canMakeWord === "function", "<code>canMakeWord</code> is a function.");'
  - text: <code>canMakeWord</code> должен возвращать логическое значение.
    testString: 'assert(typeof canMakeWord("hi") === "boolean", "<code>canMakeWord</code> should return a boolean.");'
  - text: <code>canMakeWord(&quot;bark&quot;)</code> должен возвращать true.
    testString: 'assert(canMakeWord(words[0]), "<code>canMakeWord("bark")</code> should return true.");'
  - text: <code>canMakeWord(&quot;BooK&quot;)</code> должен возвращать false.
    testString: 'assert(!canMakeWord(words[1]), "<code>canMakeWord("BooK")</code> should return false.");'
  - text: <code>canMakeWord(&quot;TReAT&quot;)</code> должен возвращать true.
    testString: 'assert(canMakeWord(words[2]), "<code>canMakeWord("TReAT")</code> should return true.");'
  - text: <code>canMakeWord(&quot;COMMON&quot;)</code> должен возвращать false.
    testString: 'assert(!canMakeWord(words[3]), "<code>canMakeWord("COMMON")</code> should return false.");'
  - text: <code>canMakeWord(&quot;squAD&quot;)</code> должен возвращать true.
    testString: 'assert(canMakeWord(words[4]), "<code>canMakeWord("squAD")</code> should return true.");'
  - text: <code>canMakeWord(&quot;conFUSE&quot;)</code> должен возвращать true.
    testString: 'assert(canMakeWord(words[5]), "<code>canMakeWord("conFUSE")</code> should return true.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function canMakeWord (word) {
  // Good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
