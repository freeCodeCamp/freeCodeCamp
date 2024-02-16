---
id: 59c3ec9f15068017c96eb8a3
title: Послідовність Фарея
challengeType: 1
forumTopicId: 302266
dashedName: farey-sequence
---

# --description--

Послідовність Фарея <code>F<sub>n</sub></code> порядку `n` — це послідовність нескоротних дробів від `0` до `1`, знаменники яких менші або дорівнюють `n`, а дроби розташовані в порядку зростання.

Іноді *послідовність Фарея* помилково називають *рядом Фарея*.

Кожна послідовність Фарея:

<ul>
  <li>починається зі значення 0, що виражено дробом $ \frac{0}{1} $</li>
  <li>закінчується значенням 1, що виражено дробом $ \frac{1}{1}$.</li>
</ul>

Послідовності Фарея порядку від `1` до `5`:

<ul>
  <li style='list-style: none;'>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>

# --instructions--

Напишіть функцію, яка повертає послідовність Фарея порядку `n`. Функція повинна мати один параметр: `n`. Вона має повернути послідовність у вигляді масиву.

# --hints--

`farey` має бути функцією.

```js
assert(typeof farey === 'function');
```

`farey(3)` має повернути масив.

```js
assert(Array.isArray(farey(3)));
```

`farey(3)` має повернути `['0/1','1/3','1/2','2/3','1/1']`

```js
assert.deepEqual(farey(3),['0/1', '1/3', '1/2', '2/3', '1/1']);
```

`farey(4)` має повернути `['0/1','1/4','1/3','1/2','2/3','3/4','1/1']`

```js
assert.deepEqual(farey(4), ['0/1', '1/4', '1/3', '1/2', '2/3', '3/4', '1/1']);
```

`farey(5)` має повернути `['0/1','1/5','1/4','1/3','2/5','1/2','3/5','2/3','3/4','4/5','1/1']`

```js
assert.deepEqual(farey(5), [
  '0/1',
  '1/5',
  '1/4',
  '1/3',
  '2/5',
  '1/2',
  '3/5',
  '2/3',
  '3/4',
  '4/5',
  '1/1'
]);
```

# --seed--

## --seed-contents--

```js
function farey(n) {

}
```

# --solutions--

```js
function farey(n) {
  const sequence = [{ string: "0/1", float: 0.0 }];
  for (let i = 1; i < n; i++) {
    for (let j = n; j >= i; j--) {
      if (i === 1 || j % i > 0) {
        sequence.push({ string: `${i}/${j}`, float: i / j });
      }
    }
  }
  return sequence
    .sort((a, b) => a.float - b.float)
    .map(e => e.string)
}
```
