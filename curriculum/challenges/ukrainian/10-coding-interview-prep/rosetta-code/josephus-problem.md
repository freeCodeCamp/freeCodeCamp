---
id: 5a23c84252665b21eecc7ec5
title: Задача Йосифа Флавія
challengeType: 1
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

Josephus problem is a math puzzle with a grim description: $n$ prisoners are standing on a circle, sequentially numbered from $0$ to $n-1$.

Кат йде по колу, починаючи від ув’язненого $0$, виводить кожного $k$-го ув’язненого і вбиває його.

З часом, коло стає все меншим і меншим, поки не залишиться лише один в’язень, якого потім відпускають.

Наприклад, якщо є $n = 5$ ув'язнених і $k = 2$, порядок вбивства в'язнів (назвемо це "послідовністю вбивств") буде 1, 3, 0 і 4, а вцілілий буде #2.

Враховуючи будь-які $n, k > 0$, дізнайтеся, хто з ув'язнених виживе.

В одному з таких випадків було 41 ув'язнених, а кожен 3 <sup>rd</sup> в'язень був убитий ($k=3$).

Серед них був розумний хлопець на ім'я Йосип, який вирішив цю задачу, та обрав виграшну позицію, а згодом постійно розповідав про це.

Який номер він обрав?

# --instructions--

Write a function that takes the initial number of prisoners and `k` as parameters and returns the number of the prisoner that survives.

# --hints--

`josephus` має бути функцією.

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` повинен повернути число.

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` має повернути `28`.

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` має повернути `2`.

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` повинен повернути `8`.

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` повинен повернути `1`.

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` повинен повернути `1`.

```js
assert.equal(josephus(29, 4), 1);
```

# --seed--

## --seed-contents--

```js
function josephus(init, kill) {

}
```

# --solutions--

```js
function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
```
