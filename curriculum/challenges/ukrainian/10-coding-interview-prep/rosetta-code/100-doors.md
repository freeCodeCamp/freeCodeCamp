---
id: 594810f028c0303b75339acb
title: 100 дверей
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

Перед початком закриті усі 100 дверей у ряді. Ви створюєте 100 проходів біля дверей. При першому проходженні завітайте до кожних дверей та "переключіть" їх (якщо двері зачинені, то відчиніть їх; якщо ж відчинені - зачиніть). Удруге відвідайте кожні другі двері (тобто двері №2, №4, №6,...) і переключіть їх. У третій раз зайдіть до кожної третьої двері (тобто №3, №6, №9,...) тощо, поки ви не відвідаєте сотих дверей.

# --instructions--

Реалізуйте функцію, щоб визначити стан дверей після останнього проходження. Поверніть кінцевий результат в масив тільки з тими номерами дверей, які включені в масив, якщо ті відчинені.

# --hints--

`getFinalOpenedDoors` має бути функцією.

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` має повернути масив.

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` має досягти правильного результату.

```js
assert.deepEqual(getFinalOpenedDoors(100), solution);
```

# --seed--

## --after-user-code--

```js
const solution = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

## --seed-contents--

```js
function getFinalOpenedDoors(numDoors) {

}
```

# --solutions--

```js
function getFinalOpenedDoors(numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}
```
