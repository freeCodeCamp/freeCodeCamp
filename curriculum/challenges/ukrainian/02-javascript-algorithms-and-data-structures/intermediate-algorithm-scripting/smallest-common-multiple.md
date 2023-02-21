---
id: ae9defd7acaf69703ab432ea
title: Найменше спільне кратне
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

Знайдіть найменше спільне кратне заданих параметрів, яке можна поділити на обидва з них, а також на всі послідовні числа в діапазоні між цими параметрами.

Діапазоном буде масив з двох чисел, які необов'язково будуть у числовому порядку.

Наприклад, якщо дано 1 і 3, знайдіть найменше спільне кратне обох чисел (1 і 3), яке рівно ділиться на всі числа *між* 1 і 3. Тут відповіддю буде 6.

# --hints--

`smallestCommons([1, 5])` має повертати число.

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` має повертати 60.

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` має повертати 60.

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` має повертати 2520.

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` має повертати 360360.

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` має повертати 6056820.

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
