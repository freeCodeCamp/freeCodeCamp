---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
isRequired: true
challengeType: 5
forumTopicId: 14271
localeTitle: Аргументы Дополнительно
---

## Description
<section id='description'>
Создайте функцию, которая суммирует два аргумента вместе. Если предоставляется только один аргумент, тогда возвращаем функцию, которая ожидает один аргумент и возвращает сумму. Например, <code>addTogether(2, 3)</code> должен возвращать <code>5</code> , а <code>addTogether(2)</code> должен возвращать функцию. Вызов этой возвращенной функции с помощью одного аргумента будет возвращать сумму: <code>var sumTwoAnd = addTogether(2);</code> <code>sumTwoAnd(3)</code> возвращает <code>5</code> . Если какой-либо аргумент не является допустимым числом, возвращайте undefined. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addTogether(2, 3)</code> should return 5.
    testString: assert.deepEqual(addTogether(2, 3), 5);
  - text: <code>addTogether(2)(3)</code> should return 5.
    testString: assert.deepEqual(addTogether(2)(3), 5);
  - text: <code>addTogether("http://bit.ly/IqT6zt")</code> should return undefined.
    testString: assert.isUndefined(addTogether("http://bit.ly/IqT6zt"));
  - text: <code>addTogether(2, "3")</code> should return undefined.
    testString: assert.isUndefined(addTogether(2, "3"));
  - text: <code>addTogether(2)([3])</code> should return undefined.
    testString: assert.isUndefined(addTogether(2)([3]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function addTogether() {
  return false;
}

addTogether(2,3);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```

</section>
