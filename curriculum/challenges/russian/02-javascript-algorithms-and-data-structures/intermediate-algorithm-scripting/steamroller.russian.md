---
id: ab306dbdcc907c7ddfc30830
title: Steamroller
isRequired: true
challengeType: 5
forumTopicId: 16079
localeTitle: пробиваться с боями
---

## Description
<section id='description'>
Сгладьте вложенный массив. Вы должны учитывать различные уровни гнездования. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>steamrollArray([[["a"]], [["b"]]])</code> should return <code>["a", "b"]</code>.
    testString: assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]);
  - text: <code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.
    testString: assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
  - text: <code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.
    testString: assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
  - text: <code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.
    testString: assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```

</section>
