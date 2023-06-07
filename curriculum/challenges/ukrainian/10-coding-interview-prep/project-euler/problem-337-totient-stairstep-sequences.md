---
id: 5900f4be1000cf542c50ffd0
title: 'Задача 337: ступінчасті послідовності Ейлера'
challengeType: 1
forumTopicId: 301995
dashedName: problem-337-totient-stairstep-sequences
---

# --description--

Нехай $\\{a_1, a_2, \ldots, a_n\\}$ буде послідовністю цілих чисел довжиною $n$ такою, що:

- $a_1 = 6$
- для всіх $1 ≤ i &lt; n$ : $φ(a_i) &lt; φ(a_{i + 1}) &lt; a_i &lt; a_{i + 1}$

$φ$ позначає функцію Ейлера.

Нехай $S(N)$ буде кількістю таких послідовностей з $a_n ≤ N$.

Наприклад, $S(10) = 4$: {6}, {6, 8}, {6, 8, 9} та {6, 10}.

Ми можемо перевірити, що $S(100) = 482\\,073\\,668$ та $S(10\\,000)\bmod {10}^8 = 73\\,808\\,307$.

Знайдіть $S(20\\,000\\,000)\bmod {10}^8$.


# --hints--

`totientStairstepSequences()` має вивести `85068035`.

```js
assert.strictEqual(totientStairstepSequences(), 85068035);
```

# --seed--

## --seed-contents--

```js
function totientStairstepSequences() {

  return true;
}

totientStairstepSequences();
```

# --solutions--

```js
// solution required
```
