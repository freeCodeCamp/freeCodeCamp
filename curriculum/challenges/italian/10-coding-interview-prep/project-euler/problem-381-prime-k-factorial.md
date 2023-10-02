---
id: 5900f4ea1000cf542c50fffc
title: 'Problema 381: (primo-k) fattoriale'
challengeType: 1
forumTopicId: 302045
dashedName: problem-381-prime-k-factorial
---

# --description--

Per un numero primo $p$ sia $S(p) = (\sum (p - k)!)\bmod (p)$ for $1 ≤ k ≤ 5$.

Per esempio, per $p = 7$,

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

Come $872\bmod (7) = 4$, $S(7) = 4$.

Si può verificare che $\sum S(p) = 480$ per $5 ≤ p &lt; 100$.

Trova $\sum S(p)$ per $5 ≤ p &lt; {10}^8$.

# --hints--

`primeKFactorial()` dovrebbe restituire `139602943319822`.

```js
assert.strictEqual(primeKFactorial(), 139602943319822);
```

# --seed--

## --seed-contents--

```js
function primeKFactorial() {

  return true;
}

primeKFactorial();
```

# --solutions--

```js
// solution required
```
