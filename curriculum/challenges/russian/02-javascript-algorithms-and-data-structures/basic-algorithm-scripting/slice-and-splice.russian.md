---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
isRequired: true
isBeta: true
challengeType: 5
forumTopicId: 301148
localeTitle: Нарезка и сращивание
---

## Description
<section id='description'>
Вам даны два массива и индекс. Используйте метод массива <code>slice</code> и <code>splice</code> для копирования каждого элемента первого массива во второй массив по порядку. Начните вставлять элементы в индекс <code>n</code> второго массива. Верните результирующий массив. Входные массивы должны оставаться неизменными после запуска функции. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>frankenSplice([1, 2, 3], [4, 5], 1)</code> should return <code>[4, 1, 2, 3, 5]</code>.
    testString: assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
  - text: <code>frankenSplice([1, 2], ["a", "b"], 1)</code> should return <code>["a", 1, 2, "b"]</code>.
    testString: assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ["a", 1, 2, "b"]);
  - text: <code>frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)</code> should return <code>["head", "shoulders", "claw", "tentacle", "knees", "toes"]</code>.
    testString: assert.deepEqual(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2), ["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
  - text: All elements from the first array should be added to the second array in their original order.
    testString: assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
  - text: The first array should remain the same after the function runs.
    testString: assert(testArr1[0] === 1 && testArr1[1] === 2);
  - text: The second array should remain the same after the function runs.
    testString: assert(testArr2[0] === "a" && testArr2[1] === "b");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

```

</div>

### After Tests
<div id='js-teardown'>

```js
let testArr1 = [1, 2];
let testArr2 = ["a", "b"];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
```

</section>
