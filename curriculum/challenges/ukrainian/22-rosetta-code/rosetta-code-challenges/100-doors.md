---
id: 594810f028c0303b75339acb
title: 100 дверей
challengeType: 1
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

В ряді розміщено 100 дверей, які спочатку закриті. Ви проходите 100 разів біля дверей. Першого разу «перемкніть» двері (якщо двері закриті, то відкрийте їх і навпаки). Другого разу відвідайте лише кожні другі двері (тобто двері №2, №4, №6…) і перемкніть їх. Третього разу відвідайте кожні треті двері (тобто двері №3, №6, №9…), поки не відвідаєте двері №100.

# --instructions--

Реалізуйте функцію, щоб визначити стан дверей після останнього проходження. Поверніть кінцевий результат у вигляді масиву, який складається з номерів відкритих дверей.

# --hints--

`getFinalOpenedDoors` має бути функцією.

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` має повернути масив.

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` має пред’явити правильний результат.

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
