---
id: 5900f4141000cf542c50ff26
title: 'Problem 167: Investigating Ulam sequences'
challengeType: 1
forumTopicId: 301801
dashedName: problem-167-investigating-ulam-sequences
---

# --description--

Für zwei positive Integer $a$ und $b$ ist die Ulam-Folge $U(a,b)$ definiert durch ${U{(a,b)}\_1} = a$, ${U{(a,b)}\_2} = b$ und für $k > 2$ ist ${U{(a,b)}\_k}$ die kleinste Integer größer als ${U{(a,b)}\_{(k-1)}}$, die auf genau eine Weise als Summe zweier verschiedener vorheriger Glieder von $U(a,b)$ geschrieben werden kann.

Zum Beispiel beginnt die Folge $U(1,2)$ mit

$$1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8$$

5 gehört nicht dazu, denn $5 = 1 + 4 = 2 + 3$ hat zwei Darstellungen als Summe zweier vorheriger Glieder, ebenso $7 = 1 + 6 = 3 + 4$.

Finde $\sum {U(2, 2n + 1)_k}$ for $2 ≤ n ≤ 10$, wobei $k = {10}^{11}$.

# --hints--

`ulamSequences()` sollte `3916160068885` zurückgeben.

```js
assert.strictEqual(ulamSequences(), 3916160068885);
```

# --seed--

## --seed-contents--

```js
function ulamSequences() {

  return true;
}

ulamSequences();
```

# --solutions--

```js
// solution required
```
