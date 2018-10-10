---
title: Babbage problem
id: 594db4d0dedb4c06a2a4cefd
challengeType: 5
videoUrl: ''
localeTitle: Проблема с Бэббиджем
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Charles_Babbage" title="wp: Charles_Babbage">Чарльз Бэббидж</a> , смотрящий вперед на те проблемы, которые мог бы решить его аналитический движок, привел этот пример: </p><blockquote> Какое наименьшее положительное целое число, квадрат которого заканчивается цифрами 269 696? </blockquote><p> - Бэббидж, письмо лорду Боудену, 1837 год; см. Hollingdale and Tootill, <i>Electronic Computers</i> , второе издание, 1970, с. 125. </p><p> Он думал, что ответ может быть 99 736, чья площадь составляет 9 947 269 696; но он не мог быть уверен. </p><p> Задача состоит в том, чтобы выяснить, есть ли у Бэббиджа правильный ответ. </p><p> Реализуйте функцию, чтобы вернуть наименьшее целое число, удовлетворяющее задаче Бэббиджа. Если Бэббидж был прав, верните номер Бэббиджа. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>babbage</code> - это функция.
    testString: 'assert(typeof babbage === "function", "<code>babbage</code> is a function.");'
  - text: '<code>babbage(99736, 269696)</code> не должен возвращать 99736 (есть меньший ответ).'
    testString: 'assert.equal(babbage(babbageAns, endDigits), answer, "<code>babbage(99736, 269696)</code> should not return 99736 (there is a smaller answer).");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function babbage (babbageNum, endDigits) {
  // Good luck!
  return true;
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
