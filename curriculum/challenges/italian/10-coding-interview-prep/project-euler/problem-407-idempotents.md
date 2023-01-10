---
id: 5900f5041000cf542c510016
title: 'Problema 407: Idempotenti'
challengeType: 1
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

Se calcoliamo $a^2\bmod 6$ per $0 ≤ a ≤ 5$ otteniamo: 0, 1, 4, 3, 4, 1.

Il valore più grande di un tale $a^2 ≡ a\bmod 6$ è $4$.

Chiamiamo $M(n)$ il valore più grande di $a &lt; n$ tale che $a^2 ≡ a (\text{mod } n)$. Quindi $M(6) = 4$.

Trova $\sum M(n)$ per $1 ≤ n ≤ {10}^7$.

# --hints--

`idempotents()` dovrebbe restituire `39782849136421`.

```js
assert.strictEqual(idempotents(), 39782849136421);
```

# --seed--

## --seed-contents--

```js
function idempotents() {

  return true;
}

idempotents();
```

# --solutions--

```js
// solution required
```
