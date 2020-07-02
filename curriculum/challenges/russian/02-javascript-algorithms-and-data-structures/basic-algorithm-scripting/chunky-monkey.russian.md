---
id: a9bd25c716030ec90084d8a1
title: Chunky Monkey
isRequired: true
challengeType: 5
forumTopicId: 16005
localeTitle: Короткая обезьяна
---

## Description
<section id='description'>
Напишите функцию, которая разбивает массив (первый аргумент) на группы по длине <code>size</code> (второй аргумент) и возвращает их в виде двумерного массива. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>chunkArrayInGroups(["a", "b", "c", "d"], 2)</code> should return <code>[["a", "b"], ["c", "d"]]</code>.
    testString: assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5]]</code>.
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5]]</code>.
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]]);
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5]]</code>.
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5], [6]]</code>.
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]]);
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code>.
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
  - text: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code>.
    testString: assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function chunkArrayInGroups(arr, size) {
  let out = [];

  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }

  return out;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

</section>
