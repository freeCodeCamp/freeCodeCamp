---
title: Word wrap
id: 594810f028c0303b75339ad4
challengeType: 5
videoUrl: ''
localeTitle: Перенос слова
---

## Description
<section id="description"><p> Даже сегодня, с пропорциональными шрифтами и сложными макетами, все еще есть случаи, когда вам нужно обернуть текст в указанном столбце. Основная задача - обтекание абзаца текста простым способом. Пример текста: </p><pre> Оберните текст, используя более сложный алгоритм, такой как алгоритм Knuth и Plass TeX.
Если ваш язык предоставляет это, вы получаете легкий дополнительный кредит,
но вы «должны ссылаться на документацию», указывая на то, что алгоритм
что-то лучше, чем простой алгоритм минимальной длины.
</pre><p> Задача: </p><pre> <code>Write a function that can wrap this text to any number of characters.</code> </pre><p> Например, текст, состоящий из 80 символов, должен выглядеть следующим образом: </p><p></p><pre> Оберните текст, используя более сложный алгоритм, такой как Knuth и Plass TeX
алгоритм. Если ваш язык предоставляет это, вы получаете легкий дополнительный кредит, но вы
должен ссылаться на документацию, указывающую, что алгоритм лучше чем
чем простой алгоритм минимальной длины.
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: wrap должна быть функцией.
    testString: 'assert.equal(typeof wrap, "function", "wrap must be a function.");'
  - text: wrap должен возвращать строку.
    testString: 'assert.equal(typeof wrap("abc", 10), "string", "wrap must return a string.");'
  - text: wrap (80) должен возвращать 4 строки.
    testString: 'assert(wrapped80.split("\n").length === 4, "wrap(80) must return 4 lines.");'
  - text: Функция <code>wrap</code> должна возвращать ожидаемый текст
    testString: 'assert.equal(wrapped80.split("\n")[0], firstRow80, "Your <code>wrap</code> function should return our expected text");'
  - text: wrap (42) должен возвращать 7 строк.
    testString: 'assert(wrapped42.split("\n").length === 7, "wrap(42) must return 7 lines.");'
  - text: Функция <code>wrap</code> должна возвращать ожидаемый текст
    testString: 'assert.equal(wrapped42.split("\n")[0], firstRow42, "Your <code>wrap</code> function should return our expected text");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wrap (text, limit) {
  return text;
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
