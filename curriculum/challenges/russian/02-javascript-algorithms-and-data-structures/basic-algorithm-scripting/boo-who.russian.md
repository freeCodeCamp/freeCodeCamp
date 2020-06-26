---
id: a77dbc43c33f39daa4429b4f
title: Boo who
isRequired: true
challengeType: 5
forumTopicId: 16000
localeTitle: Бу, кто
---

## Description
<section id='description'>
Проверьте, классифицировано ли значение как булевский примитив. Вернуть true или false. Булевы примитивы являются истинными и ложными. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>booWho(true)</code> should return true.
    testString: assert.strictEqual(booWho(true), true);
  - text: <code>booWho(false)</code> should return true.
    testString: assert.strictEqual(booWho(false), true);
  - text: <code>booWho([1, 2, 3])</code> should return false.
    testString: assert.strictEqual(booWho([1, 2, 3]), false);
  - text: <code>booWho([].slice)</code> should return false.
    testString: assert.strictEqual(booWho([].slice), false);
  - text: '<code>booWho({ "a": 1 })</code> should return false.'
    testString: 'assert.strictEqual(booWho({ "a": 1 }), false);'
  - text: <code>booWho(1)</code> should return false.
    testString: assert.strictEqual(booWho(1), false);
  - text: <code>booWho(NaN)</code> should return false.
    testString: assert.strictEqual(booWho(NaN), false);
  - text: <code>booWho("a")</code> should return false.
    testString: assert.strictEqual(booWho("a"), false);
  - text: <code>booWho("true")</code> should return false.
    testString: assert.strictEqual(booWho("true"), false);
  - text: <code>booWho("false")</code> should return false.
    testString: assert.strictEqual(booWho("false"), false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(null);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
```

</section>
