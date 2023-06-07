---
id: 5900f37a1000cf542c50fe8d
title: 'Problema 14: Maior conjectura de Collatz'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

A seguinte sequência iterativa é definida para o conjunto dos números inteiros positivos:

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (use quando <var>n</var> for par)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (use quando <var>n</var> for ímpar)</div>

Usando a regra acima e começando com 13, geramos a seguinte sequência:

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

Podemos ver que essa sequência (começando em 13 e terminando em 1) contém 10 termos. Embora ainda não tenha sido provado (conjectura de Collatz), acredita-se que qualquer número inicial termine em 1.

Qual número inicial, sob o `limit` (limite) definido, produz a sequência mais longa?

**Observação:** uma vez iniciada, os termos na sequência podem passar acima do `limit`.

# --hints--

`longestCollatzSequence(14)` deve retornar um número.

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` deve retornar 9.

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` deve retornar 3711.

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` deve retornar 35655.

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` deve retornar 52527.

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` deve retornar 77031.

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` deve retornar 837799.

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
