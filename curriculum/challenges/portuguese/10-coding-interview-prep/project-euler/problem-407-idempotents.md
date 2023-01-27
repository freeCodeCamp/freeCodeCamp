---
id: 5900f5041000cf542c510016
title: 'Problema 407: Idempotentes'
challengeType: 1
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

Se calcularmos $a^2\bmod 6$ para $0 ≤ a ≤ 5$, obtemos: 0, 1, 4, 3, 4, 1.

O maior valor do tipo, tal que $a^2 ≡ a\bmod 6$ é $4$.

Chamaremos $M(n)$ de o maior valor de $a &lt; n$, tal que $a^2 ≡ a (\text{mod } n)$. Assim, $M(6) = 4$.

Encontre $\sum M(n)$ para $1 ≤ n ≤ {10}^7$.

# --hints--

`idempotents()` deve retornar `39782849136421`.

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
