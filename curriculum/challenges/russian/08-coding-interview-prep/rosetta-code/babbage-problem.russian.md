---
title: Babbage problem
id: 594db4d0dedb4c06a2a4cefd
challengeType: 5
forumTopicId: 302229
localeTitle: Проблема с Бэббиджем
---

## Description
<section id='description'>
<p> <a href="https://en.wikipedia.org/wiki/Charles_Babbage" title="wp: Charles_Babbage">Чарльз Бэббидж</a> , смотрящий вперед на те проблемы, которые мог бы решить его аналитический движок, привел этот пример: </p><blockquote> Какое наименьшее положительное целое число, квадрат которого заканчивается цифрами 269 696? </blockquote><p> - Бэббидж, письмо лорду Боудену, 1837 год; см. Hollingdale and Tootill, <i>Electronic Computers</i> , второе издание, 1970, с. 125. </p><p> Он думал, что ответ может быть 99 736, чья площадь составляет 9 947 269 696; но он не мог быть уверен. </p><p> Задача состоит в том, чтобы выяснить, есть ли у Бэббиджа правильный ответ. </p><p> Реализуйте функцию, чтобы вернуть наименьшее целое число, удовлетворяющее задаче Бэббиджа. Если Бэббидж был прав, верните номер Бэббиджа. </p>
</section>

## Instructions
<section id='instructions'>
Implement a function to return the lowest integer that satisfies the Babbage problem. If Babbage was right, return Babbage's number.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>babbage</code> is a function.
    testString: assert(typeof babbage === 'function');
  - text: <code>babbage(99736, 269696)</code> should not return 99736 (there is a smaller answer).
    testString: assert.equal(babbage(babbageAns, endDigits), answer);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function babbage(babbageNum, endDigits) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const babbageAns = 99736;
const endDigits = 269696;
const answer = 25264;

```

</div>

</section>

## Solution
<section id='solution'>

```js
function babbage(babbageAns, endDigits) {
  const babbageNum = Math.pow(babbageAns, 2);
  const babbageStartDigits = parseInt(babbageNum.toString().replace('269696', ''));
  let answer = 99736;

  // count down from this answer and save any sqrt int result. return lowest one
  for (let i = babbageStartDigits; i >= 0; i--) {
    const num = parseInt(i.toString().concat('269696'));
    const result = Math.sqrt(num);
    if (result === Math.floor(Math.sqrt(num))) {
      answer = result;
    }
  }

  return answer;
}
```

</section>
