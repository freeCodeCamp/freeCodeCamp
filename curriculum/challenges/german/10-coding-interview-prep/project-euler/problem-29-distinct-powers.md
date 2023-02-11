---
id: 5900f3891000cf542c50fe9c
title: 'Problem 29: Distinct powers'
challengeType: 1
forumTopicId: 301941
dashedName: problem-29-distinct-powers
---

# --description--

Betrachte alle ganzzahligen Kombinationen von $a^b$ für 2 ≤ a ≤ 5 und 2 ≤ b ≤ 5:

<div style='padding-left: 4em;'>
  2<sup>2</sup>=4, 2<sup>3</sup>=8, 2<sup>4</sup>=16, 2<sup>5</sup>=32 <br>
  3<sup>2</sup>=9, 3<sup>3</sup>=27, 3<sup>4</sup>=81, 3<sup>5</sup>=243 <br>
  4<sup>2</sup>=16, 4<sup>3</sup>=64, 4<sup>4</sup>=256, 4<sup>5</sup>=1024 <br>
  5<sup>2</sup>=25, 5<sup>3</sup>=125, 5<sup>4</sup>=625, 5<sup>5</sup>=3125 <br>
</div>

Wenn man sie dann in numerischer Reihenfolge anordnet und Wiederholungen entfernt, erhält man die folgende Sequenz von 15 verschiedenen Begriffen:

<div style='padding-left: 4em;'>
  4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125
</div>

Wie viele verschiedene Begriffe sind in der durch $a^b$ erzeugten Sequenz für 2 ≤ `a` ≤ `n` und 2 ≤ `b` ≤ `n`?

# --hints--

`distinctPowers(15)` sollte eine Zahl zurückgeben.

```js
assert(typeof distinctPowers(15) === 'number');
```

`distinctPowers(15)` sollte 177 zurückgeben.

```js
assert.strictEqual(distinctPowers(15), 177);
```

`distinctPowers(20)` sollte 324 ergeben.

```js
assert.strictEqual(distinctPowers(20), 324);
```

`distinctPowers(25)` sollte 519 zurückgeben.

```js
assert.strictEqual(distinctPowers(25), 519);
```

`distinctPowers(30)` sollte 755 zurückgeben.

```js
assert.strictEqual(distinctPowers(30), 755);
```

# --seed--

## --seed-contents--

```js
function distinctPowers(n) {

  return n;
}

distinctPowers(30);
```

# --solutions--

```js
const distinctPowers = (n) => {
  let list = [];
  for (let a=2; a<=n; a++) {
    for (let b=2; b<=n; b++) {
      let term = Math.pow(a, b);
      if (list.indexOf(term)===-1) list.push(term);
    }
  }
  return list.length;
};
```
