---
id: 5900f4ae1000cf542c50ffbf
title: 'Завдання 320: Факторіали, що діляться на велике ціле число'
challengeType: 1
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

Нехай $N(i)$ буде найменшим цілим числом $n$, таким, що $n!$ ділиться на $(i!)^{1234567890}$

Нехай $S(u) = \sum N(i)$ для $10 ≤ i ≤ u$.

$S(1000)=614\\,538\\,266\\,565\\,663$.

Знайдіть $S(1\\,000\\,000)\bmod {10}^{18}$.

# --hints--

`divisibleByHugeInteger()` має повернути `278157919195482660`.

```js
assert.strictEqual(divisibleByHugeInteger(), 278157919195482660);
```

# --seed--

## --seed-contents--

```js
function divisibleByHugeInteger() {

  return true;
}

divisibleByHugeInteger();
```

# --solutions--

```js
// solution required
```
