---
title: ABC Problem
id: 594810f028c0303b75339acc
challengeType: 5
forumTopicId: 302220
localeTitle: Проблема с ABC
---

## Description
<section id='description'>
<p> Вам предоставляется коллекция блоков ABC (например, блоков алфавита детства). На каждом блоке есть 20 блоков с двумя буквами. На всех сторонах блоков гарантируется полный алфавит. Сбор образцов блоков: </p><p> (БО) </p><p> (КСК) </p><p> (DQ) </p><p> (CP) </p><p> (НС) </p><p> (GT) </p><p> (RE) </p><p> (ТГ) </p><p> (КТ) </p><p> (ФС) </p><p> (ДВ) </p><p> (HU) </p><p> (VI) </p><p> (AN) </p><p> (ОВ) </p><p> (ЭР) </p><p> (ФС) </p><p> (LY) </p><p> (ПК) </p><p> (ЗМ) </p><p> Некоторые правила, которые следует учитывать: </p> Когда используется буква на блоке, этот блок нельзя использовать снова. Функция должна быть нечувствительна к регистру. <p> Реализуйте функцию, которая принимает строку (слово) и определяет, может ли слово быть записано с данным набором блоков. </p>
</section>

## Instructions
<section id='instructions'>
Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.
Some rules to keep in mind:
<ul>
  <li>Once a letter on a block is used, that block cannot be used again.</li>
  <li>The function should be case-insensitive.</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>canMakeWord</code> is a function.
    testString: assert(typeof canMakeWord === 'function');
  - text: <code>canMakeWord</code> should return a boolean.
    testString: assert(typeof canMakeWord('hi') === 'boolean');
  - text: <code>canMakeWord("bark")</code> should return true.
    testString: assert(canMakeWord(words[0]));
  - text: <code>canMakeWord("BooK")</code> should return false.
    testString: assert(!canMakeWord(words[1]));
  - text: <code>canMakeWord("TReAT")</code> should return true.
    testString: assert(canMakeWord(words[2]));
  - text: <code>canMakeWord("COMMON")</code> should return false.
    testString: assert(!canMakeWord(words[3]));
  - text: <code>canMakeWord("squAD")</code> should return true.
    testString: assert(canMakeWord(words[4]));
  - text: <code>canMakeWord("conFUSE")</code> should return true.
    testString: assert(canMakeWord(words[5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function canMakeWord(word) {
  // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function canMakeWord(word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}
```

</section>
