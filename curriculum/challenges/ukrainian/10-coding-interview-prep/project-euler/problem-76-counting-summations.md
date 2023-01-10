---
id: 5900f3b81000cf542c50fecb
title: 'Задача 76: підрахунок сум'
challengeType: 1
forumTopicId: 302189
dashedName: problem-76-counting-summations
---

# --description--

5 можна записати як суму рівно шістьма різними способами:

<div style='margin-left: 4em;'>
  4 + 1<br>
  3 + 2<br>
  3 + 1 + 1<br>
  2 + 2 + 1<br>
  2 + 1 + 1 + 1<br>
  1 + 1 + 1 + 1 + 1<br><br>
</div>

Скількома різними способами можна записати `n` як суму хоча б двох натуральних чисел?

# --hints--

`countingSummations(5)` має вивести число.

```js
assert(typeof countingSummations(5) === 'number');
```

`countingSummations(5)` має вивести `6`.

```js
assert.strictEqual(countingSummations(5), 6);
```

`countingSummations(20)` має вивести `626`.

```js
assert.strictEqual(countingSummations(20), 626);
```

`countingSummations(50)` має вивести `204225`.

```js
assert.strictEqual(countingSummations(50), 204225);
```

`countingSummations(100)` має вивести `190569291`.

```js
assert.strictEqual(countingSummations(100), 190569291);
```

# --seed--

## --seed-contents--

```js
function countingSummations(n) {

  return true;
}

countingSummations(5);
```

# --solutions--

```js
function countingSummations(n) {
  const combinations = new Array(n + 1).fill(0);
  combinations[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = i; j < n + 1; j++) {
      combinations[j] += combinations[j - i];
    }
  }
  return combinations[n];
}
```
