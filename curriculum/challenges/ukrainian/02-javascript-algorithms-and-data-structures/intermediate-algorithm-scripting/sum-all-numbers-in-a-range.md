---
id: a3566b1109230028080c9345
title: Сума всіх чисел в діапазоні
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

Вам буде надано масив з двох чисел. Поверніть суму цих двох чисел плюс суму всіх чисел між ними. Найменше число не завжди буде на першому місці.

Наприклад, `sumAll([4,1])` має повертати `10`, оскільки сума всіх чисел між 1 і 4 (включно з ними) дорівнює `10`.

# --hints--

`sumAll([1, 4])` має повертати число.

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` має повертати 10.

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` має повертати 10.

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` має повертати 45.

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` має повертати 45.

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
