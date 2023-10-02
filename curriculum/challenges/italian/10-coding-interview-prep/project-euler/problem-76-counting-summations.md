---
id: 5900f3b81000cf542c50fecb
title: 'Problema 76: contando somme'
challengeType: 1
forumTopicId: 302189
dashedName: problem-76-counting-summations
---

# --description--

È possibile scrivere 5 come somma in esattamente sei modi diversi:

<div style='margin-left: 4em;'>
  4 + 1<br>
  3 + 2<br>
  3 + 1 + 1<br>
  2 + 2 + 1<br>
  2 + 1 + 1 + 1<br>
  1 + 1 + 1 + 1 + 1<br><br>
</div>

In quanti modi diversi puoi scrivere `n` come somma di almeno due numeri interi positivi?

# --hints--

`countingSummations(5)` dovrebbe restituire un numero.

```js
assert(typeof countingSummations(5) === 'number');
```

`countingSummations(5)` dovrebbe restituire `6`.

```js
assert.strictEqual(countingSummations(5), 6);
```

`countingSummations(20)` dovrebbe restituire `626`.

```js
assert.strictEqual(countingSummations(20), 626);
```

`countingSummations(50)` dovrebbe restituire `204225`.

```js
assert.strictEqual(countingSummations(50), 204225);
```

`countingSummations(100)` dovrebbe restituire `190569291`.

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
