---
id: 5900f3b81000cf542c50fecb
title: 'Problem 76: Zählende Summen'
challengeType: 1
forumTopicId: 302189
dashedName: problem-76-counting-summations
---

# --description--

Es ist möglich, fünf als Summe auf genau sechs verschiedene Weise zu schreiben:

<div style='margin-left: 4em;'>
  4 + 1<br>
  3 + 2<br>
  3 + 1 + 1<br>
  2 + 2 + 1<br>
  2 + 1 + 1 + 1<br>
  1 + 1 + 1 + 1 + 1<br><br>
</div>

Wie viele verschiedene Möglichkeiten gibt es, `n` als Summe von mindestens zwei positiven ganzen Zahlen zu schreiben?

# --hints--

`countingSummations(5)` sollte eine Zahl zurückgeben.

```js
assert(typeof countingSummations(5) === 'number');
```

`countingSummations(5)` sollte `6` zurückgeben.

```js
assert.strictEqual(countingSummations(5), 6);
```

`countingSummations(20)` sollte `626` zurückgeben.

```js
assert.strictEqual(countingSummations(20), 626);
```

`countingSummations(50)` sollte `204225` zurückgeben.

```js
assert.strictEqual(countingSummations(50), 204225);
```

`countingSummations(100)` sollte `190569291` zurückgeben.

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
