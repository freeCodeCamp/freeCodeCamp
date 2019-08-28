---
title: Define a primitive data type
id: 597089c87eec450c68aa1643
challengeType: 5
forumTopicId: 302248
localeTitle: Определить примитивный тип данных
---

## Description
<section id='description'>
Задача: <p> Определите тип, который ведет себя как целое число, но имеет наименьшее допустимое значение 1 и самое высокое допустимое значение 10. </p> Ошибки. Если вы попытаетесь создать экземпляр <code>Num</code> со значением за пределами 1 - 10, он должен выбросить <code>TypeError</code> с сообщением об ошибке <code>&#39;Out of range&#39;</code> . Если вы попытаетесь создать экземпляр <code>Num</code> со значением, которое не является числом, оно должно <code>TypeError</code> с сообщением об ошибке <code>&#39;Not a Number&#39;</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Num</code> should be a function.
    testString: assert(typeof Num === 'function');
  - text: <code>new Num(4)</code> should return an object.
    testString: assert(typeof (new Num(4)) === 'object');
  - text: <code>new Num('test')</code> should throw a TypeError with message 'Not a Number'.
    testString: assert.throws(() => new Num('test'), TypeError);
  - text: <code>new Num(0)</code> should throw a TypeError with message 'Out of range'.
    testString: assert.throws(() => new Num(0), TypeError);
  - text: <code>new Num(-5)</code> should throw a TypeError with message 'Out of range'.
    testString: assert.throws(() => new Num(-5), TypeError);
  - text: <code>new Num(10)</code> should throw a TypeError with message 'Out of range'.
    testString: assert.throws(() => new Num(11), TypeError);
  - text: <code>new Num(20)</code> should throw a TypeError with message 'Out of range'.
    testString: assert.throws(() => new Num(20), TypeError);
  - text: <code>new Num(3) + new Num(4)</code> should equal 7.
    testString: assert.equal(new Num(3) + new Num(4), 7);
  - text: <code>new Num(3) - new Num(4)</code> should equal -1.
    testString: assert.equal(new Num(3) - new Num(4), -1);
  - text: <code>new Num(3) * new Num(4)</code> should equal 12.
    testString: assert.equal(new Num(3) * new Num(4), 12);
  - text: <code>new Num(3) / new Num(4)</code> should equal 0.75.
    testString: assert.equal(new Num(3) / new Num(4), 0.75);
  - text: <code>new Num(3) < new Num(4)</code> should be true.
    testString: assert(new Num(3) < new Num(4));
  - text: <code>new Num(3) > new Num(4)</code> should be false.
    testString: assert(!(new Num(3) > new Num(4)));
  - text: <code>(new Num(5)).toString()</code> should return '5'
    testString: assert.equal((new Num(5)).toString(), '5');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Num(n) {
  // Good luck!
  return n;
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Num(n) {
  if (isNaN(n)) {
    throw new TypeError('Not a Number');
  }
  if (n < 1 || n > 10) {
    throw new TypeError('Out of range');
  }

  this._value = +n;
}
Num.prototype.valueOf = function() { return this._value; };
Num.prototype.toString = function () { return this._value.toString(); };
```

</section>
