---
id: 5900f37a1000cf542c50fe8d
title: 'Problem 14: Längste Collatz-Reihenfolge'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

Die folgende Iterationsfolge ist für die Menge der positiven ganzen Zahlen definiert:

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> is even)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> is odd)</div>

Unter Anwendung der obigen Regel, beginnend mit 13, ergibt sich die folgende Reihenfolge:

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

Man sieht, dass diese Reihenfolge (die bei 13 beginnt und bei 1 endet) 10 Terme enthält. Obwohl es noch nicht bewiesen ist (Collatz-Problem), geht man davon aus, dass alle Anfangszahlen bei 1 enden.

Welche Startnummer ergibt unter dem gegebenen `limit` die längste Kette?

**Hinweis:** Sobald die Kette beginnt, dürfen die Begriffe über `limit` hinausgehen.

# --hints--

`longestCollatzSequence(14)` sollte eine Zahl zurückgeben.

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` sollte 9 zurückgeben.

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` sollte 3711 zurückgeben.

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` sollte 35655 zurückgeben.

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` sollte 52527 zurückgeben.

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` sollte 77031 zurückgeben.

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` sollte 837799 zurückgeben.

```js
assert.strictEqual(longestCollatzSequence(1000000), 837799);
```

# --seed--

## --seed-contents--

```js
function longestCollatzSequence(limit) {

  return true;
}

longestCollatzSequence(14);
```

# --solutions--

```js
function longestCollatzSequence(limit) {
  let longest = 1;
  let maxLength = 1;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    let len = colLen(i);
    if (len > maxLength) {
      longest = i;
      maxLength = len;
    }
  }
  return longest;
}

const knownSequence = { '1': 1 };

function colLen(n) {
  if (knownSequence[n]) {
    return knownSequence[n];
  } else {
    const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
    knownSequence[n] = len;
    return len;
  }
}
```
